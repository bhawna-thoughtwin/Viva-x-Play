import { useState } from 'react';
import SearchBar from '../common/SearchBar';
import {
  slotsIcon, rouletteIcon, blackjackIcon, pokerIcon,
  crashIcon, baccaratIcon, jackpotIcon, newReleaseIcon,
  searchIcon,selectAllIcon,HomeIcon
} from '../../assets/icons';

/* Home / Lobby icon */
// const HomeIcon = ({ active }) => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//     <path
//       d="M3 9.5L12 3L21 9.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z"
//       stroke={active ? '#fff' : '#333'}
//       strokeWidth="1.8"
//       strokeLinejoin="round"
//     />
//     <path d="M9 21V12h6v9" stroke={active ? '#fff' : '#333'} strokeWidth="1.8" strokeLinejoin="round" />
//   </svg>
// );

/* Grid / All icon */
const GridIcon = ({ active }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="8" height="8" rx="1" stroke={active ? '#fff' : '#333'} strokeWidth="1.8" />
    <rect x="13" y="3" width="8" height="8" rx="1" stroke={active ? '#fff' : '#333'} strokeWidth="1.8" />
    <rect x="3" y="13" width="8" height="8" rx="1" stroke={active ? '#fff' : '#333'} strokeWidth="1.8" />
    <rect x="13" y="13" width="8" height="8" rx="1" stroke={active ? '#fff' : '#333'} strokeWidth="1.8" />
  </svg>
);

const filters = [
  { key: 'lobby',       label: 'Lobby',       iconImg: HomeIcon},
  { key: 'all',         label: 'All',         iconImg: selectAllIcon },
  { key: 'slots',       label: 'Slots',       iconImg: slotsIcon,      IconComp: null },
  { key: 'roulette',    label: 'Roulette',    iconImg: rouletteIcon,   IconComp: null },
  { key: 'blackjack',   label: 'Blackjack',   iconImg: blackjackIcon,  IconComp: null },
  { key: 'poker',       label: 'Poker',       iconImg: pokerIcon,      IconComp: null },
  { key: 'baccarat',    label: 'Baccarat',    iconImg: baccaratIcon,   IconComp: null },
  { key: 'crash',       label: 'Crash',       iconImg: crashIcon,      IconComp: null },
  { key: 'jackpot',     label: 'Jackpot',     iconImg: jackpotIcon,    IconComp: null },
  { key: 'newrelease',  label: 'New Releases',iconImg: newReleaseIcon, IconComp: null },
];

const CasinoFilterBar = ({ activeFilter, onFilterChange, customFilters }) => {
  const displayFilters = customFilters || filters;
  return (
    <div className="flex flex-col gap-3 mb-5 md:mb-6">

      {/* Search bar */}
      <div className="w-full max-w-[330px] mb-2">
        <SearchBar/>
      </div>

      {/* Filter pills — horizontally scrollable */}
      <div
        className="flex items-center gap-2 md:gap-3 overflow-x-auto pb-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {displayFilters.map(({ key, label, iconImg, IconComp }) => {
          const isActive = activeFilter === key;
          return (
            <button
              key={key}
              onClick={() => onFilterChange(key)}
              className={`flex items-center gap-1.5 shrink-0 px-3 md:px-4 h-[44px] rounded-md text-[14px] md:text-[15px] font-medium cursor-pointer transition-colors whitespace-nowrap border
                ${isActive
                  ? 'bg-[#1CD4FF] border-[#1CD4FF] text-white'
                  : 'bg-white border-[#1CD4FF] text-[#333] hover:bg-[#f0fdff]'
                }`}
            >
              {/* SVG component icons (Lobby, All) */}
              {IconComp && <IconComp active={isActive} />}

              {/* Image icons (Slots, Roulette…) */}
              {iconImg && (
                <img
                  src={iconImg}
                  alt={label}
                  className="w-[18px] h-[18px] object-contain shrink-0"
                  style={isActive ? { filter: 'brightness(0) invert(1)' } : {}}
                />
              )}

              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CasinoFilterBar;
