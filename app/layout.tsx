import type React from "react"
import type { Metadata } from "next"
import { Inter, Vazirmatn } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const vazirmatn = Vazirmatn({ subsets: ["arabic"], variable: "--font-vazirmatn" })

export const metadata: Metadata = {
  title: "Startup Education Center | مرکز آموزش استارتاپ",
  description: "Digital education and events for startups | آموزش دیجیتال و رویدادهای استارتاپی",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${vazirmatn.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="min-h-screen bg-background">
              <Header />
              {children}
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
