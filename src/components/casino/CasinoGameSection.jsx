import { useRef } from 'react';
import GameCard from './GameCard';
import {
  ChevronLeftIcon, ChevronRightIcon,
} from '../../assets/icons';

const ChevronLeft = () => (
  <img
    src={ChevronLeftIcon}
    alt="left"
    className="w-[18px] h-[18px] object-contain"
  />
);

const ChevronRight = () => (
  <img
    src={ChevronRightIcon}
    alt="right"
    className="w-[18px] h-[18px] object-contain"
  />
);

const CasinoGameSection = ({ title, icon, games = [] }) => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' });
  };

  return (
    <div className="mb-6 md:mb-8">
      {/* Section header */}
      <div className="flex items-center justify-between mb-3 md:mb-4">

        {/* Left: icon + title */}
        <div className="flex items-center gap-2.5">
          {icon && (
            <img src={icon} alt={title} className="w-6 h-6 md:w-7 md:h-7 object-contain shrink-0" />
          )}
          <h3 className="text-[18px] md:text-[24px] font-bold text-[#333] leading-none">{title}</h3>
        </div>

        {/* Right: arrows + see all */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Arrows — desktop only */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-[44px] h-[44px] flex items-center justify-center border border-[#1CD4FF] rounded-lg bg-white hover:bg-[#f0fdff] transition-colors cursor-pointer"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-[44px] h-[44px] flex items-center justify-center border border-[#1CD4FF] rounded-lg bg-white hover:bg-[#f0fdff] transition-colors cursor-pointer"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-[44px] bg-[#6b7280]/30" />

          {/* See All */}
          <button className="border-2 border-[#1CD4FF] text-[#1CD4FF] bg-white rounded-lg px-4 md:px-8 h-[36px] md:h-[44px] text-[14px] leading-[20px] font-[590] font-['SF_Pro'] cursor-pointer hover:bg-[#f0fdff] transition-colors whitespace-nowrap">
            View All
          </button>
        </div>
      </div>

      {/* Game cards row */}
      <div
        ref={scrollRef}
        className="flex gap-[16px] md:gap-[21px] overflow-x-auto pb-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {games.map((game, i) => (
          <GameCard key={i} image={game.image} name={game.name} />
        ))}
      </div>
    </div>
  );
};

export default CasinoGameSection;
