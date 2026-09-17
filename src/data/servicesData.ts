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
  'power-tools': {
    id: 'power-tools',
    title: 'Power Tools',
    h1: 'POWER TOOLS REPAIR AND MAINTENANCE',
    shortDescription: 'Comprehensive diagnostic, repair, and maintenance services for professional and consumer power tools.',
    fullDescription: 'ServiceCenter.ae provides expert repair and maintenance services for all types of power tools, including cordless drills, rotary hammers, and heavy-duty impact drivers. Our state-of-the-art workshop is equipped to handle complex motor rewinds, battery diagnostics, bearing replacements, and thorough electrical testing to ensure your tools return to peak operational efficiency.',
    image: '/1.jpeg',
    imageAlt: 'Professional cordless power drill',
    benefits: [
      { title: 'Enhanced Efficiency', description: 'Restores original motor efficiency and reduces energy consumption.' },
      { title: 'Extended Lifespan', description: 'High-quality repairs extend the operational life of your power tools.' },
      { title: 'Safety Compliance', description: 'Advanced testing ensures safe operation and prevents premature wear.' }
    ]
  },
  'rice-cooker': {
    id: 'rice-cooker',
    title: 'Rice Cooker',
    h1: 'RICE COOKER REPAIR AND MAINTENANCE',
    shortDescription: 'Professional servicing, repair, and heating element replacement for commercial and domestic rice cookers.',
    fullDescription: 'We specialize in the comprehensive maintenance and repair of rice cookers and similar thermal kitchen appliances. From routine servicing to complete electrical overhauls, our certified technicians ensure your heating systems and control boards are reliable, efficient, and ready for daily use.',
    image: '/7.jpeg',
    imageAlt: 'Electric rice cooker',
    benefits: [
      { title: 'Reliable Heating', description: 'Ensures consistent temperature control and proper cooking cycles.' },
      { title: 'Electrical Safety', description: 'Comprehensive circuit testing verifies safety and performance.' },
      { title: 'Component Replacement', description: 'Reduces the risk of failures by replacing worn thermal fuses and sensors.' }
    ]
  },
  'blender-food-processor': {
    id: 'blender-food-processor',
    title: 'Blender & Food Processor',
    h1: 'BLENDER & FOOD PROCESSOR REPAIR',
    shortDescription: 'Specialized repair and component replacement for heavy-duty blenders and food processors.',
    fullDescription: 'Our facility offers specialized repair services for all types of high-performance food processors and blenders. We utilize precision repair techniques for blade assemblies, motor couplings, and drive sockets to restore rotating parts to strict OEM specifications, ensuring optimal alignment and vibration-free operation.',
    image: '/2.jpeg',
    imageAlt: 'Food processor and blender',
    benefits: [
      { title: 'Precision Alignment', description: 'In-house repairs restore drive sockets and blades to exact tolerances.' },
      { title: 'Reduced Downtime', description: 'Fast turnaround times keep your kitchen operations running smoothly.' },
      { title: 'OEM Standards', description: 'All component replacements meet or exceed original manufacturer specifications.' }
    ]
  },
  'garment-steamer': {
    id: 'garment-steamer',
    title: 'Garment Steamer',
    h1: 'GARMENT STEAMER REPAIR AND MAINTENANCE',
    shortDescription: 'Complete repair and refurbishment solutions for commercial and domestic garment steamers.',
    fullDescription: 'We provide comprehensive repair services for a wide variety of garment steamers and ironing systems. Our services include boiler descaling, water pump replacement, steam hose repair, and thermal testing to ensure efficient steam generation and leak-free performance.',
    image: '/5.jpeg',
    imageAlt: 'Handheld garment steamer',
    benefits: [
      { title: 'Leak Prevention', description: 'High-quality seals and hoses prevent fluid leaks and steam loss.' },
      { title: 'Restored Steam Pressure', description: 'Pump and boiler refurbishment restores original steam output.' },
      { title: 'Scale Protection', description: 'Specialized cleaning protects internal components from mineral buildup.' }
    ]
  },
  'vacuum-cleaner': {
    id: 'vacuum-cleaner',
    title: 'Vacuum Cleaner',
    h1: 'VACUUM CLEANER REPAIR AND MAINTENANCE',
    shortDescription: 'Expert diagnostic and repair for cordless and heavy-duty vacuum cleaners.',
    fullDescription: 'Our specialized technicians provide high-quality repair services for vacuum cleaners, handling everything from suction loss to motor replacements. We use premium replacement parts and thorough testing techniques to ensure maximum electrical durability, battery health, and airflow performance.',
    image: '/6.jpeg',
    imageAlt: 'Handheld cordless vacuum cleaner',
    benefits: [
      { title: 'Optimized Suction', description: 'Thorough cleaning and motor repair restores optimal airflow and suction.' },
      { title: 'Battery & Motor Care', description: 'Expert diagnosis ensures long-lasting battery life and motor performance.' },
      { title: 'Electrical Integrity', description: 'Rigorous testing guarantees safe operation and power delivery.' }
    ]
  },
  'electric-jigsaw': {
    id: 'electric-jigsaw',
    title: 'Electric Jigsaw',
    h1: 'ELECTRIC JIGSAW REPAIR',
    shortDescription: 'Precision diagnostics and mechanical repair for electric jigsaws and cutting tools.',
    fullDescription: 'ServiceCenter.ae utilizes advanced diagnostics to provide highly accurate repairs for electric jigsaws and reciprocating saws. Proper maintenance of the drive mechanism and motor is critical to eliminating destructive vibrations, extending tool life, and ensuring the smooth, precise operation of your cutting machinery.',
    image: '/4.jpeg',
    imageAlt: 'Electric jigsaw tool',
    benefits: [
      { title: 'Vibration Reduction', description: 'Repairs to the drive mechanism reduce mechanical vibrations.' },
      { title: 'Component Protection', description: 'Significantly extends the life of internal gears and motor brushes.' },
      { title: 'Cutting Precision', description: 'Smoother operation leads to more accurate cuts and improved user safety.' }
    ]
  },
  'ac-dc-motor': {
    id: 'ac-dc-motor',
    title: 'AC & DC Motor',
    h1: 'AC & DC MOTOR REWINDING & REPAIR',
    shortDescription: 'Our skilled technicians specialize in the rewinding, repair, and maintenance of both AC and DC motors.',
    fullDescription: 'We provide specialized rewinding, diagnostics, overhaul, and repair services for industrial and commercial AC and DC electric motors. With high-precision coil winding and vacuum pressure impregnation, we restore motors to OEM performance.',
    image: '/1.jpeg',
    imageAlt: 'AC and DC motor overhaul',
    benefits: [
      { title: 'Complete Rewinding', description: 'High-grade copper coils and Class H insulation.' },
      { title: 'Dynamic Testing', description: 'No-load and full-load testing for optimum efficiency.' },
      { title: 'Rapid Turnaround', description: 'Emergency repair services to minimize operational downtime.' }
    ]
  },
  'generators': {
    id: 'generators',
    title: 'Generators',
    h1: 'GENERATOR REPAIR & MAINTENANCE',
    shortDescription: 'Count on us for reliable generator services, encompassing thorough inspections, repairs, and maintenance.',
    fullDescription: 'Comprehensive maintenance, alternator rewinding, and mechanical repair services for generators of all capacities. We ensure continuous and reliable power generation for your facilities.',
    image: '/3.jpeg',
    imageAlt: 'Generator inspection and repair',
    benefits: [
      { title: 'Thorough Diagnostics', description: 'Comprehensive electrical and mechanical inspection.' },
      { title: 'Stator & Rotor Care', description: 'Specialized testing and repair of excitation systems.' },
      { title: 'Reliability Guarantee', description: 'Tested under simulated operational loads.' }
    ]
  },
  'rotating-parts': {
    id: 'rotating-parts',
    title: 'Rotating Parts',
    h1: 'ROTATING PARTS INSPECTION & REPAIR',
    shortDescription: 'Our services cover the inspection, repair, and maintenance of rotating parts of electrical machinery.',
    fullDescription: 'Precision inspection, shaft alignment, bearing replacement, and dynamic balancing of all rotating components in electrical machinery, ensuring minimal vibration and maximum longevity.',
    image: '/2.jpeg',
    imageAlt: 'Rotating parts servicing',
    benefits: [
      { title: 'Precision Alignment', description: 'Laser alignment for shafts and couplings.' },
      { title: 'Vibration Analysis', description: 'Pre and post repair vibration spectrum analysis.' },
      { title: 'Wear Reduction', description: 'Premium seals and bearings for extended lifecycle.' }
    ]
  },
  'water-pumps': {
    id: 'water-pumps',
    title: 'Water Pumps',
    h1: 'WATER PUMP REPAIR & OVERHAUL',
    shortDescription: 'From routine maintenance to emergency repairs, we provide comprehensive solutions for efficient water circulation.',
    fullDescription: 'End-to-end repair and servicing for centrifugal, submersible, and booster water pumps. We replace mechanical seals, overhaul impellers, and rewind pump motors for leak-free operation.',
    image: '/5.jpeg',
    imageAlt: 'Water pump servicing',
    benefits: [
      { title: 'Hydraulic Efficiency', description: 'Restored pump head and flow rate capacity.' },
      { title: 'Leak-Proof Sealing', description: 'High-grade mechanical seal replacements.' },
      { title: 'Emergency Dispatch', description: 'Rapid repair solutions for critical water systems.' }
    ]
  },
  'compressor-stator': {
    id: 'compressor-stator',
    title: 'Compressor & Stator',
    h1: 'COMPRESSOR & STATOR SERVICING',
    shortDescription: 'Our skilled technicians are equipped to handle the repair and maintenance of compressors and stators, etc.',
    fullDescription: 'Specialized stator rewinding and overhaul for hermetic, semi-hermetic, and screw compressors. We utilize chemical-resistant insulation and precision winding to withstand harsh operating conditions.',
    image: '/6.jpeg',
    imageAlt: 'Compressor and stator repair',
    benefits: [
      { title: 'Chemical-Resistant Insulation', description: 'Resistant to refrigerants and oils.' },
      { title: 'Precision Stator Rewinding', description: 'Exact turn count and wire gauge matching.' },
      { title: 'Pressure & Leak Testing', description: 'Rigorous hydrostatic and electrical safety tests.' }
    ]
  },
  'dynamic-balancing-for-rotor': {
    id: 'dynamic-balancing-for-rotor',
    title: 'Dynamic Balancing for Rotor',
    h1: 'DYNAMIC BALANCING FOR ROTORS',
    shortDescription: 'Ensure optimal performance and prevent wear with our dynamic balancing services for rotors.',
    fullDescription: 'State-of-the-art multi-plane dynamic balancing for rotors, impellers, fans, and shafts. Compliant with ISO 1940 balancing standards, we eliminate vibrations and prevent premature mechanical failure.',
    image: '/4.jpeg',
    imageAlt: 'Dynamic rotor balancing',
    benefits: [
      { title: 'ISO 1940 Compliance', description: 'Balancing to G1.0, G2.5, or G6.3 grade specifications.' },
      { title: 'Extended Bearing Life', description: 'Dramatically reduces mechanical wear and fatigue.' },
      { title: 'Detailed Certification', description: 'Pre- and post-balance test reports provided.' }
    ]
  }
};
