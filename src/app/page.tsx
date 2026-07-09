import HeroSection from "@/components/sections/HeroSection";
import AuthenticityStrip from "@/components/sections/AuthenticityStrip";
import ProductsGrid from "@/components/sections/ProductsGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import WorkGallery from "@/components/sections/WorkGallery";
import AboutStory from "@/components/sections/AboutStory";
import ProblemsSolved from "@/components/sections/ProblemsSolved";
import WhyChooseUsGrid from "@/components/sections/WhyChooseUsGrid";
import ReviewsGrid from "@/components/sections/ReviewsGrid";
import FAQAccordion from "@/components/sections/FAQAccordion";
import QuoteFormSection from "@/components/sections/QuoteFormSection";
import GetInTouchPanel from "@/components/sections/GetInTouchPanel";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AuthenticityStrip />
      <ProductsGrid />
      <ProcessSteps />
      <WorkGallery />
      <AboutStory />
      <ProblemsSolved />
      <WhyChooseUsGrid />
      <ReviewsGrid />
      <FAQAccordion />
      <QuoteFormSection />
      <GetInTouchPanel />
    </>
  );
}
