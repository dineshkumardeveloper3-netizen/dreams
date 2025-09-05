'use client';

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  message: z.string().min(10, "Please provide more details about your tattoo idea"),
});

type BookingForm = z.infer<typeof bookingSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, control, formState: { errors } } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingForm) => {
    setIsSubmitting(true);

    const message = `*New Booking Request - Dream Inks Tattoo Studio*

*Name:* ${data.name}
*Phone:* ${data.phone}
*Service:* ${data.service}
*Preferred Date:* ${data.preferredDate}
*Preferred Time:* ${data.preferredTime}

*Message:*
${data.message}`;

    const whatsappLink = `https://wa.me/919176064815?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank");
    setIsSubmitting(false);
  };

  return (
    <div className="bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="container grid min-h-[50svh] items-center gap-6 sm:gap-8 md:gap-10 py-8 sm:py-12 md:py-20 pt-20 sm:pt-24 md:pt-28">
        <div>
          <p className="text-accent/90 tracking-widest text-xs sm:text-sm">LET'S TALK</p>
          <h1 className="font-heading text-3xl leading-[0.9] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            CONTACT
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              START YOUR JOURNEY
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 max-w-2xl text-foreground/80 text-base sm:text-lg">
            Got a question? Ready to book your tattoo? Drop us a message below—our team will guide you every step of the way.
          </p>
        </div>
        <div className="relative h-[30vh] sm:h-[40vh] w-full overflow-hidden rounded-xl md:h-[60vh] order-first md:order-last">
  <div
    className="absolute inset-0 bg-fixed bg-cover bg-center"
    style={{ backgroundImage: "url(/co.webp)" }}
  />
  <div className="absolute inset-0 bg-[url('/co.webp')] bg-cover bg-center bg-no-repeat from-black/60 to-transparent" />
</div>

      </section>

      {/* Form + Info */}
      <section className="container py-8 sm:py-12 md:py-16 bg-gray-900">
        <div className="mx-auto grid max-w-5xl gap-6 sm:gap-8 md:gap-10 lg:grid-cols-2">

          {/* BOOKING FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-secondary/30 border border-border/60 shadow-2xl backdrop-blur h-fit">
              <CardHeader className="text-center">
                <CardTitle className="text-xl sm:text-2xl">Book Your Appointment</CardTitle>
                <CardDescription className="text-sm sm:text-base text-foreground/70">
                  Fill out the form below and we'll redirect you to WhatsApp
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm">Full Name</Label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="Enter your name"
                        className="text-sm"
                        aria-invalid={errors.name ? "true" : "false"}
                      />
                      {errors.name && <p role="alert" className="text-destructive text-xs sm:text-sm">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm">Phone Number</Label>
                      <Input
                        id="phone"
                        {...register("phone")}
                        placeholder="+91 XXXXX XXXXX"
                        className="text-sm"
                        aria-invalid={errors.phone ? "true" : "false"}
                      />
                      {errors.phone && <p role="alert" className="text-destructive text-xs sm:text-sm">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm" htmlFor="service">Service</Label>
                    <Controller
                      name="service"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value} disabled={isSubmitting}>
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Select a service" className="text-sm" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="custom-tattoo">Custom Tattooing</SelectItem>
                            <SelectItem value="piercing">Professional Piercing</SelectItem>
                            <SelectItem value="consultation">Design Consultation</SelectItem>
                            <SelectItem value="touch-up">Touch-up/Repair</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.service && <p role="alert" className="text-destructive text-xs sm:text-sm">{errors.service.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate" className="text-sm">Preferred Date</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        {...register("preferredDate")}
                        className="text-white [color-scheme:dark] text-sm"
                        aria-invalid={errors.preferredDate ? "true" : "false"}
                        disabled={isSubmitting}
                      />
                      {errors.preferredDate && <p role="alert" className="text-destructive text-xs sm:text-sm">{errors.preferredDate.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm" htmlFor="preferredTime">Preferred Time</Label>
                      <Controller
                        name="preferredTime"
                        control={control}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value} disabled={isSubmitting}>
                            <SelectTrigger id="preferredTime">
                              <SelectValue placeholder="Select time" className="text-sm" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                              <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                              <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                              <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                              <SelectItem value="6:00 PM">6:00 PM</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.preferredTime && <p role="alert" className="text-destructive text-xs sm:text-sm">{errors.preferredTime.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm">Tell us about your tattoo idea</Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Describe your tattoo idea, size, placement, style preferences, etc."
                      className="min-h-[100px] sm:min-h-[120px] text-sm"
                      aria-invalid={errors.message ? "true" : "false"}
                      disabled={isSubmitting}
                    />
                    {errors.message && <p role="alert" className="text-destructive text-xs sm:text-sm">{errors.message.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full rounded-md bg-gradient-to-r from-primary to-accent px-4 py-2.5 sm:py-3 text-black font-semibold shadow-[0_0_20px_rgba(20,244,212,0.35)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(124,58,237,0.55)] text-sm sm:text-base"
                    aria-live="polite"
                  >
                    {isSubmitting ? "Sending..." : "Send Booking Request"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Studio Info */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-xl border border-border/60">
              <iframe
                title="Studio Location"
                className="w-full h-72 rounded-lg shadow-md"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7390.658496449523!2d80.259369!3d12.991742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52670dfef5777d%3A0xe2f2a27b8b8df546!2sDream%20Inks%20Tattoo%20Studio!5e1!3m2!1sen!2sin!4v1756631876514!5m2!1sen!2sin"
                allowFullScreen
              ></iframe>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="relative">
                  <span className="block h-3 w-3 rounded-full bg-primary animate-bounce shadow-[0_0_20px_rgba(20,244,212,0.6)]" />
                  <span className="absolute -inset-3 rounded-full bg-primary/20 blur-lg" />
                </span>
              </div>
            </div>

            <ul className="text-sm sm:text-base text-foreground/80 space-y-1">
              <li>Open Mon–Sat · 10am – 8pm</li>
              <li>Email: hello@dreaminks.studio</li>
              <li>Phone: +91 91760 64815</li>
              <li>Address: 7/9, Sriram Nagar Main Rd, Thiruvanmiyur, Chennai, Tamil Nadu 600041</li>
            </ul>

            <div className="flex gap-3 sm:gap-4 text-foreground/80">
              <a href="#" aria-label="Instagram" className="transition-all hover:text-primary hover:drop-shadow-[0_0_16px_rgba(20,244,212,0.6)]">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" aria-label="Facebook" className="transition-all hover:text-primary hover:drop-shadow-[0_0_16px_rgba(20,244,212,0.6)]">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" aria-label="Twitter" className="transition-all hover:text-primary hover:drop-shadow-[0_0_16px_rgba(20,244,212,0.6)]">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="https://wa.me/919176064815" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp"
                className="transition-all hover:text-primary hover:drop-shadow-[0_0_16px_rgba(20,244,212,0.6)] animate-float"
              >
                <FaWhatsapp size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
