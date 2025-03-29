// Tab Components
export function OverviewTab({ matchData }: any) {
  return (
    <div className="mt-2  rounded-md">
      <div className="text-sm  px-2 mb-2">RCB chose to bat first</div>

      {/* Batsmen Table */}
      <div className="rounded-md p-2 mb-3">
        <table className="w-full">
          <thead>
            <tr className="text-xs ">
              <th className="text-left pb-2">Batsman</th>
              <th className="text-center pb-2">Runs</th>
              <th className="text-center pb-2">Balls</th>
              <th className="text-center pb-2">4s</th>
              <th className="text-center pb-2">6s</th>
              <th className="text-center pb-2">SR</th>
            </tr>
          </thead>
          <tbody>
            {matchData.overview.batting.map((player: any, index: any) => (
              <tr key={index} className="text-xs  border-t border-gray-600">
                <td className="py-2">{player.name}</td>
                <td className="text-center">{player.runs}</td>
                <td className="text-center">{player.balls}</td>
                <td className="text-center">{player.fours}</td>
                <td className="text-center">{player.sixes}</td>
                <td className="text-center">{player.sr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bowlers Table */}
      <div className="rounded-md p-2">
        <table className="w-full">
          <thead>
            <tr className="text-xs ">
              <th className="text-left pb-2">Bowler</th>
              <th className="text-center pb-2">O</th>
              <th className="text-center pb-2">M</th>
              <th className="text-center pb-2">R</th>
              <th className="text-center pb-2">W</th>
              <th className="text-center pb-2">ER</th>
            </tr>
          </thead>
          <tbody>
            {matchData.overview.bowling.map((player: any, index: any) => (
              <tr key={index} className="text-xs  border-t border-gray-600">
                <td className="py-2">{player.name}</td>
                <td className="text-center">{player.overs}</td>
                <td className="text-center">{player.maidens}</td>
                <td className="text-center">{player.runs}</td>
                <td className="text-center">{player.wickets}</td>
                <td className="text-center">{player.er}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ScorecardTab({ matchData }: any) {
  return (
    <div className="mt-4">
      <div className="text-sm  px-2 mb-2">Scorecard</div>

      <div className=" rounded p-2">
        <table className="w-full text-xs ">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="text-left py-1">Batsman</th>
              <th className="text-center">R</th>
              <th className="text-center">B</th>
              <th className="text-center">4s</th>
              <th className="text-center">6s</th>
              <th className="text-center">SR</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <tr key={i} className="border-b border-gray-600">
                <td className="py-1">
                  <div className="text-xs">{`D Padikkal c and b ${
                    i < 5 ? "Sunil Narine" : "Varun C"
                  }`}</div>
                  {i === 1 && (
                    <div className="text-gray-400 text-xs">22 (14) 4x1 6x1</div>
                  )}
                </td>
                <td className="text-center">22</td>
                <td className="text-center">14</td>
                <td className="text-center">1</td>
                <td className="text-center">1</td>
                <td className="text-center">157.14</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function CommentaryTab({ matchData }: any) {
  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-2">
        <div className="text-sm  px-2 mb-2">Recent</div>
        <div className="flex items-center">
          <button className="bg text-xs px-2 py-1 rounded  mr-1">
            Wickets
          </button>
          <button className="text-xs px-2 py-1 rounded ">Show more</button>
        </div>
      </div>

      <div className=" rounded p-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="mb-2 border-b border-gray-600 pb-2">
            <div className="flex justify-between mb-1">
              <div className="text-xs ">19.6 - Varun to Gulbadin</div>
              <div className="text-xs ">1 run</div>
            </div>
            <div className="text-xs text-gray-400">
              Short ball outside off stump, batsman makes contact through
              forward defensive shot
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PointsTab({ matchData }: any) {
  return (
    <div className="">
      <div className=" rounded p-2">
        <div className="text-sm  px-2  font-bold mb-2">Top Fantasy Players</div>
        <table className="w-full text-xs ">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="text-left py-1">Name</th>
              <th className="text-center">Team</th>
              <th className="text-center">Pts</th>
            </tr>
          </thead>
          <tbody>
            {matchData.fantasyPoints.map((player:any, index:any) => (
              <tr key={index} className="border-b border-gray-600">
                <td className="py-1">{player.name}</td>
                <td className="text-center">{player.team}</td>
                <td className="text-center">{player.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
