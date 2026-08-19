# Ashur — Portfolio

This repository is a starter Next.js (App Router) portfolio with Tailwind CSS and Framer Motion. It includes a responsive gallery, lightbox, and simple page transitions. Deploy to Vercel for free and connect your custom domain.

## Quick start

1. Clone the repo
   ```bash
   git clone https://github.com/Ashur11/Ashur-port.git
   cd Ashur-port
   ```
2. Install
   ```bash
   npm install
   ```
3. Run dev
   ```bash
   npm run dev
   ```

## Vercel deployment

1. Go to https://vercel.com/new and import this GitHub repository.
2. Vercel will detect Next.js. Build command: `npm run build`, Output directory: (leave empty).
3. After deploy, add your custom domain in Vercel dashboard -> Domains.
   - If your domain is example.com, Vercel will tell you which DNS records to add. Typically:
     - For root/apex: an A/ALIAS record pointing to Vercel's IPs or use the provided ALIAS.
     - For `www`: a CNAME to cname.vercel-dns.com
4. Wait for DNS to propagate and Vercel will provision HTTPS automatically.

## Notes
- Replace placeholder images in `components/Gallery.tsx` with your own hosted images or use Next's Image Optimization.
- To edit projects or photos, modify components or replace with a CMS later (Sanity/Contentful) or MDX.

