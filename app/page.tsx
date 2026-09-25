import { Header, HeroSection, Services } from "@/components";
import { AboutAppointmentSection } from "@/components/about-section";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <HeroSection />
      <Services />
      <AboutAppointmentSection />
    </div>
  );
}
