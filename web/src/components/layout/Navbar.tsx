"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-8 py-4">
          <NavLink href="/" label="Home" isActive={isActive("/")} />
          <NavLink href="/about" label="About" isActive={isActive("/about")} />
          <NavLink
            href="/skills"
            label="Skills"
            isActive={isActive("/skills")}
          />
          <NavLink
            href="/projects"
            label="Projects"
            isActive={isActive("/projects")}
          />
          <NavLink
            href="/contact"
            label="Contact"
            isActive={isActive("/contact")}
          />
          <NavLink
            href="/resume"
            label="Resume"
            isActive={isActive("/resume")}
          />
        </div>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
}

function NavLink({ href, label, isActive }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`text-lg font-medium transition-colors duration-200 hover:text-gray-300 ${
        isActive ? "text-white border-b-2 border-white pb-1" : "text-gray-300"
      }`}
    >
      {label}
    </Link>
  );
}
