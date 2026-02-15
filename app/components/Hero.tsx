"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white p-4 rounded shadow">

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop
            className="rounded"
          >
            <SwiperSlide>
              <Image
                src="/slide1.jpg"
                alt="Forensic Lab 1"
                width={1000}
                height={500}
                className="rounded"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/slide2.jpg"
                alt="Forensic Lab 2"
                width={1000}
                height={500}
                className="rounded"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/slide3.jpg"
                alt="Forensic Lab 3"
                width={1000}
                height={500}
                className="rounded"
              />
            </SwiperSlide>

          </Swiper>

        </div>

        {/* Buttons Section */}
        <div className="flex justify-center space-x-6 mt-10">
          <div className="bg-gray-200 px-8 py-4 rounded shadow">
            Notifications
          </div>
          <div className="bg-gray-200 px-8 py-4 rounded shadow">
            Tenders
          </div>
          <div className="bg-gray-200 px-8 py-4 rounded shadow">
            Latest News
          </div>
        </div>

      </div>
    </section>
  );
}
