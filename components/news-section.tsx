"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Play, ImageIcon } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const newsItems = [
  {
    type: "news",
    title: "AI Startup Bootcamp Launches Next Month",
    titleFa: "بوت‌کمپ استارتاپ هوش مصنوعی ماه آینده راه‌اندازی می‌شود",
    date: "2024-01-15",
    image: "/placeholder.svg?height=200&width=300&text=AI+Bootcamp",
  },
  {
    type: "video",
    title: "Highlights from Last Pitch Competition",
    titleFa: "نکات برجسته از آخرین مسابقه ارائه",
    date: "2024-01-10",
    image: "/placeholder.svg?height=200&width=300&text=Pitch+Competition",
  },
  {
    type: "photo",
    title: "Game Night Photo Gallery",
    titleFa: "گالری عکس شب بازی",
    date: "2024-01-08",
    image: "/placeholder.svg?height=200&width=300&text=Game+Night",
  },
]

export function NewsSection() {
  const { language, t } = useLanguage()

  return (
    <section id="news" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="bg-primary text-primary-foreground px-4 py-2 brutalist-shadow inline-block">
              {t("news.title")}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">{t("news.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className="border-4 border-foreground brutalist-shadow bg-card hover:scale-105 transition-transform duration-300"
            >
              <CardHeader className="p-0">
                <div className="relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={language === "fa" ? item.titleFa : item.title}
                    className="w-full h-48 object-cover border-b-4 border-foreground"
                  />
                  <div className="absolute top-4 right-4">
                    {item.type === "video" && (
                      <div className="bg-primary text-primary-foreground p-2 brutalist-shadow">
                        <Play className="h-4 w-4" />
                      </div>
                    )}
                    {item.type === "photo" && (
                      <div className="bg-accent text-accent-foreground p-2 brutalist-shadow-accent">
                        <ImageIcon className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold mb-2">
                  {language === "fa" ? item.titleFa : item.title}
                </CardTitle>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(item.date).toLocaleDateString(language === "fa" ? "fa-IR" : "en-US")}
                </div>
                <Button variant="outline" className="w-full brutalist-border bg-transparent">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
