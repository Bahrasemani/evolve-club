import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
function EventSections() {
  const sections = [
    { title: "Evolve Workshops", href: "/events/evolve" },
    { title: "Idea Show", href: "/events/ideashow" },
    { title: "GameTime", href: "/events/gametime" },
    { title: "Fantasktic", href: "/events/fantasktic" }
  ];
  return (
    <section className="container py-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {sections.map((s) => (
        <Card key={s.href}>
          <CardHeader><CardTitle>{s.title}</CardTitle></CardHeader>
          <CardContent><Link className="underline" href={s.href}>مشاهده</Link></CardContent>
        </Card>
      ))}
    </section>
  );
}
export default EventSections;
export { EventSections };
