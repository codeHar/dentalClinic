import {
  AboutAppointmentSection,
  Blogs,
  HeroSection,
  Services,
  TestimonialSection,
} from "@/components/features";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Services />
      <AboutAppointmentSection />
      <TestimonialSection />
      <Blogs />
    </div>
  );
}
