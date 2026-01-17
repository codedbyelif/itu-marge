import React from 'react';

interface ProjectHeroProps {
    title: string;
    subtitle?: string;
    description: string;
    image: string;
}

export default function ProjectHero({ title, subtitle, description, image }: ProjectHeroProps) {
    return (
        <section className="relative flex h-[700px] items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url("${image}")` }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
                {subtitle && (
                    <p className="mb-6 text-sm tracking-[0.2em] text-white/80 uppercase">
                        {subtitle}
                    </p>
                )}
                <h1 className="mb-6 text-4xl leading-tight font-semibold md:text-6xl lg:text-7xl">
                    {title}
                </h1>
                <p className="mx-auto max-w-xl text-base leading-relaxed text-white/90 md:text-xl">
                    {description}
                </p>
            </div>
        </section>
    );
}
