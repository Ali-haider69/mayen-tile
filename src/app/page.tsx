import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ServiceAreasSection } from "@/components/sections/ServiceAreas";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyChooseUs />
      <FeaturedServices />
      <FeaturedProjects />
      <ReviewsSection />
      <ServiceAreasSection />
      <CTASection />
    </>
  );
}
