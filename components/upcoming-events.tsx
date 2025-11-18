import Link from 'next/link'
import { Calendar, MapPin, Clock } from 'lucide-react'

const events = [
  {
    id: 1,
    title: "Poetry Reading & Q&A",
    date: "December 15, 2024",
    location: "The Literary Arts Center",
    time: "7:00 PM - 9:00 PM"
  },
  {
    id: 2,
    title: "Workshop: Finding Your Poetic Voice",
    date: "December 22, 2024",
    location: "Online",
    time: "6:00 PM - 8:00 PM"
  },
  {
    id: 3,
    title: "Speaking Engagement: Poetry as Activism",
    date: "January 10, 2025",
    location: "University of Arts",
    time: "2:00 PM - 4:00 PM"
  }
]

export function UpcomingEvents() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="mb-4">Upcoming Events</h2>
          <p className="text-lg text-muted-foreground">Connect with Pamela at these upcoming gatherings</p>
        </div>

        <div className="space-y-4 mb-8">
          {events.map((event) => (
            <div key={event.id} className="bg-card border border-border rounded-lg p-6 hover:border-primary transition">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-lg font-semibold mb-3">{event.title}</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={18} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                <Link href="/events" className="bg-primary text-primary-foreground px-6 py-2 rounded hover:bg-primary/90 transition whitespace-nowrap self-start md:self-center">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/events" className="border border-primary text-primary px-8 py-3 rounded hover:bg-primary/5 transition inline-block">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  )
}
