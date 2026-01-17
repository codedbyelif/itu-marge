"use client";

import {
  AlignLeft,
  GalleryVerticalEnd,
  Lightbulb,
  ListChecks,
  RefreshCcw,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "../lib/utils";

import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";

interface Content1Props {
  className?: string;
}

const Content1 = ({ className }: Content1Props) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement>>({});

  useEffect(() => {
    const sections = Object.keys(sectionRefs.current);

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    let observer: IntersectionObserver | null = new IntersectionObserver(
      observerCallback,
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      },
    );

    sections.forEach((sectionId) => {
      const element = sectionRefs.current[sectionId];
      if (element) {
        observer?.observe(element);
      }
    });

    return () => {
      observer?.disconnect();
      observer = null;
    };
  }, []);

  const addSectionRef = (id: string, ref: HTMLElement | null) => {
    if (ref) {
      sectionRefs.current[id] = ref;
    }
  };

  return (
    <section className={cn("py-32 w-full", className)}>
      <div className="container mx-auto">
        <div className="relative grid-cols-3 gap-20 lg:grid">
          <div className="lg:col-span-2">
            <div>
              <Badge variant="outline">Süreç</Badge>
              <h1 className="mt-3 text-3xl font-extrabold">
                Proje Geliştirme Sürecimiz
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                İTÜ Marge olarak, fikir aşamasından nihai ürüne kadar uzanan titiz bir çalışma süreci yürütüyoruz.
                Her proje, bilimsel temellere dayanan yenilikçi çözümler üretme hedefiyle şekillenir.
              </p>
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop"
                alt="placeholder"
                className="my-8 aspect-video w-full rounded-md object-cover"
              />
            </div>
            <section
              id="section1"
              ref={(ref) => addSectionRef("section1", ref)}
              className="prose mb-8 dark:prose-invert"
            >
              <h2>Araştırma ve Planlama</h2>
              <div className="ml-3.5">
                <div className="relative flex items-start pb-2">
                  <div className="absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px bg-border/70"></div>
                  <div className="absolute ml-[-14px] py-2">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <RefreshCcw className="h-3.5 w-3.5" />
                    </div>
                  </div>
                  <div className="pl-12">
                    <h3 className="mt-2 text-base font-semibold">
                      İhtiyaç Analizi
                    </h3>
                    <p>
                      Sektörün ve paydaşların ihtiyaçlarını derinlemesine analiz ederek, mevcut sorunlara
                      en etkili çözümleri bulmayı hedefliyoruz.
                    </p>
                  </div>
                </div>
                <div className="relative flex items-start pb-2">
                  <div className="absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px bg-border/70"></div>
                  <div className="absolute ml-[-14px] py-2">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <GalleryVerticalEnd className="h-3.5 w-3.5" />
                    </div>
                  </div>
                  <div className="pl-12">
                    <h3 className="mt-2 text-base font-semibold">
                      Bilimsel Literatür Taraması
                    </h3>
                    <p>
                      Akademik kaynaklar ve güncel teknolojiler taranarak projenin teorik altyapısı
                      sağlam temellere oturtulur.
                    </p>
                  </div>
                </div>
                <div className="relative flex items-start pb-2">
                  <div className="absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px bg-border/70"></div>
                  <div className="absolute ml-[-14px] py-2">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <ListChecks className="h-3.5 w-3.5" />
                    </div>
                  </div>
                  <div className="pl-12">
                    <h3 className="mt-2 text-base font-semibold">
                      Proje Yol Haritası
                    </h3>
                    <p>
                      Hedefler, zaman çizelgesi ve kaynak planlaması yapılarak projenin uygulama
                      adımları netleştirilir.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="section2"
              ref={(ref) => addSectionRef("section2", ref)}
              className="prose mb-8 dark:prose-invert"
            >
              <h2>Geliştirme ve Uygulama</h2>
              <p className="mb-8">
                Teorik çalışmaların pratiğe döküldüğü bu aşamada, prototipler üretilir ve
                laboratuvar testleri gerçekleştirilir.
              </p>
              <div className="mb-8">
                <table>
                  <thead>
                    <tr>
                      <th>Aşama</th>
                      <th>Çıktı</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tasarım</td>
                      <td>Teknik çizimler ve simülasyonlar</td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                      <td>Prototip</td>
                      <td>İlk ürün örneği</td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                      <td>Test</td>
                      <td>Performans ve dayanıklılık verileri</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mb-8">
                Elde edilen veriler ışığında optimize edilen tasarımlar, nihai ürün haline getirilmek
                üzere geliştirilir.
              </p>
              <Alert className="mt-8">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>İnovasyon Odaklılık</AlertTitle>
                <AlertDescription>
                  Her aşamada yenilikçi yaklaşımları benimseyerek sürdürülebilir çözümler üretiyoruz.
                </AlertDescription>
              </Alert>
            </section>

            <section
              id="section3"
              ref={(ref) => addSectionRef("section3", ref)}
              className="prose mb-8 dark:prose-invert"
            >
              <h2>Sonuç ve Değerlendirme</h2>
              <p>
                Tamamlanan projeler, sektörel uygulamalarla buluşturulur ve etkisi takip edilir.
                Geri bildirimler, gelecekteki çalışmalarımız için önemli bir veri kaynağıdır.
              </p>
              <blockquote>
                &ldquo;Bilimin ışığında, geleceğin teknolojilerini bugünden tasarlıyoruz.&rdquo;
              </blockquote>
            </section>
          </div>
          <div className="sticky top-8 hidden h-fit lg:block">
            <span className="flex items-center gap-2 text-sm">
              <AlignLeft className="h-4 w-4" />
              Bu sayfada
            </span>
            <nav className="mt-2 text-sm">
              <ul>
                <li>
                  <a
                    href="#section1"
                    className={cn(
                      "block py-1 transition-colors duration-200",
                      activeSection === "section1"
                        ? "font-medium text-primary"
                        : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    Araştırma ve Planlama
                  </a>
                </li>
                <li>
                  <a
                    href="#section2"
                    className={cn(
                      "block py-1 transition-colors duration-200",
                      activeSection === "section2"
                        ? "font-medium text-primary"
                        : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    Geliştirme ve Uygulama
                  </a>
                </li>
                <li>
                  <a
                    href="#section3"
                    className={cn(
                      "block py-1 transition-colors duration-200",
                      activeSection === "section3"
                        ? "font-medium text-primary"
                        : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    Sonuç ve Değerlendirme
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Content1 };
