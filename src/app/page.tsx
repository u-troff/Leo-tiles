import HeroSection from "@/components/sections/HeroSection";
import ProductNavigator from "@/components/sections/ProductNavigator";
import ManifestoSection from "@/components/sections/ManifestoSection";
import SculptedUtility from "@/components/sections/SculptedUtility";
import TechnicalIntegrity from "@/components/sections/TechnicalIntegrity";
import ArchitecturalQuote from "@/components/sections/ArchitecturalQuote";
import ProjectsCarousel from "@/components/sections/ProjectsCarousel";
import LegacyCTA from "@/components/sections/LegacyCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductNavigator />
      <ManifestoSection />
      <SculptedUtility />
      <TechnicalIntegrity />
      <ArchitecturalQuote />
      <ProjectsCarousel />
      <LegacyCTA />
    </>
  );
}
