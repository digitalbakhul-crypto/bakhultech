"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Company", path: "/company" },
    { name: "Careers", path: "/careers" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 text-sm bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 flex items-center justify-between h-10 md:h-20">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold text-[#FF7800]">
          <Link href="/">BakhulTech</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 justify-center font-bold">
          <ul className="flex space-x-10 text-base">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`transition text-sm tracking-wide ${
                    pathname === item.path
                      ? "text-[#FF7800] font-bold"
                      : "hover:text-[#FF7800] text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex">
          <Link href="/contact">
            <button
              className={`px-4 py-2 rounded-lg transition font-semibold ${
                pathname === "/contact"
                  ? "bg-[#FF7800] text-white"
                  : "bg-white text-black hover:text-[#FF7800]"
              }`}
            >
              Contact Us
            </button>
          </Link>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f0f0f] px-4 py-4">
          <ul className="flex flex-col text-start space-y-4 text-base">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 border-b border-gray-700 rounded font-bold transition ${
                    pathname === item.path
                      ? "text-[#FF7800] bg-slate-800"
                      : "hover:text-[#FF7800] hover:bg-slate-800"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Contact button mobile */}
            <li>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`block mt-4 px-6 py-2 rounded-lg text-center font-semibold transition ${
                  pathname === "/contact"
                    ? "bg-[#FF7800] text-white"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
