import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
function DailyFacts() {
  const facts = [
    "MVP را سریع تست کن.",
    "CAC باید از LTV کمتر باشد.",
    "روی نیاز واقعی کاربر تمرکز کن."
  ];
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
export default DailyFacts;
export { DailyFacts };
