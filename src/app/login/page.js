"use client";

export default function LoginPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-20 md:px-10 lg:px-16">
        <div className="w-full max-w-md md:max-w-lg rounded-3xl bg-white/85 p-12 md:p-16 shadow-xl ring-1 ring-zinc-200/80">
          <h1 className="mb-8 text-center text-3xl md:text-4xl font-semibold text-zinc-900">
            Sign in
          </h1>
          <form className="space-y-6">
            {/* Username */}
            <div className="flex flex-col text-left">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="username"
                  className="text-base font-medium text-zinc-800"
                >
                  Username
                </label>
                <button
                  type="button"
                  className="bg-transparent px-1 py-1 text-sm font-medium text-zinc-600 underline-offset-2 hover:text-zinc-900 hover:underline"
                >
                  Forgot Username
                </button>
              </div>
              <input
                id="username"
                type="text"
                className="mt-2 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 shadow-sm outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-400/70"
                placeholder="Enter your username"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col text-left">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-base font-medium text-zinc-800"
                >
                  Password
                </label>
                <button
                  type="button"
                  className="bg-transparent px-1 py-1 text-sm font-medium text-zinc-600 underline-offset-2 hover:text-zinc-900 hover:underline"
                >
                  Forgot Password
                </button>
              </div>
              <input
                id="password"
                type="password"
                className="mt-2 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 shadow-sm outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-400/70"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded-xl bg-zinc-900/90 px-5 py-3.5 text-base font-medium text-white transition-colors hover:bg-zinc-800/90"
            >
              Sign in
            </button>
          </form>
        </div>
    </main>
  );
}

