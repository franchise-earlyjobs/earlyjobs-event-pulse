import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Linkedin, Instagram } from "lucide-react";

export default function MinimalFooter() {
  return (
    <footer className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <h3 className="font-poppins text-3xl font-light mb-8">
            <span className="text-accent">Early</span>Jobs
          </h3>
          
          {/* Simple description */}
          <p className="font-inter text-lg text-background/70 mb-12 max-w-2xl mx-auto">
            Fueling local hiring and powering new businesses across India.
          </p>

          {/* Contact options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-background/20 text-background hover:bg-background hover:text-foreground font-poppins font-medium rounded-full px-8"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-background/20 text-background hover:bg-background hover:text-foreground font-poppins font-medium rounded-full px-8"
            >
              <Mail className="mr-2 h-5 w-5" />
              franchise@earlyjobs.in
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="#" 
              className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="font-inter text-sm text-background/50">
            © 2025 EarlyJobs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}