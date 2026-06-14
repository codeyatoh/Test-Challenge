import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { Header } from './Header';
import { ArrowRight } from 'lucide-react';
export function StarfruitHero() {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 24
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  return (
    <section
      id="hero-section"
      className="relative w-full h-[100dvh] min-h-[700px] overflow-hidden flex flex-col selection:bg-[#D69A3A]/30 selection:text-[#071712]">
      
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-bottom bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url("https://cdn.magicpatterns.com/uploads/r63KecvRfj9v3VZTjB8Nch/5b74889c-9be2-47fa-a8c9-1f87f221e209.png")`
        }}
        role="img"
        aria-label="Warm cream orchard background with apples and soft golden glow" />
      

      {/* Soft translucent cream overlay behind the center text for readability */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(247,242,232,0.85)_0%,rgba(247,242,232,0.4)_40%,transparent_70%)]" />

      {/* Navigation Bar */}
      <Header />

      {/* Main Hero Content */}
      <main className="relative z-10 flex-1 w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center px-6 pb-24 lg:pb-32">
        {/* Centered Content Block */}
        <div className="flex flex-col items-center text-center max-w-[800px]">
          <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#C9782A] mb-6">
            We Handle More Of
          </span>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-[#10281D] mb-8">
            <span className="text-[#D69A3A] italic pr-2">The Hard Part</span>
            <br />
            So You Don’t Have To
          </h1>

          <p className="font-sans text-lg md:text-xl text-[#10281D]/80 leading-relaxed max-w-[600px] mb-10">
            We help restaurants handle purchasing, supplier pricing, and
            delivery coordination — so your team can focus on running the
            kitchen.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              size="lg"
              className="h-14 px-8 font-sans text-base font-semibold bg-[#2F6B4F] text-white hover:bg-[#23523c] shadow-[0_8px_20px_rgba(47,107,79,0.25)] hover:shadow-[0_12px_25px_rgba(47,107,79,0.35)] transition-all hover:-translate-y-0.5 rounded-xl border-none gap-2">
              
              Talk With Our Team <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 font-sans text-base font-medium border-[#10281D]/20 text-[#10281D] bg-[#F7F2E8]/60 hover:bg-[#F7F2E8]/90 backdrop-blur-sm transition-all rounded-xl">
              
              See How It Works
            </Button>
          </div>
        </div>

        {/* Left Support Block */}
        <motion.div
          initial={{
            opacity: 0,
            x: -16
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
            delay: 0.5
          }}
          className="hidden lg:flex absolute left-12 xl:left-20 top-1/2 -translate-y-1/2 flex-col max-w-[240px] text-left">
          
          <div className="w-8 h-px bg-[#D69A3A]/50 mb-4" />
          <h3 className="font-sans text-xs font-bold tracking-[0.15em] uppercase text-[#10281D] mb-3">
            More Than Logistics
          </h3>
          <p className="font-sans text-sm text-[#10281D]/70 leading-relaxed">
            We help manage the moving parts behind your daily restaurant
            operations.
          </p>
        </motion.div>

        {/* Right Support Block */}
        <motion.div
          initial={{
            opacity: 0,
            x: 16
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
            delay: 0.5
          }}
          className="hidden lg:flex absolute right-12 xl:right-20 top-1/2 -translate-y-1/2 flex-col max-w-[240px] text-right items-end">
          
          <div className="w-8 h-px bg-[#D69A3A]/50 mb-4" />
          <h3 className="font-sans text-xs font-bold tracking-[0.15em] uppercase text-[#10281D] mb-3">
            Built For Profit
          </h3>
          <p className="font-sans text-sm text-[#10281D]/70 leading-relaxed">
            Better pricing, smoother delivery, and less operational stress.
          </p>
        </motion.div>
      </main>
    </section>);

}