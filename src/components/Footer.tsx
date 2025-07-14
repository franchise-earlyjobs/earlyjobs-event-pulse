import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Linkedin, 
  Instagram, 
  Facebook,
  Building,
  BookOpen,
  Shield
} from "lucide-react";

const quickLinks = [
  { name: "Franchise Opportunity", href: "#franchise", icon: <Building className="h-4 w-4" /> },
  { name: "Blog", href: "#blog", icon: <BookOpen className="h-4 w-4" /> },
  { name: "Privacy Policy", href: "#privacy", icon: <Shield className="h-4 w-4" /> }
];

const socialLinks = [
  { 
    name: "LinkedIn", 
    href: "https://linkedin.com/company/earlyjobs", 
    icon: <Linkedin className="h-5 w-5" />,
    color: "hover:text-blue-600"
  },
  { 
    name: "Instagram", 
    href: "https://instagram.com/earlyjobs", 
    icon: <Instagram className="h-5 w-5" />,
    color: "hover:text-pink-600"
  },
  { 
    name: "Facebook", 
    href: "https://facebook.com/earlyjobs", 
    icon: <Facebook className="h-5 w-5" />,
    color: "hover:text-blue-700"
  }
];

export default function Footer() {
  return (
    <footer className="bg-brand-grey text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="font-poppins text-2xl font-bold mb-4">
              <span className="text-brand-orange">Early</span>Jobs
            </h3>
            <p className="font-inter text-white/80 mb-6 leading-relaxed">
              Fueling local hiring and powering new businesses across India. 
              Join our franchise network and be part of the employment revolution.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors ${social.color} hover:bg-white/20`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="font-poppins text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="font-inter text-white/80 hover:text-brand-orange transition-colors flex items-center space-x-2"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="font-poppins text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <div className="font-inter text-white/80">
                  <p>Corporate Office</p>
                  <p className="text-sm">New Delhi, India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-orange" />
                <a 
                  href="tel:+919876543210"
                  className="font-inter text-white/80 hover:text-brand-orange transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-orange" />
                <a 
                  href="mailto:franchise@earlyjobs.in"
                  className="font-inter text-white/80 hover:text-brand-orange transition-colors"
                >
                  franchise@earlyjobs.in
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-1">
            <h4 className="font-poppins text-lg font-semibold mb-6">Stay Connected</h4>
            <p className="font-inter text-white/80 mb-4">
              Get the latest updates on events and franchise opportunities.
            </p>
            
            <Button 
              size="lg"
              className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-poppins font-semibold mb-4"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp Us
            </Button>
            
            <p className="font-inter text-xs text-white/60">
              Quick responses on WhatsApp for franchise inquiries and event updates.
            </p>
          </div>
        </div>

        <Separator className="my-12 bg-white/20" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="font-inter text-white/60 text-sm text-center lg:text-left">
            <p>&copy; 2025 EarlyJobs. All rights reserved.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
            <a href="#terms" className="font-inter text-white/60 hover:text-brand-orange transition-colors">
              Terms of Service
            </a>
            <a href="#privacy" className="font-inter text-white/60 hover:text-brand-orange transition-colors">
              Privacy Policy
            </a>
            <a href="#cookies" className="font-inter text-white/60 hover:text-brand-orange transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
      
      {/* Event Banner */}
      <div className="bg-brand-orange py-3">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="font-poppins text-white font-semibold">
              🚀 Next Webinar: This Saturday at 11 AM • Franchise India Expo: July 30-31, Lucknow
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}