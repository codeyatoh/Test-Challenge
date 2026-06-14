import React, { useEffect, useState } from 'react';
import { X, ArrowRightLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider } from
'./ImageComparison';
const COMPARISON_DATA = {
  hero: {
    buttonLabel: 'See Hero Comparison',
    officialImage: "/Starfruit-Express-Test-Challenge_1.png",

    redesignImage: "/Starfruit-Express-Test-Challenge.png",

    explanation:
    'I kept the original structure because it already feels premium and on-brand, but I improved the content so it speaks more clearly to the user. Instead of broad statements, I used simpler and more direct copy to explain what Starfruit actually helps restaurants with. This makes the section more understandable, more useful, and more effective without losing the elegance of the original design.'
  },
  problem: {
    buttonLabel: 'See Problem Comparison',
    officialImage: "/Starfruit-Express-Test-Challenge_1-1.png",

    redesignImage: "/pasted-image.png",

    explanation:
    'I wanted this section to feel easier for a restaurant owner to understand. The original design is visually strong, but there are many elements happening at the same time. I redesigned it into a simple before-and-after comparison so users can quickly understand the daily problems restaurants face and how Starfruit helps organize them. The goal was to make the message clearer, cleaner, and less overwhelming while still keeping the premium look of the brand.'
  },
  price: {
    buttonLabel: 'See Price Comparison',
    officialImage: "/Starfruit-Express-Test-Challenge_1-2.png",

    redesignImage: "/Starfruit-Express-Test-Challenge-1.png",

    explanation:
    'I kept the main idea of the original section because the price comparison is already strong, but I redesigned it to make the savings story clearer. Instead of only showing "without Starfruit" and "with Starfruit," I added supplier price context so users can better understand where the lower price comes from. The goal was to make the section feel more transparent, easier to trust, and still clean and premium.'
  },
  workflow: {
    buttonLabel: 'See How It Works Comparison',
    officialImage: "/Starfruit-Express-Test-Challenge_1-3.png",

    redesignImage: "/Starfruit-Express-Test-Challenge-2.png",

    explanation:
    'I wanted this section to feel easier to understand, especially for restaurant owners who want to know how the service actually works. The original design is nice, but I felt the process could be more direct. So I redesigned it into four clear steps: upload invoices, compare supplier pricing, optimize ordering, and track fulfillment. This makes the section feel more practical, organized, and closer to a real restaurant operations platform.'
  },
  fieldnotes: {
    buttonLabel: 'See Field Notes Comparison',
    officialImage: "/pasted-image-1.png",

    redesignImage: "/pasted-image-2.png",

    explanation:
    'I wanted the blog section to feel less like a regular list of articles and more like a helpful knowledge hub for restaurant operators. The original design is clean, but there are many articles shown at once, so the user may not know where to start. I redesigned it by highlighting one main article, adding useful filters, and creating a "Most useful reads" section. This makes the content easier to explore and gives the page a more premium, curated feel.'
  }
};
export function ComparisonWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<
    'hero' | 'problem' | 'price' | 'workflow' | 'fieldnotes'>(
    'hero');
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'hero-section') {
              setActiveSection('hero');
            } else if (entry.target.id === 'problem-section') {
              setActiveSection('problem');
            } else if (entry.target.id === 'price-section') {
              setActiveSection('price');
            } else if (entry.target.id === 'workflow-section') {
              setActiveSection('workflow');
            } else if (entry.target.id === 'fieldnotes-section') {
              setActiveSection('fieldnotes');
            }
          }
        });
      },
      {
        threshold: 0.3
      }
    );
    const heroEl = document.getElementById('hero-section');
    const problemEl = document.getElementById('problem-section');
    const priceEl = document.getElementById('price-section');
    const workflowEl = document.getElementById('workflow-section');
    const fieldNotesEl = document.getElementById('fieldnotes-section');
    if (heroEl) observer.observe(heroEl);
    if (problemEl) observer.observe(problemEl);
    if (priceEl) observer.observe(priceEl);
    if (workflowEl) observer.observe(workflowEl);
    if (fieldNotesEl) observer.observe(fieldNotesEl);
    return () => observer.disconnect();
  }, []);
  const currentData = COMPARISON_DATA[activeSection];
  return (
    <>
      {/* Floating Button */}
      <div className="fixed right-6 bottom-6 z-50 flex items-end gap-2 pointer-events-none">
        {/* Animated Arrow and Text */}
        <div className="flex flex-col items-end pb-8 hidden md:flex">
          <motion.span
            key={`text-${activeSection}`}
            initial={{
              opacity: 0,
              y: 5
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.8,
              duration: 0.4
            }}
            className="font-cursive text-2xl text-[#10281D] mb-1 mr-4 drop-shadow-md"
            style={{
              textShadow: '0 2px 10px rgba(247,242,232,0.8)'
            }}>
            
            {currentData.buttonLabel}
          </motion.span>
          <svg
            width="80"
            height="40"
            viewBox="0 0 80 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#10281D] drop-shadow-md"
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(247,242,232,0.8))'
            }}>
            
            <motion.path
              key={`path-${activeSection}`}
              d="M 5,5 Q 40,5 75,35"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              initial={{
                pathLength: 0
              }}
              animate={{
                pathLength: 1
              }}
              transition={{
                duration: 0.8,
                ease: 'easeInOut'
              }} />
            
            <motion.path
              key={`arrow-${activeSection}`}
              d="M 60,35 L 75,35 L 68,20"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                delay: 0.8,
                duration: 0.2
              }} />
            
          </svg>
        </div>

        {/* Icon Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="pointer-events-auto group flex h-14 w-14 items-center justify-center rounded-full bg-[#F7F2E8] text-[#10281D] shadow-lg border-2 border-[#10281D] transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#10281D] focus:ring-offset-2"
          aria-label={currentData.buttonLabel}>
          
          <ArrowRightLeft className="h-6 w-6 stroke-[2.5]" />
        </button>
      </div>

      {/* Modal */}
      {isOpen &&
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative flex w-full max-w-5xl max-h-[90vh] flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex flex-col space-y-1.5 p-6 pb-4">
              <h2 className="text-lg font-semibold leading-none tracking-tight text-zinc-900">
                Design Comparison
              </h2>
              <p className="text-sm text-zinc-500">
                Drag the slider to compare the original design with the new
                concept.
              </p>
            </div>

            {/* Close Button */}
            <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2">
            
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>

            {/* Content */}
            <div className="flex-1 min-h-0 p-6 pt-0 flex flex-col">
              <div className="relative overflow-hidden rounded-lg border border-zinc-200 shadow-sm max-h-full bg-zinc-100 w-full flex-shrink">
                {/* Invisible image to set intrinsic height up to max-h */}
                <img
                src={currentData.officialImage}
                className="w-full h-auto opacity-0 pointer-events-none block"
                alt=""
                aria-hidden="true" />
              
                <div className="absolute inset-0">
                  <ImageComparison className="h-full w-full">
                    <ImageComparisonImage
                    src={currentData.officialImage}
                    alt="Official Design"
                    position="left" />
                  
                    <ImageComparisonImage
                    src={currentData.redesignImage}
                    alt="Redesign Concept"
                    position="right" />
                  
                    <ImageComparisonSlider className="bg-white" />
                  </ImageComparison>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex-none flex flex-col border-t border-zinc-200 bg-zinc-50/50 p-6">
              <h3 className="text-sm font-semibold text-zinc-900 mb-1.5">
                Why this change?
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed italic">
                {currentData.explanation}
              </p>
            </div>
          </div>
        </div>
      }
    </>);

}