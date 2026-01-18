'use client';

import Image from "next/image";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Cpu, HardHat, Leaf, Database, BarChart3, ScanFace } from "lucide-react";

const features = [
    {
        title: "Otomasyon & Robotik",
        description: "Maden sahalarında insan müdahalesini en aza indiren otonom sistemler ve robotik teknolojiler.",
        video: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop", // Robot arm / industrial (Verified)
        icon: Cpu,
    },
    {
        title: "Veri Analizi & AI",
        description: "Büyük veri analitiği ve yapay zeka algoritmaları ile operasyonel verimliliği maksimize edin.",
        video: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2670&auto=format&fit=crop", // Data / Tech (Verified)
        icon: Database,
    },
    {
        title: "İş Sağlığı ve Güvenliği",
        description: "Gelişmiş sensör ağları ve görüntü işleme teknolojileri ile sahadaki riskleri anlık olarak izleyin.",
        video: "https://static.wixstatic.com/media/7f1cf3_11e74d62150f43e5ae18c9ba090b84e6~mv2.jpg/v1/fill/w_568,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/7f1cf3_11e74d62150f43e5ae18c9ba090b84e6~mv2.jpg", // Worker safety (Verified)
        icon: HardHat,
    },
    {
        title: "Sürdürülebilir Madencilik",
        description: "Çevresel etkileri minimize eden, enerji verimliliği odaklı yeşil madencilik çözümleri.",
        video: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop", // Nature/Green (Verified)
        icon: Leaf,
    },
    {
        title: "Performans İzleme",
        description: "Ekipman performansını ve üretim metriklerini gerçek zamanlı izleyerek aksama sürelerini azaltın.",
        video: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2670&auto=format&fit=crop", // Analytics (Verified)
        icon: BarChart3,
    },
    {
        title: "Jeolojik Modelleme",
        description: "Yeraltı kaynaklarının 3 boyutlu modellemesi ve rezervuar karakterizasyonu.",
        video: "https://lh5.googleusercontent.com/proxy/QlAyuHjdr8R5Yh9WW89del_IScykpN7kwfD79jo4d2bL30ePTbHCtfjThtyPA1fP99pfp_3iYhaCodR5JtD4yN5l_eBQgHTHzkDZkRLtXTstvLt_LGMEXdzR5BNtbkLntmnsUbWp65tqEJIslRgk_xmBStPqiYex-EZgkk0Xh4ylIZ4AxzoBi4-8cOQkDJGF38IyYoceRg", // Geology/Topography (Verified)
        icon: ScanFace,
    }
];

export default function Features() {
    return (
        <section className="py-24 w-full bg-secondary/20">
            <div className="container mx-auto px-4">
                <div className="mx-auto mb-16 flex max-w-[48rem] flex-col gap-6 text-center">
                    <h2 className="text-4xl font-semibold xl:text-5xl">Teknolojik Kabiliyetlerimiz</h2>
                    <p className="text-lg text-muted-foreground">
                        Madencilik sektörünün dijital dönüşümüne öncülük eden, uçtan uca entegre teknoloji çözümleri.
                        Güvenli, verimli ve sürdürülebilir sahalar için geliştirdiğimiz yetkinliklerimiz.
                    </p>
                </div>

                <div className="relative w-full px-4 md:px-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {features.map((feature, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                                    <div className="group block h-full">
                                        <div className="flex flex-col gap-6 rounded-2xl border bg-background p-6 h-full shadow-sm transition-all hover:shadow-md">
                                            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                                                {/* In a real app, replace simple img with video auto-play on hover or always */}

                                                <Image
                                                    src={feature.video}
                                                    alt={feature.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                                                    <feature.icon className="h-5 w-5" />
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <h3 className="text-xl font-semibold leading-tight">{feature.title}</h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden md:block">
                            <CarouselPrevious className="-left-4 lg:-left-12" />
                            <CarouselNext className="-right-4 lg:-right-12" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
