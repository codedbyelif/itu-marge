"use client";

import Link from "next/link";

export default function BoronCarbideProject() {
  return (
    <main className="min-h-screen w-full bg-background py-12">
      <section className="container mx-auto max-w-4xl px-4">
        <div className="rounded-2xl bg-gradient-to-br from-white/60 to-gray-50 dark:from-black/40 dark:to-black/30 p-10 shadow-xl">
          <div className="mb-6">
            <Link href="/projects" className="text-sm text-muted-foreground hover:underline">
              ← Tüm Projeler
            </Link>
          </div>

          <header className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-extrabold">Bor Karbür (B₄C) Bazlı Kompozit Kesici Uçlar</h1>
            <p className="text-lg text-muted-foreground">MAR-GE ekibi tarafından yürütülen yüksek performanslı kesici uç geliştirme projesi</p>
          </header>

          <article className="mt-8 space-y-8 prose prose-invert max-w-none">
            <section>
              <h2>Proje Özeti</h2>
              <p>
                Bor karbür (B₄C), dünyadaki en sert seramik malzemelerden biridir ve yüksek dayanımıyla öne çıkar. MAR-GE
                ekibi olarak yürüttüğümüz bu projede, bor karbürü sinterleme yöntemiyle şekillendirip çeşitli katkı elementleriyle
                (örneğin nikel, silisyum karbür, titanyum diborür gibi) birleştirerek mermercilik sektöründe kullanılan elmas telli
                ve zincir kollu taş kesme makineleri için alternatif kesici uçlar üretmeyi hedefliyoruz.
              </p>
            </section>

            <section>
              <h2>Proje Hedefleri</h2>
              <p>
                Bu projenin nihai amacı, mermercilik sektörüne yönelik kesici uçlarda dışa bağımlılığı azaltarak hem yerli üretim
                oranını artırmak hem de sektöre maliyet ve performans avantajı sunmaktır. Geliştirilen bu yeni (B₄C) bazlı kompozit
                kesici sistemler, mevcut çözümlere kıyasla daha uzun ömürlü ve aşınmaya karşı daha dayanıklı olmayı hedeflemektedir.
              </p>
            </section>

            <section>
              <h2>Temel Özellikler</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white/60 dark:bg-black/40 shadow-sm">
                  <h3 className="font-semibold">Yüksek Sertlik</h3>
                  <p className="text-sm text-muted-foreground">Bor karbür kullanarak yüksek sertlikte seramik yapılar oluşturma.</p>
                </div>
                <div className="p-4 rounded-lg bg-white/60 dark:bg-black/40 shadow-sm">
                  <h3 className="font-semibold">Uzun Ömürlü</h3>
                  <p className="text-sm text-muted-foreground">Aşınmaya karşı dirençli, geleneksel kesici uçlardan daha dayanıklı.</p>
                </div>
                <div className="p-4 rounded-lg bg-white/60 dark:bg-black/40 shadow-sm">
                  <h3 className="font-semibold">Maliyet Avantajı</h3>
                  <p className="text-sm text-muted-foreground">Ekonomik bir alternatif sunarak işletme maliyetlerini düşürme.</p>
                </div>
                <div className="p-4 rounded-lg bg-white/60 dark:bg-black/40 shadow-sm">
                  <h3 className="font-semibold">Yerli Üretim</h3>
                  <p className="text-sm text-muted-foreground">Dışa bağımlılığı azaltarak yerli üretim kapasitesini artırma.</p>
                </div>
              </div>
            </section>

            <section>
              <h2>Malzeme Bileşimi</h2>
              <p>
                <strong>Bor Karbür (B₄C)</strong> ana bileşen olup, katkı elementleri olarak <strong>Nikel (Ni)</strong>,
                <strong> Silisyum Karbür (SiC)</strong> ve <strong>Titanyum Diborür (TiB₂)</strong> kullanılmaktadır.
              </p>
            </section>

            <section>
              <h2>Uygulama Alanları</h2>
              <ul>
                <li>Elmas telli taş kesme makineleri</li>
                <li>Zincir kollu taş kesme makineleri</li>
                <li>Mermercilik sektörü uygulamaları</li>
                <li>Yüksek performans gereken endüstriyel kesme işleri</li>
              </ul>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
