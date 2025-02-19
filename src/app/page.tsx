import { Container } from "@mui/material";
import TopPicks from "./components/home/TopPicks";
import UpcomingMatches from "./components/home/UpcomingMatches";
import Banner from "./components/layout/Banner";
import BottomNavigation from "./components/layout/BottomNavigation";
import Header from "./components/layout/Header";
import SearchBar from "./components/layout/SearchBar";
import TrendingPlayers from "./components/home/TrendingPlayers";
import AdditionalLinks from "./components/home/AdditionalLinks";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F9FC] text-[#1E1E1E] pb-16">
      <Header />
      <div className="px-4 py-2">
        <Banner />
        <Container className="hidden md:flex">
        <SearchBar type="full" />
        </Container>
        <Container className="flex md:hidden flex-col">
        <SearchBar type="full" />
        <TrendingPlayers />
        <TopPicks />
        <AdditionalLinks alignment="row"/>
        </Container>
        {/* <UpcomingMatches /> */}


      </div>
      <BottomNavigation />
    </main>
  )
}