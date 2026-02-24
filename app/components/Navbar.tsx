"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Overview", path: "/overview" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className=" top-0 z-50 backdrop-blur-md">

      {/* Top Bar */}
      <div className="bg-[#25671E] text-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo + Title */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Lab Logo"
              width={100}
              height={100}
              className="rounded-full"
            />
            <div>
              <h1 className="text-lg md:text-2xl font-semibold tracking-wide">
                Cyber Forensic Laboratory
              </h1>
              <p className="text-md text-green-200">
                Government of Haryana
              </p>
            </div>
          </div>

          {/* Desktop Login */}
          <button className="hidden md:inline-block bg-[#F2B50B] text-[#1F2937] px-5 py-2 rounded-md font-medium hover:brightness-110 transition duration-300 shadow-sm">
            Login
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Accent Divider */}
      <div className="h-[3px] bg-[#F2B50B]"></div>

      {/* Navigation Bar */}
      <nav className="bg-[#327607] text-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center space-x-10 py-4 text-base font-bold text-[18px] tracking-wide">
            {navLinks.map((link) => {
              const active = pathname === link.path;

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative transition duration-300 ${
                    active ? "text-[#F2B50B]" : "hover:text-[#F2B50B]"
                  }`}
                >
                  {link.name}

                  {/* Active underline */}
                  {active && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#F2B50B] rounded"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden flex flex-col space-y-4 py-6 text-center bg-[#25671E]">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className="hover:text-[#F2B50B] transition"
                >
                  {link.name}
                </Link>
              ))}

              <button className="bg-[#F2B50B] text-[#1F2937] px-4 rounded-md font-medium w-fit mx-auto mt-2">
                Login
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
