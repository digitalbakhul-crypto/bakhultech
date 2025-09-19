import Image from "next/image";
import HeroSection from "./components/home/heroSection";
import ChallengeSection from "./components/home/challengeSection";
import OurServices from "./components/home/ourServices";
import Excellence from "./components/home/excellence";
import Testimonial from "./components/home/testimonial";
import CompanyWork from "./components/home/companyWork";


export default function HomePage() {
  return (
    <>
      <div>
        <HeroSection />
        <ChallengeSection />
        <OurServices />
        <Excellence />
        <Testimonial />
        <CompanyWork />
      </div>
    </>
  );
}
