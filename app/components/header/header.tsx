"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { NavBar } from "./NavBar";
import { Logo } from "./Logo";
import { DarkModeToggle } from "./DarkModeToggle";
import { PopoverMenu } from "./PopoverMenu";

export function Header() {
  const [navPopoverOpen, setNavPopoverOpen] = useState(false);
  const path = usePathname();

  const openPopoverNav = () => {
    setNavPopoverOpen(true);
  };
  const closePopoverNav = () => {
    setNavPopoverOpen(false);
  };

  window.onresize = function () {
    let w = window.outerWidth;
    if (w > 768) {
      closePopoverNav();
    }
  };

  return (
    <header className="mt-6">
      <div
        className={`relative flex place-content-center gap-4 md:h-40 ${
          path === "/" ? "h-32 md:h-40" : "h-20 md:h-24"
        }`}
      >
        <Logo />
        <div className="flex h-10 flex-1 justify-end md:justify-center">
          <div className="hidden md:flex">
            <NavBar />
          </div>
          <div className="flex place-content-center rounded-full shadow dark:bg-zinc-800 dark:ring-1 dark:ring-white/10 md:hidden">
            <button
              className="flex place-items-center py-2 px-3 text-sm text-slate-700 dark:text-zinc-200"
              onClick={() => openPopoverNav()}
            >
              Menu
            </button>
          </div>
        </div>
        <div className="flex h-10 items-center justify-end md:flex-1">
          <DarkModeToggle />
        </div>
        <PopoverMenu
          navPopoverOpen={navPopoverOpen}
          closePopoverNav={closePopoverNav}
        />
      </div>
    </header>
  );
}
