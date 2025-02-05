"use client";

import { useState } from "react";
import Image from "next/image";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconMenu2,
} from "@tabler/icons-react";

const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-black dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Products",
    icon: (
      <IconTerminal2 className="h-full w-full text-black dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Components",
    icon: (
      <IconNewSection className="h-full w-full text-black dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Changelog",
    icon: (
      <IconExchange className="h-full w-full text-black dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-black dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-black dark:text-neutral-300" />
    ),
    href: "#",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center py-4 px-6">
      <div className="flex items-center">
        <Image
          src="/frame_prod.jpg"
          alt="FrameProd Logo"
          width={120}
          height={60}
          className="mr-4"
        />
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <IconMenu2 size={24} />
      </button>

      {/* Desktop menu */}
      <div className="hidden md:block">
        <FloatingDock items={links} />
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black md:hidden">
          <ul className="flex flex-col items-center py-4">
            {links.map((link) => (
              <li key={link.title} className="py-2">
                <a href={link.href} className="flex items-center text-white">
                  <span className="w-6 h-6 mr-2">{link.icon}</span>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
