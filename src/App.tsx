import React from 'react';
import { StarfruitHero } from './components/StarfruitHero';
import { ComparisonWidget } from './components/ComparisonWidget';
import { ProblemSection } from './components/ProblemSection';
import { PriceDisparitySection } from './components/PriceDisparitySection';
import { WorkflowSection } from './components/WorkflowSection';
import { FieldNotesSection } from './components/FieldNotesSection';
import { FooterSection } from './components/FooterSection';
export function App() {
  return (
    <div className="min-h-screen w-full bg-[#F7F2E8] relative">
      <StarfruitHero />
      <ProblemSection />
      <PriceDisparitySection />
      <WorkflowSection />
      <FieldNotesSection />
      <FooterSection />
      <ComparisonWidget />
    </div>);

}