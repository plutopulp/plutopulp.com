"use client";
import Link from "next/link";
import { useNavigation } from "@/hooks/useNavigation";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useRef } from "react";
import { useState } from "react";
import { colors } from "@/lib/colors";

// Define types for NavLink props
interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: (e: React.MouseEvent) => void;
  isExternal?: boolean;
}

export default function Navbar() {
  const { isActive, handleNavigation, getItemHref, isScrolled, navItems } =
    useNavigation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  useOnClickOutside(mobileMenuRef, () => setMobileMenuOpen(false));

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${
        isScrolled ? "fixed top-0 shadow-md" : "absolute top-0"
      }`}
      style={{
        backgroundColor: isScrolled ? colors.sections.hero : "transparent",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-start h-16">
          {/* Logo or brand name */}
          <div className="mr-8">
            <Link href="/" className="text-white text-lg font-bold">
              Portfolio
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                href={getItemHref(item)}
                label={item.label}
                isActive={isActive(item)}
                onClick={(e) => handleNavigation(e, item)}
                isExternal={item.type === "external"}
              />
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={toggleMobileMenu}
              className="text-white flex items-center"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-t border-gray-700"
          ref={mobileMenuRef}
          style={{ backgroundColor: colors.sections.hero }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <MobileNavLink
                key={item.id}
                href={getItemHref(item)}
                label={item.label}
                isActive={isActive(item)}
                onClick={(e) => {
                  handleNavigation(e, item);
                  setMobileMenuOpen(false);
                }}
                isExternal={item.type === "external"}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({
  href,
  label,
  isActive,
  onClick,
  isExternal = false,
}: NavLinkProps) {
  const linkProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`font-medium transition-all duration-200 ${
        isActive
          ? "text-white border-b-2 border-white pb-1"
          : "text-gray-300 hover:text-white"
      }`}
      {...linkProps}
    >
      {label}
    </Link>
  );
}

function MobileNavLink({
  href,
  label,
  isActive,
  onClick,
  isExternal = false,
}: NavLinkProps) {
  const linkProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        isActive
          ? "text-white bg-gray-800"
          : "text-gray-300 hover:text-white hover:bg-gray-700"
      }`}
      {...linkProps}
    >
      {label}
    </Link>
  );
}
