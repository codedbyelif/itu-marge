# İTÜ MARGE – Mining Innovation Platform

A modern and responsive web platform created for İTÜ MARGE (Istanbul Technical University Mining Research Group Club).
This website is designed to represent the club, share its activities, projects, and initiatives, and provide an online presence for members and visitors.

The platform is built using Next.js 15, TypeScript, and Tailwind CSS, focusing on clean design, performance, and accessibility.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Modern UI/UX**: Clean, professional design using shadcn/ui components
- **Interactive Hero Section**: Dynamic image carousel with mining industry visuals and typewriter text effect
- **Project Showcase**: Dedicated pages for various mining projects including geothermal reservoir analysis, boron carbide research, and rare earth elements optimization
- **Contact Integration**: Professional contact page for inquiries and collaborations
- **Social Media Integration**: Direct links to official social media accounts
- **SEO Optimized**: Built with Next.js for optimal search engine performance

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React, React Icons
- **Image Handling**: Next.js Image component with external domain support
- **Animations**: Swiper.js for image carousels, custom CSS animations

## Project Structure

```
itu-marge/
├── app/
│   ├── components/
│   │   └── typewriter.tsx        # Typewriter effect component
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   ├── projects/
│   │   ├── boron-carbide/
│   │   │   └── page.tsx          # Boron carbide project page
│   │   ├── geothermal-reservoir/
│   │   │   └── page.tsx          # Geothermal reservoir project page
│   │   ├── mining-optimization/
│   │   │   └── page.tsx          # Mining optimization project page
│   │   ├── rare-earth-elements/
│   │   │   └── page.tsx          # Rare earth elements project page
│   │   └── page.tsx              # Projects overview
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── BlurText.tsx              # Text animation component
│   ├── Contact.tsx               # Contact section component
│   ├── FAQ.tsx                   # FAQ component
│   ├── Features.tsx              # Features section
│   ├── HeroSection.tsx           # Hero section component
│   ├── ProjectHero.tsx           # Hero component for project pages
│   ├── Projects.tsx              # Projects showcase component
│   ├── Stats.tsx                 # Statistics component
│   ├── content1.tsx              # Content section
│   ├── footer7.tsx               # Footer component with social links
│   └── navbar1.tsx               # Navigation bar
├── lib/
│   └── utils.ts                  # Utility functions
├── public/                       # Static assets
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies and scripts
└── tailwind.config.ts            # Tailwind CSS configuration
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/codedbyelif/itu-marge.git
   cd itu-marge
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

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## Customization

### Adding New Projects

1. Create a new folder in `app/projects/`
2. Add a `page.tsx` file with your project content
3. Update the navigation if needed

### Modifying Hero Images

1. Update the `slides` array in `app/components/Hero.tsx` or `components/HeroSection.tsx`.
2. Ensure external domains are added to `next.config.ts`.

### Social Media Links

Update the `defaultSocialLinks` array in `components/footer7.tsx` to modify social media links.

## Deployment

This project is optimized for deployment on Vercel, Netlify, or specific server environments.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Author

**Coded by Elif**  
- GitHub: [@codedbyelif](https://github.com/codedbyelif)
- LinkedIn: [Elif Kaynar](https://www.linkedin.com/in/elif-kaynar/)
- Website: [EL'S](https://els.network)

## License

This project is proprietary and developed for İTÜ MARGE. All rights reserved.
Belongs to **codedbyelif**.