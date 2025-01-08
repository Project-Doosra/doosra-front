import { NextResponse } from 'next/server';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const playerData = {
        id: 2,
        name: 'Pat Cummins',
        role: 'Bowler',
        age: 31,
        bowlingStyle: 'Right arm fast',
        dob: '8 May 1993',
        country: 'AUS',
        teamLogo: 'https://picsum.photos/id/237/200/300',
        headerImage: 'https://picsum.photos/id/237/200/300',
        careerStats: {
            matches: 88,
            wickets: 141,
            runsScored: 492,
            strikeRate: 37,
            bowlingAverage: 13.66,
            economy: 28.66,
            catches: 24,
            bestBowling: '9/70'
        },
        currentForm: {
            lastMatches: [
                { date: '22/12/24', bowling: '4/65 (13 Ov)', batting: '45*(64)', avgPoints: 22.53, xAvg: 16.21 },
                { date: '20/12/24', bowling: '3/51 (13 Ov)', batting: '45*(64)', avgPoints: 22.53, xAvg: 16.21 },
                { date: '18/12/24', bowling: '3/76 (13 Ov)', batting: '45*(64)', avgPoints: 22.53, xAvg: 16.21 },
                { date: '16/12/24', bowling: '1/52 (13 Ov)', batting: '45*(64)', avgPoints: 22.53, xAvg: 16.21 },
                { date: '14/12/24', bowling: '2/56 (13 Ov)', batting: '45*(64)', avgPoints: 22.53, xAvg: 16.21 }
            ],
            summary: {
                fantasyPoints: 164,
                wickets: 12,
                runs: 225
            }
        },
        information: [
            'Aggressive lower-order batsman',
            'One of the finest fast bowlers of his generation',
            'No 3 in ICC Test all-rounder ranking',
            'ICC Test cricketer of the year 2022',
            'Current Australian captain'
        ],
        videos: [
            { id: 1, title: 'Cummins press conference 1', thumbnail: '/video1-thumb.jpg' },
            { id: 2, title: 'Cummins press conference 2', thumbnail: '/video2-thumb.jpg' }
        ]
    };

    return NextResponse.json(playerData);
} 