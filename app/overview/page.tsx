import { ShieldCheck, Database, Search, FileText } from "lucide-react";

export default function OverviewPage() {
  return (
    <section className="bg-[#F7F0F0] min-h-screen">

      {/* ===== Banner ===== */}
      <div className="bg-[#25671E] text-white py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          Overview
        </h1>
        <p className="text-green-100 max-w-2xl mx-auto text-sm md:text-base">
         Institutional overview of the Cyber Forensic Laboratory and its operational mandate in digital investigations.
        </p>
        <div className="w-24 h-1 bg-[#F2B50B] mx-auto mt-6 rounded-full"></div>
      </div>

      {/* ================= Institutional Profile ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#25671E] mb-8">
          Institutional Profile
        </h2>

        <p className="text-[#1F2937] max-w-3xl mx-auto leading-relaxed">
          The Cyber Forensic Laboratory, Panchkula, operates as a specialized
          digital investigation unit supporting law enforcement agencies and
          judicial authorities. The laboratory ensures scientific examination,
          secure evidence handling, and preparation of legally admissible reports.
        </p>
      </div>

      {/* ================= Key Capabilities ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Evidence Examination */}
          <div className="bg-white p-8 rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-lg transition">
            <Search className="text-[#F2B50B] mb-5" size={30} />
            <h3 className="text-lg font-semibold text-[#25671E] mb-3">
              Evidence Examination
            </h3>
            <p className="text-[#1F2937] text-sm leading-relaxed">
              Scientific analysis of digital storage media and electronic devices.
            </p>
          </div>

          {/* Data Recovery */}
          <div className="bg-white p-8 rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-lg transition">
            <Database className="text-[#F2B50B] mb-5" size={30} />
            <h3 className="text-lg font-semibold text-[#25671E] mb-3">
              Data Recovery
            </h3>
            <p className="text-[#1F2937] text-sm leading-relaxed">
              Retrieval and reconstruction of deleted or damaged digital data.
            </p>
          </div>

          {/* Secure Handling */}
          <div className="bg-white p-8 rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-lg transition">
            <ShieldCheck className="text-[#F2B50B] mb-5" size={30} />
            <h3 className="text-lg font-semibold text-[#25671E] mb-3">
              Secure Handling
            </h3>
            <p className="text-[#1F2937] text-sm leading-relaxed">
              Strict chain-of-custody procedures ensuring evidence integrity.
            </p>
          </div>

          {/* Expert Reporting */}
          <div className="bg-white p-8 rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-lg transition">
            <FileText className="text-[#F2B50B] mb-5" size={30} />
            <h3 className="text-lg font-semibold text-[#25671E] mb-3">
              Expert Reporting
            </h3>
            <p className="text-[#1F2937] text-sm leading-relaxed">
              Preparation of legally admissible forensic documentation.
            </p>
          </div>

        </div>
      </div>

      {/* ================= Operational Focus ================= */}
      

     

    </section>
  );
}