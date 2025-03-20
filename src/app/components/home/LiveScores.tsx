"use client"
import { useEffect, useState } from "react";
import { getBaseUrl } from "@/lib/utils";
import { Container } from "@mui/material";

async function getLiveMatches() {
  const res = await fetch(`${getBaseUrl()}/api/matches`, {
    cache: 'no-store',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!res.ok) throw new Error('Failed to fetch matches');
  console.log(res);
  const json = res.json();
  console.log(json);
  return json;
}

async function fetchLiveScores() {
  const res = await fetch(`${getBaseUrl()}/api/live-scores`, {
    cache: 'no-store',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!res.ok) throw new Error('Failed to fetch live scores');
  console.log(res);
  return res.json();
}

export default function LiveScores() {
  const [matches, setMatches] = useState<any[]>([]);
  const [liveScores, setLiveScores] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadMatches() {
      try {
        const matchData = await getLiveMatches();
        setMatches(matchData);

        if (matchData.length > 0) {
          const scoresData = await fetchLiveScores();
          const filteredScores = scoresData.filter((score: any) =>
            matchData.some((m: { id: any; }) => m.id === score.id)
          );
          setLiveScores(filteredScores);
        }
      } catch (err) {
        setError("Error loading matches");
      } finally {
        setLoading(false);
      }
    }
    loadMatches();
  }, []);

  // TODO: fix this loader
  if (loading) return <p className="text-gray-400">Loading live matches...</p>;
  // TODO: fix this error
  if (error) return <p className="text-red-500">{error}</p>;
  // TODO: fix this empty state
  if (matches.length === 0) return <p className="text-gray-400">No upcoming matches available.</p>;

  return (
    <Container disableGutters className="mt-4">

      <h2 className="text-[#074799] font-bold mb-3">Live Scores</h2>
      <div className="space-y-4">
        {liveScores.map((match: any) => (
          <div key={match.id} className="bg-[#FFFFFF] border-2 border-black rounded-[0.5rem] pt-2 px-3 pb-4">
            {/* Top Row - Match Info */}
            <div className="flex justify-between text-[0.6rem] mb-2">
              <p className="w-[100]">{match.venue}</p>
              <p className="w-[100] font-bold">{match.name}</p>
              <p className="w-[50]">{match.matchType.toUpperCase()} Match</p>
            </div>

            <div className="flex justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="logo">
                  <img src="../../../assets/logos/newzealand.png" alt={match.teams[0]} className="w-16 h-16" />
                </div>
                <div className="flex flex-col">
                  <div className="font-bold">{match.teams[0]}</div>
                  <div className="text-xs text-gray-400">Batting</div>
                </div>
                <div className="flex flex-col">
                  <div className="font-bold">{match.score[0].r}/{match.score[0].w}</div>
                  <div className="text-xs text-gray-400">{match.score.length} Innings</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex flex-col items-end">
                    <div className="font-bold">{match.teams[0]}</div>
                    <div className="text-xs text-gray-400">Batting</div>
                  </div>
                  <div className="logo">
                    <img src="../../../assets/logos/india.png" alt={match.teams[0]} className="w-16 h-16" />
                  </div>
                </div>

              </div>
              <div>
              </div>
              <div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
