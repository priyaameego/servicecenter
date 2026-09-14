import { Button } from '../../components/ui/Button';
import { ServiceCard } from '../../components/ui/ServiceCard';

const services = [
  {
    title: 'POWER TOOLS',
    image: '/1.jpeg',
    imageAlt: 'Professional cordless power drill representing AC/DC motor applications',
    link: '/services/ac-dc-motor'
  },
  {
    title: 'RICE COOKER',
    image: '/7.jpeg',
    imageAlt: 'Electric rice cooker representing power generation and heat applications',
    link: '/services/generators'
  },
  {
    title: 'BLENDER & FOOD PROCESSOR',
    image: '/2.jpeg',
    imageAlt: 'Food processor and blender representing high-speed rotating parts',
    link: '/services'
  },
  {
    title: 'GARMENT STEAMER',
    image: '/5.jpeg',
    imageAlt: 'Handheld garment steamer representing water pump and fluid dynamics',
    link: '/services/water-pumps'
  },
  {
    title: 'VACUUM CLEANER',
    image: '/6.jpeg',
    imageAlt: 'Handheld cordless vacuum cleaner representing compressors and stators',
    link: '/services/compressor-stator'
  },
  {
    title: 'ELECTRIC JIGSAW',
    image: '/4.jpeg',
    imageAlt: 'Electric jigsaw tool representing precision dynamic balancing',
    link: '/services/dynamic-balancing'
  }
];

export function ServicesOverview() {
  return (
    <section className="section-padding bg-[var(--color-bg-light)]">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="section-eyebrow">What We Offer</span>
          <h2 className="section-title">OUR SERVICES OVERVIEW</h2>
          <div className="section-divider-center mt-2" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-14 reveal-group">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              image={service.image}
              imageAlt={service.imageAlt}
              link={service.link}
            />
          ))}
        </div>

        <div className="text-center reveal">
          <Button to="/services" variant="primary">VIEW ALL SERVICES</Button>
        </div>
      </div>
    </section>
  );
}
