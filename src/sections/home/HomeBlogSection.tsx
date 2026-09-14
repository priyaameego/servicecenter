import { Link } from '@tanstack/react-router';
import { ArrowRight, User } from 'lucide-react';
import { blogData } from '../../data/blogData';

export function HomeBlogSection() {
  // Get latest 3 posts
  const recentPosts = Object.values(blogData).slice(0, 3);

  return (
    <section className="section-padding bg-[var(--color-bg-light)]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
          <div className="text-left">
            <span className="section-eyebrow">Latest Updates</span>
            <h2 className="section-title">NEWS &amp; INSIGHTS</h2>
            <div className="section-divider-left mt-2" />
          </div>
          
          <Link 
            to="/blog" 
            className="hidden md:inline-flex items-center text-[#111111] font-bold text-xs uppercase tracking-widest hover:text-[var(--color-primary)] transition-all duration-300 group"
          >
            View All Posts
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-group">
          {recentPosts.map((post) => (
            <div key={post.id} className="group flex flex-col h-full bg-white border border-gray-100 shadow-[var(--shadow-premium)] hover:shadow-[var(--shadow-premium-hover)] transition-all duration-500 ease-out hover:-translate-y-2 relative overflow-hidden">
              <div className="overflow-hidden relative h-56 bg-[#111]">
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
                  className="text-xl font-bold mb-4 text-[#111111] group-hover:text-[var(--color-primary)] transition-colors duration-300 leading-tight line-clamp-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  <Link to={`/blog/${post.id}` as any}>{post.title}</Link>
                </h3>
                
                <p className="text-[#555555] mb-8 flex-grow line-clamp-2 text-sm leading-[1.85]">
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
        
        <div className="mt-10 text-center md:hidden reveal">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-[#111111] font-bold text-xs uppercase tracking-widest hover:text-[var(--color-primary)] transition-all duration-300 group"
          >
            View All Posts
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
