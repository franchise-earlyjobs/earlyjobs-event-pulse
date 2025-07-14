import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    id: "1",
    question: "Who can attend the EarlyJobs events?",
    answer: "Our events are open to entrepreneurs, business owners, aspiring franchise partners, and anyone interested in local hiring solutions. Whether you're looking to start a franchise, explore business opportunities, or learn about our platform, you're welcome to join us."
  },
  {
    id: "2",
    question: "What's the cost to attend these events?",
    answer: "Our weekly webinars are completely free to attend. For expo participation and office launch events, registration is free but seats are limited. Some premium networking sessions may have nominal fees, which will be clearly mentioned during registration."
  },
  {
    id: "3",
    question: "Do I need experience to start a franchise?",
    answer: "No prior franchise experience is required! We provide comprehensive training and ongoing support to all our franchise partners. Our team will guide you through every step of the process, from initial setup to day-to-day operations. We believe in empowering passionate individuals with the right mindset."
  },
  {
    id: "4",
    question: "Can I get a meeting with the EarlyJobs team during the expo?",
    answer: "Absolutely! During the Franchise India Expo in Lucknow, our team including founders and franchise heads will be available for one-on-one meetings. You can schedule a meeting in advance through our registration form or visit our booth during the event for direct consultations."
  },
  {
    id: "5",
    question: "What cities are available for franchise opportunities?",
    answer: "We're actively expanding across India with focus on Tier 2 and Tier 3 cities. Current expansion includes Faridabad, Hyderabad, and many other cities. We offer district-wise franchise opportunities with special early-bird offers for the first 20 cities. Contact us to check availability in your preferred location."
  },
  {
    id: "6",
    question: "How can I stay updated about upcoming events?",
    answer: "The best way to stay updated is by registering through our notification form on this page. You'll receive email updates about new events, webinar schedules, and exclusive franchise opportunities. You can also follow us on our social media channels for real-time updates."
  },
  {
    id: "7",
    question: "What support do you provide to franchise partners?",
    answer: "We provide end-to-end support including initial training, marketing materials, technology platform, ongoing operational guidance, and regular performance reviews. Our franchise partners also get access to exclusive webinars, peer networking opportunities, and dedicated support channels."
  },
  {
    id: "8",
    question: "Can I attend events virtually?",
    answer: "Yes! Our weekly webinars are conducted online via Zoom, making them accessible from anywhere. For physical events like the Franchise India Expo and office launches, we also provide live streaming for key sessions when possible. Virtual attendees get access to recordings and follow-up materials."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-poppins text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-inter text-lg text-muted-foreground">
              Got questions? We've got answers. Find everything you need to know about our events and franchise opportunities.
            </p>
          </div>

          <Card className="shadow-card border-0">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className="border-b border-border/50">
                    <AccordionTrigger className="text-left font-poppins font-semibold text-foreground hover:text-primary transition-colors py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-inter text-muted-foreground leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <p className="font-inter text-muted-foreground mb-4">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:franchise@earlyjobs.in" 
                className="font-poppins text-primary hover:text-primary/80 font-semibold"
              >
                franchise@earlyjobs.in
              </a>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <a 
                href="tel:+919876543210" 
                className="font-poppins text-primary hover:text-primary/80 font-semibold"
              >
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}