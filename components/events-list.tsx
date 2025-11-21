import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react'

const upcomingEvents: Array<{
  id: number
  title: string
  date: string
  location: string
  time: string
  description: string
  type: string
  isPast: boolean
}> = []

const pastEvents = [
  {
    id: 7,
    title: "Poetry and Music Night",
    date: "November 14, 2025",
    location: "Murrieta",
    time: "TBD",
    description: "An evening of poetry and music in Murrieta.",
    type: "Reading",
    isPast: true
  },
  {
    id: 8,
    title: "Key Note Speaker",
    date: "November 13, 2025",
    location: "San Gorgonio Pass Historic Society",
    time: "TBD",
    description: "Key note speaker for San Gorgonio Pass Historic Society.",
    type: "Speaking",
    isPast: true
  },
  {
    id: 9,
    title: "Featured Poetess",
    date: "November 8, 2025",
    location: "Hearts in Focus Women's Ministry",
    time: "TBD",
    description: "Featured poetess at Hearts in Focus Women's Ministry.",
    type: "Reading",
    isPast: true
  },
  {
    id: 10,
    title: "Women's Poetry Event",
    date: "October 16, 2025",
    location: "Village Well Books & Coffee",
    time: "TBD",
    description: "Women's Poetry Event at Village Well Books & Coffee.",
    type: "Reading",
    isPast: true
  }
]

export function EventsList() {
  return (
    <div className="space-y-12">
      {/* Upcoming Events */}
      <div>
        <h2 className="text-3xl font-semibold mb-6">Upcoming Events</h2>
        {upcomingEvents.length > 0 ? (
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
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
        ) : (
          <div className="bg-card border border-border rounded-lg p-12 text-center">
            <Calendar className="mx-auto mb-4 text-muted-foreground" size={48} />
            <p className="text-lg text-muted-foreground">
              We're currently planning our next event. Check back soon for upcoming speaking engagements, poetry readings, and workshops!
            </p>
          </div>
        )}
      </div>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <div>
          <h2 className="text-3xl font-semibold mb-6">Past Events</h2>
          <div className="space-y-4">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-card border border-border rounded-lg p-8 opacity-75">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold text-muted-foreground bg-muted px-3 py-1 rounded">
                        {event.type}
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground bg-muted px-3 py-1 rounded">
                        Past Event
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{event.title}</h3>
                    <p className="text-muted-foreground mb-6">{event.description}</p>
                    
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={18} className="flex-shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      {event.time !== "TBD" && (
                        <div className="flex items-center gap-2">
                          <Clock size={18} className="flex-shrink-0" />
                          <span>{event.time}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <MapPin size={18} className="flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3 md:ml-auto">
                    <button 
                      disabled
                      className="bg-muted text-muted-foreground px-6 py-2 rounded cursor-not-allowed whitespace-nowrap flex items-center justify-center gap-2 opacity-50"
                    >
                      Past Event
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
