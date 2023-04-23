import Link from "next/link";

import { LinkIcon, XMarkIcon } from "@heroicons/react/20/solid";

import NavLinks from "@/app/constants/NavLinks";
import ContactLinks from "@/app/constants/ContactLinks";

export function PopoverMenu({
  navPopoverOpen,
  closePopoverNav,
}: {
  navPopoverOpen: boolean;
  closePopoverNav: Function;
}) {
  const PopoverNavLinks = () => {
    return (
      <>
        {NavLinks.map(({ name, link }) => (
          <li key={name}>
            <Link
              href={link}
              className="relative block rounded-full py-3 text-center"
              onClick={() => closePopoverNav()}
            >
              {name}
            </Link>
          </li>
        ))}
      </>
    );
  };

  // const PopoverContactLinks = () =>
  //   ContactLinks.map((link, index) => {
  //     return (
  //       <li
  //         key={`c-${index}`}
  //         className="py-1"
  //         onClick={() => closePopoverNav()}
  //       >
  //         {link.html}
  //       </li>
  //     );
  //   });

  return (
    <div>
      <div
        className={`fixed inset-0 z-30 bg-zinc-800/40 opacity-100 backdrop-blur-sm ${
          !navPopoverOpen ? " hidden" : ""
        }`}
        onClick={() => closePopoverNav()}
      ></div>
      <div
        className={`fixed inset-x-4 top-20 z-40 rounded-3xl  bg-white p-5 transition duration-300 dark:bg-zinc-800 dark:ring-1 dark:ring-white/10 ${
          !navPopoverOpen
            ? " -translate-y-full scale-50 opacity-0"
            : " translate-y-0 scale-100 opacity-100"
        }`}
      >
        <div className="flex flex-row items-center justify-between">
          <h2 className="dark: text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Navigation
          </h2>
          <button className="-m-1 p-1" onClick={() => closePopoverNav()}>
            <XMarkIcon className="text-gray-700 h-6 w-6" />
          </button>
        </div>
        <ul className="divide-y divide-zinc-100 dark:divide-zinc-100/5">
          <PopoverNavLinks />
          {/* <PopoverContactLinks /> */}
        </ul>
      </div>
    </div>
  );
}
