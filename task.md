Correct Breadcrumb Schema for Your Blog
For this URL:
https://factoryjet.com/blog/hidden-cost-cheap-websites-india
Your breadcrumb path is:
Home → Blog → Hidden Cost of Cheap Websites
Add this:
{
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement": [
   {
     "@type": "ListItem",
     "position": 1,
     "name": "Home",
     "item": "https://factoryjet.com/"
   },
   {
     "@type": "ListItem",
     "position": 2,
     "name": "Blog",
     "item": "https://factoryjet.com/blog"
   },
   {
     "@type": "ListItem",
     "position": 3,
     "name": "The Hidden Cost of 'Cheap' Websites: Why ₹10k Sites Fail",
     "item": "https://factoryjet.com/blog/hidden-cost-cheap-websites-india"
   }
 ]
}

✅ How To Add It In Next.js
Inside your blog page component:
import Head from 'next/head'

<Head>
 <script
   type="application/ld+json"
   dangerouslySetInnerHTML={{
     __html: JSON.stringify(breadcrumbSchema)
   }}
 />
</Head>
Where:
const breadcrumbSchema = { ...above JSON... }
If using App Router (Next 13+):
Use:
<script
 type="application/ld+json"
 dangerouslySetInnerHTML={{
   __html: JSON.stringify(breadcrumbSchema)
 }}
/>
inside your layout or page file.

Note: Add Breadcrumb schema on ALL hierarchical pages, not just one blog.
But do it dynamically site-wide, not manually page by page.
Where Should You Add Breadcrumb Schema?
1️⃣ Blog Articles → YES (Mandatory)
Example:
Home → Blog → Article
Every blog post should have Breadcrumb schema.
2️⃣ Service Pages → YES (Recommended)
Example:
Home → Services → Web Design
If your structure is hierarchical, add it.
3️⃣ Location Pages → YES
Example:
Home → Locations → Mumbai
4️⃣ Homepage → ❌ No
Homepage does NOT need breadcrumb schema.
Implement dynamic BreadcrumbList schema across all hierarchical pages (blogs, services, locations) based on page structure
Correct Logic Structure
For example:
Blog Article:
Home → Blog → {Article Title}
Service Page:
Home → Services → {Service Name}
Category Page:
Home → Blog → {Category}
Use route path to generate breadcrumb positions dynamically.

4️⃣ Keywords Meta Tag (Unnecessary)
You are using:
<meta name="keywords">

This is ignored by Google.
Not harmful, but unnecessary.
Recommendation: Remove Deprecated Meta Keywords Tag
“Remove the <meta name="keywords"> tag from all pages globally. It’s deprecated and not used by modern search engines.”
