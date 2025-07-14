import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, ExternalLink } from "lucide-react";

const events = [
  {
    id: 1,
    date: "July 20",
    eventType: "Franchise Webinar",
    location: "Online (Zoom)",
    time: "11:00 AM IST",
    status: "open",
    attendees: "250+ registered",
    ctaText: "Register Now"
  },
  {
    id: 2,
    date: "July 30-31",
    eventType: "Franchise India Expo",
    location: "Lucknow",
    time: "9:00 AM - 6:00 PM",
    status: "featured",
    attendees: "5000+ expected",
    ctaText: "See Details"
  },
  {
    id: 3,
    date: "Coming Soon",
    eventType: "Launch Ceremony",
    location: "Faridabad",
    time: "TBA",
    status: "coming-soon",
    attendees: "Invite Only",
    ctaText: "Notify Me"
  },
  {
    id: 4,
    date: "Coming Soon",
    eventType: "Launch Ceremony",
    location: "Hyderabad",
    time: "TBA",
    status: "coming-soon",
    attendees: "Invite Only",
    ctaText: "Notify Me"
  }
];

export default function EventsCalendar() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-4xl font-bold text-foreground mb-4">
            Upcoming Events Calendar
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on these exciting opportunities to grow your business and network with industry leaders.
          </p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 min-w-max px-4">
            {events.map((event) => (
              <Card key={event.id} className="min-w-80 hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge 
                      variant={event.status === "featured" ? "default" : event.status === "open" ? "secondary" : "outline"}
                      className={
                        event.status === "featured" 
                          ? "bg-accent text-white" 
                          : event.status === "open" 
                          ? "bg-primary text-white" 
                          : "text-muted-foreground"
                      }
                    >
                      {event.status === "featured" ? "Featured" : event.status === "open" ? "Open" : "Coming Soon"}
                    </Badge>
                    
                    <div className="text-right">
                      <p className="font-poppins text-sm font-semibold text-primary">
                        {event.date}
                      </p>
                    </div>
                  </div>

                  <h3 className="font-poppins text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {event.eventType}
                  </h3>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-inter text-sm">{event.location}</span>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-inter text-sm">{event.time}</span>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-inter text-sm">{event.attendees}</span>
                    </div>
                  </div>

                  <Button 
                    className={`w-full font-poppins font-semibold ${
                      event.status === "featured" 
                        ? "bg-accent hover:bg-accent/90" 
                        : event.status === "open"
                        ? "bg-primary hover:bg-primary/90"
                        : ""
                    }`}
                    variant={event.status === "coming-soon" ? "outline" : "default"}
                  >
                    {event.ctaText}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="font-poppins font-semibold">
            <Calendar className="mr-2 h-5 w-5" />
            View Full Calendar
          </Button>
        </div>
      </div>
    </section>
  );
}