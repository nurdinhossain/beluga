export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-900">
        <span className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Beluga
        </span>
        <button
          type="button"
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Login
        </button>
      </header>

      {/* Main content - inspirational message */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        <p className="max-w-2xl text-center text-2xl font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-3xl">
          Build something that matters. The best ideas start with a single step.
        </p>
      </main>
    </div>
  );
}
