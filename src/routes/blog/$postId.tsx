import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { Calendar, User, ChevronLeft } from 'lucide-react'
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
          { label: post.title.length > 40 ? post.title.slice(0, 40) + '…' : post.title },
        ]}
      />

      {/* Main Content Area */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Content (Blog Post) */}
            <div className="w-full lg:w-2/3 animate-fade-in-up">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-[300px] md:h-[500px] object-cover mb-8 shadow-[var(--shadow-premium)] rounded-sm"
              />
              
              <div className="flex items-center text-sm font-bold text-gray-500 mb-6 space-x-6">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-[var(--color-primary)]" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2 text-[var(--color-primary)]" />
                  By {post.author}
                </div>
                <div className="bg-[var(--color-primary)] text-white px-3 py-1 text-xs uppercase hidden sm:block">
                  NEWS
                </div>
              </div>
              
              <h2 className="text-3xl font-extrabold mb-6 text-[#1A1A1A] leading-snug">{post.title}</h2>
              <div className="w-16 h-1 bg-[var(--color-primary)] mb-8"></div>
              
              <div className="prose prose-lg max-w-none text-[#555555]">
                <p className="leading-relaxed border-l-4 border-[var(--color-primary)] pl-6 text-lg font-medium text-[#1A1A1A] mb-8 bg-[var(--color-bg-light)] py-4">
                  {post.excerpt}
                </p>
                
                <p className="leading-relaxed mb-6">
                  {post.content}
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link to="/blog" className="inline-flex items-center font-bold text-[#1A1A1A] hover:text-[var(--color-primary)] transition-colors">
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  BACK TO ALL POSTS
                </Link>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-full lg:w-1/3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {/* Recent Posts Widget */}
              <div className="bg-[var(--color-bg-light)] p-8 mb-8 border-t-4 border-[#1A1A1A] shadow-sm rounded-sm">
                <h3 className="text-xl font-extrabold mb-6 uppercase">Recent Posts</h3>
                <div className="space-y-6">
                  {recentPosts.map(p => (
                    <div key={p.id} className="flex space-x-4 group">
                      <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
                        <img 
                          src={p.image} 
                          alt={p.title} 
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-[#1A1A1A] group-hover:text-[var(--color-primary)] transition-colors line-clamp-2 mb-2">
                          <Link to={`/blog/${p.id}` as any}>{p.title}</Link>
                        </h4>
                        <span className="text-xs text-gray-500 font-semibold uppercase">{p.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}
