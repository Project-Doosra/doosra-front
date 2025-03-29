import { X, ChevronDown, ChevronUp, Search } from "lucide-react";
import rcblogo from "../../../../public/rcblogo.png";
import kkrlogo from "../../../../public/kkrlogo.png";
import Image from "next/image";

export const MatchHeader = () => {
  return (
    <div className="bg rounded-lg max-w-xl text-black mx-auto">
      {/* Top row with logo and score */}
      <div className="flex justify-between rounded-b-2xl bg-white mb-4 items-center ">
        <div className="flex items-center gap-2 text-2xl p-4  rounded-xl ">
          <span className="text-black font-bold">IPL</span>
          <span className="text-black font-bold">Live Score</span>
        </div>
        <div className="flex items-center px-4">
          <span className="text-gray-700 text-sm mr-1">RCB vs KKR</span>
          <ChevronDown size={16} className="text-gray-500" />
        </div>
      </div>

      {/* Stadium info and match details */}
      <div className="flex flex-col bg-white rounded-xl  p-4 mx-2">
        <div className="flex justify-between items-center text-[10px] text-gray-500 ">
          <span>Championship stadium</span>
          <span>Match 515 Indian Premier League</span>
          <div className="flex items-center">
            <span>20 overs match</span>
          </div>
        </div>

        {/* Team scores */}
        <div className="flex  justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-yellow-100 rounded-full mr-2 flex items-center justify-center">
              <Image
                src={rcblogo}
                alt="RCB logo"
                className=" rounded-full object-cover h-16"
              />
            </div>
            <div>
              <div className="font-bold">RCB</div>
              <div className="text-xs text-gray-500 flex items-center">
                <span>Batting</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3 h-3 ml-1"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="font-bold text-lg">152/7</div>
            <div className="text-xs text-gray-500">1st Innings</div>
            <div className="text-xs text-gray-500 text-center mt-1">(19.5)</div>
          </div>

          <div className="flex items-center">
            <div>
              <div className="font-bold text-right">KKR</div>
              <div className="text-xs text-gray-500 text-right">Bowling</div>
            </div>
            <div className="w-8 h-8 bg-purple-100 rounded-full ml-2 flex items-center justify-center">
              <Image
                src={kkrlogo}
                alt="KKR logo"
                className="rounded-full object-cover h-16"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Overs */}
    </div>
  );
};
