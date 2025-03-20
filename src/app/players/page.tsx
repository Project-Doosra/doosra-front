import { Container } from "@mui/material";
import Header from "../components/layout/Header";
import PlayerSearchBar from "../components/player/PlayerSearchBar";
import Footer from "../components/layout/Footer";
import BottomNavigation from "../components/layout/BottomNavigation";
import AllTeams from "../components/teams/TeamsGrid";
import PlayerCategory from "../components/teams/PlayerCategories";

export default function Players() {
    return (
        <Container className="min-h-screen bg-[#F5F9FC] text-[#1E1E1E]">
            <Header />
            <div className="px-6 py-4 player-search-bar"
            >
                <PlayerSearchBar
                    type="basic"
                    placeholder="Search any player" />

            </div>
            <Container className="all-teams px-4 py-2">
                <AllTeams alignment="row" />
            </Container>
            <Container className="player-categories px-4 py-2">
                <PlayerCategory alignment="row" />
            </Container>
            <Container className="player-leaders px-4 py-2">
                <h2 className="text-md font-semibold mb-3 text-[#074799]">
                    Player Leaders - WIP
                </h2>
            </Container>
            <Container className="player-auction px-4 py-2">
                <h2 className="text-md font-semibold mb-3 text-[#074799]">
                    Player Auction - WIP
                </h2>
            </Container>
            <Container className="player-news px-4 py-2">
                <h2 className="text-md font-semibold mb-3 text-[#074799]">
                    Player News - WIP
                </h2>
            </Container>

            <Footer />
            <div className="md:hidden fixed bottom-0 w-full">
                <BottomNavigation />
            </div>
        </Container>
    );
}