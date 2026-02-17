import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Image
            src="/whale.svg"
            alt="Beluga logo"
            width={32}
            height={32}
          />
          <span className="text-xl font-semibold tracking-tight">
            Beluga
          </span>
        </div>
        <button
          type="button"
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Login
        </button>
      </header>

      {/* Main content - inspirational message */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        <div className="flex flex-col items-center rounded-2xl bg-white px-10 py-8 shadow-lg ring-1 ring-zinc-200">
          <p className="max-w-2xl text-center text-2xl font-medium leading-relaxed sm:text-3xl">
            Build something that matters. The best ideas start with a single step.
          </p>
          <button
            type="button"
            className="mt-8 rounded-lg bg-zinc-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Sign up today
          </button>
        </div>
      </main>
    </div>
  );
}
