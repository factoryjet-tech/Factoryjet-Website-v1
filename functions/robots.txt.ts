// Cloudflare Pages Function to serve robots.txt
export const onRequest = async () => {
  const robotsTxt = `User-agent: *
Allow: /

# Sensitive / duplicate content paths
Disallow: /shopdetail/
Disallow: /shop/
Disallow: /store/
Disallow: /product/
Disallow: /pcmypage
Disallow: /safe_search/
Disallow: /demo/
Disallow: /old/
Disallow: /backup/
Disallow: /index.php
Disallow: /zhHant/
Disallow: /zhHans/
Disallow: /surugaya/

# Query parameters
Disallow: /*?shopdetail
Disallow: /*?product_id=
Disallow: /*?callback=product

# WordPress system paths
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /wp-content/plugins/

# E-commerce private pages
Disallow: /cart/
Disallow: /checkout/
Disallow: /my-account/
Disallow: /wishlist/
Disallow: /compare/


# Allow AI retrieval bots (for AI search visibility)
User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: meta-externalagent
Allow: /


# Block AI training & scraping bots
User-agent: CCBot
Disallow: /

User-agent: Cohere-ai
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: Amazonbot
Disallow: /

User-agent: Diffbot
Disallow: /

User-agent: Omgilibot
Disallow: /

User-agent: Timpibot
Disallow: /

User-agent: ImagesiftBot
Disallow: /

User-agent: img2dataset
Disallow: /


Sitemap: https://factoryjet.com/sitemap.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};