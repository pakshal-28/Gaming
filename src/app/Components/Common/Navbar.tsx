"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="max-w-6xl mx-auto py-10 px-6 flex items-center justify-between pb-20">
      <nav
        className={`fixed top-0 left-0 w-full rounded-b-[25px] flex items-center justify-between px-6 py-4 z-50 transition-colors duration-300
      ${scrolled ? "bg-[#0071F8]" : "bg-transparent"}`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <span className="text-white font-bold text-lg cursor-pointer">
              BRIOTECHNO
            </span>
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center text-white font-light">
            {[
              { name: "Home", path: "/" },
              { name: "Our Shop", path: "/Shop" },
              { name: "Product Details", path: "/Product" },
              { name: "Contact Us", path: "/Contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="px-4 py-2 rounded-full hover:bg-[#1B7FFA] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <button className="bg-[#EE626B] text-white font-bold px-5 py-2 rounded-full cursor-pointer">
            SIGN IN
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={32} className="text-white" />
            ) : (
              <Menu size={32} className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-[70px] left-0 right-0 bg-white md:hidden rounded-b-[25px] shadow-lg mx-4 z-50">
            <ul className="flex flex-col divide-y divide-gray-200 text-[#1e1e1e] font-medium">
              {[
                { name: "Home", path: "/" },
                { name: "Our Shop", path: "/Shop" },
                { name: "Product Details", path: "/Product" },
                { name: "Contact Us", path: "/Contact" },
                { name: "Sign In", path: "/signin" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="block px-4 py-3 text-center hover:bg-[#EE626B] hover:text-white rounded-xl transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </nav>
  );
}
