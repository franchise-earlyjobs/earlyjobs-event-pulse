import { useState } from "react";
import { MapPin, Clock, Star, Mail, Phone, Calendar } from "lucide-react";

const launches = [
  {
    id: 1,
    city: "Faridabad",
    state: "Haryana",
    date: "Coming Soon",
    time: "Coming Soon",
    venue: "TBD",
    status: "Registration Open",
    highlights: ["Grand Opening Ceremony", "Franchise Partnership Opportunities", "Live Platform Demo"]
  },
  {
    id: 2,
    city: "Hyderabad",
    state: "Telangana", 
    date: "Coming Soon",
    time: "Coming Soon",
    venue: "TBD",
    status: "Registration Open",
    highlights: ["Inaugural Event", "Local Business Network", "EarlyJobs Platform Launch"]
  }
];

export default function FranchiseLaunches() {
  const [selectedCity, setSelectedCity] = useState("Faridabad");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "Faridabad"
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration submitted:", formData);
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-poppins" style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}>
            New Office Launches
          </h2>
          <p className="font-inter" style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '32rem', margin: '0 auto' }}>
            Be part of EarlyJobs expansion as we launch our new offices in key cities across India.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* City Cards */}
          <div className="space-y-8">
            {launches.map((launch) => (
              <div 
                key={launch.id} 
                className={`card cursor-pointer ${selectedCity === launch.city ? 'border-primary' : ''}`}
                style={{ 
                  border: selectedCity === launch.city ? '2px solid #1e40af' : '1px solid #e5e7eb',
                  cursor: 'pointer' 
                }}
                onClick={() => setSelectedCity(launch.city)}
              >
                <div className="card-content">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-poppins" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
                        {launch.city}
                      </h3>
                      <p className="text-muted font-inter">{launch.state}</p>
                    </div>
                    <span className="badge badge-primary">
                      {launch.status}
                    </span>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-muted">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-inter" style={{ fontSize: '0.875rem' }}>{launch.date}</span>
                    </div>
                    
                    <div className="flex items-center text-muted">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-inter" style={{ fontSize: '0.875rem' }}>{launch.time}</span>
                    </div>
                    
                    <div className="flex items-center text-muted">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-inter" style={{ fontSize: '0.875rem' }}>{launch.venue}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-poppins" style={{ fontSize: '1rem', fontWeight: '600', color: '#333', marginBottom: '0.5rem' }}>
                      Event Highlights
                    </h4>
                    <ul className="space-y-2">
                      {launch.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center font-inter" style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                          <Star className="h-3 w-3 mr-2 text-accent" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Registration Form */}
          <div className="card">
            <div className="card-content">
              <h3 className="font-poppins mb-6" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333', marginBottom: '1.5rem' }}>
                Register for Launch Event
              </h3>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-input"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="city">
                    Select City *
                  </label>
                  <select
                    id="city"
                    name="city"
                    className="form-select"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Faridabad">Faridabad</option>
                    <option value="Hyderabad">Hyderabad</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary w-full btn-lg font-poppins">
                  <Mail className="mr-2 h-5 w-5" />
                  Register Now
                </button>

                <div className="text-center">
                  <p className="font-inter" style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    Need help? Contact us at{" "}
                    <a href="tel:+91-8800-xxx-xxx" className="text-primary font-medium">
                      +91-8800-xxx-xxx
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}