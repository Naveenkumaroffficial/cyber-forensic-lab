import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#25671E] text-white">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Organization Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Cyber Forensic Laboratory
          </h3>
          <p className="text-green-100 text-sm leading-relaxed">
            Providing advanced digital forensic services to support law
            enforcement agencies and judicial systems with integrity,
            precision, and technical excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#F2B50B]">
            Quick Links
          </h4>
          <ul className="space-y-3 text-green-100 text-sm">
            <li><Link href="/" className="hover:text-[#F2B50B] transition">Home</Link></li>
            <li><Link href="/overview" className="hover:text-[#F2B50B] transition">Overview</Link></li>
            <li><Link href="/services" className="hover:text-[#F2B50B] transition">Services</Link></li>
            <li><Link href="/contact" className="hover:text-[#F2B50B] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#F2B50B]">
            Core Services
          </h4>
          <ul className="space-y-3 text-green-100 text-sm">
            <li>Digital Evidence Analysis</li>
            <li>Mobile Forensics</li>
            <li>Cyber Crime Investigation</li>
            <li>Expert Testimony</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#F2B50B]">
            Contact Us
          </h4>

          <ul className="space-y-4 text-green-100 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-[#F2B50B] mt-1" />
              Panchkula, Haryana, India
            </li>

            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#F2B50B]" />
              +91 98765 43210
            </li>

            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#F2B50B]" />
              info@cyberforensiclab.gov.in
            </li>
          </ul>
        </div>

      </div>

      {/* Accent Divider */}
      <div className="h-[2px] bg-[#F2B50B] opacity-70"></div>

      {/* Bottom Bar */}
      <div className="bg-[#1F4D17] text-center py-6 text-sm text-green-200">
        © {new Date().getFullYear()} Cyber Forensic Laboratory, Panchkula. 
        All Rights Reserved.
      </div>

    </footer>
  );
}
