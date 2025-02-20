import { NextResponse } from 'next/server';

export async function GET() {
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

  return NextResponse.json(players);
}