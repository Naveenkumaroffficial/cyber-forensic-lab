type InfoItem = {
  id: number;
  title: string;
};

type InfoCardProps = {
  title: string;
  items: InfoItem[];
  link: string;
};

export default function InfoCard({ title, items, link }: InfoCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-md border border-[#E5E7EB] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">

      {/* Top Header */}
      <div className="bg-[#25671E] px-6 py-4 relative">
        <h3 className="text-white text-lg font-semibold tracking-wide">
          {title}
        </h3>

        {/* Accent underline */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#F2B50B]"></div>
      </div>

      {/* Content Area */}
      <div className="p-6 bg-[#F7F0F0]">

        <ul className="space-y-4 text-[#1F2937] text-sm md:text-base">
          {items.map((item) => (
            <li key={item.id} className="flex gap-3 items-start">
              
              {/* Custom bullet */}
              <span className="mt-2 w-2 h-2 bg-[#48A111] rounded-full flex-shrink-0"></span>
              
              <span className="leading-relaxed">
                {item.title}
              </span>
            </li>
          ))}
        </ul>

        {/* View All */}
        <div className="mt-8">
          <a
            href={link}
            className="inline-flex items-center gap-2 text-[#25671E] font-medium hover:text-[#F2B50B] transition duration-300"
          >
            View All
            <span className="text-lg">→</span>
          </a>
        </div>

      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-[#48A111] opacity-0 group-hover:opacity-5 transition duration-300"></div>
    </div>
  );
}
