"use client";

// async function getMatches() {
//     const res = await fetch(`${getBaseUrl()}/api/matches`, {
//         cache: 'no-store',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });
//     if (!res.ok) {
//         throw new Error('Failed to fetch matches');
//     }
//     return res.json();
// }

export default function UpcomingMatches() {
  const matches: any = [
    {
      id: 1,
      team1: { name: "RCB", color: "#FF0000" },
      team2: { name: "KKR", color: "#6B238E" },
      time: "6:00 Pm",
      date: "Today",
    },
    {
      id: 2,
      team1: { name: "DC", color: "#0044CC" },
      team2: { name: "CSK", color: "#FFD700" },
      time: "6:00 Pm",
      date: "Today",
    },
    {
      id: 3,
      team1: { name: "GT", color: "#004D40" },
      team2: { name: "PBKS", color: "#FF0000" },
      time: "6:00 Pm",
      date: "Today",
    },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-[#FFB800] mb-3">Upcoming matches</h2>
      <div className="space-y-2">
        {matches.map((match: any) => (
          <div
            key={match.id}
            className="bg-[#2A2A2A] rounded-lg p-3 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-8 rounded flex items-center justify-center"
                style={{ backgroundColor: match.team1.color }}
              >
                {match.team1.name}
              </div>
              <span className="text-gray-400">vs</span>
              <div
                className="w-12 h-8 rounded flex items-center justify-center"
                style={{ backgroundColor: match.team2.color }}
              >
                {match.team2.name}
              </div>
            </div>
            <div className="text-sm text-gray-400">{match.time}</div>
          </div>
        ))}
      </div>
      <button className="text-[#FFB800] text-sm mt-2">View all</button>
    </div>
  );
}
