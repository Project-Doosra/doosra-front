"use client";
import BottomNavigation from "@/app/components/layout/BottomNavigation";
import Footer from "@/app/components/layout/Footer";
import PlayerPage from "@/app/components/player/PlayerPage";
import axios from "axios";
import { use, useEffect, useState } from "react";
interface PageProps {
  params: Promise<{ id: string }>;
}
export default function PlayerDetailPage({ params }: PageProps) {
  const { id } = use(params); 
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    async function getPlayer(id: string) {
      try {
        const res = await axios.get(`http://localhost:8080/player/${id}`);
        setPlayer(res.data);
      } catch (error) {
        console.error("Failed to fetch player", error);
      }
    }

    if (id) {
      getPlayer(id);
    }
  }, [id]);

  if (!player) return <p  className="flex items-center justify-center w-full h-screen">Loading...</p>;


  return (
    <div className="min-h-screen bg-primary">
      <PlayerPage player={player} />
      <Footer />
      <div className="md:hidden fixed bottom-0 w-full">
        <BottomNavigation />
      </div>
    </div>
  );
}
