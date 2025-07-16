import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What is EarlyJobs and how does it work?",
    answer: "EarlyJobs is a hyperlocal hiring platform that connects local businesses with job seekers in their immediate vicinity. Our platform focuses on entry-level and blue-collar jobs, making it easier for businesses to find reliable local talent and for job seekers to find opportunities close to home."
  },
  {
    id: 2,
    question: "How can I become a franchise partner?",
    answer: "To become a franchise partner, you can register your interest through our events or contact us directly. We're currently expanding to 20 cities across India and are looking for motivated individuals who understand their local market and want to build a sustainable business."
  },
  {
    id: 3,
    question: "What support do franchise partners receive?",
    answer: "Franchise partners receive comprehensive training, marketing materials, technology platform access, ongoing business support, and dedicated account management. We also provide regular webinars, business development resources, and a proven business model."
  },
  {
    id: 4,
    question: "Which cities are you expanding to next?",
    answer: "We're currently launching in Faridabad and Hyderabad, with plans to expand to 18 additional cities across tier-2 and tier-3 markets. Priority is given to cities with strong local business ecosystems and high demand for local hiring solutions."
  },
  {
    id: 5,
    question: "How do I register for upcoming events?",
    answer: "You can register for events through our website, by calling our helpline, or by filling out the registration form on this page. We'll send you confirmation details and any required materials before the event."
  },
  {
    id: 6,
    question: "Are the events free to attend?",
    answer: "Yes, all our webinars and most events are free to attend. Some special networking events or workshops may have a nominal fee, which will be clearly mentioned during registration."
  },
  {
    id: 7,
    question: "What makes EarlyJobs different from other job platforms?",
    answer: "EarlyJobs focuses specifically on hyperlocal hiring, connecting businesses with talent within a 5-10 km radius. We specialize in entry-level and blue-collar jobs, provide offline support through local franchise partners, and understand the unique needs of smaller businesses and local job seekers."
  },
  {
    id: 8,
    question: "Can I attend events if I'm not interested in franchising?",
    answer: "Absolutely! Our events welcome business owners, HR professionals, job seekers, and anyone interested in local hiring trends. Whether you want to learn about our platform, network with local businesses, or explore employment opportunities, you're welcome to join."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set([1]));

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <HelpCircle className="h-12 w-12 text-primary" />
          </div>
          <h2 className="font-poppins mb-4" style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}>
            Frequently Asked Questions
          </h2>
          <p className="font-inter" style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '32rem', margin: '0 auto' }}>
            Got questions? We've got answers. Find out everything you need to know about EarlyJobs events and opportunities.
          </p>
        </div>

        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <div className="accordion">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="accordion-item">
                <button
                  className="accordion-trigger"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={openItems.has(faq.id)}
                >
                  <span className="font-poppins" style={{ fontSize: '1rem', fontWeight: '500', textAlign: 'left' }}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`h-4 w-4 transition-transform ${
                      openItems.has(faq.id) ? 'transform rotate-180' : ''
                    }`}
                    style={{ 
                      flexShrink: 0, 
                      transition: 'transform 0.3s ease',
                      transform: openItems.has(faq.id) ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  />
                </button>
                {openItems.has(faq.id) && (
                  <div className="accordion-content">
                    <p className="font-inter" style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: '1.6' }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="card" style={{ backgroundColor: 'rgba(30, 64, 175, 0.05)', border: '1px solid rgba(30, 64, 175, 0.1)' }}>
              <div className="card-content">
                <h3 className="font-poppins mb-4" style={{ fontSize: '1.25rem', fontWeight: '600', color: '#333', marginBottom: '1rem' }}>
                  Still have questions?
                </h3>
                <p className="font-inter mb-6" style={{ fontSize: '1rem', color: '#6b7280', marginBottom: '1.5rem' }}>
                  Our team is here to help. Get in touch with us for personalized assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
                  <button className="btn btn-primary font-poppins">
                    Contact Support
                  </button>
                  <button className="btn btn-outline font-poppins">
                    Schedule a Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}