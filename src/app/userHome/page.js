export default function UserHome() {
  return (
    <main className="flex flex-1 flex-col px-6 py-8">
      {/* Secondary navbar under global header */}
      <nav className="mb-8 flex justify-center">
        <div className="inline-flex items-center gap-8 rounded-full bg-zinc-900/5 px-6 py-3 backdrop-blur-sm">
        <button className="text-sm font-medium text-zinc-900">
          Home
        </button>
        <button className="text-sm font-medium text-zinc-600 hover:text-zinc-900">
          Study sets
        </button>
        <button className="text-sm font-medium text-zinc-600 hover:text-zinc-900">
          Classes
        </button>
        </div>
      </nav>

      {/* 3-card grid layout */}
      <section className="flex flex-1 flex-col">
        <div className="grid flex-1 gap-6 md:grid-cols-2">
          {/* Left large card */}
          <div className="rounded-2xl bg-white/70 p-6 shadow-md ring-1 ring-zinc-200/70">
            <div className="h-full w-full rounded-xl border border-dashed border-zinc-300/80" />
          </div>

          {/* Right column with two stacked cards */}
          <div className="flex flex-col gap-6">
            <div className="flex-1 rounded-2xl bg-white/70 p-6 shadow-md ring-1 ring-zinc-200/70">
              <div className="h-full w-full rounded-xl border border-dashed border-zinc-300/80" />
            </div>
            <div className="flex-1 rounded-2xl bg-white/70 p-6 shadow-md ring-1 ring-zinc-200/70">
              <div className="h-full w-full rounded-xl border border-dashed border-zinc-300/80" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
