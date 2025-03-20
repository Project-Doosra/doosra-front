import { getBaseUrl, getCountryFlagUrl } from "@/lib/utils";
import { Container } from "@mui/material";
import Link from "next/link";

async function getPlayers() {
  const res = await fetch(`${getBaseUrl()}/api/players`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch players");
  }
  return res.json();
}

export default async function TopPicks() {
  const players = await getPlayers();

  return (
    <Container disableGutters className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#074799] font-bold">Top picks</h2>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-[#EEEEEE] rounded text-sm w-[100]">
            IPL
          </span>
          <span className="px-3 py-1 bg-[#EEEEEE] rounded text-sm w-[100]">
            Bowler
          </span>
        </div>
      </div>
      <div className="pb-4">
        <div
          className="grid grid-cols-3 gap-2 w-full"
          style={{ minWidth: "min-content" }}
        >
          {players.map((player: any) => (
            <Link href={`/players/${player.id}`} key={player.id}>
              <div className="bg-[#FFFFFF] border-2 border-black rounded-[0.5rem] pl-2 pt-2 w-full flex-shrink-0 cursor-pointer hover:bg-[#EEEEEE] transition-colors">
                <div className="flex items-start justify-between mb-2 px-1">
                  <img src={player.teamLogo} alt="Team" className="w-6 h-6" />

                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-10 h-16"
                  />
                  <img
                    src={getCountryFlagUrl(player.nationality)}
                    alt={player.nationality}
                    className="w-6 h-6"
                  />
                </div>
                <div className="flex flex-col items-center justify-center mb-2">
                <h3 className="font-semibold sm: text-lg">{player.name}</h3>
                <div className="mt-1 mb-2">
                <div className="flex items-center gap-6 sm: gap-8 justify-between text-[10px] sm:text-sm font-semibold">
                    <span>Avg selection</span>
                    <span>{player.avgSelection}%</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] sm:text-sm font-semibold">
                    <span>Avg points</span>
                    <span>{player.avgPoints}</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] sm:text-sm font-semibold">
                    <span>Rating</span>
                    <span>{player.rating}</span>
                  </div>
                </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href={'/players'}>
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
