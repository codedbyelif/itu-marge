"use client";

import Link from "next/link";

export default function MiningOptimization() {
  return (
    <main className="min-h-screen bg-background py-12">
      <section className="container mx-auto max-w-4xl px-4">
        <div className="rounded-2xl p-10 bg-gradient-to-br from-white/60 to-gray-50 dark:from-black/40 dark:to-black/30 shadow-lg">
          <div className="mb-6">
            <Link href="/projects" className="text-sm text-muted-foreground hover:underline">← Tüm Projeler</Link>
          </div>

          <header className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold">Madencilik Operasyon Optimizasyonu</h1>
            <p className="text-md text-muted-foreground">Saha ekipmanları, lojistik ve üretim akışını bütüncül şekilde optimize etmeyi hedefleyen proje.</p>
          </header>

          <article className="mt-8 prose prose-invert max-w-none space-y-6">
            <p>
              Madencilik sektöründe yüksek verimlilik, titiz bir planlama ve detaylı operasyonel kontrol, üretim süreçlerinin
              uzun vadeli sürdürülebilirliği ve kârlılığı açısından kritik bir öneme sahiptir. Bu temel ihtiyaca cevap olarak
              geliştirdiğimiz proje, sahada kullanılan ekipmanların yalnızca anlık teknik performansını izlemekle yetinmemektedir.
            </p>
            <p>
              Aynı zamanda, makine parkurunun çalışma düzenini, görev dağılımını, lojistik rotalarını ve genel üretim akışını
              bütüncül bir yaklaşımla analiz ederek maksimum seviyede optimize etmeyi hedeflemektedir.
            </p>
            <p>
              Projemiz gelişmiş gerçek zamanlı veri toplama sistemleri, entegre sensör teknolojileri ve güçlü yazılım destekli
              veri analizi yöntemlerini kullanmaktadır. Elde edilen verilerle öngörülü planlama ve kaynak yönetimi sağlanmaktadır.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
