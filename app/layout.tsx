import Script from "next/script";

import "./globals.css";
import { Inter } from "next/font/google";
import { Lato } from "next/font/google";

import { Header } from "./components/header/Header";

const inter = Lato({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "J Montgomery | Portfolio",
  description: "Portfolio website for J Montgomery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script id="darkModeSetter" type="text/javascript">
          {`if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }`}
        </Script>
      </head>

      <body className={inter.className}>
        {/* Style layer */}
        <div className="fixed inset-0 -z-10 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900  dark:ring-zinc-300/20"></div>
          </div>
        </div>
        {/* Wrapper layer */}
        <div className="sm:px-8">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <Header />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
