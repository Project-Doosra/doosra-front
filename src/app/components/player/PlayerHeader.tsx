"use client";
import Image from "next/image";
import { BiCricketBall } from "react-icons/bi";
import { FaPerson } from "react-icons/fa6";
import { GiCricketBat, GiWinterGloves } from "react-icons/gi";
import { MdSportsCricket } from "react-icons/md";
import LogoImg from "../../../../public/doosra.svg";
import { getCountryFlagUrl } from "@/lib/getFlags";
interface PlayerHeaderProps {
  player: {
    name: string;
    firstName: string;
    lastName: string;
    role: string;
    age: number;
    bowlingStyle: string;
    battingStyle: string;
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
    <div className="relative h-[320px]">
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
      <div className="relative h-full py-6 px-4 pt-3">
        <div className="flex items-center justify-between">
          <button className="text-white" onClick={() => window.history.back()}>
            <span className="material-icons">arrow_back</span>
          </button>
          <span className="text-[#FFB800]">
            <Image
              src={LogoImg}
              height={100}
              alt="img"
              width={100}
              className="w-30"
            />
          </span>
          <div></div>
        </div>

        <div className="mt-40 bottom-6 w-full ">
          <div className="flex flex-col mb-2">
            {/* <h1 className="text-3xl fontbold">{player.name}</h1> */}
            <h1 className="text-xl ">{player.firstName}</h1>
            <h1 className="text-3xl font-bold">{player.lastName}</h1>
          </div>
          <div className="text-[10px] flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <div>{getRoleIcon("Batsman")}</div>
              <div className="">
                <div>Batting</div>
                <span>{player.battingStyle}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>{getRoleIcon("Bowler")}</div>
              <div className="">
                <div>Bowling</div>
                <span className="">{player.bowlingStyle}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div>
                <FaPerson className="text-2xl" />
              </div>
              <div className="">
                <div>{player.age}</div>
                <span>{player.dob}</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="">{player.country}</span>
              <img
                src={getCountryFlagUrl("Australia")}
                // alt={player.country}
                className="w-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
