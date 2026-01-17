'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Link from 'next/link';

export default function Hero() {
  const slides = [
    'https://pbs.twimg.com/media/GpiSnTEWUAA2AgI.jpg',
    'https://media.licdn.com/dms/image/v2/D4D22AQGgtmFKmn4YGA/feedshare-shrink_1280/B4DZbKvCT1GwAk-/0/1747158066562?e=1770249600&v=beta&t=G7AiZEbclSE7mjhtkkWLOhQd-hoRfv2ggaYg4bQZ3qw',
    'https://www.metanglobal.com.tr/images/madencilik-567924.jpg',
    'https://kozakmadencilik.com/wp-content/uploads/2023/02/slider3.jpg',
  ];



  return (
    <section className="relative overflow-x-clip py-20 md:py-32">
      <div className="container mx-auto mt-4 flex flex-col items-center justify-between gap-8 px-4 text-left sm:gap-10 md:px-6 lg:px-8 xl:mt-14 xl:flex-row xl:gap-12">
        <div className="w-full space-y-6 xl:w-1/2 xl:pr-8">
          <div className="w-fit flex items-center gap-3 rounded-full bg-muted/70 px-5 py-1 text-sm select-none font-medium text-secondary-foreground shadow-xs transition-all">
            <span className="size-2.5 rounded-full bg-primary" />
            Geleceği Birlikte Kazalım.
          </div>

          <h1 className="mt-6 text-5xl font-medium tracking-tight text-foreground md:text-7xl">
            Madenciliği Yeniden Tanımlıyoruz.
          </h1>

          <p className="mt-4 max-w-lg text-muted-foreground/80">
            İTÜ'nün madencilik alanında kurulan ilk proje takımında sen de yerini al. Madencilikte geleceği bizimle yakala!
          </p>

          <div className="flex gap-4 pt-6">
            <Link
              href="/projects"
              className="group gap-2 flex items-center rounded-full cursor-pointer bg-primary text-primary-foreground px-4 min-h-[36px]"
            >
              <span>Hemen Başla</span>
              <ArrowRight className="size-4 -rotate-45 transition-all group-hover:ml-1 group-hover:rotate-0" />
            </Link>
          </div>
        </div>

        <div className="relative mt-20 w-full md:mt-28 xl:mt-0 xl:w-1/2">
          <div className="absolute -top-20 left-0 right-0 h-10 overflow-hidden sm:-top-24 sm:h-12">
            <div className="relative h-full w-full">
              <div className="flex h-full animate-[scroll-x_40s_linear_infinite] gap-8 sm:gap-12">
                {Array(4)

                  .flat()
                  .map((logo, i) => (
                    <div
                      key={i}
                      className="flex h-full shrink-0 items-center justify-center opacity-30"
                    >
                      <Image
                        src={logo}
                        alt={`Logo ${i}`}
                        width={100}
                        height={30}
                        className="h-7 w-auto object-contain"
                      />
                    </div>
                  ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24 md:w-32" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24 md:w-32" />
          </div>

          <div className="relative w-full select-none z-10 mt-16 sm:mt-20 md:mt-24">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 250,
                modifier: 1,
                slideShadows: false,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiperHero231 mt-8 w-full"
            >
              {slides.map((src, i) => (
                <SwiperSlide
                  key={i}
                  className="mb-5 !h-[320px] !w-[220px] sm:!h-[360px] sm:!w-[260px] md:!h-[420px] md:!w-[300px]"
                >
                  <Image
                    src={src}
                    alt={`Slide ${i + 1}`}
                    width={300}
                    height={420}
                    className="h-full w-full rounded-3xl object-cover shadow-lg"
                    priority={i === 0}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
