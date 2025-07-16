import { Calendar, Clock, Users, Video, CheckCircle, Play } from "lucide-react";

const webinars = [
  {
    id: 1,
    title: "Franchise Business 101: Getting Started",
    date: "Every Saturday",
    time: "11:00 AM IST", 
    duration: "60 minutes",
    speaker: "EarlyJobs Franchise Team",
    topics: [
      "Introduction to Franchise Model",
      "EarlyJobs Platform Overview",
      "Revenue Opportunities",
      "Support & Training"
    ],
    status: "upcoming"
  }
];

const benefits = [
  "Learn franchise basics from industry experts",
  "Understand EarlyJobs business model",
  "Connect with potential partners",
  "Get answers to your questions live",
  "Access exclusive franchise materials"
];

export default function WeeklyWebinars() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-poppins mb-4" style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}>
            Weekly Franchise Webinars
          </h2>
          <p className="font-inter" style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '32rem', margin: '0 auto' }}>
            Join our weekly sessions to learn about franchise opportunities and business growth strategies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'flex-start' }}>
          {/* Webinar Details */}
          <div className="space-y-8">
            {webinars.map((webinar) => (
              <div key={webinar.id} className="card">
                <div className="card-content">
                  <div className="flex justify-between items-start mb-4">
                    <span className="badge badge-primary">
                      Live Webinar
                    </span>
                    <div className="flex items-center text-muted">
                      <Video className="h-4 w-4 mr-1" />
                      <span className="font-inter" style={{ fontSize: '0.875rem' }}>Online</span>
                    </div>
                  </div>

                  <h3 className="font-poppins mb-4" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}>
                    {webinar.title}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-muted">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-inter" style={{ fontSize: '0.875rem' }}>{webinar.date}</span>
                    </div>
                    
                    <div className="flex items-center text-muted">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-inter" style={{ fontSize: '0.875rem' }}>{webinar.time} ({webinar.duration})</span>
                    </div>
                    
                    <div className="flex items-center text-muted">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-inter" style={{ fontSize: '0.875rem' }}>Speaker: {webinar.speaker}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-poppins mb-4" style={{ fontSize: '1rem', fontWeight: '600', color: '#333', marginBottom: '1rem' }}>
                      What You'll Learn:
                    </h4>
                    <ul className="space-y-2">
                      {webinar.topics.map((topic, index) => (
                        <li key={index} className="flex items-center font-inter" style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <button className="btn btn-primary w-full btn-lg font-poppins">
                      <Play className="mr-2 h-5 w-5" />
                      Register for Next Webinar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why Attend Section */}
          <div className="card" style={{ height: 'fit-content' }}>
            <div className="card-content">
              <h3 className="font-poppins mb-6" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333', marginBottom: '1.5rem' }}>
                Why Attend Our Webinars?
              </h3>

              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ 
                      flexShrink: 0, 
                      width: '2rem', 
                      height: '2rem', 
                      backgroundColor: 'rgba(30, 64, 175, 0.1)', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      color: '#1e40af' 
                    }}>
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <span className="font-inter" style={{ fontSize: '1rem', color: '#333' }}>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4" style={{ backgroundColor: 'rgba(30, 64, 175, 0.05)', borderRadius: '0.5rem', padding: '1rem' }}>
                <h4 className="font-poppins mb-2" style={{ fontSize: '1rem', fontWeight: '600', color: '#333', marginBottom: '0.5rem' }}>
                  Next Session Details:
                </h4>
                <p className="font-inter text-muted" style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  Every Saturday at 11:00 AM IST via Zoom. Register now to receive the meeting link and exclusive materials.
                </p>
              </div>

              <div className="mt-6">
                <button className="btn btn-outline w-full font-poppins">
                  <Calendar className="mr-2 h-4 w-4" />
                  View All Upcoming Sessions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}