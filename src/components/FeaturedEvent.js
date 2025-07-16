import { Calendar, MapPin, Users, CheckCircle, Star, Trophy, Target } from "lucide-react";
import franchiseExpoHero from "../assets/franchise-expo-hero.jpg";

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
    <section className="featured-section">
      <div className="container">
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <div className="text-center mb-12">
            <span className="badge badge-accent mb-4" style={{ fontSize: '1.125rem', padding: '0.5rem 1rem' }}>
              Featured Event
            </span>
            <h2 className="font-poppins mb-4" style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#333' }}>
              Franchise India Pavilion, Lucknow
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-4 text-muted mb-6" style={{ flexWrap: 'wrap', gap: '1rem' }}>
              <span className="flex items-center font-inter">
                <CheckCircle className="h-4 w-4 mr-1" style={{ color: '#10b981' }} />
                Government-Backed
              </span>
              <span className="flex items-center font-inter">
                <CheckCircle className="h-4 w-4 mr-1" style={{ color: '#10b981' }} />
                Tier 2/3 Focused
              </span>
              <span className="flex items-center font-inter">
                <CheckCircle className="h-4 w-4 mr-1" style={{ color: '#10b981' }} />
                Franchise India x GoUP
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 className="font-poppins mb-4" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#333', marginBottom: '1rem' }}>
                  India's Most Action-Driven Entrepreneurship Event
                </h3>
                <p className="font-inter" style={{ fontSize: '1.125rem', color: '#6b7280', lineHeight: '1.6' }}>
                  EarlyJobs is proud to showcase at this premier entrepreneurship event hosted by the 
                  Government of Uttar Pradesh. Join us to explore franchise opportunities and connect 
                  with industry leaders shaping the future of local hiring.
                </p>
              </div>
              <div>
                <img
                  src={franchiseExpoHero}
                  alt="Franchise India Expo Lucknow"
                  className="w-full"
                  style={{ borderRadius: '1rem', boxShadow: '0 8px 32px -8px rgba(0, 0, 0, 0.1)' }}
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="card" style={{ border: '2px solid rgba(30, 64, 175, 0.2)', backgroundColor: 'rgba(30, 64, 175, 0.05)' }}>
                <div className="card-content">
                  <h4 className="font-poppins mb-4" style={{ fontSize: '1.25rem', fontWeight: '600', color: '#333', marginBottom: '1rem' }}>
                    Key Event Details
                  </h4>
                  <div className="space-y-4">
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
                </div>
              </div>

              <div>
                <h4 className="font-poppins mb-4" style={{ fontSize: '1.25rem', fontWeight: '600', color: '#333', marginBottom: '1rem' }}>
                  Why Visit Our Booth?
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <div style={{ 
                        flexShrink: 0, 
                        width: '2rem', 
                        height: '2rem', 
                        backgroundColor: 'rgba(220, 38, 38, 0.1)', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        color: '#dc2626' 
                      }}>
                        {feature.icon}
                      </div>
                      <span className="font-inter" style={{ color: '#333' }}>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ paddingTop: '1rem' }}>
                <button className="btn btn-accent btn-lg font-poppins" style={{ boxShadow: '0 10px 30px -10px rgba(220, 38, 38, 0.3)' }}>
                  <Calendar className="mr-2 h-5 w-5" />
                  Attend Franchise Expo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}