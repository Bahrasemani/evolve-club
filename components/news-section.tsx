"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

type NewsItem = {
  id: number;
  title: string;
  description: string | null;
  image_path: string | null;
  published_at: string | null;
  published: boolean | null;
};

const BUCKET = "News"; // اسم باکت استوریج شما

export default function NewsSection() {
  const [items, setItems] = useState<Array<NewsItem & { image_url?: string | null }>>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const { data, error } = await supabase
          .from("news")
          .select("id,title,description,image_path,published_at,published")
          .eq("published", true)
          .order("published_at", { ascending: false })
          .limit(6);

        if (error) throw error;

        const mapped = (data ?? []).map((n) => {
          let image_url: string | null = null;
          if (n.image_path) {
            const { data: pub } = supabase.storage.from(BUCKET).getPublicUrl(n.image_path);
            image_url = pub?.publicUrl ?? null;
          }
          return { ...n, image_url };
        });

        setItems(mapped);
      } catch (e: any) {
        setErr(e?.message ?? "خطا در خواندن خبرها");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div className="py-8 text-center">در حال بارگذاری…</div>;
  if (err) return <div className="py-8 text-center text-red-600">خطا: {err}</div>;
  if (!items.length) return <div className="py-8 text-center">فعلاً خبری ثبت نشده.</div>;

  return (
    <section className="container py-10">
      <h2 className="text-2xl font-bold mb-6">آخرین اخبار و به‌روزرسانی‌ها</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((n) => (
          <article key={n.id} className="border rounded-lg overflow-hidden">
            <div className="relative w-full aspect-[16/9] bg-gray-100">
              {n.image_url ? (
                <Image src={n.image_url} alt={n.title} fill className="object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">بدون تصویر</div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">{n.title}</h3>
              {n.description && (
                <p className="text-sm text-muted-foreground line-clamp-3">{n.description}</p>
              )}
              <div className="text-xs text-gray-400 mt-2">
                {n.published_at ? new Date(n.published_at).toLocaleDateString("fa-IR") : ""}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
