'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

type NewsItem = {
  id: number
  title: string
  description: string | null
  image_path: string | null
  published_at: string | null
  published: boolean | null
}

const PUBLIC_BUCKET_URL =
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/news/`

const srcFor = (p?: string | null) => {
  if (!p) return '/placeholder.svg'
  return p.startsWith('http') ? p : PUBLIC_BUCKET_URL + p
}

export default function NewsSection() {
  const [items, setItems] = useState<NewsItem[]>([])

  useEffect(() => {
    ;(async () => {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false })
        .limit(6)

      if (!error && data) setItems(data)
    })()
  }, [])

  return (
    <section className="container py-10">
      <h2 className="text-2xl font-bold mb-6">آخرین اخبار و به‌روزرسانی‌ها</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((n) => (
          <article key={n.id} className="border rounded-lg overflow-hidden">
            <div className="relative w-full h-48 bg-muted">
              <img
                src={srcFor(n.image_path)}
                alt={n.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">{n.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {n.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
