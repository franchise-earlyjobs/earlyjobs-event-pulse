import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Play } from "lucide-react";
import franchiseExpoHero from "@/assets/franchise-expo-hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Clean background image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src={franchiseExpoHero}
          alt="EarlyJobs Events"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        {/* Simple, powerful headline */}
        <h1 className="font-poppins text-6xl md:text-8xl font-light text-foreground mb-8 tracking-tight">
          Fuel Local Hiring.
          <br />
          <span className="font-medium text-primary">Power New Business.</span>
        </h1>
        
        {/* Minimal subtitle */}
        <p className="font-inter text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
          Join India's biggest entrepreneurship expo, weekly franchise webinars, 
          and exclusive office launches.
        </p>

        {/* Clean CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white font-poppins font-medium px-12 py-6 text-lg rounded-full shadow-soft transition-all duration-300 hover:shadow-medium"
          >
            Join Next Webinar
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-poppins font-medium px-12 py-6 text-lg rounded-full transition-all duration-300"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>

        {/* Key stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="font-poppins text-3xl font-semibold text-primary mb-2">5000+</div>
            <div className="font-inter text-sm text-muted-foreground">Expected Attendees</div>
          </div>
          <div className="text-center">
            <div className="font-poppins text-3xl font-semibold text-primary mb-2">20</div>
            <div className="font-inter text-sm text-muted-foreground">Cities Available</div>
          </div>
          <div className="text-center">
            <div className="font-poppins text-3xl font-semibold text-primary mb-2">FREE</div>
            <div className="font-inter text-sm text-muted-foreground">Weekly Webinars</div>
          </div>
        </div>
      </div>
    </section>
  );
}