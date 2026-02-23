import useScrollDots from '../../hooks/useScrollDots';
import ScrollDots from '../common/ScrollDots';
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
  const { scrollRef, activeIndex, scrollToIndex } = useScrollDots(matches.length);

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

      <ScrollDots count={matches.length} activeIndex={activeIndex} scrollToIndex={scrollToIndex} />

    </section>
  );
};

export default LiveBetting;