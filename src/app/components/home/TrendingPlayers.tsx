"use client";
import { getCountryFlagUrl } from "@/lib/getFlags";
import { Container } from "@mui/material";
import Link from "next/link";

// async function getPlayers() {
//   const res = await fetch(`${getBaseUrl()}/api/players`, {
//     cache: "no-store",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   if (!res.ok) {
//     throw new Error("Failed to fetch players");
//   }
//   console.log("res", res);
//   return res.json();
// }

export default function TrendingPlayers() {
  const players = [
    {
      id: 1,
      name: 'V.Kohli',
      role: 'Batsman',
      rating: 95.4,
      avgPoints: 123,
      avgSelection: 95,
      image: 'https://picsum.photos/60/60?random=5',
      teamLogo: 'https://picsum.photos/20/20?random=5',
      nationality: "India",
      value: "27 cr",
      stats: {
        matches: 123,
        rating: 95.4
      }
    },
    {
      id: 2,
      name: 'T.Head',
      role: 'Batsman',
      rating: 92.4,
      avgPoints: 125,
      avgSelection: 92,
      image: 'https://picsum.photos/60/60?random=2',
      teamLogo: 'https://picsum.photos/20/20?random=2',
      nationality: "Australia",
      value: "27 cr",
      stats: {
        matches: 123,
        rating: 92.4
      }
    },
    {
      id: 3,
      name: 'J.Butler',
      role: 'Wicketkeeper',
      rating: 91.4,
      avgPoints: 123,
      avgSelection: 90,
      image: 'https://picsum.photos/60/60?random=1',
      teamLogo: 'https://picsum.photos/20/20?random=3',
      nationality: "England",
      value: "27 cr",
      stats: {
        matches: 123,
        rating: 91.4
      }
    },
    {
      id: 4,
      name: 'R.Sharma',
      role: 'Batsman',
      rating: 94.2,
      avgPoints: 120,
      avgSelection: 89,
      image: 'https://picsum.photos/60/60?random=3',
      teamLogo: 'https://picsum.photos/20/20?random=4',
      nationality: "India",
      value: "27 cr",
      stats: {
        matches: 120,
        rating: 94.2
      }
    },
    {
        id: 5,
        name: 'A.Chand',
        role: 'Bowler',
        rating: 92.2,
        avgSelection: 80,
        avgPoints: 100,
        image: 'https://picsum.photos/60/60?random=4',
        teamLogo: 'https://picsum.photos/20/20?random=4',
        nationality: "India",
        value: "27 cr",
        stats: {
          matches: 150,
          rating: 92.2
        }
      }
  ];

  return (
    <Container disableGutters className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#074799] font-bold">Trending Buys at Auction</h2>
      </div>
      <div className="pb-4">
        <div
          className="grid grid-cols-2 gap-2 w-full"
          style={{ minWidth: "min-content" }}
        >
          {players.slice(0, 2).map((player: any) => (
            <Link href={`/player/${player.id}`} key={player.id}>
              <div className="bg-[#FFFFFF] border-2 border-black rounded-[0.5rem] pl-2 pt-2 cursor-pointer hover:bg-[#EEEEEE] transition-colors w-full">
                {/* Full Card Layout */}
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-2 sm:gap-4 mr-2 mb-2">
                    <img
                      src={getCountryFlagUrl(player.nationality)}
                      alt={player.nationality}
                      className="w-6 h-6"
                    />
                    <img
                      src={player.image}
                      alt={player.name}
                      className="w-10 h-20 sm:w-16"
                    />
                    <div className="flex flex-row flex-grow">
                      <div className="flex flex-col flex-grow">
                        <h3 className="font-semibold text-md sm:text-lg text-[#1E1E1E]">
                          {player.name}
                        </h3>
                        <p className="text-sm font-semibold text-[#4C585B]">
                          {player.role}
                        </p>
                        <p className="text-md text-[#1E1E1E] font-semibold mt-4">
                          {player.value}
                        </p>
                      </div>
                    </div>
                    <img
                      src={player.teamLogo}
                      alt="Team"
                      className="w-6 h-6 mt-auto"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-1 w-full mt-4">
          {players.slice(2, 5).map((player: any) => (
            <Link href={`/player/${player.id}`} key={player.id}>
              <div className="bg-[#FFFFFF] border-2 border-black rounded-[10px] p-1 sm: p-3 cursor-pointer hover:bg-[#EEEEEE] transition-colors w-full">
                {/* Basic Card Layout */}
                <div className="flex flex-col gap-2 px-1">
                  <div className="flex items-center justify-between pt-1">
                    <img
                      src={getCountryFlagUrl(player.nationality)}
                      alt={player.nationality}
                      className="w-6 h-6"
                    />
                    <h3 className="text-sm font-semibold">{player.name}</h3>
                    <img src={player.teamLogo} alt="Team" className="w-6 h-6" />
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#1E1E1E] font-semibold">
                      {player.value}
                    </span>
                    <span className="text-[#4C585B]">{player.role}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href={"/auction"}>
          <div className="flex justify-center mt-4">
            <span className="text-[#1E1E1E] font-semibold text-md cursor-pointer hover:text-[#000000] transition-colors">
              View All
            </span>
          </div>
        </Link>
      </div>
    </Container>
  );
}
