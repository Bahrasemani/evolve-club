"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "fa"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.events": "Events",
    "nav.news": "News",
    "nav.about": "About",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Startup Education Center",
    "hero.subtitle": "Empowering Innovation Through Digital Brutalism",
    "hero.description":
      "Join our community of entrepreneurs, innovators, and game-changers. Experience cutting-edge education, networking events, and strategic gameplay.",
    "hero.cta": "Explore Events",

    // Daily Facts
    "facts.title": "Daily Innovation Facts",
    "facts.subtitle": "Discover something new every day",

    // Events
    "events.title": "Our Events",
    "events.evolve.title": "EVOLVE",
    "events.evolve.description": "Startup & AI Educational Programs",
    "events.fantasktic.title": "FANTASKTIC",
    "events.fantasktic.description": "Private Experience-Sharing Parties",
    "events.ideashow.title": "IDEA SHOW",
    "events.ideashow.description": "Startup Pitch Competitions",
    "events.gametime.title": "GAME TIME",
    "events.gametime.description": "Board Games & Strategic Business Games",

    // News
    "news.title": "Latest News & Updates",
    "news.subtitle": "Stay informed about our latest events and achievements",

    // Chat
    "chat.title": "Ask Questions",
    "chat.placeholder": "Type your message...",
    "chat.send": "Send",

    // Footer
    "footer.description":
      "Empowering the next generation of entrepreneurs through innovative education and strategic gameplay.",
    "footer.contact": "Contact Us",
    "footer.follow": "Follow Us",
  },
  fa: {
    // Navigation
    "nav.home": "خانه",
    "nav.events": "رویدادها",
    "nav.news": "اخبار",
    "nav.about": "درباره ما",
    "nav.contact": "تماس",

    // Hero
    "hero.title": "مرکز آموزش استارتاپ",
    "hero.subtitle": "تقویت نوآوری از طریق بروتالیسم دیجیتال",
    "hero.description":
      "به جامعه کارآفرینان، نوآوران و تغییردهندگان ما بپیوندید. آموزش پیشرفته، رویدادهای شبکه‌سازی و بازی‌های استراتژیک را تجربه کنید.",
    "hero.cta": "کاوش رویدادها",

    // Daily Facts
    "facts.title": "حقایق روزانه نوآوری",
    "facts.subtitle": "هر روز چیز جدیدی کشف کنید",

    // Events
    "events.title": "رویدادهای ما",
    "events.evolve.title": "تکامل",
    "events.evolve.description": "برنامه‌های آموزشی استارتاپ و هوش مصنوعی",
    "events.fantasktic.title": "فانتاستیک",
    "events.fantasktic.description": "مهمانی‌های خصوصی تبادل تجربه",
    "events.ideashow.title": "نمایش ایده",
    "events.ideashow.description": "مسابقات ارائه استارتاپ",
    "events.gametime.title": "زمان بازی",
    "events.gametime.description": "بازی‌های رومیزی و بازی‌های تجاری استراتژیک",

    // News
    "news.title": "آخرین اخبار و به‌روزرسانی‌ها",
    "news.subtitle": "از آخرین رویدادها و دستاورد‌های ما مطلع شوید",

    // Chat
    "chat.title": "سوال بپرسید",
    "chat.placeholder": "پیام خود را تایپ کنید...",
    "chat.send": "ارسال",

    // Footer
    "footer.description": "تقویت نسل آینده کارآفرینان از طریق آموزش نوآورانه و بازی‌های استراتژیک.",
    "footer.contact": "تماس با ما",
    "footer.follow": "ما را دنبال کنید",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === "fa" ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
