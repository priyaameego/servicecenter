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
    title: "Extending the Lifespan of Your Power Tools",
    excerpt: "Professional power tools are a significant investment. Learn the daily maintenance habits that can double the lifespan of your drills and saws.",
    content: "Professional power tools from brands like DeWalt, Stanley, and Black+Decker are built to withstand tough conditions, but they aren't invincible. Routine maintenance is the key to protecting your investment. Simple habits like blowing out dust from the motor vents after every use, properly storing batteries at room temperature, and avoiding pushing the tool beyond its rated capacity can significantly extend its lifespan. At ServiceCenter.ae, we frequently see premature motor failure caused simply by extreme dust buildup that chokes the airflow. Taking five minutes at the end of the day to clean your equipment can save you from costly repairs down the line.",
    date: "September 15, 2023",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2000&auto=format&fit=crop"
  },
  '2': {
    id: '2',
    title: "The Hidden Dangers of Counterfeit Spare Parts",
    excerpt: "Using fake spare parts might save you money today, but it can lead to catastrophic tool failure and severe safety hazards tomorrow.",
    content: "The market is flooded with cheap, counterfeit spare parts, particularly batteries and chargers. While the upfront cost savings can be tempting, installing a non-OEM part in a high-powered tool is extremely dangerous. Counterfeit batteries lack the internal thermal management systems found in genuine Black+Decker or DeWalt batteries, making them prone to overheating, melting, or even catching fire during heavy use. Furthermore, using unauthorized parts instantly voids your manufacturer warranty. As an Authorized Service Center, ServiceCenter.ae exclusively sources and installs genuine OEM parts to ensure your equipment remains safe, powerful, and compliant with all warranty terms.",
    date: "October 02, 2023",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop"
  },
  '3': {
    id: '3',
    title: "When to Repair vs. When to Replace Your Equipment",
    excerpt: "Is your trusted jigsaw finally giving up? We break down the cost-benefit analysis of repairing an old tool versus buying a new one.",
    content: "Every tradesperson eventually faces the dilemma: should I repair my broken tool or just buy a new one? As a general rule of thumb, if the repair cost exceeds 50% of the replacement cost, you should strongly consider replacing it. However, high-end professional equipment often warrants repair. Issues like worn carbon brushes, a frayed power cord, or a faulty trigger switch are inexpensive to fix and can restore the tool to perfect working order. Before you throw away a reliable piece of equipment, bring it into our Dubai service center for a diagnostic inspection. Often, a simple, affordable replacement part is all that stands between a 'broken' tool and years of continued service.",
    date: "November 12, 2023",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2000&auto=format&fit=crop"
  }
};
