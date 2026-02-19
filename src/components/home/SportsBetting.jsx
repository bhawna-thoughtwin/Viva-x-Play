import SectionHeader from '../common/SectionHeader';
import MatchCard from '../cards/MatchCard';
import { volleyballPlayer3 as sportsIcon } from '../../assets/icons';
import sport1 from '../../assets/images/sport1.png';
import sport2 from '../../assets/images/sport2.png';
import sport3 from '../../assets/images/sport3.png';
import sport4 from '../../assets/images/sport4.png';
import sport5 from '../../assets/images/sport5.png';

const sports = [
  { label: 'Football',   image: sport1, number: '1' },
  { label: 'Tennis',     image: sport2, number: '2' },
  { label: 'Basketball', image: sport3, number: '3' },
  { label: 'Baseball',   image: sport4, number: '4' },
  { label: 'Boxing',     image: sport5, number: '5' },
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
const CardRow = ({ title, matches }) => (
  <div style={{ marginTop: '24px' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
      <span style={{ fontSize: '24px', fontWeight: '700', color: '#121212' }}>{title}</span>
      <button style={{ background: 'transparent', border: '1px solid #e0e0e0', color: '#1cd4ff', padding: '5px 14px', borderRadius: '6px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', outline: 'none' }}>
        VIEW ALL &rsaquo;
      </button>
    </div>
    <div
      className="flex gap-3 overflow-x-auto"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', paddingLeft: '4px', paddingBottom: '4px' }}
    >
      {matches.map((match, i) => (
        <MatchCard key={i} {...match} isLive={false} />
      ))}
    </div>
  </div>
);

const SportsBetting = () => {
  return (
    <section className="bg-white rounded-xl w-full box-border" style={{ padding: '20px 24px' }}>

      <SectionHeader
        icon={<img src={sportsIcon} alt="Sports Betting" className="w-full h-full object-contain" />}
        title="Sports Betting"
        subtitle="Bet on 30+ sports with the best odds"
        onViewAll={() => {}}
      />

      {/* Sports image strip */}
      <div className="flex mb-0 overflow-hidden">
        {sports.map((sport) => (
          <div key={sport.label} className="flex-1 flex justify-center">
            <div className="relative w-[120px] md:w-[180px] h-[140px] md:h-[200px] flex items-end justify-center">
              <span
                className="absolute bottom-0 left-0 font-black text-[#1cd4ff] leading-none z-10 select-none -translate-x-1/5"
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

      <CardRow title="Trending" matches={trendingMatches} />
      <CardRow title="Recommendations" matches={recommendationMatches} />

    </section>
  );
};

export default SportsBetting;
