"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Our Shop", path: "/Shop" },
    { name: "Product Details", path: "/Product" },
    { name: "Contact Us", path: "/Contact" },
  ];

  return (
    <div className="flex items-center justify-between py-[80px]">
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-2 rounded-b-[25px] ${scrolled ? "bg-[#0071F8] shadow-md" : "bg-transparent"
          }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-white font-bold text-xl">
            BRIOTECHNO
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`px-5 py-3 text-[15px] font-medium text-white rounded-full transition ${pathname === item.path ? "bg-[#1B7FFA]" : "hover:bg-[#1B7FFA]"
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <button className="bg-[#EE626B] text-white font-bold px-5 py-2 rounded-full hover:bg-[#d64d55] transition">
              SIGN IN
            </button>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden bg-white rounded-b-[25px] shadow-lg mx-4 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"
            }`}
        >
          <ul className="flex flex-col divide-y divide-gray-200 text-[#1e1e1e] font-medium">
            {[...menuItems, { name: "Sign In", path: "/signin" }].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`block px-4 py-4 text-center transition ${pathname === item.path
                    ? "bg-[#1B7FFA] text-white"
                    : "hover:bg-[#EE626B] hover:text-white"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
