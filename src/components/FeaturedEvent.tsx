import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, CheckCircle, Star, Trophy, Target } from "lucide-react";
import franchiseExpoHero from "@/assets/franchise-expo-hero.jpg";

const features = [
  {
    icon: <Users className="h-5 w-5" />,
    text: "Live demo of EarlyJobs platform"
  },
  {
    icon: <Star className="h-5 w-5" />,
    text: "Meet the founders and franchise leaders"
  },
  {
    icon: <Target className="h-5 w-5" />,
    text: "Explore district-wise franchise opportunities"
  },
  {
    icon: <Trophy className="h-5 w-5" />,
    text: "Earlybird franchise offers (1st 20 cities)"
  }
];

export default function FeaturedEvent() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-accent text-white mb-4 text-lg px-4 py-2">
              Featured Event
            </Badge>
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-foreground mb-4">
              Franchise India Pavilion, Lucknow
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-4 text-muted-foreground mb-6">
              <span className="flex items-center font-inter">
                <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                Government-Backed
              </span>
              <span className="flex items-center font-inter">
                <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                Tier 2/3 Focused
              </span>
              <span className="flex items-center font-inter">
                <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                Franchise India x GoUP
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
             <div style={{marginBottom: '1.5rem'}}>
                <h3 className="font-poppins text-2xl font-semibold text-foreground mb-4">
                  India's Most Action-Driven Entrepreneurship Event
                </h3>
                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  EarlyJobs is proud to showcase at this premier entrepreneurship event hosted by the 
                  Government of Uttar Pradesh. Join us to explore franchise opportunities and connect 
                  with industry leaders shaping the future of local hiring.
                </p>
              </div>
            <div>
              <img
                src={franchiseExpoHero}
                alt="Franchise India Expo Lucknow"
                className="w-full rounded-2xl shadow-card hover:shadow-brand transition-all duration-500"
              />
            </div>
            </div>

            <div className="space-y-8">
             

              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <h4 className="font-poppins text-xl font-semibold text-foreground mb-4">
                    Key Event Details
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-3 text-primary" />
                      <span className="font-inter">
                        <strong>Dates:</strong> 30–31 July 2025
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3 text-primary" />
                      <span className="font-inter">
                        <strong>Location:</strong> Indira Gandhi Pratishthan, Lucknow
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-3 text-primary" />
                      <span className="font-inter">
                        <strong>Organized by:</strong> Government of Uttar Pradesh
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 mr-3 text-primary" />
                      <span className="font-inter">
                        <strong>Curated by:</strong> Franchise India
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div>
                <h4 className="font-poppins text-xl font-semibold text-foreground mb-4">
                  Why Visit Our Booth?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        {feature.icon}
                      </div>
                      <span className="font-inter text-foreground">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-poppins font-semibold px-8 py-4 text-lg shadow-accent">
                  <Calendar className="mr-2 h-5 w-5" />
                  Attend Franchise Expo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}