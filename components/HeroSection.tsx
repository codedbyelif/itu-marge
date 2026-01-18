import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-white py-32 text-foreground w-full">
      <div className="container flex flex-col items-center justify-center gap-25 lg:flex-row lg:gap-[10vw]">

        <div className="w-full max-w-[300px] sm:max-w-md lg:max-w-lg rotate-[-6deg] border bg-foreground p-1 text-background">
          <img
            alt="Card"
            className="pointer-events-none h-80 sm:h-96 lg:h-120 w-full object-cover"
            src="https://instagram.fyei6-1.fna.fbcdn.net/v/t51.82787-15/574501635_17981888447916250_2127288403671688690_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=Mzc1OTgwODgzMDUyODgxNjE2MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEyMDB4OTAwLnNkci5DMyJ9&_nc_ohc=S_EyZ-h4pjkQ7kNvwE5Gvzx&_nc_oc=AdmlOIAP561ggLYnCk2NnrjiLhzedgD3SWfQvBr2ZAWhewiIwDwJraG493yQ9y8xkuo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fyei6-1.fna&_nc_gid=uT_MMKYBacKzD7HqYpeXjA&oh=00_AfpVQW4AjcQnj64jDDrU64-J_kwdiqKBSeQ59TKmghV4Gg&oe=696DA0AE"
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
