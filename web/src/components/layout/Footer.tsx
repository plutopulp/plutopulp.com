"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Footer component that appears on all pages
 * Contains copyright information and links to resources
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2f303a] py-6 mt-auto">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center justify-center md:justify-end  w-full md:w-1/2 text-right">
            <div className="flex flex-col md:flex-row items-center md:items-end">
              <span className="text-gray-300 text-sm md:text-base font-medium">
                YVAN BUGGY
              </span>
            </div>
            <span className="mx-2 text-[#ac2cac]">©</span>
            <span className="text-[#ac2cac]">{currentYear}</span>
          </div>

          {/* Divider - vertical on desktop, horizontal on mobile */}
          <div className="hidden md:block h-10 w-px bg-gray-600 mx-4"></div>
          <div className="block md:hidden h-px w-full bg-gray-600 my-4"></div>

          <div className="flex items-center justify-center md:justify-start w-full md:w-1/2">
            <div className="flex items-center">
              <span className="text-gray-400">Website Design</span>
              <Link
                href="https://github.com/plutopulp/plutopulp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group ml-3 flex items-center gap-1 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Image
                  src="/icons/github.svg"
                  alt="GitHub"
                  width={22}
                  height={22}
                  className="filter invert opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
