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

    <div className="flex flex-col gap-[20px] my-0 md:my-5 mr-0 md:mr-10">
      <HeroBanner />
      <div className='md:p-0 px-4'>
        <PromotionsSection />
        <LiveBetting />
        <SportsBetting />
      </div>

      {/* Hero stretches edge-to-edge on mobile — break out of MainLayout's px-3 */}
      <div className="-mx-3 md:mx-0">
        <SportsHero />
      </div>

      <div className='md:p-0 px-4'>
        <CasinoAndGames />
        <FreeSpinBonus />
        <LatestBet />
      </div>
    </div>
  );
};

export default Home;