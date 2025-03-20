import React from "react";
import { FaTableCells } from "react-icons/fa6";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { PiCricket, PiHandGrabbing, PiBaseballCap} from "react-icons/pi";
import { LiaBaseballBallSolid } from "react-icons/lia";
import {  } from "react-icons/pi";
interface PlayerCategoryProps {
  alignment: "row" | "column";
}

const PlayerCategory: React.FC<PlayerCategoryProps> = ({ alignment }) => {
  const links = [
    { text: "Batsman", url: "/players/categories/batsman", icon: <FaTableCells size={30}/> },
    { text: "Bowlers", url: "/players/categories/bowlers", icon: <LiaBaseballBallSolid size={36}/> },
    { text: "All Rounders", url: "/players/categories/all-rounders", icon: <PiCricket size={24}/> },
    { text: "Wicketkeepers", url: "/players/categories/wicketkeepers", icon: <PiHandGrabbing size={36}/> },
    { text: "Uncapped", url: "/players/categories/uncapped", icon: <PiBaseballCap size={36}/> },

];

  return (
    <div className="w-full mt-3 flex flex-col justify-center">
      <h2 className="text-md font-semibold mb-3 text-[#074799]">
        Categories
      </h2>
      <div className={`flex ${alignment === "column" ? "flex-col items-center gap-3" : "flex-row justify-center p-2"}`}>
        {links.map((link, index) => (
          <a key={index} href={link.url} className="w-full flex flex-col items-center gap-2">
            <button className="flex rounded-[0.5rem] items-center justify-center gap-2 bg-[#074799] text-white px-4 py-4 shadow-md transition duration-200 hover:bg-[#063a7d]">
              <div className="w-8 h-8 flex justify-center items-center">{link.icon}</div>
            </button>
            <span className="text-xs font-semibold">{link.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PlayerCategory;
