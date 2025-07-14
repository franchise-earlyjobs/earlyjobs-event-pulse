import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Video, CheckCircle, Play } from "lucide-react";
import webinarHero from "@/assets/webinar-hero.jpg";

const topics = [
  "How to Start a Franchise in Your City",
  "Common FAQs Answered",
  "Real Success Stories from Our Partners",
  "Market Analysis and Opportunities",
  "Investment Requirements and ROI",
  "Ongoing Support and Training"
];

const upcomingSessions = [
  {
    date: "This Saturday",
    topic: "Franchise Opportunities in Tier 2 Cities",
    attendees: "150+ registered"
  },
  {
    date: "Next Saturday",
    topic: "Success Stories: From Investment to Profit",
    attendees: "Registration opens soon"
  }
];

export default function WeeklyWebinars() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-primary text-white mb-4 text-lg px-4 py-2">
              Weekly Series
            </Badge>
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-foreground mb-4">
              Franchise Masterclass Webinars
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
              Join our weekly webinar series every Saturday at 11:00 AM IST. Learn directly from 
              industry experts and successful franchise partners.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img
                src={webinarHero}
                alt="Weekly Webinar Series"
                className="w-full rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 text-white">
                <Badge className="bg-accent text-white mb-2">
                  LIVE
                </Badge>
                <h3 className="font-poppins text-xl font-semibold">
                  Every Saturday • 11:00 AM IST
                </h3>
              </div>
              <Button
                size="icon"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm"
              >
                <Play className="h-8 w-8 text-white ml-1" />
              </Button>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-poppins text-2xl font-semibold text-foreground mb-4">
                  Hosted by Dipandaja Das
                </h3>
                <p className="font-inter text-muted-foreground text-lg mb-2">
                  Franchise Head, EarlyJobs
                </p>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  With over 10 years of experience in franchise development and business expansion, 
                  Dipandaja brings practical insights and real-world solutions to aspiring entrepreneurs.
                </p>
              </div>

              <Card className="border-2 border-accent/20 bg-accent/5">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-poppins text-xl font-semibold text-foreground">
                      Next Session
                    </h4>
                    <Badge className="bg-accent text-white">
                      This Saturday
                    </Badge>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-3 text-accent" />
                      <span className="font-inter">This Saturday</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-3 text-accent" />
                      <span className="font-inter">11:00 AM IST</span>
                    </div>
                    <div className="flex items-center">
                      <Video className="h-5 w-5 mr-3 text-accent" />
                      <span className="font-inter">Zoom (Link sent after registration)</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-3 text-accent" />
                      <span className="font-inter">150+ already registered</span>
                    </div>
                  </div>

                  <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-white font-poppins font-semibold">
                    <Calendar className="mr-2 h-5 w-5" />
                    Reserve My Webinar Seat
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Topics Covered */}
          <div className="mb-16">
            <h3 className="font-poppins text-3xl font-semibold text-foreground mb-8 text-center">
              Topics We Cover
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {topics.map((topic, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-inter text-foreground">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="text-center">
            <h3 className="font-poppins text-3xl font-semibold text-foreground mb-8">
              Upcoming Sessions
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {upcomingSessions.map((session, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Badge className="mb-4 bg-primary text-white">
                      {session.date}
                    </Badge>
                    <h4 className="font-poppins text-lg font-semibold text-foreground mb-3">
                      {session.topic}
                    </h4>
                    <p className="font-inter text-sm text-muted-foreground mb-4">
                      {session.attendees}
                    </p>
                    <Button variant="outline" size="sm" className="font-poppins font-semibold">
                      Set Reminder
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}