'use client';

import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge";

interface ProjectItem {
  id: number;
  href: string;
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
}

const projectsData: ProjectItem[] = [
  {
    id: 1,
    href: '/projects/boron-carbide',
    title: 'Bor Karbür Tabanlı Kesici ve Delici Uç Geliştirilmesi',
    description: 'Bor karbür (B₄C) bazlı, yüksek dayanımlı seramikler üreterek, mermercilik sektöründeki elmas telli ve zincir kollu taş kesme makineleri için daha dayanıklı ve ekonomik yerli kesici uçlar geliştirmeyi amaçlıyoruz.',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop', // Construction/Mining vibe
    date: '04 Jan 2026'
  },
  {
    id: 2,
    title: 'Madencilikte Makine İzleme ve Optimizasyon',
    href: '/projects/mining-optimization',
    description: 'Geliştirdiğimiz ikinci proje, madencilik sektöründe gerçek zamanlı veri ve sensör teknolojileri kullanarak makine performansını, görev dağılımını ve üretim akışını optimize etmeyi hedeflemektedir.',
    category: 'Maden',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2544&auto=format&fit=crop', // Tech/Industry
    date: '04 Jan 2026'
  },
  {
    id: 3,
    title: 'Nadir Toprak Elementleri Üzerine Araştırmalar',
    href: '/projects/rare-earth-elements',
    description: 'MAR-GE\'nin bir diğer projesi, elektronikten savunma sanayisine kadar kritik alanlarda kullanılan Nadir Toprak Elementleri (NTE) üzerine odaklanmaktadır.',
    category: 'Malzeme',
    image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=2535&auto=format&fit=crop', // Abstract materials/Minerals
    date: '04 Jan 2026'
  },
  {
    id: 4,
    title: 'Jeotermalde Rezervuar Yönetimi',
    href: '/projects/geothermal-reservoir',
    description: 'Jeotermalde rezervuar yönetimi alanına adım atarken, başlangıçta bu konuda çalışan uzmanlarla iletişime geçtik. Stratejik fikirlerimizi geliştirmeyi sürdürüyoruz.',
    category: 'Jeotermal',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop', // Mountains/Steam/Nature
    date: '04 Jan 2026'
  },
];

export default function Projects() {
  return (
    <section className="py-32 w-full">
      <div className="container mx-auto px-4 xl:px-20">
        <div>
          <p className="mb-1 text-muted-foreground uppercase md:text-lg">FİKİRLERİNİZİ GERÇEĞE DÖNÜŞTÜRÜN</p>
          <h1 className="text-3xl font-bold uppercase md:text-7xl">PROJELERİMİZ</h1>
          <p className="mt-7 max-w-2xl text-muted-foreground">
            Yaratıcılığın, mühendisliğin ve vizyonun birleşerek geleceğin teknolojilerini şekillendirdiği yer. Her biri sektörü dönüştürmek ve katma değer yaratmak için özenle tasarlanmış kapsamlı proje portföyümüzü keşfedin.
          </p>
          <Link href="/projects">
            <button
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[>svg]:px-4 mt-7"
            >
              Tüm Projeleri Gör
              <ArrowDownRight className="lucide lucide-arrow-down-right size-4" />
            </button>
          </Link>
        </div>

        <div className="mt-24 flex flex-col gap-5 md:mt-36">
          {projectsData.map((project, index) => (
            <Link
              key={project.id}
              href={project.href}
              className="group relative isolate min-h-72 bg-cover bg-center px-5 py-14 lg:px-12 lg:py-24 rounded-2xl overflow-hidden"
              style={{ backgroundImage: `url("${project.image}")` }}
            >
              <div className="relative z-10 flex flex-col gap-7 text-white/90 transition-colors duration-300 ease-out group-hover:text-white lg:flex-row">
                <div className="flex gap-1 text-2xl font-bold">
                  <span>/</span>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="flex flex-1 flex-col gap-2.5">
                  <h3 className="text-2xl font-bold lg:text-4xl">{project.title}</h3>
                  <p className="text-sm font-medium uppercase tracking-wider">{project.category}</p>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col">
                    <p className="line-clamp-3 text-white/80">{project.description}</p>
                    <div className="mt-2.5 h-0 overflow-hidden transition-all duration-300 ease-out group-hover:h-10">
                      <div>
                        <button
                          data-slot="button"
                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[>svg]:px-4 dark w-fit opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                        >
                          Projeyi İncele
                          <ArrowUpRight className="lucide lucide-arrow-up-right size-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 z-0 bg-black/60 backdrop-blur-[1px] transition-all duration-500 ease-out group-hover:bg-black/40 group-hover:backdrop-blur-none"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
