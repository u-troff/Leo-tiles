import HeroSection from "@/components/sections/HeroSection";
import ReviewsCarousel from "@/components/sections/ReviewsCarousel";
import AboutBrief from "@/components/sections/AboutBrief";
import FounderStory from "@/components/sections/FounderStory";
import ServicesOverview from "@/components/sections/ServicesOverview";
import ProcessSteps from "@/components/sections/ProcessSteps";
import WorkGallery from "@/components/sections/WorkGallery";
import PainPoints from "@/components/sections/PainPoints";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServiceAreas from "@/components/sections/ServiceAreas";
import FAQSection from "@/components/sections/FAQSection";
import BrandLogos from "@/components/sections/BrandLogos";
import ContactSection from "@/components/sections/ContactSection";
import { homepageFAQs } from "@/data/faqs";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ReviewsCarousel />
      <AboutBrief />
      <FounderStory />
      <ServicesOverview />
      <ProcessSteps />
      <WorkGallery />
      <PainPoints />
      <WhyChooseUs />
      <ServiceAreas />
      <FAQSection faqs={homepageFAQs} />
      <BrandLogos />
      <ContactSection />
    </>
  );
}
