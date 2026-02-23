import { useRef, useState, useEffect } from 'react';
import SectionHeader from '../common/SectionHeader';
import MatchCard from '../cards/MatchCard';
import { volleyballPlayer1Alt as liveSportsIcon } from '../../assets/icons';

const matches = [
  { league: 'Soccer | La Liga 2026', team1: 'FC Barcelona', team2: 'Real Madrid', score1: 1, score2: 0, odds: ['1.85', '2.05', '+54'] },
  { league: 'Soccer | La Liga 2026', team1: 'FC Barcelona', team2: 'Real Madrid', score1: 1, score2: 0, odds: ['1.85', '2.05', '+54'] },
  { league: 'Soccer | La Liga 2026', team1: 'FC Barcelona', team2: 'Real Madrid', score1: 1, score2: 0, odds: ['1.85', '2.05', '+54'] },
  { league: 'Soccer | La Liga 2026', team1: 'FC Barcelona', team2: 'Real Madrid', score1: 1, score2: 0, odds: ['1.85', '2.05', '+54'] },
];

const LiveBetting = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const cardWidth = el.scrollWidth / matches.length;
      const index = Math.round(el.scrollLeft / cardWidth);
      setActiveIndex(Math.min(index, matches.length - 1));
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToIndex = (index) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / matches.length;
    el.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
    setActiveIndex(index);
  };

  return (
    <section className="bg-white rounded-xl p-4 md:p-5 mb-3 md:mb-4 w-full box-border">

      <SectionHeader
        icon={<img src={liveSportsIcon} alt="Live Betting" className="w-full h-full object-contain" />}
        title="Live Betting"
        subtitle="Real-time odds • Instant payouts"
        onViewAll={() => { }}
      />

      {/* Cards scroll row */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto w-full"
        style={{
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {matches.map((match, i) => (
          <div
            key={i}
            className="shrink-0 w-[calc(100vw-56px)] md:w-auto"
            style={{ scrollSnapAlign: 'start' }}
          >
            <MatchCard {...match} />
          </div>
        ))}
      </div>

      {/* Scroll indicator pills */}
      <div className="flex justify-center items-center gap-1.5 mt-3.5">
        {matches.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`h-[6px] rounded-full transition-all duration-300 cursor-pointer border-none p-0 ${i === activeIndex
                ? 'w-[22px] bg-[#4CAF50]'
                : 'w-[22px] bg-[#D0D0D0]'
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default LiveBetting;