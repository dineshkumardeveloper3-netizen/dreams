"use client";

import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useInView } from '@/hooks/use-in-view';

function HomePage() {
  const hero = useInView<HTMLDivElement>();
  const about = useInView<HTMLDivElement>();
  const services = useInView<HTMLDivElement>();
  const gallery = useInView<HTMLDivElement>();

  return (
    <div className="bg-background text-foreground">
      <Navigation />
      
      {/* Hero - split layout */}
      <section ref={hero.ref} className="container grid min-h-[92svh] items-center gap-6 py-8 sm:gap-8 sm:py-12 md:grid-cols-2 md:gap-10 md:py-20 pt-16 sm:pt-20">
        <div className={`${hero.inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-accent/90 tracking-widest text-xs sm:text-sm">YOUR SKIN, OUR CANVAS</p>
          <h1 className="font-heading text-3xl leading-[0.9] sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl">
            DREAM INKS
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">TATTOO STUDIO</span>
          </h1>
          <p className="mt-4 text-base sm:mt-6 sm:text-lg md:text-xl text-foreground/90 max-w-2xl">
            Masterful Artistry. Unique Designs. Tattoos that Last.
          </p>
          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto rounded-md bg-gradient-to-r from-primary to-accent px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-black shadow-[0_0_28px_rgba(20,244,212,0.35)] transition-all hover:scale-105 hover:shadow-[0_0_48px_rgba(124,58,237,0.55)] text-center"
            >
              Book Your Session
            </Link>
            <a
              href="#about"
              className="w-full sm:w-auto rounded-md border border-border/60 bg-secondary/50 px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-foreground/90 transition-all hover:bg-secondary/70 hover:text-foreground text-center"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="relative h-[30vh] sm:h-[40vh] w-full overflow-hidden rounded-xl md:h-[70vh] order-first md:order-last">
          <Image
  src="/tatoo-0.webp" 
  alt="Tattoo artist at work"
  fill
  className="object-cover"
  priority
/>

          <div
  className="absolute inset-0 bg-[url('/tatoo-0.webp')] bg-cover bg-center bg-no-repeat from-black/60 to-transparent"
/>

        </div>
      </section>

      {/* About preview */}
      <section id="about" ref={about.ref} className="container py-12 sm:py-16 md:py-20 lg:py-28 bg-black-150">
        <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-2 md:items-center">
          <div className={`${about.inView ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">It's more than ink.</h2>
            <p className="mt-3 sm:mt-4 md:mt-5 text-foreground/80 text-base sm:text-lg leading-relaxed">
              At Dream Inks Tattoo Studio, it's not just about ink. It's about creating memories, expressing who you are, and leaving a lasting mark on the world. Our artists combine creativity, skill, and passion to create tattoos that will stay with you forever.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/about" className="rounded-md border border-border/60 px-4 py-2 sm:px-5 sm:py-2.5 hover:bg-secondary/60 transition-colors text-center text-sm sm:text-base">Meet the artists</Link>
              <a href="#services" className="rounded-md px-4 py-2 sm:px-5 sm:py-2.5 bg-accent text-accent-foreground font-semibold transition-all hover:scale-105 hover:shadow-[0_0_28px_rgba(124,58,237,0.45)] text-center text-sm sm:text-base">Explore services</a>
            </div>
          </div>
          <div className={`grid grid-cols-2 gap-3 sm:gap-4 ${about.inView ? "animate-fade-in-up" : "opacity-0"}`} style={{animationDelay: about.inView?"120ms":"0ms"}}>
            <div className="group relative overflow-hidden rounded-lg">
             <Image 
  src="/sneak.webp" 
  alt="Tattoo details" 
  width={300}
  height={256}
  className="h-32 sm:h-48 md:h-64 w-full object-contain transition-transform duration-500 group-hover:scale-105 bg-black" 
/>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="group relative overflow-hidden rounded-lg">
            <Image 
  src="/its.webp" 
  alt="Tattoo details" 
  width={300}
  height={256}
  className="h-32 sm:h-48 md:h-64 w-full object-contain transition-transform duration-500 group-hover:scale-105 bg-black" 
/>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Services highlight with parallax */}
      <section
  id="services"
  ref={services.ref}
  className="relative bg-fixed bg-cover bg-center"
  style={{
    backgroundImage: "url('/indexbg1.webp')",
  }}
>

        <div className="absolute inset-0 bg-black/70 bg-[url('/indexbg1.webp')] bg-cover bg-center bg-no-repeat" />
        <div className="container relative z-10 py-16 sm:py-20 md:py-24 lg:py-32">
          <div className={`max-w-3xl ${services.inView ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Custom work. Cover-ups. Consultations.</h2>
            <p className="mt-3 sm:mt-4 md:mt-5 text-base sm:text-lg text-foreground/90">
              From bespoke designs to revitalizing old ink, our studio crafts pieces with precision and care. Book a free consultation and start your journey.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#services" className="rounded-md bg-gradient-to-r from-primary to-accent px-4 py-2.5 sm:px-6 sm:py-3 font-semibold text-black shadow-[0_0_28px_rgba(20,244,212,0.35)] transition-all hover:scale-105 hover:shadow-[0_0_48px_rgba(124,58,237,0.55)] text-center text-sm sm:text-base">View Services</a>
              <Link href="/contact" className="rounded-md border border-border/60 bg-secondary/50 px-4 py-2.5 sm:px-6 sm:py-3 font-semibold hover:bg-secondary/70 transition-colors text-center text-sm sm:text-base">Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section ref={gallery.ref} className="container py-12 sm:py-16 md:py-20 lg:py-28 bg-black">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-6">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Gallery</h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-foreground/80">Each piece tells a story. Dive into our world of ink.</p>
          </div>
          <Link href="/gallery" className="hidden sm:inline-flex rounded-md px-4 py-2 sm:px-5 sm:py-2.5 bg-secondary/60 hover:bg-secondary/80 transition-colors text-sm sm:text-base">View all</Link>
        </div>
        <div className={`mt-6 sm:mt-8 md:mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 ${gallery.inView ? "animate-fade-in-up" : "opacity-0"}`}>
          {[
            {
              src: "/tattoo-1.webp",
              alt: "Neo-traditional rose",
              label: "Neo-Traditional",
            },
            {
              src: "/tattoo-2.webp",
              alt: "Blackwork sleeve",
              label: "Blackwork",
            },
            {
              src: "/tattoo-3.webp",
              alt: "Watercolor tattoo",
              label: "Watercolor",
            },
            {
              src: "/tattoo-4.webp",
              alt: "Realism portrait",
              label: "Realism",
            },
          ].map((item) => (
            <div key={item.src} className="group relative overflow-hidden rounded-lg">
              <Image 
                src={item.src} 
                alt={item.alt} 
                width={300}
                height={240}
                className="h-32 sm:h-40 md:h-44 lg:h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-x-0 bottom-0 translate-y-6 p-2 sm:p-3 md:p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="inline-block rounded bg-gradient-to-r from-primary to-accent px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs font-semibold text-black shadow-[0_0_20px_rgba(20,244,212,0.35)]">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 sm:mt-8 sm:hidden">
          <Link href="/gallery" className="inline-flex rounded-md px-4 py-2 sm:px-5 sm:py-2.5 bg-secondary/60 hover:bg-secondary/80 transition-colors text-sm">View all</Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_-10%,rgba(20,244,212,0.12),transparent)]" />
        <div className="container relative py-12 sm:py-16">
          <div className="flex flex-col items-center text-center">
            <h3 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Ready to bring your vision to life?</h3>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-foreground/80 max-w-2xl px-4">Book your session today and let our artists craft something unforgettable.</p>
            <Link href="/contact" className="mt-4 sm:mt-6 rounded-md bg-gradient-to-r from-primary to-accent px-4 py-2.5 sm:px-6 sm:py-3 text-black font-semibold shadow-[0_0_28px_rgba(20,244,212,0.35)] transition-all hover:scale-105 hover:shadow-[0_0_48px_rgba(124,58,237,0.55)] text-sm sm:text-base">
              Book Your Session
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function Home() {
  return <HomePage />;
}