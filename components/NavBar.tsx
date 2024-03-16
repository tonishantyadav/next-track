import Link from "next/link";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
  const otherLinks = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex gap-10 sm:text-lg md:text-xl lg:text-xl p-5 border-b">
      <ul className="flex items-center gap-2">
        <li className="mr-2 hover:text-slate-400">
          <Link href="/">
            <FaBug /> 
          </Link>
        </li>
        <li className="pt-1 hover:text-slate-400">
          <Link href="/">Next Track</Link>
        </li>
      </ul>
      <ul className="flex items-center gap-5 pt-1">
        {otherLinks.map(({ label, href }) => (
          <li className="hover:text-slate-400" key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
