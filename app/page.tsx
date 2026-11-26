import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Membership from "@/components/Membership";
import Classes from "@/components/Classes";
import Trainers from "@/components/Trainers";
import Transformations from "@/components/Transformations";
import FreeTrial from "@/components/FreeTrial";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <WhyUs />
      <Membership />
      <Classes />
      <Trainers />
      <Transformations />
      <FreeTrial />
      <Contact />
    </div>
  );
}
