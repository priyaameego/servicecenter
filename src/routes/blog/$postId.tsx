import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react'
import { blogData } from '../../data/blogData'
import { SEO } from '../../components/SEO'
import { PageHero } from '../../components/PageHero'

export const Route = createFileRoute('/blog/$postId')({
  component: BlogPostPage,
  loader: ({ params }) => {
    const post = blogData[params.postId]
    if (!post) {
      throw notFound()
    }
    return { post }
  },
})

function BlogPostPage() {
  const { post } = Route.useLoaderData()
  const recentPosts = Object.values(blogData).filter(p => p.id !== post.id).slice(0, 3)

  return (
    <div className="bg-white">
      <SEO 
        title={post.title} 
        description={post.excerpt} 
        path={`/blog/${post.id}`} 
      />
      <PageHero
        title={post.title}
        image={post.image}
        height="lg"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Blog', to: '/blog' },
          { label: post.title.length > 30 ? post.title.slice(0, 30) + '…' : post.title },
        ]}
      />

      {/* Main Content Area */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Content (Blog Post) */}
            <div className="w-full lg:w-2/3 reveal">
              
              <div className="relative mb-10 border border-gray-100 shadow-[var(--shadow-premium)] bg-white p-2">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute top-6 left-6 bg-[var(--color-primary)] text-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-lg">
                  Latest News
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-[var(--color-primary)]" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2 text-[var(--color-primary)]" />
                  By {post.author}
                </div>
              </div>
              
              <h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-[#111111] leading-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {post.title}
              </h1>
              
              <div className="w-20 h-1 bg-[var(--color-primary)] mb-10"></div>
              
              <div className="prose prose-lg max-w-none text-[#555555] prose-p:leading-[1.85] prose-headings:font-bold prose-headings:text-[#111111]">
                <p className="text-lg md:text-xl font-medium text-[#111111] leading-relaxed border-l-4 border-[var(--color-primary)] pl-6 mb-10 italic">
                  {post.excerpt}
                </p>
                
                <p className="mb-8">
                  {post.content}
                </p>
              </div>

              {/* Navigation Footer */}
              <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
                <Link 
                  to="/blog" 
                  className="inline-flex items-center text-[#111111] font-bold text-xs uppercase tracking-widest hover:text-[var(--color-primary)] transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back To All Posts
                </Link>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-full lg:w-1/3 reveal" style={{ animationDelay: '100ms' }}>
              
              {/* Recent Posts Widget */}
              <div className="bg-white border border-gray-100 shadow-[var(--shadow-premium)] p-8 sticky top-24">
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-1 h-6 bg-[var(--color-primary)] flex-shrink-0" />
                  <h3 
                    className="text-xl font-bold text-[#111111] uppercase tracking-wide"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Recent Posts
                  </h3>
                </div>

                <div className="space-y-6">
                  {recentPosts.map(p => (
                    <div key={p.id} className="flex gap-4 group">
                      <div className="w-24 h-24 flex-shrink-0 overflow-hidden border border-gray-100 p-1 bg-white">
                        <img 
                          src={p.image} 
                          alt={p.title} 
                          className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110" 
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-[10px] text-[var(--color-primary)] font-bold uppercase tracking-widest mb-1">
                          {p.date}
                        </span>
                        <h4 
                          className="font-bold text-sm text-[#111111] group-hover:text-[var(--color-primary)] transition-colors line-clamp-2 leading-snug"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          <Link to={`/blog/${p.id}` as any}>{p.title}</Link>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Promo Widget */}
                <div className="mt-10 bg-[#111111] p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)] opacity-[0.1] blur-2xl rounded-full pointer-events-none" />
                  <h4 
                    className="text-white font-bold text-xl uppercase tracking-wide mb-4 relative z-10"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Need Machinery Repair?
                  </h4>
                  <p className="text-white/70 text-sm mb-6 leading-relaxed relative z-10">
                    Get your industrial equipment running at peak performance with our certified experts.
                  </p>
                  <Link 
                    to="/contact-us"
                    className="inline-flex items-center justify-center w-full bg-[var(--color-primary)] text-white px-6 py-3 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300 relative z-10"
                  >
                    Contact Us Now
                  </Link>
                </div>
              </div>

            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}
