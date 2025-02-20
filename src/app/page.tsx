import { Container } from "@mui/material";
import TopPicks from "./components/home/TopPicks";
import UpcomingMatches from "./components/home/UpcomingMatches";
import Banner from "./components/layout/Banner";
import BottomNavigation from "./components/layout/BottomNavigation";
import Header from "./components/layout/Header";
import SearchBar from "./components/layout/SearchBar";
import TrendingPlayers from "./components/home/TrendingPlayers";
import AdditionalLinks from "./components/home/AdditionalLinks";
import Footer from "./components/layout/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F9FC] text-[#1E1E1E]">
      <Header />
      <div className="px-4 py-2">
        <Banner />
        {/* Container for desktop */}
        <Container className="hidden md:flex flex-col">
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col items-center gap-3">
            <SearchBar type="full" placeholder="Search players, predictions, teams, etc." />
            <TrendingPlayers/>
            </div>
            <div>
            <AdditionalLinks alignment="column"/>
            </div>
          </div>
        <TopPicks />
        </Container>
        {/* Container for mobile */}
        <Container className="flex md:hidden flex-col">
        <SearchBar type="full" placeholder="Search players, predictions, teams, etc." />
        <TrendingPlayers />
        <TopPicks />
        <AdditionalLinks alignment="row"/>
        </Container>
      </div>
      <Footer/>
      <div className="md:hidden">
      <BottomNavigation />
      </div>
    </main>
  )
}