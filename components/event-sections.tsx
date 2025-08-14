"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Trophy, Gamepad2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const events = [
  {
    id: "evolve",
    icon: Calendar,
    bgColor: "bg-primary",
    textColor: "text-primary-foreground",
    shadowClass: "brutalist-shadow",
    schedule: ["Mon-Wed: 9AM-5PM", "Sat: 10AM-6PM"],
  },
  {
    id: "fantasktic",
    icon: Users,
    bgColor: "bg-accent",
    textColor: "text-accent-foreground",
    shadowClass: "brutalist-shadow-accent",
    schedule: ["Fri: 7PM-11PM", "Sat: 8PM-12AM"],
  },
  {
    id: "ideashow",
    icon: Trophy,
    bgColor: "bg-secondary",
    textColor: "text-secondary-foreground",
    shadowClass: "brutalist-shadow-secondary",
    schedule: ["Last Fri of Month: 6PM-9PM"],
  },
  {
    id: "gametime",
    icon: Gamepad2,
    bgColor: "bg-muted-foreground",
    textColor: "text-background",
    shadowClass: "brutalist-shadow",
    schedule: ["Daily: 2PM-10PM", "Weekend: 10AM-11PM"],
  },
]

export function EventSections() {
  const { t } = useLanguage()

  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="bg-foreground text-background px-4 py-2 brutalist-shadow inline-block">
              {t("events.title")}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {events.map((event) => {
            const Icon = event.icon
            return (
              <Card
                key={event.id}
                className={`border-4 border-foreground ${event.shadowClass} bg-card hover:scale-105 transition-transform duration-300`}
              >
                <CardHeader className="pb-4">
                  <div
                    className={`${event.bgColor} ${event.textColor} p-4 ${event.shadowClass} mb-4 inline-block w-fit`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-3xl font-black">{t(`events.${event.id}.title`)}</CardTitle>
                  <p className="text-lg text-muted-foreground">{t(`events.${event.id}.description`)}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold mb-2">Schedule:</h4>
                      <ul className="space-y-1">
                        {event.schedule.map((time, index) => (
                          <li key={index} className="text-sm bg-muted p-2 border-4 border-foreground">
                            {time}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full brutalist-shadow font-bold bg-primary hover:bg-primary-600">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
