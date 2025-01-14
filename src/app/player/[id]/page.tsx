
import PlayerPage from '@/app/components/player/PlayerPage';
import { getBaseUrl } from '@/lib/utils';

async function getPlayer(id: string) {
    const res = await fetch(`${getBaseUrl()}/api/players/${id}`, {
        cache: 'no-store',
    });
    if (!res.ok) {
        throw new Error('Failed to fetch player');
    }
    return res.json();
}

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function PlayerDetailPage({ params }: PageProps) {
    const { id } = await params;
    const player = await getPlayer(id);
    return (
        <div className="min-h-screen bg-primary">
            <PlayerPage player={player} />
        </div>
    );
}
