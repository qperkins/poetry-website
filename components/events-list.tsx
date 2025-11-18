import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react'

const events = [
  {
    id: 1,
    title: "Poetry Reading & Q&A",
    date: "December 15, 2024",
    location: "The Literary Arts Center",
    time: "7:00 PM - 9:00 PM",
    description: "An intimate evening of poetry readings followed by an interactive Q&A session.",
    type: "Reading"
  },
  {
    id: 2,
    title: "Workshop: Finding Your Poetic Voice",
    date: "December 22, 2024",
    location: "Online",
    time: "6:00 PM - 8:00 PM",
    description: "A hands-on workshop to help you discover and develop your unique poetic voice.",
    type: "Workshop"
  },
  {
    id: 3,
    title: "Speaking Engagement: Poetry as Activism",
    date: "January 10, 2025",
    location: "University of Arts",
    time: "2:00 PM - 4:00 PM",
    description: "An engaging talk on how poetry can be a powerful tool for social change and activism.",
    type: "Speaking"
  },
  {
    id: 4,
    title: "Open Mic Night",
    date: "January 25, 2025",
    location: "The Poet's Lounge",
    time: "8:00 PM - 11:00 PM",
    description: "Join Pamela and other poets for an evening of live readings and community connection.",
    type: "Reading"
  },
  {
    id: 5,
    title: "Advanced Workshop: Poetic Forms",
    date: "February 8, 2025",
    location: "Online",
    time: "7:00 PM - 9:00 PM",
    description: "Explore traditional and experimental poetic forms with in-depth analysis and practice.",
    type: "Workshop"
  },
  {
    id: 6,
    title: "Literary Conference Keynote",
    date: "February 20, 2025",
    location: "National Convention Center",
    time: "10:00 AM - 11:30 AM",
    description: "Keynote address on the evolution of contemporary poetry and its relevance today.",
    type: "Speaking"
  }
]

export function EventsList() {
  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div key={event.id} className="bg-card border border-border rounded-lg p-8 hover:border-primary transition group">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded">
                  {event.type}
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition">{event.title}</h3>
              <p className="text-muted-foreground mb-6">{event.description}</p>
              
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="flex-shrink-0" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="flex-shrink-0" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="flex-shrink-0" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 md:ml-auto">
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded hover:bg-primary/90 transition whitespace-nowrap flex items-center justify-center gap-2">
                Register
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
