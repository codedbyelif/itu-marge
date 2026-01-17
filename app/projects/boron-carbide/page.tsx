"use client";

import Link from "next/link";
import ProjectHero from "@/components/ProjectHero";

export default function BoronCarbideProject() {
  return (
    <main className="min-h-screen w-full bg-background">
      <ProjectHero
        title="Bor Karbür (B₄C) Bazlı Kompozit Kesici Uçlar"
        subtitle="Research Project"
        description="MAR-GE ekibi tarafından yürütülen, mermercilik sektörü için yüksek performanslı ve yerli kesici uç geliştirme projesi."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop"
      />

      <section className="container mx-auto max-w-4xl px-4 py-20">
        <div className="mb-10">
          <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Tüm Projeler
          </Link>
        </div>

        <article className="space-y-12 prose prose-lg dark:prose-invert max-w-none">
          <section>
            <h2 className="text-3xl font-bold mb-6">Proje Özeti</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Bor karbür (B₄C), dünyadaki en sert seramik malzemelerden biridir ve yüksek dayanımıyla öne çıkar. MAR-GE
              ekibi olarak yürüttüğümüz bu projede, bor karbürü sinterleme yöntemiyle şekillendirip çeşitli katkı elementleriyle
              (örneğin nikel, silisyum karbür, titanyum diborür gibi) birleştirerek mermercilik sektöründe kullanılan elmas telli
              ve zincir kollu taş kesme makineleri için alternatif kesici uçlar üretmeyi hedefliyoruz.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Proje Hedefleri</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Bu projenin nihai amacı, mermercilik sektörüne yönelik kesici uçlarda dışa bağımlılığı azaltarak hem yerli üretim
              oranını artırmak hem de sektöre maliyet ve performans avantajı sunmaktır. Geliştirilen bu yeni (B₄C) bazlı kompozit
              kesici sistemler, mevcut çözümlere kıyasla daha uzun ömürlü ve aşınmaya karşı daha dayanıklı olmayı hedeflemektedir.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8">Temel Özellikler</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
                <h3 className="font-semibold text-xl mb-2">Yüksek Sertlik</h3>
                <p className="text-muted-foreground">Bor karbür kullanarak yüksek sertlikte seramik yapılar oluşturma.</p>
              </div>
              <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
                <h3 className="font-semibold text-xl mb-2">Uzun Ömürlü</h3>
                <p className="text-muted-foreground">Aşınmaya karşı dirençli, geleneksel kesici uçlardan daha dayanıklı.</p>
              </div>
              <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
                <h3 className="font-semibold text-xl mb-2">Maliyet Avantajı</h3>
                <p className="text-muted-foreground">Ekonomik bir alternatif sunarak işletme maliyetlerini düşürme.</p>
              </div>
              <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
                <h3 className="font-semibold text-xl mb-2">Yerli Üretim</h3>
                <p className="text-muted-foreground">Dışa bağımlılığı azaltarak yerli üretim kapasitesini artırma.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Malzeme Bileşimi</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              <strong>Bor Karbür (B₄C)</strong> ana bileşen olup, katkı elementleri olarak <strong>Nikel (Ni)</strong>,
              <strong> Silisyum Karbür (SiC)</strong> ve <strong>Titanyum Diborür (TiB₂)</strong> kullanılmaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Uygulama Alanları</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground ml-4">
              <li>Elmas telli taş kesme makineleri</li>
              <li>Zincir kollu taş kesme makineleri</li>
              <li>Mermercilik sektörü uygulamaları</li>
              <li>Yüksek performans gereken endüstriyel kesme işleri</li>
            </ul>
          </section>
        </article>
      </section>
    </main>
  );
}
