"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="bg-[#F7F0F0] min-h-screen">

        {/* ===== Banner ===== */}
      <div className="bg-[#25671E] text-white py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          Contact us 
        </h1>
        <p className="text-green-100 max-w-2xl mx-auto text-sm md:text-base">
          
          
          
          Reach out to the Cyber Forensic Laboratory for official inquiries,
            institutional coordination, and forensic support services.

        </p>
        <div className="w-24 h-1 bg-[#F2B50B] mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold text-[#25671E] mb-8">
            Official Contact Information
          </h2>

          <div className="space-y-8">

            <div className="flex gap-4">
              <MapPin className="text-[#F2B50B]" size={24} />
              <div>
                <h4 className="font-medium text-[#1F2937]">
                  Address
                </h4>
                <p className="text-gray-600 text-sm">
                  Cyber Forensic Laboratory <br />
                  Panchkula, Haryana <br />
                  India
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-[#F2B50B]" size={24} />
              <div>
                <h4 className="font-medium text-[#1F2937]">
                  Phone
                </h4>
                <p className="text-gray-600 text-sm">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="text-[#F2B50B]" size={24} />
              <div>
                <h4 className="font-medium text-[#1F2937]">
                  Email
                </h4>
                <p className="text-gray-600 text-sm">
                  info@cyberforensiclab.gov.in
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-md border border-[#E5E7EB] p-10">

          <h2 className="text-2xl font-semibold text-[#25671E] mb-8">
            Send an Inquiry
          </h2>

          <form className="space-y-6">

            <div>
              <label className="block text-sm font-medium text-[#1F2937] mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#48A111]"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1F2937] mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#48A111]"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1F2937] mb-2">
                Subject
              </label>
              <input
                type="text"
                className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#48A111]"
                placeholder="Enter subject"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1F2937] mb-2">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#48A111]"
                placeholder="Write your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#F2B50B] text-[#1F2937] px-6 py-3 rounded-lg font-medium hover:brightness-110 transition duration-300"
            >
              Submit Inquiry
            </button>

          </form>
        </div>

      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="rounded-2xl overflow-hidden shadow-md border border-[#E5E7EB]">
          <iframe
            src="https://www.google.com/maps/embed?..."
            className="w-full h-[400px]"
            loading="lazy"
          ></iframe>
        </div>
      </div>

    </section>
  );
}