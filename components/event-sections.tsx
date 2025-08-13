import React from 'react'
import Link from 'next/link'

const EVENTS = [
  { slug: 'evolve', title: 'EVOLVE Program', description: 'Startup & AI educational programs' },
  { slug: 'workshops', title: 'Workshops', description: 'Hands-on sessions and intensives' }
]

export function EventSections() {
  return (
    <section className="container py-12">
      <h2 className="text-2xl font-bold mb-6">Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EVENTS.map((ev) => (
          <Link key={ev.slug} href={`/events/${ev.slug}`} className="block rounded-lg border p-6 hover:bg-accent">
            <h3 className="text-xl font-semibold">{ev.title}</h3>
            <p className="text-muted-foreground">{ev.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}