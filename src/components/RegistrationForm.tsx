import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, User, MapPin, Calendar, CheckCircle, Bell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const eventTypes = [
  { id: "webinar", label: "Weekly Webinars", icon: <Calendar className="h-4 w-4" /> },
  { id: "expo", label: "Franchise Expo (Lucknow)", icon: <MapPin className="h-4 w-4" /> },
  { id: "launches", label: "Office Launch Events", icon: <Bell className="h-4 w-4" /> }
];

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    eventTypes: [] as string[],
    franchiseInterest: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleEventTypeChange = (eventType: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      eventTypes: checked 
        ? [...prev.eventTypes, eventType]
        : prev.eventTypes.filter(type => type !== eventType)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || formData.eventTypes.length === 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and select at least one event type.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Registration Successful!",
        description: "You're now on our list. Watch out for event updates!"
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto border-2 border-accent/20 bg-white shadow-elegant">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-poppins text-3xl font-bold text-foreground mb-4">
                Thank You!
              </h3>
              <p className="font-inter text-lg text-muted-foreground mb-6">
                You're now on the list. Watch out for our next franchise opportunity or event invite. 
                You'll hear from us soon!
              </p>
              <div className="space-y-3 text-left max-w-md mx-auto">
                <h4 className="font-poppins font-semibold text-foreground">What's Next:</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Email confirmation within 24 hours</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Event reminders and updates</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Exclusive franchise opportunities</span>
                  </div>
                </div>
              </div>
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="outline" 
                className="mt-8 font-poppins font-semibold"
              >
                Register for More Events
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-accent/10 to-primary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-4xl font-bold text-foreground mb-4">
              Want to Join Us at the Next Event?
            </h2>
            <p className="font-inter text-lg text-muted-foreground">
              Stay updated with our latest events and franchise opportunities. 
              We'll keep you informed about everything that matters to your business growth.
            </p>
          </div>

          <Card className="border-2 border-primary/20 shadow-elegant">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-poppins font-semibold text-foreground">
                      Full Name *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-poppins font-semibold text-foreground">
                      Email Address *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city" className="font-poppins font-semibold text-foreground">
                    City
                  </Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, city: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                      <SelectItem value="hyderabad">Hyderabad</SelectItem>
                      <SelectItem value="faridabad">Faridabad</SelectItem>
                      <SelectItem value="lucknow">Lucknow</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <Label className="font-poppins font-semibold text-foreground">
                    Events you're interested in: *
                  </Label>
                  <div className="grid gap-4">
                    {eventTypes.map((eventType) => (
                      <div key={eventType.id} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-secondary/50 transition-colors">
                        <Checkbox
                          id={eventType.id}
                          checked={formData.eventTypes.includes(eventType.id)}
                          onCheckedChange={(checked) => handleEventTypeChange(eventType.id, checked as boolean)}
                        />
                        <div className="flex items-center space-x-2 flex-1">
                          {eventType.icon}
                          <Label 
                            htmlFor={eventType.id} 
                            className="font-inter cursor-pointer flex-1"
                          >
                            {eventType.label}
                          </Label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent/5 border border-accent/20">
                  <Checkbox
                    id="franchise-interest"
                    checked={formData.franchiseInterest}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, franchiseInterest: checked as boolean }))}
                  />
                  <Label 
                    htmlFor="franchise-interest" 
                    className="font-inter cursor-pointer text-foreground"
                  >
                    I'm actively looking to start a franchise
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-poppins font-semibold text-lg py-4"
                >
                  <Bell className="mr-2 h-5 w-5" />
                  Notify Me About Events
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By registering, you agree to receive updates about EarlyJobs events and franchise opportunities. 
                  You can unsubscribe at any time.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}