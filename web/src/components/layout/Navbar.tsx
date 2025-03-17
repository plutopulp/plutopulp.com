"use client";
import Link from "next/link";
import { useContext } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useRef, useState } from "react";
import { colors } from "@/lib/colors";
import { NavigationContext } from "@/contexts/NavigationContext";
import { NavItem, NavigationHandler } from "@/hooks/useNavigation";

// Define types for NavLink props
interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: (e: React.MouseEvent) => void;
  isExternal?: boolean;
}

// Desktop navigation component
const DesktopNavigation = ({
  navItems,
  isActive,
  getItemHref,
  handleNavigation,
}: {
  navItems: ReadonlyArray<NavItem>;
  isActive: (item: NavItem) => boolean;
  getItemHref: (item: NavItem) => string;
  handleNavigation: NavigationHandler;
}) => {
  return (
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
  );
};

// Mobile menu button component
const MobileNavigation = ({
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  closeMobileMenu: () => void;
}) => {
  return (
    <div className="md:hidden ml-auto">
      {/* Mobile menu button - shown when menu is closed */}
      {!mobileMenuOpen && (
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="text-white flex items-center cursor-pointer"
          aria-label="Open menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      )}

      {/* Close button - shown when menu is open */}
      {mobileMenuOpen && (
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="text-white flex items-center cursor-pointer"
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default function Navbar() {
  const { isActive, handleNavigation, getItemHref, isScrolled, navItems } =
    useContext(NavigationContext);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  useOnClickOutside(mobileMenuRef, () => setMobileMenuOpen(false));

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
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
          {/* Desktop navigation */}
          <DesktopNavigation
            navItems={navItems}
            isActive={isActive}
            getItemHref={getItemHref}
            handleNavigation={handleNavigation}
          />

          {/* Mobile menu button */}
          <MobileNavigation
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            closeMobileMenu={closeMobileMenu}
          />
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-t border-gray-700 w-full"
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
      className={`font-medium transition-all duration-200 relative pb-1 ${
        isActive ? "text-white" : "text-gray-300 hover:text-white"
      }`}
      {...linkProps}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[110%] h-0.5 bg-white"></span>
      )}
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
