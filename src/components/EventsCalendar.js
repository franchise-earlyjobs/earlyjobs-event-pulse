import { Calendar, MapPin, Clock, Users, ExternalLink } from "lucide-react";

const events = [
  {
    id: 1,
    date: "Coming Soon",
    eventType: "Franchise Webinar",
    location: "Online (Zoom)",
    time: "Coming Soon",
    status: "open",
    attendees: "Invite Only",
    ctaText: "Coming Soon"
  },
  {
    id: 2,
    date: "Coming Soon",
    eventType: "Franchise India Expo",
    location: "Lucknow",
    time: "Coming Soon",
    status: "featured",
    attendees: "Invite Only",
    ctaText: "Coming Soon"
  },
  {
    id: 3,
    date: "Coming Soon",
    eventType: "Launch Ceremony",
    location: "Faridabad",
    time: "Coming Soon",
    status: "Coming Soon",
    attendees: "Invite Only",
    ctaText: "Notify Me"
  },
  {
    id: 4,
    date: "Coming Soon",
    eventType: "Launch Ceremony",
    location: "Hyderabad",
    time: "Coming Soon",
    status: "Coming Soon",
    attendees: "Invite Only",
    ctaText: "Notify Me"
  }
];

export default function EventsCalendar() {
  return (
    <section className="events-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-poppins" style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}>
            Upcoming Events Calendar
          </h2>
          <p className="font-inter" style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '32rem', margin: '0 auto' }}>
            Don't miss out on these exciting opportunities to grow your business and network with industry leaders.
          </p>
        </div>

        <div className="events-grid">
          <div className="events-list">
            {events.map((event) => (
              <div key={event.id} className="event-card card">
                <div className="card-content">
                  <div className="flex justify-between items-start mb-4">
                    <span 
                      className={`badge ${
                        event.status === "featured" ? "badge-accent" : 
                        event.status === "open" ? "badge-primary" : "badge-outline"
                      }`}
                    >
                      {event.status === "featured" ? "Featured" : event.status === "open" ? "Open" : "Coming Soon"}
                    </span>
                    
                    <div className="text-right">
                      <p className="font-poppins text-primary" style={{ fontSize: '0.875rem', fontWeight: '600' }}>
                        {event.date}
                      </p>
                    </div>
                  </div>

                  <h3 className="font-poppins" style={{ fontSize: '1.25rem', fontWeight: '600', color: '#333', marginBottom: '0.75rem' }}>
                    {event.eventType}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-muted">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-inter" style={{ fontSize: '0.875rem' }}>{event.location}</span>
                    </div>
                    
                    <div className="flex items-center text-muted">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-inter" style={{ fontSize: '0.875rem' }}>{event.time}</span>
                    </div>
                    
                    <div className="flex items-center text-muted">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-inter" style={{ fontSize: '0.875rem' }}>{event.attendees}</span>
                    </div>
                  </div>

                  <button 
                    className={`btn w-full font-poppins ${
                      event.status === "featured" ? "btn-accent" : 
                      event.status === "open" ? "btn-primary" : "btn-outline"
                    }`}
                  >
                    {event.ctaText}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="btn btn-outline btn-lg font-poppins">
            <Calendar className="mr-2 h-5 w-5" />
            View Full Calendar
          </button>
        </div>
      </div>
    </section>
  );
}