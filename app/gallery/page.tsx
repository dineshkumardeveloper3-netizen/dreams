'use client';

import { useMemo, useState, useCallback } from "react";
import Image from "next/image"; // ✅ Imported Next.js Image
import { useInView } from "@/hooks/use-in-view";
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface Item {
  src: string;
  alt: string;
  style: string;
  artist: string;
  note: string;
}

const DATA: Item[] = [
  { src: "/tattoo-5.webp", alt: "Neo-traditional rose", style: "Neo‑Traditional", artist: "Raven Holt", note: "Bold lines + rich color" },
  { src: "/tattoo-6.webp", alt: "Blackwork sleeve", style: "Blackwork", artist: "Raven Holt", note: "Contrast & negative space" },
  { src: "/tattoo-7.webp", alt: "Watercolor tattoo", style: "Watercolor", artist: "Mika Aoi", note: "Fluid, painterly gradients" },
  { src: "/tattoo-8.webp", alt: "Realism portrait", style: "Realism", artist: "Kade Vega", note: "Life‑like depth" },
  { src: "/tattoo-9.webp", alt: "Tattoo in progress", style: "Documentary", artist: "Studio", note: "Craft in motion" },
  { src: "/tattoo-10.webp", alt: "Geometric mandala", style: "Geometric", artist: "Raven Holt", note: "Symmetry & precision" },
  { src: "/tattoo-11.webp", alt: "Fine line floral", style: "Fine Line", artist: "Mika Aoi", note: "Delicate detail" },
  { src: "/tattoo-12.webp", alt: "Japanese wave", style: "Irezumi", artist: "Kade Vega", note: "Traditional flow" },
  { src: "/tattoo-13.webp", alt: "Skull blackwork", style: "Blackwork", artist: "Raven Holt", note: "High contrast" },
  { src: "/tattoo-1.webp", alt: "Minimal symbol", style: "Minimal", artist: "Mika Aoi", note: "Small & meaningful" },
  { src: "/tattoo-3.webp", alt: "Color realism eye", style: "Realism", artist: "Kade Vega", note: "Hyper detail" },
  { src: "/tattoo-4.webp", alt: "Abstract watercolor", style: "Watercolor", artist: "Mika Aoi", note: "Organic shapes" },
];

export default function Gallery() {
  const hero = useInView<HTMLDivElement>();
  const [count, setCount] = useState(8);
  const items = useMemo(() => DATA.slice(0, count), [count]);
  const canLoadMore = count < DATA.length;
  const loadMore = useCallback(() => {
    if (canLoadMore) setCount((c) => Math.min(DATA.length, c + 4));
  }, [canLoadMore]);

  const { ref: sentinel } = useInfiniteScroll<HTMLDivElement>(loadMore);

  return (
    <div className="bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="container py-10 sm:py-14 md:py-20 pt-20 sm:pt-24 md:pt-28" ref={hero.ref}>
        <div className={`${hero.inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <h1 className="font-heading text-3xl leading-[0.9] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">GALLERY
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">ART BEHIND THE INK</span>
          </h1>
          <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-foreground/80">Each piece tells a story. Hover to reveal details. New works load as you scroll.</p>
        </div>
      </section>

      {/* Grid */}
      <section className="container pb-12 sm:pb-16 md:pb-24">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <figure key={item.src} className="group relative overflow-hidden rounded-xl border border-border/60 bg-secondary/20">
              {item.src ? (
                <Image
                  src={item.src}
                  alt={item.alt || "Gallery image"}
                  width={500}
                  height={500}
                  className="h-32 sm:h-40 md:h-48 lg:h-60 xl:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="h-32 sm:h-40 md:h-48 lg:h-60 xl:h-64 w-full bg-gray-200 flex items-center justify-center text-sm text-gray-500">
                  Image not available
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-6 p-2 sm:p-3 md:p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="rounded bg-gradient-to-r from-primary to-accent px-1.5 py-0.5 sm:px-2 text-xs font-semibold text-black shadow-[0_0_16px_rgba(20,244,212,0.25)]">{item.style}</span>
                <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-foreground/90">By {item.artist} — {item.note}</div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div ref={sentinel} className="h-10" />
        {!canLoadMore ? (
          <p className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-foreground/60">End of gallery</p>
        ) : (
          <div className="mt-4 sm:mt-6 flex justify-center">
            <button onClick={loadMore} className="rounded-md border border-border/60 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm hover:bg-secondary/60">Load more</button>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
