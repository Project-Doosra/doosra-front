
import BottomNavigation from "@/app/components/layout/BottomNavigation";
import Footer from "@/app/components/layout/Footer";
import PlayerPage from "@/app/components/player/PlayerPage";
import TeamPage from "@/app/components/teams/TeamPage";
import { getBaseUrl } from "@/lib/utils";

async function getTeam(id: string) {
  const res = await fetch(`${getBaseUrl()}/api/teams/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch player");
  }
  return res.json();
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function TeamDetailPage({ params }: PageProps) {
  const { id } = await params;
  const team = await getTeam(id);
  return (
    <div className="min-h-screen bg-primary">
      <TeamPage team={team} />
      <Footer />
      <div className="md:hidden fixed bottom-0 w-full">
        <BottomNavigation />
      </div>
    </div>
  );
}
