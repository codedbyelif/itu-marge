"use client";

import Link from "next/link";

export default function GeothermalReservoir() {
  return (
    <main className="min-h-screen bg-background py-12">
      <section className="container mx-auto max-w-4xl px-4">
        <div className="rounded-2xl p-10 bg-gradient-to-br from-white/60 to-gray-50 dark:from-black/40 dark:to-black/30 shadow-lg">
          <div className="mb-6">
            <Link href="/projects" className="text-sm text-muted-foreground hover:underline">← Tüm Projeler</Link>
          </div>

          <header className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold">Jeotermalde Rezervuar Yönetimi</h1>
            <p className="text-md text-muted-foreground">Doğal kaynakların sürdürülebilir kullanımı ve jeotermal enerji üretimi için rezervuar yönetimi çalışmaları.</p>
          </header>

          <article className="mt-8 prose prose-invert max-w-none space-y-6">
            <p>
              Jeotermalde rezervuar yönetimi alanını seçmemizin nedeni, konunun salt enerji üretimi olmanın ötesinde, doğal kaynakların
              sürdürülebilir ve bilinçli kullanımıyla doğrudan ilişkili olmasıdır. Yeraltı jeotermal sistemlerini doğru bir şekilde
              anlayarak ve doğal dengeyi koruyarak enerji üretmek, hem bilimsel merakımızı giderir hem de çevresel sorumluluğu yerine getirir.
            </p>
            <p>
              Konuya ilgi duymaya başladığımızda, alanda deneyimli kişilerle iletişim kurarak bilgi ve tecrübe edinmeye odaklandık ve
              ardından derinlemesine araştırmalarla Türkiye'deki jeotermal kaynakların durumu ve uygulama örneklerini inceledik.
            </p>
            <p>
              Bu süreç, projelerimizi yönlendirecek içgörüler geliştirmemize ve sağlam bilimsel temeller oluşturamamıza yardımcı oldu.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
