"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FileText, CheckCircle, Clock, Award } from "lucide-react";

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { title: "Total Cases", value: 1248, icon: FileText },
    { title: "Completed Cases", value: 1096, icon: CheckCircle },
    { title: "Pending Cases", value: 152, icon: Clock },
    { title: "Expert Reports Issued", value: 870, icon: Award },
  ];

  return (
    <section ref={ref} className="py-28 bg-[#F7F0F0]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#25671E] mb-4">
            Laboratory Impact
          </h2>

          <p className="text-[#1F2937] max-w-2xl mx-auto text-base md:text-lg">
            Key performance indicators reflecting operational efficiency,
            judicial support, and investigative excellence.
          </p>

          <div className="w-24 h-1 bg-[#F2B50B] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-10 border border-[#E5E7EB] shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Gold Top Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#F2B50B] rounded-t-2xl"></div>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#48A111]/10 text-[#25671E] rounded-2xl transition duration-300 group-hover:bg-[#25671E] group-hover:text-white">
                    <Icon className="w-7 h-7" />
                  </div>
                </div>

                {/* Animated Number */}
                <h3 className="text-4xl md:text-5xl font-semibold text-[#25671E] mb-2 text-center">
                  {inView && (
                    <CountUp
                      start={stat.value - 30}
                      end={stat.value}
                      duration={1.5}
                      separator=","
                    />
                  )}
                </h3>

                {/* Label */}
                <p className="text-[#1F2937] font-medium text-center text-sm md:text-base">
                  {stat.title}
                </p>

                {/* Soft Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-[#48A111] opacity-0 group-hover:opacity-5 transition duration-300"></div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
