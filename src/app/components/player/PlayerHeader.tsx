"use client";
import { BiCricketBall } from "react-icons/bi";
import { FaBaseballBatBall } from "react-icons/fa6";
import { GiCricketBat } from "react-icons/gi";
import { MdSportsCricket } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { GiWinterGloves } from "react-icons/gi";

interface PlayerHeaderProps {
  player: {
    name: string;
    role: string;
    age: number;
    bowlingStyle: string;
    dob: string;
    country: string;
    teamLogo: string;
    headerImage: string;
  };
}
enum PlayerRole {
  BATSMAN = "Batsman",
  BOWLER = "Bowler",
  ALLROUNDER = "All-Rounder",
  WICKETKEEPER = "Wicket",
}
export default function PlayerHeader({ player }: PlayerHeaderProps) {
  const getRoleIcon = (role: string) => {
    switch (role) {
      case "Batsman":
        return <GiCricketBat className="text-blue-600 text-2xl" />;
      case "Bowler":
        return <BiCricketBall className="text-white text-2xl" />;

      case "All-Rounder":
        return <MdSportsCricket className="text-green-600 text-2xl" />;
      case "Wicket":
        return <GiWinterGloves className="text-yellow-600 text-2xl" />;
      default:
        return null; // Default icon if role is missing
    }
  };

  return (
    <div className="relative h-[280px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${player.headerImage})`,
          backgroundPosition: "center 14%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black" />
      </div>

      {/* Content */}
      <div className="relative h-full p-6">
        <div className="flex items-center justify-between">
          <button className="text-white" onClick={() => window.history.back()}>
            <span className="material-icons">arrow_back</span>
          </button>
          <span className="text-[#FFB800]">Doosra</span>
        </div>

        <div className="mt-36 bottom-6 w-full ">
          <div className="flex items-center gap-2 mb-4">
            <h1 className="text-3xl font-bold">{player.name}</h1>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div>{getRoleIcon(player.role)}</div>
              <div className="text-xs">
                <div>{player.role}</div>
                <span>{player.bowlingStyle}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <FaPerson className="text-2xl" />
              </div>
              <div className="text-xs">
                <div>{player.age}</div>
                <span>{player.dob}</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm">{player.country}</span>
              {/* <img
                src={player.teamLogo}
                alt={player.country}
                className="w-2 h-2"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
