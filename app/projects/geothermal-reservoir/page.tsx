"use client";

import Link from "next/link";
import ProjectHero from "@/components/ProjectHero";

export default function GeothermalReservoir() {
  return (
    <main className="min-h-screen w-full bg-background">
      <ProjectHero
        title="Jeotermalde Rezervuar Yönetimi"
        subtitle="Sustainable Energy"
        description="Doğal kaynakların sürdürülebilir kullanımı ve jeotermal enerji üretimi için rezervuar yönetimi çalışmaları."
        image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop"
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
              Jeotermalde rezervuar yönetimi alanını seçmemizin nedeni, konunun salt enerji üretimi olmanın ötesinde, doğal kaynakların
              sürdürülebilir ve bilinçli kullanımıyla doğrudan ilişkili olmasıdır. Yeraltı jeotermal sistemlerini doğru bir şekilde
              anlayarak ve doğal dengeyi koruyarak enerji üretmek, hem bilimsel merakımızı giderir hem de çevresel sorumluluğu yerine getirir.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Konuya ilgi duymaya başladığımızda, alanda deneyimli kişilerle iletişim kurarak bilgi ve tecrübe edinmeye odaklandık ve
              ardından derinlemesine araştırmalarla Türkiye'deki jeotermal kaynakların durumu ve uygulama örneklerini inceledik.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Bu süreç, projelerimizi yönlendirecek içgörüler geliştirmemize ve sağlam bilimsel temeller oluşturamamıza yardımcı oldu.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
