"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Users, Target } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary-100 to-accent-100">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
              <span className="bg-primary text-primary-foreground px-4 py-2 brutalist-shadow inline-block mb-4">
                {t("hero.title").split(" ")[0]}
              </span>
              <br />
              <span className="bg-accent text-accent-foreground px-4 py-2 brutalist-shadow-accent inline-block">
                {t("hero.title").split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <div className="bg-foreground text-background px-6 py-3 brutalist-shadow inline-block mb-8">
              <p className="text-xl font-bold">{t("hero.subtitle")}</p>
            </div>
          </div>

          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed">{t("hero.description")}</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="brutalist-shadow text-lg px-8 py-4 font-bold bg-primary hover:bg-primary-600">
              {t("hero.cta")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-card border-4 border-foreground p-6 brutalist-shadow">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Innovation</h3>
              <p>Cutting-edge startup education</p>
            </div>
            <div className="bg-card border-4 border-foreground p-6 brutalist-shadow-secondary">
              <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Community</h3>
              <p>Network with like-minded entrepreneurs</p>
            </div>
            <div className="bg-card border-4 border-foreground p-6 brutalist-shadow-accent">
              <Target className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Strategy</h3>
              <p>Master business through gameplay</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
