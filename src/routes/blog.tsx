import { createFileRoute, Link, Outlet, useChildMatches } from '@tanstack/react-router'
import { Home, ChevronRight } from 'lucide-react'
import { SEO } from '../components/SEO'
import { blogData } from '../data/blogData'

export const Route = createFileRoute('/blog')({
  component: Blog,
})

const blogPosts = Object.values(blogData);

function Blog() {
  const childMatches = useChildMatches()
  if (childMatches && childMatches.length > 0) {
    return <Outlet />
  }

  return (
    <div className="flex flex-col w-full bg-white">
      <SEO 
        title="Blog" 
        description="Latest insights, updates, and maintenance guides from Black+Decker Service Center Dubai." 
        path="/blog" 
      />

      {/* 1. LHE Style Hero Banner with Top Red Slanted Accent */}
      <section className="relative h-[280px] md:h-[350px] flex flex-col items-center justify-center text-center overflow-hidden bg-[#111]">
        {/* Top Slanted Red Accent */}
        <div 
          className="absolute top-0 left-0 w-48 sm:w-64 md:w-80 h-9 md:h-11 bg-[var(--color-primary)] z-20 pointer-events-none"
          style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 30px) 100%, 0 100%)' }}
        />

        {/* Background Image with Grayscale & Dark Mask */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2000&auto=format&fit=crop" 
            alt="Blog Banner" 
            className="w-full h-full object-cover grayscale brightness-40 contrast-125"
          />
          <div className="absolute inset-0 bg-[#0c121e]/60" />
        </div>
        
        {/* Title & Breadcrumbs */}
        <div className="relative z-10 container-custom">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 uppercase tracking-wider drop-shadow-md font-sans">
            BLOG
          </h1>
          <div className="flex items-center justify-center text-white/90 text-sm md:text-base font-semibold uppercase tracking-wider space-x-2">
            <Home className="w-4 h-4 text-white" />
            <span>&rarr;</span>
            <span>BLOG</span>
          </div>
        </div>
      </section>

      {/* 2. Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {blogPosts.map((post) => (
              <article key={post.id} className="flex flex-col justify-between group">
                <div>
                  {/* Featured Image with bottom red bar (if post has image) */}
                  {post.image ? (
                    <div className="mb-5">
                      <Link 
                        to={`/blog/${post.id}` as any}
                        className="block aspect-[16/10] overflow-hidden bg-gray-100"
                      >
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                          loading="lazy"
                        />
                      </Link>
                      {/* Signature Red Underline Bar */}
                      <div className="w-full h-2 bg-[var(--color-primary)]" />
                    </div>
                  ) : null}

                  {/* Title (Clickable) */}
                  <h2 
                    className="text-2xl md:text-[26px] font-bold text-[#111111] leading-snug tracking-tight mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    <Link 
                      to={`/blog/${post.id}` as any}
                      className="hover:text-[var(--color-primary)] transition-colors duration-200"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {/* Red Date Tag */}
                  <div>
                    <span className="inline-block bg-[var(--color-primary)] text-white text-xs font-semibold px-2.5 py-1 mb-4 select-none">
                      {post.date}
                    </span>
                  </div>

                  {/* Excerpt / Body Text (Clickable as requested) */}
                  <Link 
                    to={`/blog/${post.id}` as any}
                    className="block text-[#666666] text-sm md:text-[15px] leading-relaxed mb-6 hover:text-[#111111] transition-colors"
                  >
                    {post.excerpt}
                  </Link>
                </div>

                {/* Read More Button with Red Chevron */}
                <div>
                  <Link 
                    to={`/blog/${post.id}` as any}
                    className="inline-flex items-center gap-2 bg-[#1a1a1a] hover:bg-[var(--color-primary)] text-white text-xs md:text-sm font-semibold px-5 py-2.5 transition-colors duration-300 group/btn"
                  >
                    <span>Read More</span>
                    <ChevronRight className="w-4 h-4 text-[var(--color-primary)] group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all duration-300" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* 3. LHE Style Pagination */}
          <div className="mt-16 pt-10 border-t border-gray-100 flex items-center justify-center gap-2">
            <span className="w-9 h-9 flex items-center justify-center text-xs font-bold text-white bg-[var(--color-primary)] select-none">
              1
            </span>
            <button 
              type="button" 
              className="w-9 h-9 flex items-center justify-center text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              2
            </button>
            <button 
              type="button" 
              aria-label="Next Page" 
              className="w-9 h-9 flex items-center justify-center text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>
    </div>
  )
}
