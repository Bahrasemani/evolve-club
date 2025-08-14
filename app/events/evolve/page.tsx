"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, BookOpen, Clock } from "lucide-react"

export default function EvolvePage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-black mb-4">
              <span className="bg-primary text-primary-foreground px-4 py-2 brutalist-shadow inline-block">EVOLVE</span>
            </h1>
            <p className="text-xl text-muted-foreground">Startup & AI Educational Programs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-4 border-foreground brutalist-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Program Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Our EVOLVE program is designed to transform aspiring entrepreneurs into successful startup founders
                  through comprehensive AI and business education.
                </p>
                <ul className="space-y-2">
                  <li>• AI fundamentals for startups</li>
                  <li>• Business model development</li>
                  <li>• Pitch deck creation</li>
                  <li>• Funding strategies</li>
                  <li>• Market validation techniques</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-4 border-foreground brutalist-shadow-secondary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Schedule & Format
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted p-4 border-4 border-foreground">
                    <h4 className="font-bold mb-2">Weekday Sessions</h4>
                    <p className="text-sm">Monday - Wednesday: 9:00 AM - 5:00 PM</p>
                  </div>
                  <div className="bg-muted p-4 border-4 border-foreground">
                    <h4 className="font-bold mb-2">Weekend Intensive</h4>
                    <p className="text-sm">Saturday: 10:00 AM - 6:00 PM</p>
                  </div>
                  <div className="bg-muted p-4 border-4 border-foreground">
                    <h4 className="font-bold mb-2">Duration</h4>
                    <p className="text-sm">8-week program with ongoing mentorship</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-4 border-foreground brutalist-shadow-accent mb-8">
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { date: "2024-02-05", topic: "AI Tools for Startups", time: "9:00 AM - 12:00 PM" },
                  { date: "2024-02-07", topic: "Business Model Canvas Workshop", time: "2:00 PM - 5:00 PM" },
                  { date: "2024-02-10", topic: "Pitch Deck Masterclass", time: "10:00 AM - 4:00 PM" },
                ].map((session, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted border-4 border-foreground"
                  >
                    <div>
                      <h4 className="font-bold">{session.topic}</h4>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(session.date).toLocaleDateString()}
                        <Clock className="h-4 w-4 ml-2" />
                        {session.time}
                      </p>
                    </div>
                    <Button variant="outline" className="brutalist-border bg-transparent">
                      Register
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button size="lg" className="brutalist-shadow text-lg px-8 py-4 font-bold bg-primary hover:bg-primary-600">
              Join EVOLVE Program
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
