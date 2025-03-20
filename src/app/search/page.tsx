"use client"
import { Container, Stack } from "@mui/material";
import SearchBar from "../components/layout/SearchBar";
import BottomNavigation from "../components/layout/BottomNavigation";
import SearchHeader from "../components/search/SearchHeader";
import BouncingBall from "../components/search/BouncingBall";
import { useRouter } from "next/navigation";
import { Button, ButtonGroup } from "@mui/joy";

export default function Search() {
    const router = useRouter();
    const handleSuggestionClick = (searchText: string) => {
        const query = searchText.replace(/\s+/g, "-");
        router.push(`/search/${query}`);

    };
    return (
        <main className="min-h-screen bg-[#F5F9FC] text-[#1E1E1E]">
            <SearchHeader />
            <Container className="px-4 py-8 flex flex-col items-center justify-center">
                <BouncingBall />
                <h1 className="text-[#074799] text-xl font-bold">How may we help you today?</h1>
            </Container>
            <Container className="search-bar">
                <SearchBar
                    type="full"
                    placeholder="Search players, predictions, teams, etc."
                />
            </Container>
            <Container className="search-suggestions pt-4 flex flex-col items-center justify-center">
                <h2 className="text-[#074799] text-md font-bold">Suggestions</h2>
                <Stack direction="row" spacing={3} className="mt-4">
                    <ButtonGroup size="sm" spacing="0.5rem" aria-label="Search Suggestions">
                        <Button  variant="solid" className="!text-xs !bg-[#074799] !rounded-[0.7rem] !hover:bg-[#075799]">Most promising players</Button>
                        <Button onClick={() => handleSuggestionClick("best-buys-of-ipl-auction")} variant="solid" className="!text-xs !bg-[#074799] !rounded-[0.7rem] !hover:bg-[#075799]">Best buys of auction</Button>
                        <Button onClick={() => handleSuggestionClick("latest-pitch-analysis")} variant="solid" className="!text-xs !bg-[#074799] !rounded-[0.7rem] !hover:bg-[#075799]">Pitch analysis</Button>
                    </ButtonGroup>
                </Stack>
                <Stack direction="row" spacing={2} className="mt-4">
                    <ButtonGroup size="sm" spacing="0.5rem" aria-label="Search Suggestions">
                        <Button onClick={() => handleSuggestionClick("Most-picked-players-in-ipl-fantasy")} variant="solid" className="!text-xs !bg-[#074799] !rounded-[0.7rem] !hover:bg-[#075799]">Most picked players</Button>
                        <Button onClick={() => handleSuggestionClick("Best-fantasy-teams-ipl")} variant="solid" className="!text-xs !bg-[#074799] !rounded-[0.7rem] !hover:bg-[#075799]">Best fantasy teams</Button>
                    </ButtonGroup>
                </Stack>
            </Container>
            <div className="md:hidden fixed bottom-0 w-full">
                <BottomNavigation />
            </div>
        </main>

    );
}