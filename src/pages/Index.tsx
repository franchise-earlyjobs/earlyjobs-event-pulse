import HeroSection from "@/components/HeroSection";
import EventsOverview from "@/components/EventsOverview";
import SimpleRegistration from "@/components/SimpleRegistration";
import MinimalFooter from "@/components/MinimalFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <EventsOverview />
      <SimpleRegistration />
      <MinimalFooter />
    </div>
  );
};

export default Index;
