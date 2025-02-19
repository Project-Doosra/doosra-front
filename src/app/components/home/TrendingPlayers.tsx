import { getBaseUrl } from "@/lib/utils";
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

export default async function TrendingPlayers() {
  const players = await getPlayers();

  return (
    <section className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#FFB800]">Trending Players</h2>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-[#2A2A2A] rounded-full text-sm">
            IPL
          </span>
          <span className="px-3 py-1 bg-[#2A2A2A] rounded-full text-sm">
            Popular
          </span>
        </div>
      </div>
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-4" style={{ minWidth: "min-content" }}>
          {players.map((player: any) => (
            <Link href={`/player/${player.id}`} key={player.id}>
              <div className="bg-[#2A2A2A] rounded-lg p-4 w-[160px] flex-shrink-0 cursor-pointer hover:bg-[#353535] transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <img src={player.teamLogo} alt="Team" className="w-6 h-6" />
                </div>
                <h3 className="font-semibold">{player.name}</h3>
                <p className="text-sm text-gray-400">{player.role}</p>
                <div className="mt-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Avg points</span>
                    <span className="text-[#FFB800]">{player.avgPoints}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Rating</span>
                    <span className="text-[#FFB800]">{player.rating}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
