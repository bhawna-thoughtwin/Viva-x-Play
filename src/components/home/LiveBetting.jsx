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
  return (
    <section className="bg-white rounded-xl p-4 md:p-5 mb-3 md:mb-4 w-full box-border">

      <SectionHeader
        icon={<img src={liveSportsIcon} alt="Live Betting" className="w-full h-full object-contain" />}
        title="Live Betting"
        subtitle="Real-time odds • Instant payouts"
        onViewAll={() => {}}
      />

      {/* Cards scroll row */}
      <div
        className="flex gap-3 overflow-x-auto w-full"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {matches.map((match, i) => (
          <MatchCard key={i} {...match} />
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-3.5">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-2 rounded-full cursor-pointer transition-all ${
              i === 0 ? 'w-[22px] bg-[#1cd4ff]' : 'w-2 bg-[#d0d0d0]'
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default LiveBetting;
