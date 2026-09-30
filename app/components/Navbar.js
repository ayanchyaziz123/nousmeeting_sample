'use client';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HelpCircle } from "lucide-react";

const navLinks = [
  { label: "Home", active: true },
  { label: "Features" },
  { label: "How It Works" },
  { label: "Use Cases" },
  { label: "Pricing" },
  { label: "Contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const handleScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;
      if (goingDown && y > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <Image src="/nous-logo.webp" alt="Nous Meeting" width={160} height={48} className="h-9 w-auto" priority />

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`text-sm font-semibold pb-1 border-b-2 transition-colors ${
                link.active
                  ? "text-indigo-600 border-indigo-600"
                  : "text-gray-600 border-transparent hover:text-gray-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-5">
          <a href="#" className="hidden sm:inline text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors">
            Sign In
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-fuchsia-500 px-5 py-2.5 rounded-full shadow-sm shadow-indigo-600/20 hover:shadow-md hover:shadow-indigo-600/30 transition-shadow"
          >
            Pre-Register
          </a>
          <a href="#" className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            <HelpCircle className="w-4 h-4" />
            Help
          </a>
        </div>
      </div>
    </header>
  );
}
