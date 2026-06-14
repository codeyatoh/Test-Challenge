import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github } from 'lucide-react';
const LOGO_URL = "/new-logo.png";

export function FooterSection() {
  return (
    <footer className="relative z-10 mt-8 w-full overflow-hidden pt-16 pb-8 bg-[#F7F2E8]">
      <style dangerouslySetInnerHTML={{ __html: `
        .glass {
          backdrop-filter: blur(3px) saturate(180%);
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.6) 0%,
            rgba(214, 154, 58, 0.1) 60%,
            rgba(247, 242, 232, 0.8) 100%
          );
          border: 1px solid rgba(214, 154, 58, 0.3);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
          justify-content: center;
          align-items: center;
          transition: all 0.3s;
          display: flex;
        }
      `}} />
      <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-full -translate-x-1/2 select-none">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-[#D69A3A]/20 blur-3xl"></div>
        <div className="absolute right-1/4 -bottom-24 h-80 w-80 rounded-full bg-[#7BC79B]/20 blur-3xl"></div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: 28
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true,
          margin: '-60px'
        }}
        transition={{
          duration: 0.5,
          ease: 'easeOut'
        }}
        className="glass relative mx-auto flex max-w-6xl flex-col items-center gap-8 rounded-[2rem] px-8 py-12 md:flex-row md:items-start md:justify-between md:gap-12">
        
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="mb-6 flex flex-col items-start gap-2">
            <div className="flex items-center gap-3">
              <img
                src={LOGO_URL}
                alt="Starfruit Express"
                className="h-10 w-10 object-contain" />
              
              <div className="flex flex-col items-center leading-none">
                <span className="font-heading text-lg font-semibold tracking-tight text-[#7BC79B]">
                  Starfruit
                </span>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="h-[1px] w-3 bg-[#C2861F]/50"></div>
                  <span className="font-heading text-[10px] font-semibold text-[#C2861F]">
                    Express
                  </span>
                  <div className="h-[1px] w-3 bg-[#C2861F]/50"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-sans text-[9px] font-medium text-[#7BA4C7] leading-tight text-left mt-1">
              <span>FOOD PROCUREMENT &amp; LOGISTICS</span>
            </div>
          </a>
          <p className="text-[#10281D]/70 mb-6 max-w-xs text-center text-sm md:text-left">
            Starfruit helps restaurants simplify purchasing, compare supplier
            pricing, coordinate deliveries, and reduce operational stress from
            the supply chain.
          </p>
          <div className="mt-2 flex gap-4 text-[#7BC79B]">
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-[#D69A3A] transition">
              
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-[#D69A3A] transition">
              
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="hover:text-[#D69A3A] transition">
              
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
        <nav className="flex w-full flex-col gap-9 text-center md:w-auto md:flex-row md:justify-end md:text-left">
          <div>
            <div className="mb-3 text-xs font-semibold tracking-widest text-[#D69A3A] uppercase">
              Explore
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#10281D]/70 hover:text-[#D69A3A] transition-colors text-sm">
                  
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#10281D]/70 hover:text-[#D69A3A] transition-colors text-sm">
                  
                  Platform
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#10281D]/70 hover:text-[#D69A3A] transition-colors text-sm">
                  
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#10281D]/70 hover:text-[#D69A3A] transition-colors text-sm">
                  
                  Field Notes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#10281D]/70 hover:text-[#D69A3A] transition-colors text-sm">
                  
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs font-semibold tracking-widest text-[#D69A3A] uppercase">
              Solutions
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#10281D]/70 hover:text-[#D69A3A] transition-colors text-sm">
                  
                  Supplier Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#10281D]/70 hover:text-[#D69A3A] transition-colors text-sm">
                  
                  Purchasing Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#10281D]/70 hover:text-[#D69A3A] transition-colors text-sm">
                  
                  Cold Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#10281D]/70 hover:text-[#D69A3A] transition-colors text-sm">
                  
                  Restaurant Operations
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs font-semibold tracking-widest text-[#D69A3A] uppercase">
              Get in Touch
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:7863057470"
                  className="text-[#10281D]/70 hover:text-[#D69A3A] transition-colors text-sm">
                  
                  (786) 305-7470
                </a>
              </li>
              <li>
                <a
                  href="mailto:fresh@starfruitexpress.com"
                  className="text-[#10281D]/70 hover:text-[#D69A3A] transition-colors text-sm">
                  
                  fresh@starfruitexpress.com
                </a>
              </li>
              <li>
                <span className="text-[#10281D]/70 text-sm">Florida</span>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#10281D]/70 hover:text-[#D69A3A] transition-colors text-sm">
                  
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </motion.div>
      <div className="text-[#10281D]/70 relative z-10 mt-10 text-center text-xs">
        <span>
          &copy; 2026 Starfruit Express. All rights reserved. Made with 💚 in
          Florida
        </span>
      </div>
    </footer>);

}