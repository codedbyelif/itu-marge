'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Projeleriniz ulusal veya uluslararası bir destek alıyor mu?",
      answer:
        "Evet, projelerimizin akademik geçerliliği tescillidir. Örneğin, Bor Karbür üretimi üzerine yürüttüğümüz projemiz TÜBİTAK 2209-A Üniversite Öğrencileri Araştırma Projeleri Destekleme Programı kapsamında destek almaya hak kazanmıştır. Bu, çalışmalarımızın bilimsel derinliğini ve sektördeki potansiyelini göstermektedir.",
    },
    {
      question: "İnsanlık Yararına Teknolojiler kapsamında neler yapıyorsunuz?",
      answer:
        "Madencilik teknolojilerini sadece endüstriyel verimlilik için değil, toplumsal güvenlik için de geliştiriyoruz. Bu kapsamda geliştirdiğimiz Drone projelerimiz, arama-kurtarma faaliyetleri ve riskli maden sahalarının otonom kontrolü gibi alanlarda \"insanlık yararına teknolojiler  kategorisinde değerlendirilerek, teknolojiyi insan hayatını korumak için kullanmaktadır.",
    },
    {
      question: "Drone projeleriniz madencilik sektörüne nasıl bir yenilik getiriyor?",
      answer:
        "Geliştirdiğimiz drone sistemleri, insanların girmesinin riskli olduğu dar galerilerde ve derin sahalarda otonom haritalama ve gaz ölçümü yapabilmektedir. Bu sayede maden kazalarının önlenmesi ve kaza sonrası müdahale süreçlerinde devrim yaratacak çözümler sunuyoruz.",
    },
    {
      question: "Bir projeyi MARGE bünyesinde hayata geçirme süreci nasıl işliyor?",
      answer:
        "Fikir aşamasından itibaren multidisipliner bir çalışma yapıyoruz. Maden, Yazılım, Mekanik ve Kimya gibi farklı branşlardaki ekip üyelerimiz bir araya gelerek projenin teorik altyapısını kurar. Ardından prototipleme ve test aşamalarına geçilir. TÜBİTAK gibi prestijli programlara başvurarak projelerimizi resmileştirir ve sektörle buluştururuz.",
    },
    {
      question: "MARGE projelerinin yerli teknoloji ve stratejik maden hedefleriyle ilişkisi nedir?",
      answer:
        "Türkiye, dünya bor rezervlerinin %70'inden fazlasına ev sahipliği yapmaktadır. Biz de MARGE olarak, sadece ham maddeyi çıkarmayı değil; TÜBİTAK 2209-A destekli projemizle Bor Karbür gibi bu ham maddeyi yüksek teknolojiye (zırh yapımı, nükleer santraller vb.) dönüştürecek süreçler üzerine çalışıyoruz. Aynı zamanda yerli yazılımlarla donattığımız drone sistemlerimizle, madencilikte dışa bağımlılığı azaltmayı ve milli teknoloji hamlesine katkıda bulunmayı temel misyonumuz olarak görüyoruz.",
    },
  ];

  return (
    <section className="pt-12 pb-32 w-full">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mt-2 mb-12 text-3xl font-bold md:text-6xl">Sıkça Sorulan Sorular</h2>
        <Accordion type="single" collapsible className="space-y-2 md:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-md border-0 bg-muted px-5 py-2"
            >
              <AccordionTrigger className="text-left font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pt-0 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
