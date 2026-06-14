import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { Menu, X, ArrowRight } from 'lucide-react';
const menuItems = [
{
  name: 'Home',
  href: '#'
},
{
  name: 'Solution',
  href: '#'
},
{
  name: 'About',
  href: '#'
},
{
  name: 'Blog',
  href: '#'
}];

const LOGO_URL = "/new-logo.png";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 4);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header>
      <nav className="fixed z-50 w-full px-3 md:px-4 transition-all duration-300">
        <div
          className={`mx-auto mt-3 transition-all duration-300 ${isScrolled ? 'max-w-5xl rounded-2xl border border-[#10281D]/10 bg-[#F7F2E8]/80 px-4 backdrop-blur-xl shadow-lg shadow-[#10281D]/10' : 'max-w-[1440px] border border-transparent px-4 lg:px-12'}`}>
          
          <div className="relative flex flex-wrap items-center justify-between gap-3 py-3">
            {/* Logo + Wordmark */}
            <div className="flex w-full justify-between lg:w-auto">
              <a
                href="#"
                aria-label="Starfruit Express home"
                className="flex items-center gap-3">
                
                <img
                  src={LOGO_URL}
                  alt="Starfruit Express"
                  className="h-10 w-10 object-contain" />
                
                <div className="flex items-center gap-4">
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
                  <div className="h-10 w-[1px] bg-[#10281D]/20"></div>
                  <div className="flex flex-col font-sans text-[9px] font-medium text-[#7BA4C7] leading-tight">
                    <span>FOOD</span>
                    <span>PROCUREMENT</span>
                    <span>&amp; LOGISTICS</span>
                  </div>
                </div>
              </a>

              {/* Mobile Toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                className="relative z-20 block cursor-pointer p-2.5 text-[#2F6B4F] lg:hidden">
                
                {menuOpen ?
                <X className="size-6" /> :

                <Menu className="size-6" />
                }
              </button>
            </div>

            {/* Centered Nav */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex items-center gap-7">
                {menuItems.map((item) =>
                <li key={item.name}>
                    <a
                    href={item.href}
                    className="font-sans text-sm font-medium text-[#10281D]/80 hover:text-[#C2861F] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D69A3A]/60 rounded">
                    
                      {item.name}
                    </a>
                  </li>
                )}
              </ul>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button className="flex-col items-center h-auto font-sans bg-[#2F6B4F] text-white hover:bg-[#23523c] shadow-md transition-all hover:shadow-lg border-none rounded-lg px-4 py-2 leading-none gap-0.5">
                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#7BC79B]">
                  Free Consultation
                </span>
                <span className="flex items-center gap-1.5 text-sm font-semibold">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel (Full Width Dropdown) */}
        {menuOpen &&
        <div className="absolute left-0 top-full mt-2 w-full px-3 md:px-4 lg:hidden">
            <div className="mx-auto w-full rounded-2xl border border-[#10281D]/10 bg-[#F7F2E8] p-4 shadow-2xl">
              <ul className="space-y-2">
                {menuItems.map((item) =>
              <li key={item.name}>
                    <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 font-sans text-base font-medium text-[#10281D] hover:bg-[#10281D]/5 transition-colors">
                  
                      {item.name}
                    </a>
                  </li>
              )}
              </ul>
              <div className="mt-4 pt-4 border-t border-[#10281D]/10">
                <Button className="flex-col items-center w-full h-auto font-sans bg-[#2F6B4F] text-white hover:bg-[#23523c] border-none rounded-xl py-4 leading-none gap-1">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7BC79B]">
                    Free Consultation
                  </span>
                  <span className="flex items-center gap-2 text-base font-semibold">
                    Contact Us <ArrowRight className="w-5 h-5" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        }
      </nav>
    </header>);

}