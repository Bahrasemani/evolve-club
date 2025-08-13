import React from 'react'

export function Hero() {
  return (
    <section className="container py-16">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-black">Welcome to Our Platform</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore events, learn daily facts, and keep up with the latest news.
        </p>
      </div>
    </section>
  )
}