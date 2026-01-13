import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-white py-32 text-foreground w-full">
      <div className="container flex flex-col items-center justify-center gap-25 lg:flex-row lg:gap-[10vw]">

        <div className="w-md   rotate-[-6deg] border bg-foreground p-1 text-background">
          <img
            alt="Card"
            className="pointer-events-none h-130 w-full object-cover"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img14.png"
          />
          <div className="pt-2 pb-1">
            <p className="text-lg font-medium tracking-tight text-background">
              John Doe
            </p>
            <p className="text-sm text-background/50">@shadcnblocks.com</p>
          </div>
        </div>

        <div className="w-xs space-y-6">
          <h1 className="mb-15 text-5xl font-medium tracking-tight">
            Shaping ideas with clarity and{" "}
            <span className="font-instrumentSerif">impact</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Crafting elegant and functional designs that resonate and inspire.
          </p>
        </div>
      </div>
    </section>
  );
}
