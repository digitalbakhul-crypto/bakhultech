import BackgroundLayout from "./components/backgroundLayout";
import OurPortfolio from "./components/ourPortfolio";
import TemplateSection from "./components/templateSection";
import TogetherSection from "./components/togetherSection";

export default function ServicesPage() {
  return (
    <div>
      <BackgroundLayout>
      <OurPortfolio />
      <TemplateSection />
      <TogetherSection />
      </BackgroundLayout>
    </div>
  );
}