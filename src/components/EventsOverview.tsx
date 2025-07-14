import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Video, ArrowRight } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Franchise India Expo",
    subtitle: "Government-backed • Lucknow",
    date: "July 30-31",
    type: "Expo",
    description: "India's biggest entrepreneurship event",
    action: "Reserve Spot"
  },
  {
    id: 2,
    title: "Weekly Webinars",
    subtitle: "Every Saturday • Online",
    date: "11:00 AM",
    type: "Webinar", 
    description: "Learn from franchise experts",
    action: "Join Next"
  },
  {
    id: 3,
    title: "Office Launches",
    subtitle: "Faridabad & Hyderabad",
    date: "Coming Soon",
    type: "Launch",
    description: "Grand opening ceremonies",
    action: "Get Notified"
  }
];

export default function EventsOverview() {
  return (
    <section className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-poppins text-5xl font-light text-foreground mb-6">
            Three Ways to <span className="font-medium text-primary">Connect</span>
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred way to explore franchise opportunities with EarlyJobs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <Card 
              key={event.id} 
              className={`hover:shadow-medium transition-all duration-500 border-0 ${
                index === 1 ? 'lg:scale-105 shadow-medium' : 'shadow-soft'
              }`}
            >
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  {event.type === "Expo" && <MapPin className="h-8 w-8 text-primary" />}
                  {event.type === "Webinar" && <Video className="h-8 w-8 text-primary" />}
                  {event.type === "Launch" && <Calendar className="h-8 w-8 text-primary" />}
                </div>

                <h3 className="font-poppins text-2xl font-semibold text-foreground mb-3">
                  {event.title}
                </h3>
                
                <p className="font-inter text-primary font-medium mb-2">
                  {event.subtitle}
                </p>
                
                <p className="font-inter text-lg text-muted-foreground mb-8">
                  {event.description}
                </p>

                <div className="mb-8">
                  <span className="font-poppins text-3xl font-light text-foreground">
                    {event.date}
                  </span>
                </div>

                <Button 
                  className={`w-full rounded-full font-poppins font-medium ${
                    index === 1 
                      ? 'bg-primary hover:bg-primary/90 text-white' 
                      : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  }`}
                  size="lg"
                >
                  {event.action}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}