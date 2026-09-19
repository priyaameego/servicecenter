import { createFileRoute } from '@tanstack/react-router';
import { SEO } from '../components/SEO';
import { HeroSlider } from '../sections/home/HeroSlider';
import { IntroSection } from '../sections/home/IntroSection';
import { WhyChooseUs } from '../sections/home/WhyChooseUs';
import { ServicesOverview } from '../sections/home/ServicesOverview';
import { ProductsWeService } from '../sections/home/ProductsWeService';
import { AuthorizedBrands } from '../sections/home/AuthorizedBrands';
import { RepairProcess } from '../sections/home/RepairProcess';
import { WorkshopGallery } from '../sections/home/WorkshopGallery';
import { StatsSection } from '../sections/home/StatsSection';

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
      
      {/* 5. Products We Service (Categories Breakdown) */}
      <ProductsWeService />

      {/* 6. Authorized Service Center Brands */}
      <AuthorizedBrands />

      {/* 7. Repair Process Timeline */}
      <RepairProcess />
      
      {/* 8. Workshop & Certified Technicians In Action (All 12 Client Images: c4-c15) */}
      <WorkshopGallery />

      {/* 9. What We've Done (Statistics/Counters banner) */}
      <StatsSection />

      {/* Note: Call to Action Banner is globally rendered in the Footer component */}
    </div>
  );
}
