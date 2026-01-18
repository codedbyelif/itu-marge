import BlurText from "./BlurText";

export default function Stats() {
    return (
        <section className="py-32 w-full bg-background text-foreground">
            <div className="container mx-auto px-4">
                <h1 className="text-center text-4xl font-semibold lg:text-6xl">
                    Takım İstatistikleri
                </h1>
                <div className="grid gap-10 pt-9 md:grid-cols-3 lg:gap-0 lg:pt-20">
                    <div className="flex flex-col items-center justify-center text-center">
                        <p className="text-sm font-medium text-muted-foreground">
                            Ekibimizdeki kişi sayısı
                        </p>
                        <BlurText
                            text="16"
                            delay={200}
                            animateBy="words"
                            direction="top"
                            className="pt-4 text-7xl font-semibold lg:pt-10 mb-2 block"
                        />
                        <p className="text-2xl font-semibold text-muted-foreground">
                            Araştırmacı & Mühendis
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <p className="text-sm font-medium text-muted-foreground">
                            Kuruluş Yılımız
                        </p>
                        <BlurText
                            text="2025"
                            delay={600}
                            animateBy="words"
                            direction="top"
                            className="pt-4 text-7xl font-semibold lg:pt-10 mb-2 block"
                        />
                        <p className="text-2xl font-semibold text-muted-foreground">
                            Yılından Beri
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <p className="text-sm font-medium text-muted-foreground">
                            Tamamlanan Proje Sayısı
                        </p>
                        <BlurText
                            text="5+"
                            delay={1000}
                            animateBy="words"
                            direction="top"
                            className="pt-4 text-7xl font-semibold lg:pt-10 mb-2 block"
                        />
                        <p className="text-2xl font-semibold text-muted-foreground">
                            Başarılı Proje
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
