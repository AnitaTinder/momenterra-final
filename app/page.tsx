export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* This is your Modern Quartz Visual Identity */}
      <div className="text-center">
        <h1 className="text-6xl font-extralight tracking-[0.2em] text-roseGold uppercase mb-4">
          Momenterra
        </h1>
        
        <div className="h-[1px] w-24 bg-roseGold mx-auto mb-8"></div>
        
        <p className="text-xl font-light tracking-wide text-gray-500 italic">
          The Triple-Language Residency
        </p>
        
        <p className="mt-2 text-sm uppercase tracking-[0.3em] text-gray-400">
          Hamburg — Frankfurt
        </p>
        
        <button className="mt-12 btn-rose uppercase tracking-widest text-xs">
          Request Invitation
        </button>
      </div>
    </main>
  );
}
