import { createFileRoute } from '@tanstack/react-router';
import { SEO } from '../components/SEO';
import { HeroSlider } from '../sections/home/HeroSlider';
import { IntroSection } from '../sections/home/IntroSection';
import { WhyChooseUs } from '../sections/home/WhyChooseUs';
import { ServicesOverview } from '../sections/home/ServicesOverview';
import { AuthorizedBrands } from '../sections/home/AuthorizedBrands';
import { RepairProcess } from '../sections/home/RepairProcess';
import { StatsSection } from '../sections/home/StatsSection';
import { HomeBlogSection } from '../sections/home/HomeBlogSection';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <SEO 
        title="Home" 
        description="ServiceCenter.ae - Authorized service center for power tools and appliances in Dubai. Specializing in genuine parts and expert repair for Stanley, Black+Decker, and DeWalt." 
        path="/" 
      />
      
      {/* 1. Hero Slider Banner */}
      <HeroSlider />
      
      {/* 2. Intro / What We Do */}
      <IntroSection />

      {/* 3. Why Choose Us / Premium Features */}
      <WhyChooseUs />
      
      {/* 4. Services Grid */}
      <ServicesOverview />
      
      {/* 5. Authorized Service Center Brands */}
      <AuthorizedBrands />

      {/* 6. Repair Process Timeline */}
      <RepairProcess />
      
      {/* 7. What We've Done (Statistics/Counters banner) */}
      <StatsSection />

      {/* 8. Latest Blog Posts */}
      <HomeBlogSection />
      
      {/* Note: Call to Action Banner is globally rendered in the Footer component */}
    </div>
  );
}
