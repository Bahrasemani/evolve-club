import Hero from "@/components/hero"
import DailyFacts from "@/components/daily-facts"
import EventSections from "@/components/event-sections"
import NewsSection from "@/components/news-section"
import ChatWidget from "@/components/chat-widget"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <DailyFacts />
      <EventSections />
      <NewsSection />
      <ChatWidget />
    </main>
  )
}
