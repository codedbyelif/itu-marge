# İTÜ MARGE - Mining Innovation Platform

A modern, responsive web platform developed for İTÜ MARGE (İstanbul Technical University Mining Research Group), showcasing innovative mining projects and technologies. Built with Next.js 15, TypeScript, and Tailwind CSS 

##  Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Modern UI/UX**: Clean, professional design using shadcn/ui components
- **Interactive Hero Section**: Dynamic image carousel with mining industry visuals
- **Project Showcase**: Dedicated pages for various mining projects including geothermal reservoir analysis, boron carbide research, and rare earth elements optimization
- **Contact Integration**: Professional contact page for inquiries and collaborations
- **Social Media Integration**: Direct links to official social media accounts
- **SEO Optimized**: Built with Next.js for optimal search engine performance

##  Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React, React Icons
- **Image Handling**: Next.js Image component with external domain support
- **Animations**: Swiper.js for image carousels

##  Project Structure

```
itu-mergee/
├── app/
│   ├── components/
│   │   ├── Hero.tsx              # Main hero section with image carousel
│   │   └── herosection.tsx       # Alternative hero component
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   └── projects/
│       ├── page.tsx              # Projects overview
│       ├── boron-carbide/
│       │   └── page.tsx          # Boron carbide project page
│       ├── geothermal-reservoir/
│       │   └── page.tsx          # Geothermal reservoir project page
│       ├── mining-optimization/
│       │   └── page.tsx          # Mining optimization project page
│       └── rare-earth-elements/
│           └── page.tsx          # Rare earth elements project page
├── components/
│   ├── FAQ.tsx                   # FAQ component
│   ├── footer7.tsx               # Footer component with social links
│   ├── HeroSection.tsx           # Hero section component
│   ├── navbar1.tsx               # Navigation bar
│   └── Projects.tsx              # Projects showcase component
├── components/ui/                # shadcn/ui components
│   ├── accordion.tsx
│   ├── badge.tsx
│   ├── button.tsx
│   ├── navigation-menu.tsx
│   ├── sheet.tsx
│   └── ...
├── lib/
│   └── utils.ts                  # Utility functions
├── public/                       # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── next.config.ts                # Next.js configuration
├── next-env.d.ts                 # Next.js type definitions
├── package.json                  # Dependencies and scripts
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── eslint.config.mjs             # ESLint configuration
├── postcss.config.mjs            # PostCSS configuration
└── components.json               # shadcn/ui configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/codedbyelif/itu-mergee.git
   cd itu-mergee
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

##  Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Customization

### Adding New Projects

1. Create a new folder in `app/projects/`
2. Add a `page.tsx` file with your project content
3. Update the navigation if needed

### Modifying Hero Images

Update the `slides` array in `app/components/Hero.tsx` with new image URLs. Make sure to add the domains to `next.config.ts` if using external images.

### Social Media Links

Update the `defaultSocialLinks` array in `components/footer7.tsx` to modify social media links.

## 🌐 Deployment

This project is optimized for deployment on Vercel, Netlify, or any other platform supporting Next.js.

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Your site will be live at `your-project.vercel.app`

##  Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary and developed for İTÜ MARGE. All rights reserved.

##  Author

**Coded by Elif**  
- GitHub: [@codedbyelif](https://github.com/codedbyelif)
- LinkedIn: [Elif Kaynar](https://www.linkedin.com/in/elif-kaynar/)

##  Acknowledgments

- İTÜ MARGE for the opportunity to develop this platform
- Next.js team for the amazing framework
- shadcn/ui for the beautiful components
- All contributors and supporters