"use client"

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="bg-primary text-primary-foreground px-4 py-2 brutalist-shadow font-bold text-xl inline-block">
              SEC
            </div>
            <p className="text-sm leading-relaxed">{t("footer.description")}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-primary-300 transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-primary-300 transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-300 transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{t("footer.contact")}</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@sec.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">123 Innovation St</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{t("footer.follow")}</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-300 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-300 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-300 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-300 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-sm">© 2024 Startup Education Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
