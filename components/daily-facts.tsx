import React from 'react'

const FACTS = [
  'AI can help automate repetitive tasks.',
  'Consistent iteration beats perfection.',
  'Small habits compound into big outcomes.'
]

export function DailyFacts() {
  return (
    <section className="container py-10">
      <h2 className="text-2xl font-bold mb-4">Daily Facts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {FACTS.map((fact, idx) => (
          <div key={idx} className="rounded-lg border p-4 bg-card text-card-foreground">
            {fact}
          </div>
        ))}
      </div>
    </section>
  )
}