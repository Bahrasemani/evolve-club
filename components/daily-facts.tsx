"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw, Lightbulb } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const facts = {
  en: [
    "90% of startups fail, but those that pivot successfully have a 70% higher chance of success.",
    "The average startup takes 2-3 years to become profitable.",
    "Companies with diverse founding teams are 70% more likely to capture new markets.",
    "AI startups receive 4.5x more funding than traditional tech startups.",
    "Board games improve strategic thinking skills by 23% according to recent studies.",
    "The most successful entrepreneurs read an average of 60 books per year.",
    "Networking events increase startup success rates by 35%.",
    "Strategic business games can improve decision-making speed by 40%.",
  ],
  fa: [
    "۹۰٪ از استارتاپ‌ها شکست می‌خورند، اما آن‌هایی که با موفقیت تغییر مسیر می‌دهند ۷۰٪ شانس بیشتری برای موفقیت دارند.",
    "استارتاپ معمولی ۲ تا ۳ سال طول می‌کشد تا سودآور شود.",
    "شرکت‌هایی با تیم‌های بنیان‌گذار متنوع ۷۰٪ احتمال بیشتری برای تسخیر بازارهای جدید دارند.",
    "استارتاپ‌های هوش مصنوعی ۴.۵ برابر بیشتر از استارتاپ‌های فناوری سنتی سرمایه دریافت می‌کنند.",
    "بازی‌های رومیزی مهارت‌های تفکر استراتژیک را ۲۳٪ بهبود می‌بخشند.",
    "موفق‌ترین کارآفرینان به طور متوسط ۶۰ کتاب در سال می‌خوانند.",
    "رویدادهای شبکه‌سازی نرخ موفقیت استارتاپ‌ها را ۳۵٪ افزایش می‌دهند.",
    "بازی‌های تجاری استراتژیک می‌توانند سرعت تصمیم‌گیری را ۴۰٪ بهبود بخشند.",
  ],
}

export function DailyFacts() {
  const { language, t } = useLanguage()
  const [currentFact, setCurrentFact] = useState(0)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const refreshFact = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setCurrentFact((prev) => (prev + 1) % facts[language].length)
      setIsRefreshing(false)
    }, 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % facts[language].length)
    }, 10000) // Change fact every 10 seconds

    return () => clearInterval(interval)
  }, [language])

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-primary text-primary-foreground px-4 py-2 brutalist-shadow inline-block">
                {t("facts.title")}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">{t("facts.subtitle")}</p>
          </div>

          <Card className="border-4 border-foreground brutalist-shadow bg-card max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Lightbulb className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-lg leading-relaxed mb-6">{facts[language][currentFact]}</p>
                  <Button
                    onClick={refreshFact}
                    disabled={isRefreshing}
                    variant="outline"
                    className="brutalist-border bg-transparent"
                  >
                    <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
                    New Fact
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
