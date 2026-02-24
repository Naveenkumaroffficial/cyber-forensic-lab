import {
  Search,
  Smartphone,
  Database,
  ShieldCheck,
  Fingerprint,
  Scale,
  ArrowRight,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Digital Evidence Analysis",
      description:
        "Comprehensive forensic examination of storage devices, servers, and digital media for legally admissible evidence.",
      icon: Search,
    },
    {
      title: "Mobile Forensics",
      description:
        "Advanced extraction and decoding of mobile device data including deleted and encrypted information.",
      icon: Smartphone,
    },
    {
      title: "Data Recovery",
      description:
        "Recovery of lost, damaged, or encrypted digital data from various electronic storage systems.",
      icon: Database,
    },
    {
      title: "Cyber Crime Investigation",
      description:
        "Technical investigative support in fraud, hacking, identity theft, and cyber intrusion cases.",
      icon: ShieldCheck,
    },
    {
      title: "Biometric Analysis",
      description:
        "Fingerprint and biometric verification services for identity authentication and forensic examination.",
      icon: Fingerprint,
    },
    {
      title: "Expert Testimony",
      description:
        "Preparation of legally admissible forensic reports and expert witness testimony for judicial proceedings.",
      icon: Scale,
    },
  ];

  return (
    <section className="bg-[#F7F0F0]">

      {/* ===== Banner ===== */}
      <div className="bg-[#25671E] text-white py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          Our Services
        </h1>
        <p className="text-green-100 max-w-2xl mx-auto text-sm md:text-base">
          Comprehensive cyber forensic solutions designed to support
          law enforcement agencies and judicial institutions.
        </p>
        <div className="w-24 h-1 bg-[#F2B50B] mx-auto mt-6 rounded-full"></div>
      </div>

      {/* ===== Services Grid ===== */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-white p-10 rounded-2xl shadow-md border border-[#E5E7EB] hover:shadow-2xl transition duration-300 hover:-translate-y-2 relative"
              >
                {/* Gold Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#F2B50B] rounded-t-2xl"></div>

                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center bg-[#48A111]/10 text-[#25671E] rounded-2xl mb-6 group-hover:bg-[#25671E] group-hover:text-white transition duration-300">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#25671E] mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#1F2937] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <button className="inline-flex items-center gap-2 text-[#25671E] font-medium hover:text-[#F2B50B] transition">
                  Learn More <ArrowRight size={18} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== Process Section ===== */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#25671E] mb-6">
            Our Investigation Process
          </h2>

          <p className="text-[#1F2937] max-w-2xl mx-auto mb-12">
            A structured and legally compliant methodology ensuring accuracy,
            integrity, and reliability of digital evidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
            {[
              "Evidence Collection",
              "Forensic Analysis",
              "Report Preparation",
              "Judicial Support",
            ].map((step, index) => (
              <div
                key={index}
                className="p-6 border border-[#E5E7EB] rounded-2xl"
              >
                <div className="text-[#F2B50B] text-xl font-bold mb-2">
                  0{index + 1}
                </div>
                <h4 className="text-[#25671E] font-semibold">
                  {step}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CTA Section ===== */}
      <div className="bg-[#25671E] text-white py-20 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          Need Forensic Assistance?
        </h2>
        <p className="text-green-100 mb-8">
          Contact our laboratory for secure and confidential case handling.
        </p>

        <a
          href="/contact"
          className="bg-[#F2B50B] text-[#1F2937] px-8 py-3 rounded-lg font-semibold hover:brightness-110 transition"
        >
          Contact Now
        </a>
      </div>

    </section>
  );
}