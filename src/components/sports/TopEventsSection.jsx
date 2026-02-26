import { useRef } from 'react';
import { footballIcon, monitorIcon } from '../../assets/icons';

const topEventsData = [
  {
    time: '08:30',
    league: 'Champions League AFC • Ukraine',
    team1: 'FC Seoul (Flewless_phoenix)',
    team2: 'Al Ahli (sane4ekB)',
    score1: 0,
    score2: 0,
    odds: [
      { label: 'Max Holloway', value: '1.48' },
      { label: 'Charles Oliveira', value: '2.48' },
    ],
  },
  {
    time: '07:30',
    league: 'Champions League AFC • Ukraine',
    team1: 'FC Seoul (Flewless_phoenix)',
    team2: 'Al Ahli (sane4ekB)',
    score1: 0,
    score2: 0,
    odds: [
      { label: 'Max Holloway', value: '1.48' },
      { label: 'Charles Oliveira', value: '2.48' },
    ],
  },
  {
    time: '10:00',
    league: 'Premier League • England',
    team1: 'Manchester City',
    team2: 'Arsenal FC',
    score1: 0,
    score2: 0,
    odds: [
      { label: 'Man City', value: '1.65' },
      { label: 'Arsenal', value: '2.10' },
    ],
  },
  {
    time: '12:45',
    league: 'La Liga • Spain',
    team1: 'Real Madrid',
    team2: 'FC Barcelona',
    score1: 0,
    score2: 0,
    odds: [
      { label: 'Real Madrid', value: '1.90' },
      { label: 'Barcelona', value: '1.95' },
    ],
  },
];

export const TopEventCard = ({ time, league, team1, team2, score1, score2, odds }) => (
  <div className="shrink-0 w-[410px] max-w-[calc(100vw-32px)] bg-white border border-[#E0E0E0] rounded-[10px] px-5 py-4 flex flex-col gap-4 cursor-pointer hover:border-[#1CD4FF]/50 transition-all shadow-sm">

    {/* Top row: time + league + broadcast icon */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 overflow-hidden flex-1">
        <span className="text-[12px] font-bold text-[#1A1A1A] shrink-0">{time}</span>
        <img src={footballIcon} alt="sport" className="w-3.5 h-3.5 opacity-40 shrink-0" />
        <span className="text-[11px] font-semibold text-gray-500 truncate">{league}</span>
      </div>
      <img src={monitorIcon} alt="broadcast" className="w-4 h-4 opacity-40 shrink-0 ml-4" />
    </div>

    {/* Body: Teams + scores */}
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-[14px] font-bold text-[#1A1A1A] truncate pr-4">{team1}</span>
        <span className="text-[14px] font-bold text-[#1A1A1A]">{score1}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[14px] font-bold text-[#1A1A1A] truncate pr-4">{team2}</span>
        <span className="text-[14px] font-bold text-[#1A1A1A]">{score2}</span>
      </div>
    </div>

    {/* Footer: Odds Buttons */}
    <div className="flex gap-3">
      {odds.map((odd, i) => (
        <button
          key={i}
          className="flex-1 flex flex-col items-center justify-center bg-[#F9FAFB] border border-[#F0F0F0] rounded-[8px] h-[58px] transition-all hover:border-[#1CD4FF] hover:bg-white active:scale-[0.98]"
        >
          <span className="text-[11px] font-bold text-gray-400 mb-0.5 uppercase tracking-wide truncate w-[90%] text-center">{odd.label}</span>
          <span className="text-[15px] font-black text-[#1CD4FF] leading-none">{odd.value}</span>
        </button>
      ))}
    </div>
  </div>
);

const TopEventsSection = () => {
  const scrollRef = useRef(null);

  return (
    <div className="mt-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[22px] font-bold text-black uppercase tracking-tight">Top Events</h2>
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {topEventsData.map((event, i) => (
          <TopEventCard key={i} {...event} />
        ))}
      </div>
    </div>
  );
};

export default TopEventsSection;
