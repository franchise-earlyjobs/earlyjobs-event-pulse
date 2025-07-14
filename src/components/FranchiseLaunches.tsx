import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Clock, Star, Mail, Phone, Calendar } from "lucide-react";
import officeLaunchHero from "@/assets/office-launch-hero.jpg";

const launches = [
  {
    id: 1,
    city: "Faridabad",
    status: "Coming Soon",
    description: "Grand opening ceremony with local business leaders and franchise partners",
    features: ["Premium office space", "Local hiring focus", "Government partnerships"],
    image: officeLaunchHero
  },
  {
    id: 2,
    city: "Hyderabad",
    status: "Coming Soon", 
    description: "Tech hub expansion with focus on IT and startup ecosystem",
    features: ["Tech-focused hiring", "Startup partnerships", "Innovation center"],
    image: officeLaunchHero
  }
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Franchise Partner - Delhi",
    quote: "The EarlyJobs franchise opportunity transformed my business. Local hiring has never been easier.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Franchise Partner - Mumbai",
    quote: "Excellent support from the team and a proven business model that works.",
    rating: 5
  }
];

export default function FranchiseLaunches() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-foreground mb-4">
            Franchise Launch Announcements
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Be part of our expansion journey as we bring EarlyJobs to new cities. 
            Join us for exclusive launch ceremonies and networking opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {launches.map((launch) => (
            <Card key={launch.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={launch.image}
                  alt={`${launch.city} Office Launch`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-accent text-white">
                  {launch.status}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-poppins text-2xl font-semibold text-foreground">
                    {launch.city}
                  </h3>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="font-inter text-sm">Launch Center</span>
                  </div>
                </div>

                <p className="font-inter text-muted-foreground mb-6">
                  {launch.description}
                </p>

                <div className="space-y-3 mb-6">
                  <h4 className="font-poppins font-semibold text-foreground">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {launch.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Button variant="outline" className="w-full font-poppins font-semibold">
                    <Calendar className="mr-2 h-4 w-4" />
                    Join Our Opening
                  </Button>
                  <div className="text-center">
                    <p className="font-inter text-sm text-muted-foreground">
                      Date to be announced
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Notification Form */}
        <Card className="max-w-2xl mx-auto mb-16 border-2 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="font-poppins text-2xl font-semibold text-foreground mb-4">
              Get Notified About Launch Events
            </h3>
            <p className="font-inter text-muted-foreground mb-6">
              Be the first to know when we announce launch dates and event details.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button className="bg-primary hover:bg-primary/90 font-poppins font-semibold">
                <Mail className="mr-2 h-4 w-4" />
                Notify Me
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Testimonials */}
        <div className="text-center mb-8">
          <h3 className="font-poppins text-3xl font-semibold text-foreground mb-4">
            What Our Partners Say
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-l-4 border-accent">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-current" />
                  ))}
                </div>
                <blockquote className="font-inter text-muted-foreground mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-poppins font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-inter text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}