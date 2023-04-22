interface NavLink {
  name: string;
  link: string;
}
const NavLinks: NavLink[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Tech",
    link: "/tech",
  },
];

export default NavLinks;
