import { useState, useEffect } from "react";
import { Calendar, MapPin, Users } from "lucide-react";
import franchiseExpoHero from "../assets/franchise-expo-hero.jpg";
import webinarHero from "../assets/webinar-hero.jpg";
import officeLaunchHero from "../assets/office-launch-hero.jpg";

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

  return (
    <section className="hero-section">
      <div className="hero-background">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : 'inactive'}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
            />
          </div>
        ))}
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }}>
          <h1 className="hero-title">
            Fueling Local Hiring.{" "}
            <span style={{ color: '#dc2626' }}>Powering New Businesses.</span>
          </h1>
          
          <p className="hero-subtitle">
            Discover What's Next with EarlyJobs.
          </p>
          
          <p className="hero-description">
            Explore our upcoming events—from franchise launches to India's biggest entrepreneurship expos.
          </p>

          <div className="hero-cta">
            <button className="btn btn-accent btn-lg font-poppins">
              <Calendar className="mr-2 h-5 w-5" />
              Register for Upcoming Webinar
            </button>
            
            <button 
              className="btn btn-secondary btn-lg font-poppins"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                color: 'white', 
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <Users className="mr-2 h-5 w-5" />
              Notify Me About Local Launches
            </button>
          </div>

          <div className="hero-info-card">
            <h3 className="font-poppins" style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              {slides[currentSlide].title}
            </h3>
            <p className="font-inter" style={{ fontSize: '1.125rem', color: '#dc2626', marginBottom: '0.25rem' }}>
              {slides[currentSlide].subtitle}
            </p>
            <p className="font-inter" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              {slides[currentSlide].description}
            </p>
          </div>
        </div>

        <div className="hero-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`hero-indicator ${index === currentSlide ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}