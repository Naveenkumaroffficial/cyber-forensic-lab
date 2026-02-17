import {
  Search,
  Smartphone,
  Database,
  ShieldCheck,
  Fingerprint,
  Scale,
} from "lucide-react";

const services = [
  {
    title: "Digital Evidence Analysis",
    description:
      "Comprehensive examination of digital devices and storage media for legal proceedings.",
    icon: Search,
  },
  {
    title: "Mobile Forensics",
    description:
      "Advanced extraction and analysis of data from smartphones and tablets.",
    icon: Smartphone,
  },
  {
    title: "Data Recovery",
    description:
      "Recovery of deleted, encrypted, or damaged data from various storage media.",
    icon: Database,
  },
  {
    title: "Cyber Crime Investigation",
    description:
      "Technical support for investigating cyber crimes including fraud, hacking, and identity theft.",
    icon: ShieldCheck,
  },
  {
    title: "Biometric Analysis",
    description:
      "Fingerprint and biometric data processing for identification and verification.",
    icon: Fingerprint,
  },
  {
    title: "Expert Testimony",
    description:
      "Court-admissible forensic reports and expert witness testimony for judicial proceedings.",
    icon: Scale,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-28 bg-[#F7F0F0]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#25671E] mb-6">
            Our Services
          </h2>

          <p className="text-[#1F2937] max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Comprehensive cyber forensic capabilities designed to support
            law enforcement agencies, legal professionals, and judicial
            processes with precision, integrity, and technical excellence.
          </p>

          {/* Accent Divider */}
          <div className="w-24 h-1 bg-[#F2B50B] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-10 border border-[#E5E7EB] shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Gold Top Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#F2B50B] rounded-t-2xl"></div>

                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center bg-[#48A111]/10 text-[#25671E] rounded-2xl mb-6 transition-all duration-300 group-hover:bg-[#25671E] group-hover:text-white">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-[#25671E] mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#1F2937] text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Soft Glow */}
                <div className="absolute inset-0 rounded-2xl bg-[#48A111] opacity-0 group-hover:opacity-5 transition duration-300"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
