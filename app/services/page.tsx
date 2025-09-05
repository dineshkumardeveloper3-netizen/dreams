'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, Wand2, Layers, PenTool } from "lucide-react";

function ServiceCard({
  title,
  desc,
  icon,
  cta,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  cta?: React.ReactNode;
}) {
  return (
    <div className="group rounded-xl border border-border/60 bg-secondary/30 p-6 shadow-xl transition-transform hover:scale-[1.01]">
      <div className="mb-3 text-primary">{icon}</div>
      <h3 className="font-heading text-2xl">{title}</h3>
      <p className="mt-2 text-foreground/80">{desc}</p>
      {cta ? <div className="mt-5">{cta}</div> : null}
    </div>
  );
}

export default function Services() {
  return (
    <div className="bg-background text-foreground">
      <Navigation />
      
      {/* Split hero */}
      <section className="container grid min-h-[50svh] items-center gap-6 sm:gap-8 md:gap-10 py-8 sm:py-12 md:py-20 pt-20 sm:pt-24 md:pt-28">
        <div>
          <p className="text-accent/90 tracking-widest text-xs sm:text-sm">WHAT WE DO</p>
          <h1 className="font-heading text-3xl leading-[0.9] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            SERVICES
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">FOR EVERY VISION</span>
          </h1>
          <p className="mt-4 sm:mt-6 max-w-2xl text-foreground/80 text-base sm:text-lg">
            Explore the wide range of tattoo services we offer, from custom pieces to cover‑ups, touch‑ups, and more.
          </p>
          <div className="mt-6 sm:mt-8 flex gap-4">
            <Link href="/contact" className="rounded-md bg-gradient-to-r from-primary to-accent px-4 py-2 sm:px-5 sm:py-2.5 font-semibold text-black shadow-[0_0_24px_rgba(20,244,212,0.35)] transition-all hover:scale-105 text-sm sm:text-base">Start your design</Link>
          </div>
        </div>
        <div className="relative h-[30vh] sm:h-[40vh] w-full overflow-hidden rounded-xl md:h-[60vh] order-first md:order-last">
          <Image
            src="/abm.webp"
            alt="Tattoo artist at work"
            fill
            className="object-cover bg-fixed"
          />
          <div   className="w-full h-[500px] bg-[url('/abm.webp')] bg-cover bg-center bg-fixed" />
        </div>
      </section>

      {/* Cards */}
      <section className="container py-12 sm:py-16 md:py-24 bg-gray-900">
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Custom Tattoo Design"
            desc="Collaborate with an artist to translate your story into an original composition. Sketch‑to‑ink process."
            icon={<Wand2 />}
            cta={<Link href="/contact" className="inline-flex rounded-md bg-gradient-to-r from-primary to-accent px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-black">Start Your Design</Link>}
          />
          <div className="group rounded-xl border border-border/60 bg-secondary/30 p-0 shadow-xl overflow-hidden md:col-span-2 lg:col-span-1">
            <div className="relative h-48 sm:h-64 md:h-72 w-full">
              <Image 
                src="/lion-tattoo.webp" 
                alt="Before cover-up" 
                fill
                className="object-cover" 
              />
              <Image 
                src="/tattoo-1.webp" 
                alt="After cover-up" 
                fill
                className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-4 sm:p-6">
              <div className="mb-3 text-primary"><Layers /></div>
              <h3 className="font-heading text-xl sm:text-2xl">Cover‑Ups & Touch‑Ups</h3>
              <p className="mt-2 text-sm sm:text-base text-foreground/80">Breathe new life into old ink with seamless cover‑ups or restore vibrancy with expert touch‑ups.</p>
              <Link href="/contact" className="mt-3 sm:mt-4 inline-flex rounded-md border border-border/60 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm hover:bg-secondary/60">Request evaluation</Link>
            </div>
          </div>
          <ServiceCard
            title="Consultations"
            desc="Book a free consult to discuss size, placement, style, and aftercare. No commitment—just clarity."
            icon={<PenTool />}
            cta={<Link href="/contact" className="inline-flex items-center gap-1 sm:gap-2 rounded-md border border-border/60 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm hover:bg-secondary/60"><Calendar size={14} className="sm:w-4 sm:h-4"/>Book Free Consult</Link>}
          />
        </div>
      </section>

      {/* Pricing */}
      <section className="container pb-12 sm:pb-16 md:pb-24 bg-black">
        <div className="rounded-2xl border border-border/60 bg-secondary/30 p-4 sm:p-6 md:p-10">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Transparent Pricing</h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-foreground/80">Prices vary by size, complexity, and placement. Typical ranges:</p>
          <ul className="mt-4 sm:mt-6 grid gap-3 sm:gap-4 md:grid-cols-3">
            <li className="rounded-xl border border-border/60 bg-background/60 p-3 sm:p-4">
              <span className="text-xs sm:text-sm text-foreground/70">Small (1–3 in)</span>
              <div className="mt-1 font-heading text-2xl sm:text-3xl">800–2000</div>
            </li>
            <li className="rounded-xl border border-border/60 bg-background/60 p-3 sm:p-4">
              <span className="text-xs sm:text-sm text-foreground/70">Medium (3–6 in)</span>
              <div className="mt-1 font-heading text-2xl sm:text-3xl">2000–6000</div>
            </li>
            <li className="rounded-xl border border-border/60 bg-background/60 p-3 sm:p-4 md:col-span-3 lg:col-span-1">
              <span className="text-xs sm:text-sm text-foreground/70">Large (6+ in)</span>
              <div className="mt-1 font-heading text-2xl sm:text-3xl">6000+</div>
            </li>
          </ul>
          <div className="mt-6 sm:mt-8">
            <Link href="/contact" className="inline-block rounded-md bg-gradient-to-r from-primary to-accent px-4 py-2.5 sm:px-6 sm:py-3 font-semibold text-black shadow-[0_0_24px_rgba(20,244,212,0.35)] transition-all hover:scale-105 text-sm sm:text-base">Get a precise quote</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}