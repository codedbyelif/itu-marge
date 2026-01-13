'use client';

import { Badge } from '@/components/ui/badge';

interface ProjectItem {
  id: number;
  href:string;
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
}

const projectsData: ProjectItem[] = [
  {
    id: 1,
    href:'/projects/boron-carbide',
    title: 'Bor Karbür Tabanlı Kesici ve Delici Uç Geliştirilmesi',
    description: 'Bor karbür (B₄C) bazlı, yüksek dayanımlı seramikler üreterek, mermercilik sektöründeki elmas telli ve zincir kollu taş kesme makineleri için daha dayanıklı ve ekonomik yerli kesici uçlar geliştirmeyi amaçlıyoruz.',
    category: 'Research',
    image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg',
    date: '04 Jan 2026'
  },
  {
    id: 2,
    title: 'Madencilikte Makine İzlemeve Optimizasyon',
    href:'/projects/mining-optimization',
    description: 'Geliştirdiğimiz ikinci proje,madencilik sektöründe gerçek zamanlı veri ve sensör teknolojileri kullanarak makine performansını, görev dağılımını ve üretim akışını optimize etmeyi hedeflemektedir. Bu sayede daha etkin planlama ve kaynak yönetimi ile dijital dönüşüme katkı sağlamaktayız.',
    category: 'Maden',
    image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg',
    date: '04 Jan 2026'
  },
  {
    id: 3,
    title: 'Nadir Toprak Elementleri Üzerine Araştırmalar',
    href:'/projects/rare-earth-elements',
    description: 'MAR-GE\'nin bir diğer projesi, elektronikten savunma sanayisine kadar kritik alanlarda kullanılan Nadir Toprak Elementleri (NTE) üzerine odaklanmaktadır. Proje; NTE\'lerin potansiyelini, çıkarma ve zenginleştirme tekniklerini inceleyerek, gelecekteki teknolojik ihtiyaçlara yönelik bilimsel altyapı oluşturmayı hedeflemektedir.',
    category: 'Malzeme',
    image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg',
    date: '04 Jan 2026'
  },
  {
    id: 4,
    title: 'Jeotermalde Rezervuar Yönetimi',
    href:'/projects/geothermal-reservoir',
    description: 'Jeotermalde rezervuar yönetimi alanına adım atarken, başlangıçta bu konuda çalışan uzmanlarla iletişime geçtik. Ardından,kapsamlı makale ve Türkiye\'deki jeotermal uygulamalarına yönelik araştırmalar yaparak konu hakkındaki bilgi birikimimizi vestratejik fikirlerimizi geliştirmeyi sürdürüyoruz.',
    category: 'Jeotermal',
    image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-4.svg',
    date: '04 Jan 2026'
  },
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
              href={project.href}
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
