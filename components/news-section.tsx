import React from 'react'

const NEWS = [
  { title: 'Launch of EVOLVE Cohort', date: '2024-02-01' },
  { title: 'New AI Workshop Announced', date: '2024-02-10' }
]

export function NewsSection() {
  return (
    <section className="container py-12">
      <h2 className="text-2xl font-bold mb-6">Latest News</h2>
      <ul className="space-y-3">
        {NEWS.map((n, i) => (
          <li key={i} className="rounded-lg border p-4 flex items-center justify-between">
            <span>{n.title}</span>
            <span className="text-sm text-muted-foreground">{new Date(n.date).toLocaleDateString()}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}