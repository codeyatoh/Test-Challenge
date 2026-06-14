import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { DotPattern } from './DotPattern';
export function ProblemSection() {
  const withoutStarfruit = [
  'Approve supplier substitutions manually',
  'Track delivery delays across texts and calls',
  'Catch price mismatches after the fact',
  'Deal with out-of-stock ingredients mid-shift',
  'Review broken spreadsheets and missing information',
  'Juggle vendors, invoices, and inventory in separate tools'];

  const withStarfruit = [
  'Orders grouped in one workflow',
  'Supplier status visible in one place',
  'Delivery timing tracked clearly',
  'Invoice mismatches surfaced early',
  'Inventory issues easier to respond to',
  'Recommended next actions reduce team stress'];

  return (
    <section
      id="problem-section"
      className="relative w-full bg-[#F7F2E8] py-24 md:py-32 overflow-hidden">
      
      <DotPattern width={24} height={24} cr={1.5} />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header Section */}
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
          className="mx-auto max-w-3xl text-center">
          
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#C2861F]">
            The Operational Friction
          </span>
          <h2 className="mb-6 font-heading text-4xl font-bold leading-tight text-[#10281D] md:text-5xl lg:text-6xl">
            Your restaurant is not disorganized.
            <br className="hidden md:block" />{' '}
            <span className="text-[#D69A3A]">Your tools are.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#10281D]/70 md:text-xl">
            Vendor texts, delivery delays, invoice mismatches, price changes,
            and out-of-stock items all happen at once. Starfruit turns scattered
            restaurant operations into one calm workflow.
          </p>
        </motion.div>

        {/* Comparison Cards */}
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
            ease: 'easeOut',
            delay: 0.1
          }}
          className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          
          {/* Without Starfruit Card */}
          <div className="flex flex-col rounded-[2rem] border border-[#10281D]/5 bg-white p-8 shadow-xl shadow-[#10281D]/5 md:p-12 transition-transform hover:-translate-y-1 duration-300">
            <div className="mb-8 border-b border-[#10281D]/5 pb-8">
              <h3 className="mb-2 font-heading text-2xl font-bold text-[#10281D] md:text-3xl">
                Without Starfruit
              </h3>
              <p className="text-base font-medium text-[#C2861F]">
                Scattered operations, constant interruptions
              </p>
            </div>
            <ul className="flex flex-col gap-6">
              {withoutStarfruit.map((item, i) =>
              <li key={i} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-50">
                    <X className="h-4 w-4 text-orange-500" strokeWidth={2.5} />
                  </div>
                  <span className="text-[17px] leading-snug text-[#10281D]/80">
                    {item}
                  </span>
                </li>
              )}
            </ul>
          </div>

          {/* With Starfruit Card */}
          <div className="flex flex-col rounded-[2rem] border border-[#10281D]/5 bg-white p-8 shadow-xl shadow-[#10281D]/5 md:p-12 transition-transform hover:-translate-y-1 duration-300">
            <div className="mb-8 border-b border-[#10281D]/5 pb-8">
              <h3 className="mb-2 font-heading text-2xl font-bold text-[#2F6B4F] md:text-3xl">
                With Starfruit
              </h3>
              <p className="text-base font-medium text-[#2F6B4F]/70">
                One calm workflow for restaurant operations
              </p>
            </div>
            <ul className="flex flex-col gap-6">
              {withStarfruit.map((item, i) =>
              <li key={i} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                    <Check
                    className="h-4 w-4 text-emerald-600"
                    strokeWidth={2.5} />
                  
                  </div>
                  <span className="text-[17px] leading-snug text-[#10281D]/80">
                    {item}
                  </span>
                </li>
              )}
            </ul>
          </div>
        </motion.div>

        {/* Explanatory Content Below Cards */}
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
            ease: 'easeOut',
            delay: 0.15
          }}
          className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          
          <div>
            <h4 className="mb-4 font-heading text-2xl font-bold text-[#10281D]">
              Who is this friction affecting?
            </h4>
            <p className="text-lg leading-relaxed text-[#10281D]/70">
              This problem affects restaurant owners, operators, kitchen
              managers, and teams who are trying to keep service running while
              dealing with supplier messages, pricing issues, delivery problems,
              and inventory gaps. The restaurant is not the problem — the
              fragmented tools are.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-heading text-2xl font-bold text-[#10281D]">
              Why this difference matters
            </h4>
            <p className="text-lg leading-relaxed text-[#10281D]/70">
              When purchasing, supplier communication, deliveries, and invoice
              reviews are spread across disconnected systems, small issues
              become daily stress. Starfruit helps bring these moving parts
              together, so restaurant teams spend less time reacting and more
              time running the kitchen.
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

}