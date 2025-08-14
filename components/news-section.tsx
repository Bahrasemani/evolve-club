import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function NewsSection() {
  const news = [
    { title: "ثبت‌نام ورکشاپ جدید", content: "ورکشاپ هوش مصنوعی برای استارتاپ‌ها باز است." },
    { title: "اخبار رویدادها", content: "Idea Show هفته آینده برگزار می‌شود." }
  ];
  return (
    <section className="container py-10 grid gap-4 md:grid-cols-2">
      {news.map((n, i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle>{n.title}</CardTitle>
          </CardHeader>
          <CardContent>{n.content}</CardContent>
        </Card>
      ))}
    </section>
  );
}

export default NewsSection;
export { NewsSection };