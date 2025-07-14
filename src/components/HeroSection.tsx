import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users } from "lucide-react";
import franchiseExpoHero from "@/assets/franchise-expo-hero.jpg";
import webinarHero from "@/assets/webinar-hero.jpg";
import officeLaunchHero from "@/assets/office-launch-hero.jpg";

const slides = [
  {
    id: 1,
    image: franchiseExpoHero,
    title: "Franchise India Pavilion",
    subtitle: "Lucknow - July 30-31, 2025",
    description: "Government-backed entrepreneurship expo"
  },
  {
    id: 2,
    image: webinarHero,
    title: "Weekly Franchise Webinars",
    subtitle: "Every Saturday at 11 AM",
    description: "Learn from industry experts"
  },
  {
    id: 3,
    image: officeLaunchHero,
    title: "New Office Launches",
    subtitle: "Faridabad & Hyderabad",
    description: "Grand opening ceremonies coming soon"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-30" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-poppins text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Fueling Local Hiring.{" "}
            <span className="text-accent">Powering New Businesses.</span>
          </h1>
          
          <p className="font-inter text-xl md:text-2xl mb-8 text-white/90">
            Discover What's Next with EarlyJobs.
          </p>
          
          <p className="font-inter text-lg mb-12 text-white/80">
            Explore our upcoming events—from franchise launches to India's biggest entrepreneurship expos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white font-poppins font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Register for Upcoming Webinar
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary font-poppins font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Visit Us at Franchise India Lucknow
            </Button>
            
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white/20 text-white hover:bg-white/30 border-white/30 font-poppins font-semibold px-8 py-4 text-lg rounded-xl backdrop-blur-sm transition-all duration-300"
            >
              <Users className="mr-2 h-5 w-5" />
              Notify Me About Local Launches
            </Button>
          </div>

          {/* Slide Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
            <h3 className="font-poppins text-2xl font-semibold mb-2">
              {slides[currentSlide].title}
            </h3>
            <p className="font-inter text-lg text-accent mb-1">
              {slides[currentSlide].subtitle}
            </p>
            <p className="font-inter text-white/80">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12 rounded-full flex items-center justify-center transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12 rounded-full flex items-center justify-center transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-accent" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}