import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SearchBar from '../components/common/SearchBar';
import {
  rouletteIcon, blackjackIcon, pokerIcon,
  baccaratIcon, monitorIcon,
  sortIcon, changeIcon,
} from '../assets/icons';

import g1 from '../assets/images/aviamasters.png';
import g2 from '../assets/images/aztecClusters.png';
import g3 from '../assets/images/crazytime.png';
import g4 from '../assets/images/duckhunter.png';
import g5 from '../assets/images/bookoftime.png';
import g6 from '../assets/images/knockoutriches.png';
import g7 from '../assets/images/bookoftime.png';
import g8 from '../assets/images/new2.png';
import g9 from '../assets/images/monkeypop2.png';
import g10 from '../assets/images/bookoftime.png';
import g11 from '../assets/images/skyroulette.png';
import g12 from '../assets/images/new2.png';
import n1 from '../assets/images/new1.png';
import n2 from '../assets/images/new2.png';
import n3 from '../assets/images/new3.png';
import n4 from '../assets/images/new4.png';
import n5 from '../assets/images/new5.png';
import n6 from '../assets/images/new6.png';

const allImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, n1, n2, n3, n4, n5, n6];

const allGameNames = [
  'Lightning Roulette', 'Crazy Time', 'Monopoly Live', 'Dream Catcher',
  'Immersive Roulette', 'Speed Baccarat', 'Dragon Tiger', 'Mega Ball',
  'Fan Tan', 'Andar Bahar', 'Teen Patti', 'Baccarat Squeeze',
  'Live Blackjack', 'Infinite Blackjack', 'Power Blackjack', 'Free Bet Blackjack',
  'Three Card Poker', 'Caribbean Stud', 'Casino Hold\'em', 'Texas Hold\'em',
  'Sic Bo', 'Super Sic Bo', 'Dice Duel', 'Cash or Crash',
];

const categoryMeta = {
  roulette:   { label: 'Roulette',        icon: rouletteIcon },
  blackjack:  { label: 'Blackjack',       icon: blackjackIcon },
  poker:      { label: 'Poker',           icon: pokerIcon },
  baccarat:   { label: 'Baccarat & Dice', icon: baccaratIcon },
  gameshows:  { label: 'Game Shows',      icon: monitorIcon },
};

const buildGames = (count = 24, shuffled) =>
  Array.from({ length: count }, (_, i) => ({
    image: shuffled[i % shuffled.length],
    name: allGameNames[i % allGameNames.length],
  }));

const SORT_OPTIONS = ['Default', 'A → Z', 'Z → A', 'Newest'];

const LiveCasinoDetails = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const meta = categoryMeta[category] || { label: category, icon: rouletteIcon };

  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('Default');
  const [sortOpen, setSortOpen] = useState(false);
  const [activeFilters] = useState([]);

  const games = useMemo(() => {
    const shuffled = [...allImages].sort(() => Math.random() - 0.5);
    return buildGames(24, shuffled);
  }, [category]);

  const filtered = useMemo(() => {
    let list = games.filter((g) =>
      g.name.toLowerCase().includes(search.toLowerCase())
    );
    if (sortBy === 'A → Z') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === 'Z → A') list = [...list].sort((a, b) => b.name.localeCompare(a.name));
    return list;
  }, [games, search, sortBy]);

  return (
    <div className="w-full min-h-screen bg-[#ECECEC]">
      <div className="flex flex-col gap-4 md:gap-5 md:p-6">

        {/* ── Breadcrumb ── */}
        <div className="flex items-center gap-2 text-[13px] text-[#6b7280]">
          <button
            onClick={() => navigate('/live-casino')}
            className="hover:text-[#1CD4FF] transition-colors font-medium cursor-pointer"
          >
            Live Casino
          </button>
          <span className="text-[#ccc]">›</span>
          <span className="text-[#333] font-semibold">{meta.label}</span>
        </div>

        {/* ── Header: icon · title · search · filter · sort ── */}
        <div className="bg-white rounded-xl px-4 py-3 flex flex-col md:flex-row md:items-center gap-3">

          {/* Icon + Title */}
          <div className="flex items-center gap-3">
            {meta.icon && (
              <img src={meta.icon} alt={meta.label} className="w-[24px] h-[24px] md:w-[26px] md:h-[26px] object-contain shrink-0" />
            )}
            <h1 className="text-[16px] md:text-[20px] font-black text-[#333] uppercase leading-none tracking-wide">
              {meta.label}
            </h1>
          </div>

          {/* Search · Filter · Sort */}
          <div className="flex flex-col sm:flex-row md:items-center gap-3 md:ml-auto w-full md:w-auto">

            {/* Search */}
            <div className="w-full sm:w-[200px]">
              <SearchBar
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onClear={() => setSearch('')}
                placeholder="Search Games..."
              />
            </div>

            {/* Filter */}
            <button className="flex items-center justify-center gap-2 px-4 h-[36px] bg-white border border-[#e5e7eb] rounded-lg text-[13px] font-medium text-[#333] hover:border-[#1CD4FF] hover:text-[#1CD4FF] transition-colors cursor-pointer shrink-0">
              <img src={changeIcon} alt="filter" className="w-[16px] h-[16px] object-contain shrink-0" />
              <span>Filter</span>
              {activeFilters.length > 0 ? (
                <span className="w-5 h-5 rounded-full bg-[#1CD4FF] text-white text-[11px] font-bold flex items-center justify-center">
                  {activeFilters.length}
                </span>
              ) : (
                <span className="text-[#9ca3af] text-[12px]">(0)</span>
              )}
            </button>

            {/* Sort */}
            <div className="relative w-full sm:w-auto">
              <button
                onClick={() => setSortOpen((p) => !p)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 h-[36px] bg-white border border-[#e5e7eb] rounded-lg text-[13px] font-medium text-[#333] hover:border-[#1CD4FF] hover:text-[#1CD4FF] transition-colors cursor-pointer shrink-0"
              >
                <img src={sortIcon} alt="sort" className="w-[16px] h-[16px] object-contain shrink-0" />
                <span>Sort by: <span className="text-[#1CD4FF]">{sortBy}</span></span>
              </button>
              {sortOpen && (
                <div className="absolute top-[40px] right-0 z-50 bg-white border border-[#e5e7eb] rounded-xl shadow-lg overflow-hidden min-w-[160px] w-full sm:w-auto">
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => { setSortBy(opt); setSortOpen(false); }}
                      className={`w-full text-left px-4 py-3 text-[14px] hover:bg-[#f0fdff] transition-colors ${sortBy === opt ? 'text-[#1CD4FF] font-semibold bg-[#f0fdff]' : 'text-[#333]'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>

        {/* ── Game grid ── */}
        <div className="bg-white rounded-xl p-4 md:p-6">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 md:gap-4">
              {filtered.map((game, i) => (
                <div
                  key={i}
                  className="relative rounded-[13px] overflow-hidden bg-[#333] cursor-pointer aspect-[142/194]"
                >
                  <img
                    src={game.image}
                    alt={game.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <p className="text-[#9ca3af] text-[16px] font-medium">No games found</p>
              <p className="text-[#c4c4c4] text-[13px] mt-1">Try a different search term</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default LiveCasinoDetails;
