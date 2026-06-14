import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, AlertCircle, TrendingDown } from 'lucide-react';
import { GridPattern } from './GridPattern';
export function PriceDisparitySection() {
  const supportingPoints = [
  'Same product',
  'Same quality',
  'Better supplier leverage',
  'Verified cold-chain availability'];

  const otherQuotes = [
  {
    label: 'Current Supplier',
    price: '$38.42',
    status: 'Over market average',
    icon: AlertCircle,
    tone: 'text-[#C2861F]'
  },
  {
    label: 'Alternate Supplier',
    price: '$34.80',
    status: 'Better, but not optimized',
    icon: TrendingDown,
    tone: 'text-[#D69A3A]'
  }];

  return (
    <section
      id="price-section"
      className="relative w-full bg-[#F7F2E8] py-24 md:py-32 overflow-hidden">
      
      <GridPattern width={60} height={60} />
      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
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
            once: true,
            margin: '-80px'
          }}
          transition={{
            duration: 0.5,
            ease: 'easeOut'
          }}
          className="mx-auto max-w-2xl text-center">
          
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#C2861F]">
            Price Intelligence
          </span>
          <h2 className="font-heading text-balance text-3xl font-bold leading-tight text-[#10281D] md:text-4xl lg:text-5xl">
            Same ingredients. Different suppliers.{' '}
            <span className="text-[#D69A3A]">Hidden savings.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#10281D]/70">
            Restaurants often pay different prices for the same products without
            realizing it. Starfruit compares supplier pricing so operators can
            stop overpaying.
          </p>
        </motion.div>

        {/* Comparison Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 28,
            scale: 0.98
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          viewport={{
            once: true,
            margin: '-80px'
          }}
          transition={{
            duration: 0.55,
            ease: 'easeOut',
            delay: 0.1
          }}
          className="mt-12 md:mt-20">
          
          <div className="relative rounded-3xl border border-[#10281D]/10 bg-white shadow-2xl shadow-[#10281D]/5 overflow-hidden">
            <div className="grid gap-12 divide-y divide-[#10281D]/10 p-10 md:p-14 md:grid-cols-2 md:divide-x md:divide-y-0">
              {/* Left — Optimized price focus */}
              <div className="flex flex-col justify-center text-center md:pr-14">
                <div className="mx-auto inline-flex items-center gap-1.5 rounded-full bg-[#2F6B4F]/10 px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-[#2F6B4F]" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#2F6B4F]">
                    Starfruit Optimized
                  </h3>
                </div>
                <p className="mt-4 text-lg text-[#10281D]/70">
                  Best available price for the same order
                </p>

                <div className="mt-8 mb-2 flex items-baseline justify-center">
                  <span className="font-heading text-7xl font-bold tracking-tight text-[#2F6B4F]">
                    $27.16
                  </span>
                  <span className="ml-2 text-xl font-medium text-[#10281D]/50">
                    / plate
                  </span>
                </div>

                <div className="mx-auto mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2">
                  <TrendingDown
                    className="h-5 w-5 text-emerald-600"
                    strokeWidth={2.5} />
                  
                  <span className="font-bold text-emerald-800">
                    Savings Found: 29%
                  </span>
                </div>

                <p className="mt-6 text-sm text-[#10281D]/50">
                  Same order. Better supplier price.
                </p>
              </div>

              {/* Right — Results */}
              <div className="md:pl-14">
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#C2861F]">
                  Price Check Results
                </span>

                <ul role="list" className="mt-5 space-y-3.5">
                  {supportingPoints.map((item, index) =>
                  <li key={index} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2F6B4F]/10">
                        <Check
                        className="h-3.5 w-3.5 text-[#2F6B4F]"
                        strokeWidth={3} />
                      
                      </div>
                      <span className="text-[#10281D]/80">{item}</span>
                    </li>
                  )}
                </ul>

                <div className="mt-8 space-y-3">
                  {otherQuotes.map((q, i) => {
                    const Icon = q.icon;
                    return (
                      <div
                        key={i}
                        className="flex items-center justify-between rounded-2xl border border-[#10281D]/10 bg-[#F7F2E8]/60 px-5 py-4">
                        
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-[#10281D]/50">
                            {q.label}
                          </p>
                          <div
                            className={`mt-1 flex items-center gap-1.5 ${q.tone}`}>
                            
                            <Icon className="h-4 w-4" />
                            <span className="text-sm font-medium">
                              {q.status}
                            </span>
                          </div>
                        </div>
                        <span className="text-2xl font-bold text-[#10281D]">
                          {q.price}
                        </span>
                      </div>);

                  })}
                </div>
              </div>
            </div>

            {/* Bottom text link */}
            <div className="border-t border-[#10281D]/10 px-10 py-5 text-center md:px-14">
              <a
                href="#"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#2F6B4F] transition-colors hover:text-[#10281D] focus:outline-none focus-visible:underline">
                
                How Starfruit compares supplier pricing
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}