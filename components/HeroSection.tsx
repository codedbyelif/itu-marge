import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-white py-32 text-foreground w-full">
      <div className="container flex flex-col items-center justify-center gap-25 lg:flex-row lg:gap-[10vw]">

        <div className="w-full max-w-[300px] sm:max-w-md lg:max-w-xl rotate-[-6deg] border bg-foreground p-1 text-background">
          <img
            alt="Card"
            className="pointer-events-none h-80 sm:h-96 lg:h-120 w-full object-cover"
            src="/itu-margetakimi.png"
          />
          <div className="pt-2 pb-1">
            <p className="text-lg font-medium tracking-tight text-background">
              İtu Marge Takımı
            </p>
            <p className="text-sm text-background/50">@itumarge</p>
          </div>
        </div>

        <div className="w-xs space-y-6">
          <h1 className="mb-15 text-5xl font-medium tracking-tight">
            Madenciliğin Geleceğini İnşa Eden Zihinler{" "}
            <span className="font-instrumentSerif"></span>
          </h1>
          <p className="text-lg text-muted-foreground">
            İTÜ MARGE bünyesinde, geleneksel madenciliği robotik ve otomasyonla buluşturuyoruz. Disiplinler arası bir yaklaşımla, yerin altındaki potansiyeli teknolojinin gücüyle birleştiren, sektörün dijital dönüşümüne öncülük eden bir ekibiz.
          </p>
        </div>
      </div>
    </section>
  );
}