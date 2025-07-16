import HeroSection from "@/components/HeroSection";
import EventsCalendar from "@/components/EventsCalendar";
import FeaturedEvent from "@/components/FeaturedEvent";
import FranchiseLaunches from "@/components/FranchiseLaunches";
import WeeklyWebinars from "@/components/WeeklyWebinars";
import RegistrationForm from "@/components/RegistrationForm";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <EventsCalendar />
      <FeaturedEvent />
      <FranchiseLaunches />
      <WeeklyWebinars />
      <RegistrationForm />
      <FAQ />
    </div>
  );
};

export default Index;
