import { NextResponse } from "next/server";

export async function GET() {
    const matches = [
      {
        id: "c57dc00a-7070-4068-8869-80c40dbbd009",
        team1: { name: 'RCB', color: '#FF0000' },
        team2: { name: 'KKR', color: '#6B238E' },
        time: '6:00 Pm',
        date: 'Today'
      }
    ];
  
    return NextResponse.json(matches);
  }