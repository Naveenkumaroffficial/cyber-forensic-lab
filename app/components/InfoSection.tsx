import InfoCard from "./InfoCard";

export default function InfoSection() {
  const notifications = [
    { id: 1, title: "Recruitment drive 2026 – Applications open" },
    { id: 2, title: "Lab accreditation renewed for 2026-2028" },
    { id: 3, title: "New SOPs for mobile forensics released" },
  ];

  const tenders = [
    { id: 1, title: "Tender for forensic workstations – Due 15 Mar 2026" },
    { id: 2, title: "AMC for network infrastructure – Open" },
    { id: 3, title: "Supply of forensic imaging tools – New" },
  ];

  const news = [
    { id: 1, title: "Workshop on AI in cyber forensics held" },
    { id: 2, title: "MOU signed with national cyber agency" },
    { id: 3, title: "New wing inaugurated for malware analysis" },
  ];

  return (
    <section className="py-24 bg-[#F7F0F0]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
         <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#25671E] mb-6">
            Latest Updates
          </h2>

          <p className="text-[#1F2937] max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Stay informed about official notifications, ongoing tenders,
            and recent developments from the Cyber Forensic Laboratory.
          </p>

          {/* Accent Divider */}
          <div className="w-24 h-1 bg-[#F2B50B] mx-auto mt-6 rounded-full"></div>
        </div>
     

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <InfoCard
            title="Notifications"
            items={notifications}
            link="/notifications"
          />

          <InfoCard
            title="Tenders"
            items={tenders}
            link="/tenders"
          />

          <InfoCard
            title="Latest News"
            items={news}
            link="/news"
          />
        </div>

      </div>
    </section>
  );
}
