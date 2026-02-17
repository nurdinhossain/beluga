import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ background: "linear-gradient(to bottom right, #F2B79F, #93B7BE)" }}
    >
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
          className="rounded-lg bg-zinc-900/90 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800/90 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Login
        </button>
      </header>

      {/* Main content - flashcard stack with text + button */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        <div className="relative w-full max-w-xl">
          {/* Back card 1 (top) */}
          <div className="pointer-events-none absolute -top-8 -left-8 h-full w-full rounded-2xl bg-white/60 shadow-md ring-1 ring-zinc-200/60" />

          {/* Back card 2 (middle) */}
          <div className="pointer-events-none absolute -top-4 -left-4 h-full w-full rounded-2xl bg-white/75 shadow-md ring-1 ring-zinc-200/70" />

          {/* Front card with content (front, same size) */}
          <div className="relative z-10 flex h-full w-full flex-col overflow-hidden rounded-2xl bg-zinc-50 shadow-xl ring-1 ring-zinc-200/80">
            {/* Mac-style title bar */}
            <div className="flex w-full items-center gap-2 bg-zinc-900/90 px-4 py-2">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>

            {/* Card body */}
            <div className="flex flex-col items-center px-10 py-8">
              <p className="max-w-2xl text-center text-2xl font-medium leading-relaxed sm:text-3xl">
                Learning is hard.{" "}<br/>
                <span className="underline underline-offset-4">
                  Beluga makes it easier.
                </span>
              </p>
              <button
                type="button"
                className="mt-8 rounded-lg bg-zinc-900/90 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-zinc-800/90"
              >
                Sign up today
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
