import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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

const TopEventCard = ({ time, league, team1, team2, score1, score2, odds }) => (
  <div className="shrink-0 w-[338px] h-[176px] bg-white border border-[#e5e7eb] rounded-[8px] px-4 py-3 flex flex-col justify-between cursor-pointer hover:border-[#1CD4FF] hover:shadow-sm transition-all box-border">

    {/* Top row: time + football icon + full league text + monitor icon */}
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-1.5 min-w-0">
        <span className="text-[12px] font-semibold text-[#4a4a4a] shrink-0">{time}</span>
        <img src={footballIcon} alt="sport" className="w-[13px] h-[13px] object-contain opacity-60 shrink-0" />
        <span className="text-[12px] text-[#6b7280] whitespace-nowrap overflow-hidden text-ellipsis">{league}</span>
      </div>
      <img src={monitorIcon} alt="broadcast" className="w-[14px] h-[14px] object-contain opacity-60 shrink-0 ml-2" />
    </div>

    {/* Teams + scores */}
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-semibold text-[#1a1a1a] truncate">{team1}</span>
        <span className="text-[14px] font-bold text-[#1a1a1a] ml-3 shrink-0">{score1}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-semibold text-[#1a1a1a] truncate">{team2}</span>
        <span className="text-[14px] font-bold text-[#1a1a1a] ml-3 shrink-0">{score2}</span>
      </div>
    </div>

    {/* Divider */}
    <div className="h-px bg-[#f0f0f0] -mx-4" />

    {/* Odds */}
    <div className="flex gap-2">
      {odds.map((odd, i) => (
        <button
          key={i}
          className="flex-1 flex flex-col items-center gap-0.5 bg-[#f5f5f7] hover:bg-[#e8fafe] border border-transparent hover:border-[#1CD4FF] rounded-[6px] px-2 py-1.5 transition-colors cursor-pointer"
        >
          <span className="w-full text-center whitespace-nowrap overflow-hidden text-ellipsis" style={{ fontWeight: 590, fontSize: '14px', lineHeight: '100%', letterSpacing: '0%', color: '#6b7280' }}>{odd.label}</span>
          <span className="text-[13px] font-bold text-[#1CD4FF]">{odd.value}</span>
        </button>
      ))}
    </div>
  </div>
);

const TopEventsSection = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  return (
    <div className="mt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 gap-2">
        <span className="text-[16px] md:text-[20px] font-bold text-[#121212] truncate min-w-0">Top Events</span>
        <button
          onClick={() => navigate('/sports')}
          className="
            shrink-0
            border-2 border-[#1CD4FF] text-[#1CD4FF] bg-white
            rounded-md md:rounded-lg
            px-2.5 md:px-8
            h-[28px] md:h-[44px]
            text-[11px] md:text-[14px]
            leading-none font-[590] cursor-pointer hover:bg-[#f0fdff] transition-colors whitespace-nowrap
          "
        >
          View All
        </button>
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto pb-2"
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
