"use client";

import Image from "next/image";
import Link from "next/link";
import { useGoogleLogin } from "@react-oauth/google";

export default function LoginPage() {
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Google login successful:", tokenResponse);
      // Here you would typically send the token to your backend
      // to verify and create/update the user session
      // For now, we'll just log it
    },
    onError: () => {
      console.error("Google login failed");
    },
  });
  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ background: "linear-gradient(to bottom right, #F2B79F, #93B7BE)" }}
    >
      {/* Top-left logo */}
      <header className="flex items-center px-6 py-4">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Image
            src="/whale.svg"
            alt="Beluga logo"
            width={32}
            height={32}
          />
          <span className="text-xl font-semibold tracking-tight">
            Beluga
          </span>
        </Link>
      </header>

      {/* Centered login form */}
      <main className="flex flex-1 items-center justify-center px-6 py-20 md:px-10 lg:px-16">
        <div className="w-full max-w-md md:max-w-lg rounded-3xl bg-white/85 p-12 md:p-16 shadow-xl ring-1 ring-zinc-200/80">
          <h1 className="mb-8 text-center text-3xl md:text-4xl font-semibold text-zinc-900">
            Sign in
          </h1>
          <form className="space-y-6">
            {/* Google & Apple at top */}
            <div className="space-y-4">
              <button
                type="button"
                onClick={() => handleGoogleLogin()}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-zinc-300 bg-white px-5 py-3.5 text-base font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-50"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                  >
                    <path
                      fill="#4285F4"
                      d="M21.6 12.227c0-.76-.068-1.492-.195-2.195H12v4.151h5.381a4.59 4.59 0 0 1-1.99 3.013v2.507h3.217c1.884-1.737 2.992-4.295 2.992-7.476Z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 22c2.7 0 4.964-.892 6.619-2.397l-3.217-2.507c-.892.597-2.037.949-3.402.949-2.615 0-4.827-1.764-5.619-4.137H3.048v2.602A9.998 9.998 0 0 0 12 22Z"
                    />
                    <path
                      fill="#FBBC04"
                      d="M6.381 13.908A5.997 5.997 0 0 1 6.068 12c0-.662.114-1.305.313-1.908V7.49H3.048A9.998 9.998 0 0 0 2 12c0 1.611.385 3.136 1.048 4.51l3.333-2.602Z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 6.5c1.47 0 2.79.507 3.828 1.503l2.872-2.872C16.96 3.892 14.7 3 12 3A9.998 9.998 0 0 0 3.048 7.49l3.333 2.602C7.173 8.264 9.385 6.5 12 6.5Z"
                    />
                  </svg>
                </span>
                <span>Login with Google</span>
              </button>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-zinc-300 bg-white px-5 py-3.5 text-base font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-50"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                  >
                    <path d="M16.365 2c-.923.064-2.023.657-2.674 1.428-.584.692-1.09 1.832-.9 2.904 1.03.032 2.086-.586 2.715-1.37.6-.75 1.039-1.894.859-2.962ZM19.5 8.2c-.885-1.12-2.143-1.776-3.35-1.776-1.568 0-2.235.75-3.327.75-1.122 0-1.98-.746-3.34-.746-1.336.01-2.57.776-3.45 1.99-1.19 1.652-1.48 4.78.095 7.37.87 1.42 2.034 3.01 3.56 3.02 1.355.014 1.74-.89 3.57-.9 1.833-.014 2.185.914 3.54.9 1.528-.01 2.76-1.77 3.63-3.19.63-1.03.865-1.55 1.354-2.71-3.55-1.34-3.29-6.08-.742-7.7Z" />
                  </svg>
                </span>
                <span>Login with Apple</span>
              </button>
            </div>

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
    </div>
  );
}

