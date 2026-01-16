'use client';

import { Globe, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="flex min-h-svh w-full justify-center bg-background text-foreground items-start">
      <section className="py-32 w-full">
        <div className="container mx-auto">
          <div className="flex flex-col items-start pb-10 md:items-center md:pb-14 xl:pb-[60px]">
            <span
              data-slot="badge"
              className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                <path d="M17 20h4v-2a4 4 0 00-4-4h-1" />
                <path d="M7 20H3v-2a4 4 0 014-4h1" />
                <circle cx="12" cy="8" r="3" />
              </svg>
              İTÜ Marge
            </span>

            <h4 className="mt-4 text-[28px] leading-[36px] font-semibold tracking-tight text-foreground md:text-center md:text-3xl xl:text-[48px] xl:leading-[56px]">Bizimle İletişime Geçin</h4>
            <p className="mt-2 text-lg text-muted-foreground md:text-center xl:mt-3 xl:text-xl"> <span className="font-medium text-foreground">İtu Marge</span>, ile <span className="font-medium text-foreground">aşağıdaki</span> olan bağlantılarla görüşebilirsiniz.</p>

            <div className="mt-6 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:mt-12 xl:gap-6">
              <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 border py-6 shadow-sm rounded-2xl transition-all hover:shadow-md">
                <a href="https://instagram.com/itumarge" target="_blank" rel="noopener noreferrer" className="flex h-full flex-col items-center p-6 md:p-8 xl:p-10">
                  <Instagram className="mb-4 h-8 w-8 md:h-12 md:w-12 xl:h-16 xl:w-16" />
                  <div className="space-y-2 text-center">
                    <h5 className="text-sm font-medium md:text-lg">Instagram</h5>
                    <p className="text-sm text-balance text-muted-foreground">İnstagram hesabımızı takip edin</p>
                  </div>
                </a>
              </div>

              <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 border py-6 shadow-sm rounded-2xl transition-all hover:shadow-md">
                <a href="https://www.itumarge.com" target="_blank" rel="noopener noreferrer" className="flex h-full flex-col items-center p-6 md:p-8 xl:p-10">
                  <Globe className="mb-4 h-8 w-8 md:h-12 md:w-12 xl:h-16 xl:w-16" />
                  <div className="space-y-2 text-center">
                    <h5 className="text-sm font-medium md:text-lg">Website</h5>
                    <p className="text-sm text-balance text-muted-foreground">Web sitemizi ziyaret edin</p>
                  </div>
                </a>
              </div>

              <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 border py-6 shadow-sm rounded-2xl transition-all hover:shadow-md">
                <a href="mailto:info@itumarge.com" className="flex h-full flex-col items-center p-6 md:p-8 xl:p-10">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="mb-4 h-8 w-8 md:h-12 md:w-12 xl:h-16 xl:w-16">
                    <path d="M3 8.5l9 6 9-6" />
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                  </svg>
                  <div className="space-y-2 text-center">
                    <h5 className="text-sm font-medium md:text-lg">E-posta</h5>
                    <p className="text-sm text-balance text-muted-foreground"> Mailimizden iletişime geçin email: info@itumarge.com</p>
                  </div>
                </a>
              </div>
            </div>

           
          </div>
        </div>
      </section>
    </div>
  );
}
