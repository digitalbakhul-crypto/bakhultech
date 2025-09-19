import BackgroundLayout from "./components/backgroundLayout";
import HeroSection from "./components/heroSection";
import GoalfocusSection from "./components/goalfocusSection";
import ProcessSection from "./components/processlSection";
import OurMission from "./components/ourMission";
import BenefitSection from "./components/benefitSection";
import MeetOurTeam from "./components/meetOurTeam";

export default function AboutPage() {
  return (
    <>
      <div className="font-inter">
        <BackgroundLayout>
          <HeroSection />
          <GoalfocusSection />
          <ProcessSection />
          <OurMission />
          <BenefitSection />
          <MeetOurTeam />
        </BackgroundLayout>
      </div>
    </>
  );
}
