"use client";

import Link from "next/link";

export default function RareEarthProject() {
  return (
    <main className="min-h-screen bg-background py-12">
      <section className="container mx-auto max-w-4xl px-4">
        <div className="rounded-2xl p-10 bg-gradient-to-br from-white/60 to-gray-50 dark:from-black/40 dark:to-black/30 shadow-lg">
          <div className="mb-6">
            <Link href="/projects" className="text-sm text-muted-foreground hover:underline">← Tüm Projeler</Link>
          </div>

          <header className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold">Nadir Toprak Elementleri (NTE) Araştırması</h1>
            <p className="text-md text-muted-foreground">Elektronik, enerji ve stratejik sektörler için kritik öneme sahip NTE araştırma projesi.</p>
          </header>

          <article className="mt-8 prose prose-invert max-w-none space-y-6">
            <p>
              MAR-GE’nin madencilikteki stratejik projelerinden biri olan bu çalışma, Nadir Toprak Elementleri (NTE) üzerinde yoğunlaşmaktadır.
              Elektronik cihazlardan elektrikli araç bataryalarına ve savunma sanayii uygulamalarına kadar pek çok alanda kullanılan bu
              elementlerin Türkiye'deki potansiyeli, çevresel açıdan sorumlu çıkarılma yöntemleri ve zenginleştirme teknikleri araştırılmaktadır.
            </p>
            <p>
              Bu kapsamlı araştırma ile iki ana hedef güdülmektedir: birincisi NTE potansiyeli hakkında bilimsel farkındalık oluşturmak,
              ikincisi ise yerli teknolojik ihtiyaçlara yönelik güvenli tedarik zinciri altyapısı hazırlamaktır.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
