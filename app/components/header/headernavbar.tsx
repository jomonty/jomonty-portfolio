import { usePathname } from "next/navigation";
import Link from "next/link";

import NavLinks from "../../constants/NavLinks";

export function HeaderNavBar() {
  const path = usePathname();
  const StyledNavLinks = () => {
    return (
      <ul className="flex items-center rounded-full px-2 shadow-lg ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800 dark:ring-white/10">
        {NavLinks.map(({ name, link }) => (
          <li key={name}>
            <Link
              href={link}
              className={`relative block py-2 px-5 hover:text-logoprimary ${
                path === link ? "text-logoprimary" : ""
              }`}
            >
              {name}
              <span
                className={`absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-transparent via-logoprimary/80 to-transparent ${
                  location.pathname === link ? "" : "hidden"
                }`}
              ></span>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className="hidden md:flex">
      <StyledNavLinks />
    </nav>
  );
}
