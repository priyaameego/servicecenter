import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path: string;
}

const SITE_URL = 'https://servicecenter.ae';

export function SEO({ title, description, path }: SEOProps) {
  // Ensure title suffix is consistent
  const fullTitle = `${title} | Light House Electrical Co. (ServiceCenter.ae)`;
  
  // Format the canonical URL properly
  const canonicalUrl = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* OpenGraph Tags for Social Sharing */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
