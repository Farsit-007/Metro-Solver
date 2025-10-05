import CompanyMarquee from "@/components/modules/Home/Branding";
import Choose from "@/components/modules/Home/Choose";
import { ContactSection } from "@/components/modules/Home/Contact";
import Counter from "@/components/modules/Home/Counter";
import { FAQSection } from "@/components/modules/Home/Faq";
import Gallery from "@/components/modules/Home/Gallery";
import HeroSection from "@/components/modules/Home/Hero";
import Newsletter from "@/components/modules/Home/Newsletter";
import PodcastPage from "@/components/modules/Home/OurProducts";
import TestimonialsPage from "@/components/modules/Home/Review";
import ServicesSection from "@/components/modules/Home/Services";
import { SuccessStoriesSection } from "@/components/modules/Home/Stories";

export default function Home() {
  return (
    <div className=" overflow-hidden lg:overflow-visible">
      <HeroSection />
      <CompanyMarquee />
      <ServicesSection />
      <Gallery />
      <Choose />
      <Counter/>
      <TestimonialsPage/>
      <SuccessStoriesSection/>
      <PodcastPage/>
      <ContactSection/>
      <FAQSection/>
      <Newsletter/>
    </div>
  );
}
