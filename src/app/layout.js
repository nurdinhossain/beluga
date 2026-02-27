import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Beluga",
  description: "Beluga",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
        style={{
          background: "linear-gradient(to bottom right, #F2B79F, #93B7BE)",
        }}
      >
        <div className="flex min-h-screen flex-col">
          {/* Global header */}
          <header className="flex items-center px-6 py-4">
            <Link href="/" className="flex items-center gap-2">
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

          {children}
        </div>
      </body>
    </html>
  );
}
