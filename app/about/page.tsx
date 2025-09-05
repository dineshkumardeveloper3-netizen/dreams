'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Sparkles, Heart, Droplets } from 'lucide-react';

function ArtistCard({
  name,
  role,
  img,
  tags,
  bio,
}: {
  name: string;
  role: string;
  img: string;
  tags: string[];
  bio: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border/60 bg-secondary/30 shadow-xl transition-transform hover:scale-[1.01]">
      <Image
        src={img}
        alt={`Portrait of ${name}, specializing in ${role}`}
        width={400}
        height={288}
        className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-heading text-2xl">{name}</h3>
        <p className="text-sm text-foreground/80">{role}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded bg-gradient-to-r from-primary to-accent px-2 py-0.5 text-xs font-semibold text-black shadow-[0_0_14px_rgba(20,244,212,0.25)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 flex translate-y-6 flex-col justify-end bg-black/60 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-sm text-foreground/90">{bio}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="container grid min-h-[50svh] items-center gap-6 sm:gap-8 md:gap-10 py-8 sm:py-12 md:py-20 pt-20 sm:pt-24 md:pt-28">
        <div>
          <p className="text-accent/90 tracking-widest text-xs sm:text-sm">OUR STORY</p>
          <h1 className="font-heading text-3xl leading-[0.9] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            MORE THAN INK
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">IT'S IDENTITY</span>
          </h1>
          <p className="mt-4 sm:mt-6 max-w-2xl text-foreground/80 text-base sm:text-lg">
            At Dream Inks Tattoo Studio, it's not just about ink. It's about creating memories, expressing who you are, and leaving a lasting mark on the world. Our artists combine creativity, skill, and passion to create tattoos that will stay with you forever.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="/contact" className="rounded-md bg-gradient-to-r from-primary to-accent px-4 py-2 sm:px-5 sm:py-2.5 font-semibold text-black shadow-[0_0_24px_rgba(20,244,212,0.35)] transition-all hover:scale-105 text-center text-sm sm:text-base">
              Book a consult
            </Link>
            <Link href="/gallery" className="rounded-md border border-border/60 px-4 py-2 sm:px-5 sm:py-2.5 hover:bg-secondary/60 transition-colors text-center text-sm sm:text-base">
              See the work
            </Link>
          </div>
        </div>
        <div className="relative h-[30vh] sm:h-[40vh] w-full overflow-hidden rounded-xl md:h-[60vh] order-first md:order-last">
            <div
    className="absolute inset-0 bg-fixed bg-cover bg-center"
    style={{ backgroundImage: "url(/abm1.webp)" }}
  />
  <div className="absolute inset-0 bg-[url('/abm1.webp')] bg-cover bg-center bg-no-repeat from-black/60 to-transparent" />
</div>
      </section>

      {/* Artists */}
      <section className="container py-12 sm:py-16 md:py-24">
        <div className="mb-6 sm:mb-8 md:mb-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Meet the Artists</h2>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base text-foreground/80">Hover to learn their story and specialties.</p>
          </div>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ArtistCard
            name="Raven Holt"
            role="Neo‑Traditional • Blackwork"
            img="/artist-1.webp"
            tags={["Neo‑Traditional", "Blackwork"]}
            bio="Bold lines and rich storytelling. Raven blends classic motifs with modern edge to craft timeless statements."
          />
          <ArtistCard
            name="Mika Aoi"
            role="Watercolor • Fine line"
            img="/artist-2.webp"
            tags={["Watercolor", "Fine line"]}
            bio="Fluid color and delicate detail. Mika turns fleeting moments into soft yet striking compositions."
          />
          <ArtistCard
            name="Kade Vega"
            role="Realism • Portraits"
            img="/artist0.webp"
            tags={["Realism", "Portraits"]}
            bio="Photo‑real precision with soul. Kade captures likeness and emotion for pieces that resonate for life."
          />
        </div>
      </section>

      {/* Mission Parallax Section */}
      <section
        className="relative bg-cover bg-center "
        style={{ backgroundImage: 'url(/wmn1.webp)' }} // Replace with your image
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="container relative z-10 py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border/60 bg-secondary/40 p-4 sm:p-6">
              <div className="mb-3 text-primary">
                <Sparkles />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl">Artistry</h3>
              <p className="mt-2 text-sm sm:text-base text-foreground/90">
                Custom concepts, collaborative design, and premium pigments for color that lasts.
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-secondary/40 p-4 sm:p-6">
              <div className="mb-3 text-primary">
                <Droplets />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl">Cleanliness</h3>
              <p className="mt-2 text-sm sm:text-base text-foreground/90">
                Medical‑grade sterilization and single‑use equipment in a pristine studio.
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-secondary/40 p-4 sm:p-6 md:col-span-2 lg:col-span-1">
              <div className="mb-3 text-primary">
                <Heart />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl">Care</h3>
              <p className="mt-2 text-sm sm:text-base text-foreground/90">
                We guide you from idea to aftercare with transparency, empathy, and respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
