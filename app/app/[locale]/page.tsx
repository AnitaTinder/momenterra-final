import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-[#FDFCFB]">
      <div className="text-center max-w-4xl">
        {/* Title: Pure, Large, Spaced */}
        <h1 className="text-6xl md:text-[100px] font-extralight tracking-[0.1em] text-[#1A2F23] uppercase mb-2">
          Momenterra
        </h1>
        
        {/* Line: Minimalist separator */}
        <div className="h-[1px] w-32 bg-[#1A2F23] opacity-20 mx-auto mb-10"></div>
        
        {/* The Identity - Aligned with your Triple-Language Pillar */}
        <p className="text-lg md:text-xl font-light tracking-[0.15em] text-[#1A2F23]/70 uppercase">
          The Triple-Language Residency
        </p>
        
        {/* Locations - Pure Ghost Style */}
        <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-[#1A2F23]/50">
          Hamburg — Frankfurt — Paris
        </p>
        
        {/* The Action Button - Elite styling */}
        <div className="mt-16 group">
          <button className="border border-[#1A2F23] px-14 py-5 text-[10px] uppercase tracking-[0.3em] text-[#1A2F23] hover:bg-[#1A2F23] hover:text-[#FDFCFB] transition-all duration-1000">
            Request Invitation
          </button>
        </div>
      </div>

      {/* Infrastructure Tag (Pillar E-1) */}
      <footer className="fixed bottom-12 text-[8px] uppercase tracking-[0.2em] opacity-30">
        Frankfurt Node • Secure Cloud Run
      </footer>
    </main>
  );
}
