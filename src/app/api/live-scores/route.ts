import { NextResponse } from "next/server";

export async function GET() {
    const matches = [
        {
            "id": "c57dc00a-7070-4068-8869-80c40dbbd009",
            "name": "New Zealand vs India, 12th Match, Group A",
            "matchType": "odi",
            "status": "India won by 44 runs",
            "venue": "Dubai International Cricket Stadium, Dubai",
            "date": "2025-03-02",
            "dateTimeGMT": "2025-03-02T09:00:00",
            "teams": [
              "New Zealand",
              "India"
            ],
            "score": [
              {
                "r": 249,
                "w": 9,
                "o": 50,
                "inning": "India Inning 1"
              },
              {
                "r": 205,
                "w": 10,
                "o": 45.3,
                "inning": "New Zealand Inning 1"
              }
            ],
            "series_id": "49fc7a37-da67-435e-bf5f-00da233e9ff4",
            "fantasyEnabled": true,
            "bbbEnabled": true,
            "hasSquad": true,
            "matchStarted": true,
            "matchEnded": true
          }
    ];
  
    return NextResponse.json(matches);
  }