import React from "react";

interface AdditionalLinksProps {
  alignment: "row" | "column";
}

const AdditionalLinks: React.FC<AdditionalLinksProps> = ({ alignment }) => {
  const links = [
    { text: "Points Table", url: "/points-table" },
    { text: "Ground Stats", url: "/ground-stats" },
    { text: "Player Stats", url: "/player-stats" },
    { text: "All Matches", url: "/all-matches" },
  ];

  return (
    <div className="w-full p-4">
      <h2 className="text-lg font-semibold mb-3 text-gray-800">
        What are you looking for?
      </h2>
      <div className={`flex ${alignment === "column" ? "flex-col" : "flex-row"} gap-3`}>
        {links.map((link, index) => (
          <a key={index} href={link.url} className="w-full sm:w-auto">
            <button className="flex items-center gap-2 bg-[#074799] text-white px-4 py-2 rounded-md shadow-md transition duration-200 hover:bg-[#063a7d]">
              <div className="w-5 h-5 bg-white opacity-50 rounded-full"></div>
              <span className="text-sm font-medium">{link.text}</span>
            </button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AdditionalLinks;
