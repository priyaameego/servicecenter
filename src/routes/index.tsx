import { createFileRoute } from '@tanstack/react-router';
import { SEO } from '../components/SEO';
import { HeroSlider } from '../sections/home/HeroSlider';
import { IntroSection } from '../sections/home/IntroSection';
import { ServicesOverview } from '../sections/home/ServicesOverview';
import { AuthorizedBrands } from '../sections/home/AuthorizedBrands';
import { StatsSection } from '../sections/home/StatsSection';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Home" 
        description="ServiceCenter.ae - Expert industrial repair, rewinding, dynamic balancing, and electromechanical maintenance for AC/DC motors, generators, and machinery in Dubai." 
        path="/" 
      />
      
      {/* 1. Hero Slider Banner */}
      <HeroSlider />
      
      {/* 2. Intro / What We Do */}
      <IntroSection />
      
      {/* 3. Services Grid */}
      <ServicesOverview />
      
      {/* 4. Authorized Service Center Brands */}
      <AuthorizedBrands />
      
      {/* 5. What We've Done (Statistics/Counters banner) */}
      <StatsSection />
      
      {/* Note: 6. Call to Action Banner is globally rendered in the Footer component as per the LHE.AE structure */}
    </div>
  );
}
