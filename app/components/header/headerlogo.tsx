import Link from "next/link";

export function HeaderLogo() {
  return (
    <div
      className={`relative flex h-full flex-1 ${
        location.pathname == "/" ? "items-end" : "items-start"
      }`}
    >
      <Link href="/">
        <img
          src="/logo-low-trans-svg.svg"
          className={`${location.pathname === "/" ? "h-16" : "h-10"}`}
        />
      </Link>
    </div>
  );
}
