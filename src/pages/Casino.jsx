import { useState } from 'react';
import CasinoFilterBar from '../components/casino/CasinoFilterBar';
import CasinoGameSection from '../components/casino/CasinoGameSection';
import PromotionsSection from '../components/home/PromotionsSection';
import LatestBet from '../components/home/LatestBet';

import {
  slotsIcon, rouletteIcon, blackjackIcon, pokerIcon,
  crashIcon, baccaratIcon, jackpotIcon, newReleaseIcon,
  casinoDiceIcon,
} from '../assets/icons';

/* ── Game images ── */
import g1 from '../assets/images/casinoandgames1.png';
import g2 from '../assets/images/casinoandgmaes2.png';
import g3 from '../assets/images/casinoandgames3.png';
import g4 from '../assets/images/casinoandgames4.png';
import g5 from '../assets/images/casinoandgames5.png';
import g6 from '../assets/images/casinoandgames44.png';
import n1 from '../assets/images/new1.png';
import n2 from '../assets/images/new2.png';
import n3 from '../assets/images/new3.png';
import n4 from '../assets/images/new4.png';
import n5 from '../assets/images/new5.png';
import n6 from '../assets/images/new6.png';

/* ── Shared game pool — rotated per section ── */
const pool8 = [
  { image: g1, name: 'Book of Time' },
  { image: g2, name: 'Sweet Bonanza' },
  { image: g3, name: 'Gates of Olympus' },
  { image: g4, name: 'Sugar Rush' },
  { image: g5, name: 'Wild West Gold' },
  { image: g6, name: 'Starlight Princess' },
  { image: n1, name: 'Big Bass Splash' },
  { image: n2, name: 'Fruit Party' },
];

const pool8b = [
  { image: n3, name: 'Fire Joker' },
  { image: n4, name: 'Rise of Merlin' },
  { image: n5, name: 'Money Train 3' },
  { image: n6, name: 'Razor Shark' },
  { image: g1, name: 'Book of Time' },
  { image: g3, name: 'Gates of Olympus' },
  { image: g5, name: 'Wild West Gold' },
  { image: g2, name: 'Sweet Bonanza' },
];

const sections = [
  { key: 'slots',      label: 'Slots',        icon: slotsIcon,      games: pool8  },
  { key: 'roulette',   label: 'Roulette',     icon: rouletteIcon,   games: pool8b },
  { key: 'blackjack',  label: 'Blackjack',    icon: blackjackIcon,  games: pool8  },
  { key: 'poker',      label: 'Poker',        icon: pokerIcon,      games: pool8b },
  { key: 'baccarat',   label: 'Baccarat',     icon: baccaratIcon,   games: pool8  },
  { key: 'crash',      label: 'Crash',        icon: crashIcon,      games: pool8b },
  { key: 'jackpot',    label: 'Jackpot',      icon: jackpotIcon,    games: pool8  },
  { key: 'newrelease', label: 'New Releases', icon: newReleaseIcon, games: [
    { image: n1, name: 'Big Bass Splash' },
    { image: n2, name: 'Fruit Party' },
    { image: n3, name: 'Fire Joker' },
    { image: n4, name: 'Rise of Merlin' },
    { image: n5, name: 'Money Train 3' },
    { image: n6, name: 'Razor Shark' },
    { image: g2, name: 'Sweet Bonanza' },
    { image: g4, name: 'Sugar Rush' },
  ]},
];

const Casino = () => {
  const [activeFilter, setActiveFilter] = useState('lobby');

  /* Which sections to show based on active filter */
  const visibleSections =
    activeFilter === 'lobby' || activeFilter === 'all'
      ? sections
      : sections.filter((s) => s.key === activeFilter);

  return (
    <div className="w-full min-h-screen bg-[#ECECEC]">
      <div className="flex flex-col gap-4 md:gap-6 p-3 md:p-6">

        {/* ── Page header ── */}
        <div className="bg-white rounded-xl px-6 py-5 flex items-center gap-3">
          <img src={casinoDiceIcon} alt="Casino" className="w-[35px] h-[35px] object-contain" />
          <h1 className="text-[26px] md:text-[30px] font-black text-[#333] tracking-wide uppercase leading-none">
            Casino
          </h1>
        </div>

        {/* ── Promo banners (reused from home) ── */}
        <PromotionsSection />

        {/* ── Main games content ── */}
        <div className="bg-white rounded-xl p-4 md:p-6 md:p-8">

          {/* Filter bar (search + category pills) */}
          <CasinoFilterBar
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          {/* Game sections */}
          {visibleSections.map((section) => (
            <CasinoGameSection
              key={section.key}
              title={section.label}
              icon={section.icon}
              games={section.games}
            />
          ))}
        </div>

        {/* ── Latest Bets ── */}
        <LatestBet />

      </div>
    </div>
  );
};

export default Casino;
