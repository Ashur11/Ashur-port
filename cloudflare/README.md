Cloudflare Pages — Next.js (full runtime) setup

This repository is prepared to deploy a full Next.js App Router application to Cloudflare Pages using the official adapter @cloudflare/next-on-pages.

What I added
- @cloudflare/next-on-pages as a devDependency
- package.json build script updated to: "next build && @cloudflare/next-on-pages build"

How to connect & deploy on Cloudflare Pages
1) Create / sign in to your Cloudflare account and go to Pages -> Create a project.
2) Connect your GitHub account and select this repository (Ashur11/Ashur-port).
3) In the build settings:
   - Framework preset: None (or Next.js, but we will use the adapter)
   - Build command: npm run build
   - Production branch: main
   - (Do NOT set an output directory) — leave it blank. The adapter generates the Pages-compatible build artifacts.
4) Environment / Node version:
   - Cloudflare uses the Node version specified in your repository. We've pinned Node to 24 via .nvmrc and package.json engines. If Pages asks, pick Node 24.
5) Deploy. The adapter will produce the correct output for Pages and Cloudflare will run it on Workers.

Notes & optional settings
- If you run into peer dependency resolution errors during build, set the Install Command to:
    npm install --legacy-peer-deps
  in the Pages build settings.
- You can preview local Pages builds using the adapter with the command:
    npx @cloudflare/next-on-pages@latest dev
  (runs a local Pages-like server for testing)
- For advanced Cloudflare worker settings (custom routes, account_id) see Cloudflare docs — Pages handles most of the deployment flow without a wrangler.toml.

After you connect the repo and trigger the first deploy, paste the first failing build log here if anything goes wrong and I’ll fix it.
