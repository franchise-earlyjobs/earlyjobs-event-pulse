import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function SimpleRegistration() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "You're in!",
        description: "We'll keep you updated on all upcoming events."
      });
    }, 800);
  };

  if (isSubmitted) {
    return (
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto border-0 shadow-medium">
            <CardContent className="p-16 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-poppins text-3xl font-light text-foreground mb-4">
                You're all set.
              </h3>
              <p className="font-inter text-lg text-muted-foreground">
                We'll notify you about upcoming events and exclusive opportunities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins text-5xl font-light text-foreground mb-8">
            Stay in the <span className="font-medium text-primary">Loop</span>
          </h2>
          
          <p className="font-inter text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            Get notified about upcoming events, webinars, and exclusive franchise opportunities.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 px-6 rounded-full border-2 border-border focus:border-primary font-inter text-lg"
                required
              />
              <Button 
                type="submit"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-poppins font-medium px-8 rounded-full"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </form>

          <p className="font-inter text-sm text-muted-foreground mt-6">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}