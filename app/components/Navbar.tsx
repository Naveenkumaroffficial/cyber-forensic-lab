import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      {/* Top Government Bar */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Left Side Logo + Title */}
          <div className="flex items-center space-x-4">
            <Image
              src="/logo.png"
              alt="Lab Logo"
              width={70}
              height={70}
              className="rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold">
                Cyber Forensic Laboratory, Panchkula
              </h1>
              <p className="text-sm text-gray-200">
                Government of Haryana
              </p>
            </div>
          </div>

          {/* Login Button */}
          <button className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-600">
            Login
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-3 flex space-x-8">
          <Link href="/">Home</Link>
          <Link href="/overview">Overview</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Photo Gallery</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
    </header>
  );
}
