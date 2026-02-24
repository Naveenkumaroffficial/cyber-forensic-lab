import Image from "next/image";

export default function GalleryPage() {
  const images = [
    { src: "/gallery1.jpg", title: "Digital Forensic Workstation" },
    { src: "/gallery2.jpg", title: "Evidence Examination Lab" },
    { src: "/gallery3.jpg", title: "Mobile Forensics Unit" },
    { src: "/gallery4.jpg", title: "Cyber Investigation Setup" },
    { src: "/gallery5.jpg", title: "Secure Evidence Storage" },
    { src: "/gallery6.jpg", title: "Technical Analysis Session" },
  ];

  return (
    <section className="bg-[#F7F0F0] min-h-screen">

     {/* ===== Banner ===== */}
      <div className="bg-[#25671E] text-white py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          Gallery
        </h1>
        <p className="text-green-100 max-w-2xl mx-auto text-sm md:text-base">
            A glimpse into our forensic infrastructure, technical facilities,
            and operational environment.
        </p>
        <div className="w-24 h-1 bg-[#F2B50B] mx-auto mt-6 rounded-full"></div>
      </div>

      {/* ================= Gallery Intro ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#25671E] mb-6">
          Laboratory Infrastructure & Operations
        </h2>

        <p className="text-[#1F2937] max-w-3xl mx-auto leading-relaxed">
          The Cyber Forensic Laboratory operates with modern infrastructure
          and advanced digital forensic systems designed to ensure secure,
          accurate, and efficient investigations.
        </p>
      </div>

      {/* ================= Image Grid ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md border border-[#E5E7EB]"
            >
              <Image
                src={image.src}
                alt={image.title}
                width={600}
                height={400}
                className="w-full h-[280px] object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#25671E]/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-center p-4">
                <h4 className="text-white font-semibold text-lg">
                  {image.title}
                </h4>
              </div>
            </div>
          ))}

        </div>
      </div>

    

    </section>
  );
}