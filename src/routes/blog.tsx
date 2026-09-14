import { createFileRoute, Link } from '@tanstack/react-router'
import { SEO } from '../components/SEO'
import { Calendar, User, ChevronRight } from 'lucide-react'
import { PageHero } from '../components/PageHero'

export const Route = createFileRoute('/blog')({
  component: Blog,
})

const blogPosts = [
  {
    id: 1,
    title: "The Importance of Dynamic Balancing in Industrial Rotors",
    excerpt: "Discover why dynamic balancing is critical for the longevity and efficiency of industrial rotating equipment...",
    date: "August 15, 2023",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Signs Your AC Motor Needs Immediate Maintenance",
    excerpt: "Learn to identify the early warning signs of motor failure before it leads to costly downtime and repairs...",
    date: "September 02, 2023",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Generator Servicing: A Comprehensive Guide",
    excerpt: "A step-by-step guide to maintaining your industrial generators to ensure they are ready when you need them most...",
    date: "October 12, 2023",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=600&auto=format&fit=crop"
  }
];

function Blog() {
  return (
    <div>
      <SEO 
        title="Blog" 
        description="Read the latest news, insights, and expert tips on electrical machinery, motor repair, and industrial maintenance." 
        path="/blog" 
      />
      <PageHero
        title="Blog"
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Blog' },
        ]}
      />

      {/* Blog Grid */}
      <section className="section-padding bg-[var(--color-bg-light)]">
        <div className="container-custom">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-[var(--shadow-premium-hover)] hover:-translate-y-1.5 transition-all duration-500 ease-out group flex flex-col h-full">
                <div className="overflow-hidden relative h-56">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute top-4 left-4 bg-[var(--color-primary)] text-white px-3 py-1 text-xs font-bold uppercase">
                    NEWS
                  </div>
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1.5 text-[var(--color-primary)]" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1.5 text-[var(--color-primary)]" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-[#1A1A1A] group-hover:text-[var(--color-primary)] transition-colors duration-300 leading-snug">
                    <Link to={`/blog/${post.id}` as any}>{post.title}</Link>
                  </h3>
                  
                  <p className="text-[#555555] mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link to={`/blog/${post.id}` as any} className="inline-flex items-center text-[#1A1A1A] font-bold text-sm group-hover:text-[var(--color-primary)] transition-colors duration-300 mt-auto">
                    READ MORE
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}
