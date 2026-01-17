export default function Stats() {
    return (
        <section className="py-32 w-full bg-background text-foreground">
            <div className="container mx-auto px-4">
                <h1 className="text-center text-4xl font-semibold lg:text-6xl">
                    Takım İstatistikleri
                </h1>
                <div className="grid gap-10 pt-9 md:grid-cols-3 lg:gap-0 lg:pt-20">
                    <div className="text-center">
                        <p className="text-sm font-medium text-muted-foreground">
                            Ekibimizdeki kişi sayısı
                        </p>
                        <p className="pt-4 text-7xl font-semibold lg:pt-10">20+</p>
                        <p className="text-2xl font-semibold text-muted-foreground">
                            Araştırmacı & Mühendis
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-medium text-muted-foreground">
                            Kuruluş Yılımız
                        </p>
                        <p className="pt-4 text-7xl font-semibold lg:pt-10">2020</p>
                        <p className="text-2xl font-semibold text-muted-foreground">
                            Yılından Beri
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-medium text-muted-foreground">
                            Tamamlanan Proje Sayısı
                        </p>
                        <p className="pt-4 text-7xl font-semibold lg:pt-10">15+</p>
                        <p className="text-2xl font-semibold text-muted-foreground">
                            Başarılı Proje
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
