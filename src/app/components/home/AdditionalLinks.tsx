import React from "react";
import { FaTableCells } from "react-icons/fa6";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { PiCricket } from "react-icons/pi";
import { LiaBaseballBallSolid } from "react-icons/lia";

interface AdditionalLinksProps {
  alignment: "row" | "column";
}

const AdditionalLinks: React.FC<AdditionalLinksProps> = ({ alignment }) => {
  const links = [
    { text: "Points Table", url: "/points-table", icon: <FaTableCells size={24}/> },
    { text: "Ground Stats", url: "/ground-stats", icon: <LiaBaseballBallSolid size={24}/> },
    { text: "Player Stats", url: "/player-stats", icon: <HiOutlinePresentationChartBar size={24}/> },
    { text: "All Matches", url: "/all-matches", icon: <PiCricket size={24}/> },
  ];

  return (
    <div className="w-full mt-3 flex flex-col justify-center">
      <h2 className="text-md font-semibold mb-3 text-[#074799]">
        What are you looking for?
      </h2>
      <div className={`flex ${alignment === "column" ? "flex-col items-center gap-3" : "flex-row justify-center p-2"}`}>
        {links.map((link, index) => (
          <a key={index} href={link.url} className="w-full flex flex-col items-center gap-2">
            <button className="flex rounded-[0.5rem] items-center justify-center gap-2 bg-[#074799] text-white px-4 py-4 shadow-md transition duration-200 hover:bg-[#063a7d]">
              <div className="w-8 h-8 flex justify-center items-center">{link.icon}</div>
            </button>
            <span className="text-sm font-semibold">{link.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AdditionalLinks;
