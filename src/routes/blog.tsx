import { createFileRoute, Link } from '@tanstack/react-router'
import { SEO } from '../components/SEO'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { blogData } from '../data/blogData'

export const Route = createFileRoute('/blog')({
  component: Blog,
})

const blogPosts = Object.values(blogData);

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
          
          <div className="text-center mb-14">
            <span className="section-eyebrow">Latest Updates</span>
            <h2 className="section-title">OUR BLOG</h2>
            <div className="section-divider-center" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 reveal-group">
            {blogPosts.map((post) => (
              <div key={post.id} className="group flex flex-col h-full bg-white border border-gray-100 shadow-[var(--shadow-premium)] hover:shadow-[var(--shadow-premium-hover)] transition-all duration-500 ease-out hover:-translate-y-2">
                <div className="overflow-hidden relative h-64 bg-[#111]">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                  />
                  <div className="absolute top-0 left-0 bg-[var(--color-primary)] text-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-lg">
                    Latest News
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow relative">
                  {/* Floating Date Badge */}
                  <div className="absolute -top-6 right-8 bg-white border border-gray-100 shadow-md flex flex-col items-center justify-center p-2 min-w-[3.5rem] z-10">
                    <span className="text-[var(--color-primary)] font-bold text-xl leading-none">
                      {post.date.split(' ')[1].replace(',', '')}
                    </span>
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">
                      {post.date.split(' ')[0].substring(0, 3)}
                    </span>
                  </div>

                  <div className="flex items-center text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wider">
                    <div className="flex items-center">
                      <User className="w-3.5 h-3.5 mr-1.5 text-[var(--color-primary)]" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h3 
                    className="text-xl md:text-2xl font-bold mb-4 text-[#111111] group-hover:text-[var(--color-primary)] transition-colors duration-300 leading-tight"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    <Link to={`/blog/${post.id}` as any}>{post.title}</Link>
                  </h3>
                  
                  <p className="text-[#555555] mb-8 flex-grow line-clamp-3 text-sm leading-[1.85]">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-5 border-t border-gray-100">
                    <Link 
                      to={`/blog/${post.id}` as any} 
                      className="inline-flex items-center text-[#111111] font-bold text-xs uppercase tracking-widest group-hover:text-[var(--color-primary)] transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}
