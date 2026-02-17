export default function NotificationCard() {
  const notifications = [
    {
      id: 1,
      title: "Recruitment drive 2026 – Applications open",
      date: "15 Mar 2026",
      isNew: true,
    },
    {
      id: 2,
      title: "Lab accreditation renewed for 2026-2028",
      date: "10 Mar 2026",
      isNew: false,
    },
    {
      id: 3,
      title: "New SOPs for mobile forensics released",
      date: "28 Feb 2026",
      isNew: false,
    },
  ];

  return (
    <div className="group bg-white rounded-2xl shadow-md border border-[#E5E7EB] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">

      {/* Header */}
      <div className="bg-[#25671E] px-6 py-4 relative">
        <h3 className="text-white text-lg font-semibold tracking-wide">
          Notifications
        </h3>

        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#F2B50B]"></div>
      </div>

      {/* Content */}
      <div className="p-6 bg-[#F7F0F0]">

        <ul className="space-y-5">
          {notifications.map((item) => (
            <li key={item.id} className="flex gap-3 items-start">

              {/* Bullet */}
              <span className="mt-2 w-2 h-2 bg-[#48A111] rounded-full flex-shrink-0"></span>

              <div className="flex-1">
                <p className="text-[#1F2937] text-sm md:text-base font-medium leading-relaxed">
                  {item.title}
                </p>

                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-gray-500">
                    {item.date}
                  </span>

                  {item.isNew && (
                    <span className="text-xs bg-[#F2B50B] text-[#1F2937] px-2 py-0.5 rounded-full font-medium">
                      New
                    </span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* View All */}
        <div className="mt-8">
          <a
            href="/notifications"
            className="inline-flex items-center gap-2 text-[#25671E] font-medium hover:text-[#F2B50B] transition duration-300"
          >
            View All
            <span className="text-lg">→</span>
          </a>
        </div>

      </div>

      {/* Soft Hover Glow */}
      <div className="absolute inset-0 rounded-2xl bg-[#48A111] opacity-0 group-hover:opacity-5 transition duration-300"></div>
    </div>
  );
}
