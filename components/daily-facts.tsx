import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const facts = [
  "MVP را سریع تست کن.",
  "CAC باید از LTV کمتر باشد.",
  "روی نیاز واقعی کاربر تمرکز کن."
];

export default function DailyFacts() {
  return (
    <section className="container py-10 grid gap-4 md:grid-cols-3">
      {facts.map((f, i) => (
        <Card key={i}>
          <CardHeader><CardTitle>Fact #{i + 1}</CardTitle></CardHeader>
          <CardContent>{f}</CardContent>
        </Card>
      ))}
    </section>
  );
}