export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  h1: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  imageAlt?: string;
  benefits: ServiceBenefit[];
  faqs?: ServiceFAQ[];
}

export const servicesData: Record<string, ServiceDetail> = {
  'ac-dc-motor': {
    id: 'ac-dc-motor',
    title: 'Power Tools',
    h1: 'POWER TOOLS REPAIR AND MAINTENANCE',
    shortDescription: 'Comprehensive diagnostic, repair, and maintenance services for professional and consumer power tools.',
    fullDescription: 'ServiceCenter.ae provides expert repair and maintenance services for all types of power tools, including cordless drills, rotary hammers, and heavy-duty impact drivers. Our state-of-the-art workshop is equipped to handle complex motor rewinds, battery diagnostics, bearing replacements, and thorough electrical testing to ensure your tools return to peak operational efficiency.',
    image: '/1.jpeg',
    imageAlt: 'Professional cordless power drill representing AC/DC motor applications',
    benefits: [
      { title: 'Enhanced Efficiency', description: 'Restores original motor efficiency and reduces energy consumption.' },
      { title: 'Extended Lifespan', description: 'High-quality repairs extend the operational life of your power tools.' },
      { title: 'Safety Compliance', description: 'Advanced testing ensures safe operation and prevents premature wear.' }
    ]
  },
  'generators': {
    id: 'generators',
    title: 'Rice Cooker',
    h1: 'RICE COOKER REPAIR AND MAINTENANCE',
    shortDescription: 'Professional servicing, repair, and heating element replacement for commercial and domestic rice cookers.',
    fullDescription: 'We specialize in the comprehensive maintenance and repair of rice cookers and similar thermal kitchen appliances. From routine servicing to complete electrical overhauls, our certified technicians ensure your heating systems and control boards are reliable, efficient, and ready for daily use.',
    image: '/7.jpeg',
    imageAlt: 'Electric rice cooker representing power generation and heat applications',
    benefits: [
      { title: 'Reliable Heating', description: 'Ensures consistent temperature control and proper cooking cycles.' },
      { title: 'Electrical Safety', description: 'Comprehensive circuit testing verifies safety and performance.' },
      { title: 'Component Replacement', description: 'Reduces the risk of failures by replacing worn thermal fuses and sensors.' }
    ]
  },
  'rotating-parts': {
    id: 'rotating-parts',
    title: 'Blender & Food Processor',
    h1: 'BLENDER & FOOD PROCESSOR REPAIR',
    shortDescription: 'Specialized repair and component replacement for heavy-duty blenders and food processors.',
    fullDescription: 'Our facility offers specialized repair services for all types of high-performance food processors and blenders. We utilize precision repair techniques for blade assemblies, motor couplings, and drive sockets to restore rotating parts to strict OEM specifications, ensuring optimal alignment and vibration-free operation.',
    image: '/2.jpeg',
    imageAlt: 'Food processor and blender representing high-speed rotating parts',
    benefits: [
      { title: 'Precision Alignment', description: 'In-house repairs restore drive sockets and blades to exact tolerances.' },
      { title: 'Reduced Downtime', description: 'Fast turnaround times keep your kitchen operations running smoothly.' },
      { title: 'OEM Standards', description: 'All component replacements meet or exceed original manufacturer specifications.' }
    ]
  },
  'water-pumps': {
    id: 'water-pumps',
    title: 'Garment Steamer',
    h1: 'GARMENT STEAMER REPAIR AND MAINTENANCE',
    shortDescription: 'Complete repair and refurbishment solutions for commercial and domestic garment steamers.',
    fullDescription: 'We provide comprehensive repair services for a wide variety of garment steamers and ironing systems. Our services include boiler descaling, water pump replacement, steam hose repair, and thermal testing to ensure efficient steam generation and leak-free performance.',
    image: '/5.jpeg',
    imageAlt: 'Handheld garment steamer representing water pump and fluid dynamics',
    benefits: [
      { title: 'Leak Prevention', description: 'High-quality seals and hoses prevent fluid leaks and steam loss.' },
      { title: 'Restored Steam Pressure', description: 'Pump and boiler refurbishment restores original steam output.' },
      { title: 'Scale Protection', description: 'Specialized cleaning protects internal components from mineral buildup.' }
    ]
  },
  'compressor-stator': {
    id: 'compressor-stator',
    title: 'Vacuum Cleaner',
    h1: 'VACUUM CLEANER REPAIR AND MAINTENANCE',
    shortDescription: 'Expert diagnostic and repair for cordless and heavy-duty vacuum cleaners.',
    fullDescription: 'Our specialized technicians provide high-quality repair services for vacuum cleaners, handling everything from suction loss to motor replacements. We use premium replacement parts and thorough testing techniques to ensure maximum electrical durability, battery health, and airflow performance.',
    image: '/6.jpeg',
    imageAlt: 'Handheld cordless vacuum cleaner representing compressors and stators',
    benefits: [
      { title: 'Optimized Suction', description: 'Thorough cleaning and motor repair restores optimal airflow and suction.' },
      { title: 'Battery & Motor Care', description: 'Expert diagnosis ensures long-lasting battery life and motor performance.' },
      { title: 'Electrical Integrity', description: 'Rigorous testing guarantees safe operation and power delivery.' }
    ]
  },
  'dynamic-balancing': {
    id: 'dynamic-balancing',
    title: 'Electric Jigsaw',
    h1: 'ELECTRIC JIGSAW REPAIR',
    shortDescription: 'Precision diagnostics and mechanical repair for electric jigsaws and cutting tools.',
    fullDescription: 'ServiceCenter.ae utilizes advanced diagnostics to provide highly accurate repairs for electric jigsaws and reciprocating saws. Proper maintenance of the drive mechanism and motor is critical to eliminating destructive vibrations, extending tool life, and ensuring the smooth, precise operation of your cutting machinery.',
    image: '/4.jpeg',
    imageAlt: 'Electric jigsaw tool representing precision dynamic balancing',
    benefits: [
      { title: 'Vibration Reduction', description: 'Repairs to the drive mechanism reduce mechanical vibrations.' },
      { title: 'Component Protection', description: 'Significantly extends the life of internal gears and motor brushes.' },
      { title: 'Cutting Precision', description: 'Smoother operation leads to more accurate cuts and improved user safety.' }
    ]
  }
};
