import React, { useState, lazy } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, Calendar, ArrowRight, ChevronRight } from 'lucide-react';
import { GridPattern } from './GridPattern';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious } from
'../components/ui/glass/pagination';
export function FieldNotesSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = [
  'All',
  'Logistics',
  'Pricing',
  'Cold Chain',
  'Supplier Strategy',
  'Restaurant Operations',
  'Sustainability'];

  const usefulReads = [
  {
    title: 'How to reduce last-minute delivery stress',
    category: 'Cold Chain',
    readTime: '4 min read'
  },
  {
    title: 'What restaurant owners should know about supplier pricing',
    category: 'Supplier Strategy',
    readTime: '6 min read'
  },
  {
    title: 'Why reliable fulfillment protects restaurant profit',
    category: 'Logistics',
    readTime: '3 min read'
  }];

  const bottomArticles = [
  {
    title: 'The hidden cost of scattered restaurant operations',
    category: 'Restaurant Operations',
    readTime: '4 min read',
    date: 'Nov 22, 2025',
    image:
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    alt: 'Busy restaurant kitchen during service'
  },
  {
    title: 'How better purchasing decisions improve margins',
    category: 'Pricing',
    readTime: '5 min read',
    date: 'Nov 18, 2025',
    image:
    'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80',
    alt: 'Fresh produce at a market'
  },
  {
    title: 'Cold-chain delivery mistakes that create daily stress',
    category: 'Cold Chain',
    readTime: '3 min read',
    date: 'Nov 12, 2025',
    image:
    'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
    alt: 'Refrigerated delivery boxes being loaded'
  }];

  return (
    <section
      id="fieldnotes-section"
      className="relative w-full bg-[#F7F2E8] py-24 md:py-32 overflow-hidden">
      
      <GridPattern width={40} height={40} />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{
              opacity: 0,
              y: 10
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#C2861F]">
            
            Field Notes
          </motion.span>
          <motion.h2
            initial={{
              opacity: 0,
              y: 10
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="mb-6 font-heading text-4xl font-bold leading-tight text-[#10281D] md:text-5xl">
            
            Field Notes for smarter{' '}
            <span className="text-[#D69A3A]">restaurant operations.</span>
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 10
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.2
            }}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-[#10281D]/70 md:text-xl">
            
            Practical reads on supplier pricing, cold-chain delivery, restaurant
            logistics, purchasing systems, and the decisions that keep kitchens
            moving.
          </motion.p>
        </div>

        {/* Search & Filters */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: 0.3
          }}
          className="mt-12 flex flex-col items-center justify-center gap-6 md:mt-16">
          
          {/* Search Bar */}
          <div className="relative w-full max-w-xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <Search className="h-5 w-5 text-[#10281D]/40" />
            </div>
            <input
              type="text"
              placeholder="Search articles, tags, or topics..."
              className="w-full rounded-full border border-[#10281D]/10 bg-white py-3.5 pl-11 pr-4 text-[15px] text-[#10281D] placeholder:text-[#10281D]/40 focus:border-[#2F6B4F] focus:outline-none focus:ring-1 focus:ring-[#2F6B4F] shadow-sm transition-all" />
            
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {filters.map((filter) =>
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${activeFilter === filter ? 'bg-[#2F6B4F] text-white shadow-md' : 'bg-white border border-[#10281D]/10 text-[#10281D]/70 hover:border-[#2F6B4F]/30 hover:text-[#10281D]'}`}>
              
                {filter}
              </button>
            )}
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Side: Featured Article */}
          <motion.div
            initial={{
              opacity: 0,
              y: 24
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.4
            }}
            className="lg:col-span-7">
            
            <a
              href="#"
              className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#10281D]/10 bg-white shadow-xl shadow-[#10281D]/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F6B4F]/30 hover:shadow-2xl hover:shadow-[#2F6B4F]/10">
              
              {/* Featured Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F7F2E8]">
                <img
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80"
                  alt="Restaurant purchasing and invoice review"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy" />
                
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#10281D]/15 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-8 md:p-10">
                <div className="mb-4 flex flex-wrap items-center gap-4 text-sm">
                  <span className="inline-flex items-center rounded-full bg-[#2F6B4F]/10 px-3 py-1 font-bold uppercase tracking-wider text-[#2F6B4F] text-[11px]">
                    Pricing Intelligence
                  </span>
                  <div className="flex items-center gap-1.5 text-[#10281D]/50">
                    <Clock className="h-3.5 w-3.5" />
                    <span>5 min read</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#10281D]/50">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Nov 28, 2025</span>
                  </div>
                </div>

                <h3 className="mb-4 font-heading text-2xl font-bold leading-snug text-[#10281D] transition-colors group-hover:text-[#2F6B4F] md:text-3xl">
                  The quiet profit leaks hiding inside restaurant purchasing
                </h3>
                <p className="mb-6 text-[15px] leading-relaxed text-[#10281D]/70 md:text-base">
                  Small pricing gaps, invoice mismatches, and supplier changes
                  can quietly reduce restaurant margins. Here’s how better
                  visibility helps operators stay ahead.
                </p>

                <div className="mt-auto flex items-center gap-2 font-medium text-[#2F6B4F]">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          </motion.div>

          {/* Right Side: Most Useful Reads */}
          <motion.div
            initial={{
              opacity: 0,
              y: 24
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.5
            }}
            className="flex flex-col lg:col-span-5">
            
            <h3 className="mb-6 font-heading text-xl font-bold text-[#10281D]">
              Most useful reads
            </h3>
            <div className="flex flex-col gap-4">
              {usefulReads.map((article, i) =>
              <a
                key={i}
                href="#"
                className="group flex flex-col justify-center rounded-[1.25rem] border border-[#10281D]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2F6B4F]/30 hover:shadow-md">
                
                  <div className="mb-3 flex items-center gap-3 text-xs">
                    <span className="font-bold uppercase tracking-wider text-[#C2861F]">
                      {article.category}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-[#10281D]/20" />
                    <span className="flex items-center gap-1 text-[#10281D]/50">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-heading text-lg font-bold leading-snug text-[#10281D] transition-colors group-hover:text-[#2F6B4F]">
                      {article.title}
                    </h4>
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F7F2E8] text-[#10281D]/40 transition-colors group-hover:bg-[#2F6B4F]/10 group-hover:text-[#2F6B4F]">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </a>
              )}
            </div>

            {/* View all link */}
            <div className="mt-8">
              <a
                href="#"
                className="group inline-flex items-center gap-2 text-[15px] font-medium text-[#10281D]/70 transition-colors hover:text-[#2F6B4F]">
                
                View all field notes
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Area: 3 Smaller Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {bottomArticles.map((article, i) =>
          <motion.a
            key={i}
            href="#"
            initial={{
              opacity: 0,
              y: 24
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.6 + i * 0.1
            }}
            className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-[#10281D]/10 bg-white shadow-lg shadow-[#10281D]/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F6B4F]/30 hover:shadow-xl hover:shadow-[#2F6B4F]/10">
            
              {/* Small Image */}
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-[#F7F2E8]">
                <img
                src={article.image}
                alt={article.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy" />
              
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center rounded-full bg-[#2F6B4F]/10 px-2.5 py-0.5 font-bold uppercase tracking-wider text-[#2F6B4F] text-[10px]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-[#10281D]/50">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                </div>

                <h4 className="mb-4 font-heading text-lg font-bold leading-snug text-[#10281D] transition-colors group-hover:text-[#2F6B4F]">
                  {article.title}
                </h4>

                <div className="mt-auto flex items-center justify-between border-t border-[#10281D]/5 pt-4 text-sm text-[#10281D]/50">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{article.date}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 group-hover:text-[#2F6B4F]" />
                </div>
              </div>
            </motion.a>
          )}
        </div>

        {/* Pagination */}
        <motion.div
          initial={{
            opacity: 0,
            y: 16
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: 0.2
          }}
          className="mt-14 flex justify-center">
          
          <div className="inline-flex rounded-lg bg-white/60 backdrop-blur-sm border border-[#10281D]/10 p-1 shadow-sm">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </motion.div>
      </div>
    </section>);

}