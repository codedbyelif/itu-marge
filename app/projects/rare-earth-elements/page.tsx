"use client";

import Link from "next/link";
import ProjectHero from "@/components/ProjectHero";

export default function RareEarthProject() {
  return (
    <main className="min-h-screen w-full bg-background">
      <ProjectHero
        title="Nadir Toprak Elementleri (NTE) Araştırması"
        subtitle="Critical Materials"
        description="Elektronik, enerji ve stratejik sektörler için kritik öneme sahip NTE araştırma projesi."
        image="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=2535&auto=format&fit=crop"
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
              MAR-GE’nin madencilikteki stratejik projelerinden biri olan bu çalışma, Nadir Toprak Elementleri (NTE) üzerinde yoğunlaşmaktadır.
              Elektronik cihazlardan elektrikli araç bataryalarına ve savunma sanayii uygulamalarına kadar pek çok alanda kullanılan bu
              elementlerin Türkiye'deki potansiyeli, çevresel açıdan sorumlu çıkarılma yöntemleri ve zenginleştirme teknikleri araştırılmaktadır.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Bu kapsamlı araştırma ile iki ana hedef güdülmektedir: birincisi NTE potansiyeli hakkında bilimsel farkındalık oluşturmak,
              ikincisi ise yerli teknolojik ihtiyaçlara yönelik güvenli tedarik zinciri altyapısı hazırlamaktır.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
