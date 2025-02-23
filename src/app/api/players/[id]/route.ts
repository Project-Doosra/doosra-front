import { NextResponse } from 'next/server';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const playerId = Number(id) as keyof typeof playerData;
    const playerData = {
        1: {
            id: 1,
            name: 'Pat Cummins',
            firstName: 'Pat',
            lastName: 'Cummins',
            role: 'Bowler',
            age: 31,
            bowlingStyle: 'Right arm fast',
            dob: '8 May 1993',
            country: 'AUS',
            teamLogo: 'https://picsum.photos/id/237/200/300',
            headerImage: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202402/pat-cummins-190017942-3x4.jpeg?VersionId=zbO.bV8Ms3m9ZLlQr5duknjihXhMPEQ6',
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
        },
        2: {
            id: 2,
            name: 'Default Player',
            role: 'Bowler',
            age: 31,
            bowlingStyle: 'Right arm fast',
            dob: '8 May 1993',
            country: 'AUS',
            teamLogo: 'https://picsum.photos/id/237/200/300',
            headerImage: 'data:image/jpeg;base64,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',
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
        }
    }


    return NextResponse.json(playerData[playerId] ?? playerData[2]);
} 