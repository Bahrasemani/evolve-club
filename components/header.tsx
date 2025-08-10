"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, Globe } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fa" : "en")
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b-4 border-foreground">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-primary text-primary-foreground px-4 py-2 brutalist-shadow font-bold text-xl">SEC</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-bold hover:text-primary-500 transition-colors">
              {t("nav.home")}
            </a>
            <a href="#events" className="font-bold hover:text-primary-500 transition-colors">
              {t("nav.events")}
            </a>
            <a href="#news" className="font-bold hover:text-primary-500 transition-colors">
              {t("nav.news")}
            </a>
            <a href="#about" className="font-bold hover:text-primary-500 transition-colors">
              {t("nav.about")}
            </a>
            <a href="#contact" className="font-bold hover:text-primary-500 transition-colors">
              {t("nav.contact")}
            </a>
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={toggleLanguage} className="brutalist-border bg-transparent">
              <Globe className="h-4 w-4" />
              <span className="sr-only">Toggle language</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="brutalist-border"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden brutalist-border"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t-4 border-foreground mt-4">
            <a href="#" className="block font-bold hover:text-primary-500 transition-colors">
              {t("nav.home")}
            </a>
            <a href="#events" className="block font-bold hover:text-primary-500 transition-colors">
              {t("nav.events")}
            </a>
            <a href="#news" className="block font-bold hover:text-primary-500 transition-colors">
              {t("nav.news")}
            </a>
            <a href="#about" className="block font-bold hover:text-primary-500 transition-colors">
              {t("nav.about")}
            </a>
            <a href="#contact" className="block font-bold hover:text-primary-500 transition-colors">
              {t("nav.contact")}
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
