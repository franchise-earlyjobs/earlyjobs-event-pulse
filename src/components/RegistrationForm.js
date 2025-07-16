import { useState } from "react";
import { Mail, User, MapPin, Calendar, CheckCircle, Bell } from "lucide-react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    interest: "",
    experience: "",
    newsletter: false,
    updates: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-poppins mb-4" style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}>
            Stay Connected with EarlyJobs
          </h2>
          <p className="font-inter" style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '32rem', margin: '0 auto' }}>
            Get notified about upcoming events, franchise opportunities, and business insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Registration Form */}
          <div className="card">
            <div className="card-content">
              <h3 className="font-poppins mb-6" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333', marginBottom: '1.5rem' }}>
                Register Your Interest
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
                    City *
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    className="form-input"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="interest">
                    Primary Interest *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="form-select"
                    value={formData.interest}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select your interest</option>
                    <option value="franchise">Franchise Opportunities</option>
                    <option value="events">Event Participation</option>
                    <option value="partnership">Business Partnership</option>
                    <option value="employment">Employment Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="experience">
                    Business Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    className="form-select"
                    value={formData.experience}
                    onChange={handleInputChange}
                  >
                    <option value="">Select experience level</option>
                    <option value="new">New to Business</option>
                    <option value="some">Some Experience (1-5 years)</option>
                    <option value="experienced">Experienced (5+ years)</option>
                    <option value="franchise">Previous Franchise Experience</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <div className="form-checkbox">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="newsletter" className="font-inter" style={{ fontSize: '0.875rem', color: '#374151' }}>
                      Subscribe to our newsletter for business insights and updates
                    </label>
                  </div>

                  <div className="form-checkbox">
                    <input
                      type="checkbox"
                      id="updates"
                      name="updates"
                      checked={formData.updates}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="updates" className="font-inter" style={{ fontSize: '0.875rem', color: '#374151' }}>
                      Get notified about new events and franchise opportunities
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-full btn-lg font-poppins">
                  <Mail className="mr-2 h-5 w-5" />
                  Submit Registration
                </button>
              </form>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="space-y-8">
            <div className="card">
              <div className="card-content">
                <h3 className="font-poppins mb-4" style={{ fontSize: '1.25rem', fontWeight: '600', color: '#333', marginBottom: '1rem' }}>
                  What You'll Receive
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle className="h-5 w-5 text-green-500" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                    <div>
                      <h4 className="font-poppins" style={{ fontSize: '1rem', fontWeight: '600', color: '#333' }}>
                        Early Event Access
                      </h4>
                      <p className="font-inter text-muted" style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                        Get priority registration for all EarlyJobs events and webinars
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle className="h-5 w-5 text-green-500" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                    <div>
                      <h4 className="font-poppins" style={{ fontSize: '1rem', fontWeight: '600', color: '#333' }}>
                        Franchise Updates
                      </h4>
                      <p className="font-inter text-muted" style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                        Be the first to know about new franchise opportunities in your city
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle className="h-5 w-5 text-green-500" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                    <div>
                      <h4 className="font-poppins" style={{ fontSize: '1rem', fontWeight: '600', color: '#333' }}>
                        Business Insights
                      </h4>
                      <p className="font-inter text-muted" style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                        Receive monthly reports on local hiring trends and market opportunities
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle className="h-5 w-5 text-green-500" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                    <div>
                      <h4 className="font-poppins" style={{ fontSize: '1rem', fontWeight: '600', color: '#333' }}>
                        Exclusive Materials
                      </h4>
                      <p className="font-inter text-muted" style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                        Access to franchise guides, business plans, and training materials
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{ backgroundColor: 'rgba(30, 64, 175, 0.05)', border: '2px solid rgba(30, 64, 175, 0.1)' }}>
              <div className="card-content">
                <div className="flex items-center mb-4">
                  <Bell className="h-6 w-6 text-primary mr-3" />
                  <h3 className="font-poppins" style={{ fontSize: '1.25rem', fontWeight: '600', color: '#333' }}>
                    Stay Informed
                  </h3>
                </div>
                <p className="font-inter text-muted" style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: '1.6' }}>
                  Join over 1,000+ entrepreneurs and business leaders who trust EarlyJobs for the latest updates on local hiring solutions and franchise opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}