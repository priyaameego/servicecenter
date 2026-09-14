import { createRootRoute, Link } from '@tanstack/react-router'
import { MainLayout } from '../layouts/MainLayout'

export const Route = createRootRoute({
  component: () => (
    <>
      <MainLayout />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
  notFoundComponent: () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="text-6xl font-heading font-extrabold text-[var(--color-primary)] mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">PAGE NOT FOUND</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="bg-[var(--color-primary)] text-white px-8 py-3 font-bold uppercase hover:bg-[var(--color-secondary)] transition-colors"
        >
          Return to Home
        </Link>
      </div>
    )
  },
})
