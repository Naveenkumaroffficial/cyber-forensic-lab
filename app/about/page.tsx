import { ShieldCheck, Target, Eye } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="bg-[#F7F0F0]">

          {/* ===== Banner ===== */}
      <div className="bg-[#25671E] text-white py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          About Us
        </h1>
        <p className="text-green-100 max-w-2xl mx-auto text-sm md:text-base">
          
          
          
          Delivering accurate, secure, and legally compliant cyber forensic
            services to support law enforcement and the administration of justice.

        </p>
        <div className="w-24 h-1 bg-[#F2B50B] mx-auto mt-6 rounded-full"></div>
      </div>

      {/* ================= About Intro ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#25671E] mb-8">
          Cyber Forensic Laboratory, Panchkula
        </h2>

        <p className="text-[#1F2937] max-w-3xl mx-auto leading-relaxed text-base">
          The Cyber Forensic Laboratory provides comprehensive digital evidence
          examination and cyber investigation support. Our operations adhere to
          strict forensic standards, ensuring evidence integrity, confidentiality,
          and admissibility in judicial proceedings.
        </p>
      </div>

      {/* ================= Commitment / Mission / Vision ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Commitment */}
          <div className="bg-white p-10 rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-lg transition duration-300">
            <ShieldCheck className="text-[#F2B50B] mb-6" size={32} />
            <h3 className="text-xl font-semibold text-[#25671E] mb-4">
              Our Commitment
            </h3>

            <ul className="space-y-2 text-[#1F2937] text-sm leading-relaxed">
              <li>• Legally admissible forensic reporting</li>
              <li>• Secure chain-of-custody protocols</li>
              <li>• Advanced forensic technologies</li>
              <li>• Ethical and confidential case management</li>
            </ul>
          </div>

          {/* Mission */}
          <div className="bg-white p-10 rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-lg transition duration-300">
            <Target className="text-[#F2B50B] mb-6" size={32} />
            <h3 className="text-xl font-semibold text-[#25671E] mb-4">
              Our Mission
            </h3>

            <p className="text-[#1F2937] text-sm leading-relaxed">
              To provide reliable and technically sound digital forensic
              services that enhance investigative effectiveness and strengthen
              the delivery of justice.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-10 rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-lg transition duration-300">
            <Eye className="text-[#F2B50B] mb-6" size={32} />
            <h3 className="text-xl font-semibold text-[#25671E] mb-4">
              Our Vision
            </h3>

            <p className="text-[#1F2937] text-sm leading-relaxed">
              To be recognized as a leading cyber forensic institution known
              for integrity, technological excellence, and professional standards.
            </p>
          </div>

        </div>
      </div>

      {/* ================= Core Values ================= */}
      <div className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-2xl md:text-4xl font-semibold text-[#25671E] mb-6">
            Core Values
          </h2>

          <p className="text-[#1F2937] max-w-2xl mx-auto mb-14">
            Our operations are guided by integrity, professionalism, and strict
            adherence to forensic best practices.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {["Integrity", "Confidentiality", "Accuracy", "Professionalism"].map(
              (value, index) => (
                <div
                  key={index}
                  className="bg-[#F7F0F0] p-8 rounded-xl border border-[#E5E7EB]"
                >
                  <ShieldCheck
                    className="text-[#F2B50B] mx-auto mb-4"
                    size={28}
                  />
                  <h4 className="text-[#25671E] font-medium">
                    {value}
                  </h4>
                </div>
              )
            )}

          </div>

        </div>
      </div>

     

    </section>
  );
}