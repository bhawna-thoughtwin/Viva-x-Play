import useScrollDots from '../../hooks/useScrollDots';
import ScrollDots from '../common/ScrollDots';
import SectionHeader from '../common/SectionHeader';
import MatchCard from '../cards/MatchCard';
import { volleyballPlayer3 as sportsIcon } from '../../assets/icons';
import sport1 from '../../assets/images/sport1.png';
import sport2 from '../../assets/images/sport2.png';
import sport3 from '../../assets/images/sport3.png';
import sport4 from '../../assets/images/sport4.png';
import sport5 from '../../assets/images/sport5.png';

const sports = [
  { label: 'Football', image: sport1, number: '1' },
  { label: 'Tennis', image: sport2, number: '2' },
  { label: 'Basketball', image: sport3, number: '3' },
  { label: 'Baseball', image: sport4, number: '4' },
  { label: 'Boxing', image: sport5, number: '5' },
];

const trendingMatches = [
  { league: 'Soccer | La Liga 2026', team1: 'FC Barcelona', team2: 'Real Madrid', score1: 1, score2: 0, odds: ['1.85', '2.05', '+54'] },
  { league: 'Soccer | La Liga 2026', team1: 'FC Barcelona', team2: 'Real Madrid', score1: 1, score2: 0, odds: ['1.85', '2.05', '+54'] },
  { league: 'Soccer | La Liga 2026', team1: 'FC Barcelona', team2: 'Real Madrid', score1: 1, score2: 0, odds: ['1.85', '2.05', '+54'] },
  { league: 'Soccer | La Liga 2026', team1: 'FC Barcelona', team2: 'Real Madrid', score1: 1, score2: 0, odds: ['1.85', '2.05', '+54'] },
];

const recommendationMatches = [
  { league: 'Soccer | La Liga 2026', team1: 'FC Barcelona', team2: 'Real Madrid', score1: 1, score2: 0, odds: ['1.85', '2.05', '+54'] },
  { league: 'Soccer | La Liga 2026', team1: 'FC Barcelona', team2: 'Real Madrid', score1: 1, score2: 0, odds: ['1.85', '2.05', '+54'] },
  { league: 'Soccer | La Liga 2026', team1: 'FC Barcelona', team2: 'Real Madrid', score1: 1, score2: 0, odds: ['1.85', '2.05', '+54'] },
  { league: 'Soccer | La Liga 2026', team1: 'FC Barcelona', team2: 'Real Madrid', score1: 1, score2: 0, odds: ['1.85', '2.05', '+54'] },
];

/* Reusable card row */
const CardRow = ({ title, matches }) => {
  const { scrollRef, activeIndex, scrollToIndex } = useScrollDots(matches.length);

  return (
    <div className="mt-6">

      {/* Header Row */}
      <div className="flex items-center justify-between mb-4 gap-3">
        <span className="text-[20px] md:text-[24px] font-bold text-[#121212] truncate">
          {title}
        </span>
        <button
          className="bg-transparent border border-[#E0E0E0] text-[#1CD4FF] px-3 md:px-[14px] py-1.5 rounded-md text-xs md:text-[13px] font-semibold cursor-pointer shrink-0 whitespace-nowrap"
        >
          VIEW ALL &rsaquo;
        </button>
      </div>

      {/* Cards Row */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto pb-1"
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
            className="shrink-0 w-[301px] h-[202px]"
            style={{ scrollSnapAlign: 'start' }}
          >
            <MatchCard {...match} isLive={false} />
          </div>
        ))}
      </div>

      <ScrollDots count={matches.length} activeIndex={activeIndex} scrollToIndex={scrollToIndex} />

    </div>
  );
};





const SportsBetting = () => {
  const { scrollRef: sportsRef, activeIndex: sportsActive, scrollToIndex: sportsScrollTo } = useScrollDots(sports.length);

  return (
    <section className="bg-white rounded-xl w-full box-border" style={{ padding: '20px 24px' }}>

      <SectionHeader
        icon={<img src={sportsIcon} alt="Sports Betting" className="w-full h-full object-contain" />}
        title="Sports Betting"
        subtitle="Bet on 30+ sports with the best odds"
        onViewAll={() => { }}
      />

      {/* Sports image strip — scrollable on mobile */}
      <div
        ref={sportsRef}
        className="flex mb-0 overflow-x-auto md:overflow-x-visible"
        style={{
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {sports.map((sport) => (
          <div
            key={sport.label}
            className="shrink-0 w-[calc(100vw/3.5)] md:flex-1 flex justify-center"
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className="relative w-[120px] md:w-[180px] h-[140px] md:h-[200px] flex items-end justify-center">
              <span
                className="absolute bottom-0 left-0 font-black text-[#1CD4FF] leading-none z-10 select-none -translate-x-1/5"
                style={{
                  fontSize: 'clamp(80px, 10vw, 160px)',
                  fontFamily: 'Impact, "Arial Narrow", Arial, sans-serif',
                }}
              >
                {sport.number}
              </span>
              <img
                src={sport.image}
                alt={sport.label}
                className="relative z-20 h-[130px] md:h-[190px] w-auto object-contain object-bottom"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Scroll dots — below sports strip, above Trending */}
      <ScrollDots count={sports.length} activeIndex={sportsActive} scrollToIndex={sportsScrollTo} className="md:hidden mb-2" />

      <CardRow title="Top Events" matches={trendingMatches} />
      <CardRow title="Live Now" matches={recommendationMatches} />

    </section>
  );
};

export default SportsBetting;
