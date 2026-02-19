import HeroBanner from '../components/home/HeroBanner';
import PromotionsSection from '../components/home/PromotionsSection';
import CasinoAndGames from '../components/home/CasinoAndGames';
import LiveBetting from '../components/home/LiveBetting';
import SportsBetting from '../components/home/SportsBetting';
import SportsHero from "../components/home/SportsHerosection"; // Adjust the path as needed
import FreeSpinBonus from '../components/home/FreeSpinBonus';
import LatestBet from '../components/home/LatestBet';

const Home = () => {
  return (
    <div className="flex flex-col gap-[32px]">
      <HeroBanner />
      <PromotionsSection />
      <LiveBetting />
      <SportsBetting />
      <SportsHero />
      <CasinoAndGames />
      <FreeSpinBonus />
      <LatestBet />
    </div>
  );
};

export default Home;