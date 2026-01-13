'use client';

import { Badge } from '@/components/ui/badge';

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  author: string;
  avatar: string;
  date: string;
}

const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: 'The Future of Web Development: What\'s Next in 2024',
    description: 'Explore the latest trends in web development, from AI-powered tools to new frameworks that are reshaping how we build the web. Discover what developers need to know to stay ahead.',
    category: 'Web Development',
    image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg',
    author: 'Sarah Chen',
    avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
    date: '15 Jan 2024'
  },
  {
    id: 2,
    title: 'Building Scalable APIs with Modern Architecture Patterns',
    description: 'Learn about microservices, GraphQL, and event-driven architectures that are powering today\'s most successful applications. Practical insights for building robust APIs.',
    category: 'Backend',
    image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg',
    author: 'Marcus Rodriguez',
    avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
    date: '12 Jan 2024'
  },
  {
    id: 3,
    title: 'Design Systems: Creating Consistency at Scale',
    description: 'How leading companies are implementing design systems to maintain visual consistency across products while enabling rapid development and innovation.',
    category: 'Design',
    image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg',
    author: 'Emma Thompson',
    avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
    date: '10 Jan 2024'
  },
  {
    id: 4,
    title: 'Machine Learning in Production: Best Practices for Deployment',
    description: 'From model versioning to monitoring and scaling, learn the essential practices for deploying machine learning models in production environments.',
    category: 'Machine Learning',
    image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-4.svg',
    author: 'Alex Kim',
    avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
    date: '8 Jan 2024'
  },
  {
    id: 5,
    title: 'The Rise of Edge Computing: Transforming Application Architecture',
    description: 'Discover how edge computing is revolutionizing application performance and user experience, and learn strategies for implementing edge-first architectures.',
    category: 'Cloud Computing',
    image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-5.svg',
    author: 'David Park',
    avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
    date: '5 Jan 2024'
  },
  {
    id: 6,
    title: 'Cybersecurity Essentials for Modern Applications',
    description: 'Essential security practices every developer should implement, from authentication and authorization to data encryption and secure coding practices.',
    category: 'Security',
    image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-6.svg',
    author: 'Lisa Wang',
    avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
    date: '3 Jan 2024'
  },
  {
    id: 7,
    title: 'Performance Optimization: Techniques for Faster Web Applications',
    description: 'Advanced techniques for optimizing web application performance, including code splitting, lazy loading, and modern caching strategies.',
    category: 'Performance',
    image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg',
    author: 'James Wilson',
    avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
    date: '1 Jan 2024'
  },
  {
    id: 8,
    title: 'DevOps Culture: Building Better Software Delivery Pipelines',
    description: 'How to foster a DevOps culture in your organization and implement CI/CD pipelines that accelerate development while maintaining quality.',
    category: 'DevOps',
    image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg',
    author: 'Maria Garcia',
    avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
    date: '29 Dec 2023'
  },
  {
    id: 9,
    title: 'Mobile App Development: Native vs Cross-Platform Solutions',
    description: 'Compare native and cross-platform development approaches, exploring the trade-offs between performance, development speed, and user experience.',
    category: 'Mobile Development',
    image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg',
    author: 'Ryan Johnson',
    avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
    date: '27 Dec 2023'
  }
];

export default function Projects() {
  return (
    <section className="py-32 w-full">
      <div className="container mx-auto px-4">
        <div className="mb-8 md:mb-14 lg:mb-16">
          <div className="flex items-start justify-between gap-8">
            <div>
              <h2 className="mb-4 w-full text-4xl font-medium md:mb-5 md:text-5xl lg:mb-6 lg:text-6xl">
                Projects
              </h2>
            </div>
          </div>
          <p>Insights, tutorials, and thoughts on modern software development</p>
        </div>

        <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-12 2xl:grid-cols-3">
          {projectsData.map((project) => (
            <a
              key={project.id}
              href="#"
              className="group flex flex-col"
            >
              <div className="mb-4 flex overflow-clip rounded-xl md:mb-5">
                <div className="transition-opacity duration-300 group-hover:opacity-80">
                  <img
                    alt={project.title}
                    className="aspect-3/2 h-full w-full object-cover object-center"
                    src={project.image}
                  />
                </div>
              </div>
              <div>
                <Badge className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  {project.category}
                </Badge>
              </div>
              <div className="mb-2 line-clamp-3 pt-4 text-lg font-medium break-words md:mb-3 md:pt-4 md:text-2xl lg:pt-4 lg:text-3xl">
                {project.title}
              </div>
              <div className="mb-4 line-clamp-2 text-sm text-muted-foreground md:mb-5 md:text-base">
                {project.description}
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex shrink-0 overflow-hidden rounded-full size-12">
                  <img
                    className="aspect-square size-full"
                    src={project.avatar}
                    alt={project.author}
                  />
                </span>
                <div className="flex flex-col gap-px">
                  <span className="text-xs font-medium">{project.author}</span>
                  <span className="text-xs text-muted-foreground">{project.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center py-2 md:hidden">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 w-full sm:w-fit">
            View all posts
          </button>
        </div>
      </div>
    </section>
  );
}
