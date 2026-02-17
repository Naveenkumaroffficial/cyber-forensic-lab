"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-[600px]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-[600px]">
            <Image
              src="/slide1.png"
              alt="Cyber Forensic Lab"
              fill
              className="object-cover"
              priority
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 text-white">
                <h1 className="text-5xl font-bold mb-4">
                  Cyber Forensic Laboratory
                </h1>
                <h2 className="text-2xl text-green-300 mb-6">
                  Panchkula, Haryana
                </h2>
                <p className="max-w-2xl text-lg mb-8">
                  Advanced Digital Evidence Examination, Cyber Crime
                  Investigation Support, and Secure Forensic Analysis Services.
                </p>

                <div className="flex gap-4">
                  <button className="bg-white text-green-900 px-6 py-3 rounded font-semibold">
                    Our Services
                  </button>

                  <button className="border border-white px-6 py-3 rounded">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        Slide 2
        <SwiperSlide>
          <div className="relative w-full h-[600px]">
            <Image
              src="/slide2.png"
              alt="Digital Investigation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </SwiperSlide>

        {/* Slide 3
        <SwiperSlide>
          <div className="relative w-full h-[500px]">
            <Image
              src="/slide3.jpg"
              alt="Cyber Security"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
}
