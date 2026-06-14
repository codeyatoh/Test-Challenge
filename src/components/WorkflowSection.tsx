import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Scale, Sparkles, Truck, Snowflake } from 'lucide-react';
import { DotPattern } from './DotPattern';
export function WorkflowSection() {
  const steps = [
  {
    number: '01',
    title: 'Upload invoices',
    description: 'Send invoices, menus, supplier lists, and order history.',
    icon: Upload
  },
  {
    number: '02',
    title: 'Compare supplier pricing',
    description:
    'Find where you are overpaying and where better options exist.',
    icon: Scale
  },
  {
    number: '03',
    title: 'Optimize ordering',
    description:
    'Reduce waste, missed savings, and last-minute purchasing stress.',
    icon: Sparkles
  },
  {
    number: '04',
    title: 'Track fulfillment',
    description: 'Monitor refrigerated delivery, timing, and order status.',
    icon: Truck
  }];

  const connectorCount = steps.length - 1;
  const connectorDuration = 0.9;
  return (
    <section
      id="workflow-section"
      className="relative w-full bg-[#F7F2E8] py-24 md:py-32 overflow-hidden">
      
      <DotPattern width={32} height={32} cr={1.5} />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#C2861F]">
            How It Works
          </span>
          <h2 className="mb-6 font-heading text-4xl font-bold leading-tight text-[#10281D] md:text-5xl">
            From hidden costs to{' '}
            <span className="text-[#D69A3A]">controlled operations.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#10281D]/70 md:text-xl">
            Starfruit reviews your purchasing data, compares suppliers, improves
            ordering decisions, and helps keep fulfillment moving with less
            stress.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="relative mt-20">
          {/* Cursive background connector line (desktop) */}
          <div
            className="pointer-events-none absolute inset-x-0 -top-6 hidden lg:block"
            aria-hidden="true">
            
            <svg
              viewBox="0 0 1200 80"
              fill="none"
              preserveAspectRatio="none"
              className="h-20 w-full">
              
              <motion.path
                d="M40 50 C 180 0, 280 80, 420 40 S 680 0, 800 50 S 1060 80, 1160 30"
                stroke="#C2861F"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="1 8"
                initial={{
                  pathLength: 0,
                  opacity: 0
                }}
                whileInView={{
                  pathLength: 1,
                  opacity: 0.6
                }}
                viewport={{
                  once: true,
                  amount: 0.4
                }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut'
                }} />
              
            </svg>
          </div>

          <ol className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === steps.length - 1;
              return (
                <motion.li
                  key={step.number}
                  className="relative flex"
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
                    amount: 0.3
                  }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.12,
                    ease: 'easeOut'
                  }}>
                  
                  {/* Animated connection to the next card (desktop) */}
                  {!isLast &&
                  <div
                    className="pointer-events-none absolute top-1/2 z-10 hidden -translate-y-1/2 lg:block"
                    style={{
                      left: 'calc(100% + 0px)',
                      width: '1.75rem'
                    }}
                    aria-hidden="true">
                    
                      <svg
                      viewBox="0 0 40 12"
                      fill="none"
                      preserveAspectRatio="none"
                      className="h-3 w-full overflow-visible">
                      
                        {/* flowing dashed connector — lights up in sequence */}
                        <motion.line
                        x1="0"
                        y1="6"
                        x2="40"
                        y2="6"
                        stroke="#C2861F"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeDasharray="2 7"
                        animate={{
                          strokeDashoffset: [0, -18, -18],
                          opacity: [0.2, 1, 0.2]
                        }}
                        transition={{
                          duration: connectorDuration,
                          delay: i * connectorDuration,
                          repeat: Infinity,
                          repeatDelay:
                          (connectorCount - 1) * connectorDuration,
                          ease: 'linear'
                        }} />
                      
                        {/* moving pulse dot — travels card-to-card in sequence */}
                        <motion.circle
                        cy="6"
                        r="2.5"
                        fill="#2F6B4F"
                        animate={{
                          cx: [0, 40],
                          opacity: [0, 1, 1, 0]
                        }}
                        transition={{
                          duration: connectorDuration,
                          delay: i * connectorDuration,
                          repeat: Infinity,
                          repeatDelay:
                          (connectorCount - 1) * connectorDuration,
                          ease: 'easeInOut'
                        }} />
                      
                      </svg>
                    </div>
                  }

                  <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[1.75rem] border border-[#10281D]/10 bg-white p-7 shadow-xl shadow-[#10281D]/5">
                    <div className="mb-7 flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2F6B4F]/10 text-[#2F6B4F]">
                        <Icon className="h-6 w-6" strokeWidth={2} />
                      </div>
                      <span className="font-heading text-4xl font-bold leading-none text-[#10281D]/[0.08]">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mb-2.5 font-heading text-xl font-bold leading-snug text-[#10281D]">
                      {step.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[#10281D]/70">
                      {step.description}
                    </p>
                  </div>
                </motion.li>);

            })}
          </ol>
        </div>

        {/* Emergency cold delivery banner */}
        <motion.div
          className="relative mx-auto mt-14 max-w-3xl overflow-hidden rounded-[1.5rem] border border-[#7BA4C7]/25 bg-white px-7 py-5 shadow-lg shadow-[#10281D]/5"
          initial={{
            opacity: 0,
            y: 16
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            amount: 0.5
          }}
          transition={{
            duration: 0.5,
            ease: 'easeOut'
          }}>
          
          {/* soft cold accent */}
          <div className="pointer-events-none absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#7BA4C7]/10 blur-3xl" />

          <div className="relative flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#7BA4C7]/15">
              <motion.span
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'linear'
                }}>
                
                <Snowflake className="h-5 w-5 text-[#7BA4C7]" strokeWidth={2} />
              </motion.span>
            </div>
            <div>
              <span className="mb-0.5 block text-[11px] font-bold uppercase tracking-[0.18em] text-[#7BA4C7]">
                Always On Backup
              </span>
              <p className="text-[15px] font-medium leading-snug text-[#10281D]/85">
                Emergency cold delivery support available when the other guy
                comes up short.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}