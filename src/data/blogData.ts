export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
}

export const blogData: Record<string, BlogPost> = {
  '1': {
    id: '1',
    title: "The Importance of Dynamic Balancing in Industrial Rotors",
    excerpt: "Discover why dynamic balancing is critical for the longevity and efficiency of industrial rotating equipment...",
    content: "Dynamic balancing is an essential maintenance process for any industrial facility utilizing rotating equipment. Unbalanced rotors can lead to severe vibration, premature bearing failure, and ultimately catastrophic machine breakdown. At Light House Electrical Co., we utilize advanced computerized balancing technology to ensure all rotating assemblies operate smoothly within ISO standards. Regular balancing not only extends the life of your equipment but also reduces energy consumption and noise levels in your plant.",
    date: "August 15, 2023",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2000&auto=format&fit=crop"
  },
  '2': {
    id: '2',
    title: "Signs Your AC Motor Needs Immediate Maintenance",
    excerpt: "Learn to identify the early warning signs of motor failure before it leads to costly downtime and repairs...",
    content: "AC motors are the workhorses of the industrial world, but they are not immune to wear and tear. Recognizing the early signs of failure can save you thousands in downtime and replacement costs. Key indicators include unusual noises (such as grinding or humming), excessive vibration, overheating, and frequent circuit breaker trips. If your motor is exhibiting any of these symptoms, it's time to schedule a thorough inspection. Our team specializes in comprehensive diagnostics and rewinding to bring your motor back to OEM specifications.",
    date: "September 02, 2023",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop"
  },
  '3': {
    id: '3',
    title: "Generator Servicing: A Comprehensive Guide",
    excerpt: "A step-by-step guide to maintaining your industrial generators to ensure they are ready when you need them most...",
    content: "Industrial generators are your last line of defense against power outages, making their reliability absolutely paramount. A comprehensive servicing schedule should include regular fluid checks, battery load testing, fuel system cleaning, and periodic full-load operational tests. Neglecting these areas can lead to fuel degradation or startup failures precisely when you need power the most. We recommend a biannual maintenance contract to ensure all mechanical and electrical components are functioning flawlessly.",
    date: "October 12, 2023",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2000&auto=format&fit=crop"
  }
};
