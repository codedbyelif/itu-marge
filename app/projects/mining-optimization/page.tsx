"use client";

import Link from "next/link";
import ProjectHero from "@/components/ProjectHero";

export default function MiningOptimization() {
  return (
    <main className="min-h-screen w-full bg-background">
      <ProjectHero
        title="Madencilik Operasyon Optimizasyonu"
        subtitle="Mining Technology"
        description="Saha ekipmanları, lojistik ve üretim akışını bütüncül şekilde optimize etmeyi hedefleyen proje."
        image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2544&auto=format&fit=crop"
      />

      <section className="container mx-auto max-w-4xl px-4 py-20">
        <div className="mb-10">
          <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Tüm Projeler
          </Link>
        </div>

        <article className="space-y-12 prose prose-lg dark:prose-invert max-w-none">
          <section>
            <h2 className="text-3xl font-bold mb-6">Proje Detayları</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Madencilik sektöründe yüksek verimlilik, titiz bir planlama ve detaylı operasyonel kontrol, üretim süreçlerinin
              uzun vadeli sürdürülebilirliği ve kârlılığı açısından kritik bir öneme sahiptir. Bu temel ihtiyaca cevap olarak
              geliştirdiğimiz proje, sahada kullanılan ekipmanların yalnızca anlık teknik performansını izlemekle yetinmemektedir.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Aynı zamanda, makine parkurunun çalışma düzenini, görev dağılımını, lojistik rotalarını ve genel üretim akışını
              bütüncül bir yaklaşımla analiz ederek maksimum seviyede optimize etmeyi hedeflemektedir.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Projemiz gelişmiş gerçek zamanlı veri toplama sistemleri, entegre sensör teknolojileri ve güçlü yazılım destekli
              veri analizi yöntemlerini kullanmaktadır. Elde edilen verilerle öngörülü planlama ve kaynak yönetimi sağlanmaktadır.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
