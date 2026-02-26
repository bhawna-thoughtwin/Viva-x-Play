import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopEventsSection from '../components/sports/TopEventsSection';
import { LiveNowRow, liveNowData } from '../components/sports/LiveNowSection';
import {
  homeclrIcon,
  LiveClrIcon,
  InstagramIcon,
  virtualclrIcon,
  AllSportsClrIcon,
  footballIcon,
  FootballClrIcon,
  liveIcon,
  flatIcon,
  baseballIcon,
  basketballIcon,
  homeIcon,
  rouletteIcon,
  virtualIcon,
  superjackIcon,
  liveStremingIcon,
  AllSportsIcon,
  resultIcon,
  searchIcon,
  greyhoundIcon,
  IconHockeyIcon,
  HorseIcon,
  AmFootBallballIcon,
  EsportsIcon,
} from '../assets/icons';

/* ─── Sub-Components ─── */

const TrophyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M4 2H14V9C14 11.7614 11.7614 14 9 14C6.23858 14 4 11.7614 4 9V2Z" fill="#FFCB00" />
    <path d="M4 5H1V8C1 9.65685 2.34315 11 4 11H4M14 5H17V8C17 9.65685 15.6569 11 14 11H14" stroke="#DBAF00" strokeWidth="1.2" />
    <path d="M9 14V16H6M9 16H12M9 16V14" stroke="#777" strokeWidth="1.2" />
    <rect x="5" y="16" width="8" height="1.5" rx="0.5" fill="#3E3D43" />
  </svg>
);

const ChevronDown = ({ active, size = "12" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 opacity-60">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const LiveDot = () => (
  <span className="flex items-center gap-1.5 text-[#FF4D4D] font-bold text-[13px]">
    <span className="inline-block w-4 h-4 relative">
      <span className="absolute inset-0 rounded-full bg-[#FF4D4D]/20 animate-ping"></span>
      <span className="absolute left-[3px] top-[3px] w-2.5 h-2.5 rounded-full bg-[#FF4D4D]"></span>
    </span>
    <span className="tracking-tight italic text-[11px]">(( ))</span>
  </span>
);

/* ─── Static Data ─── */

const TOP_LEAGUES = [
  { label: 'World Cup' },
  { label: 'UEFA Champions League' },
  { label: 'UEFA Europa Conference League' },
  { label: 'Serie A & B' },
  { label: 'LaLigas' },
  { label: 'Bundesligas' },
  { label: 'Championship' },
  { label: 'Coupe de France' },
  { label: 'Premier League' },
  { label: 'Singapore Prime League' },
];

const SPORT_LIST = [
  { label: 'Football', icon: footballIcon, count: 303, live: true },
  { label: 'Basketball', icon: basketballIcon, count: 62, live: true },
  { label: 'Tennis', icon: flatIcon, count: 12, live: true },
  { label: 'Baseball', icon: baseballIcon, count: 42, live: false },
  { label: 'Ice Hockey', icon: IconHockeyIcon, count: 86, live: false },
  { label: 'American Football', icon: AmFootBallballIcon, count: 24, live: false },
  { label: 'Horse Racing', icon: HorseIcon, count: 36, live: true },
  { label: 'Greyhounds', icon: greyhoundIcon, count: 63, live: true },
  { label: 'Table Tennis', icon: flatIcon, count: 43, live: false },
  { label: 'E-sports', icon: EsportsIcon, count: 61, live: true },
];

const FILTERS = ['All', 'Today', '3h', '6h', '24h', 'Tomorrow'];

const LOBBY_ICONS = [
  { label: 'Lobby', icon: homeclrIcon },
  { label: 'Live', icon: InstagramIcon },
  { label: 'Virtual', icon: virtualclrIcon },
  { label: 'Superjack', icon: superjackIcon },
  { label: 'Streaming', icon: liveStremingIcon },
  { label: 'All sports', icon: AllSportsClrIcon },
  { label: 'Results', icon: liveIcon },
  { label: 'Football', icon: FootballClrIcon },
  { label: 'Tennis', icon: flatIcon },
  { label: 'Baseball', icon: baseballIcon },
];

const LIVE_NOW_CATEGORIES = [
  { label: 'Football', icon: FootballClrIcon },
  { label: 'Basketball', icon: liveIcon },
  { label: 'Ice Hockey', icon: liveIcon },
  { label: 'Table Tennis', icon: liveIcon },
  { label: 'Tennis', icon: flatIcon },
];

const HIGHLIGHT_CATEGORIES = [
  { label: 'All' },
  { label: 'Football', icon: FootballClrIcon },
  { label: 'Basketball', icon: liveIcon },
  { label: 'Ice Hockey', icon: liveIcon },
  { label: 'Table Tennis', icon: liveIcon },
  { label: 'Tennis', icon: flatIcon },
];

const highlightsData = [
  { time: '08:30', league: 'Champions League AFC • Ukraine', team1: 'FC Seoul (Flewless_phoenix)', team2: 'Al Ahli (sane4ekB)', score1: 0, score2: 0, odds: { home: '1.80', draw: '4.90', away: '3.06' }, isLive: true, liveTime: '20:34' },
  { time: '07:30', league: 'Champions League AFC • Ukraine', team1: 'FC Seoul (Flewless_phoenix)', team2: 'Al Ahli (sane4ekB)', score1: 0, score2: 0, odds: { home: '1.80', draw: '4.90', away: '3.06' }, isLive: true, liveTime: '46:45' },
  { time: '10:00', league: 'Premier League • England', team1: 'Manchester City', team2: 'Arsenal FC', score1: 0, score2: 0, odds: { home: '1.65', draw: '3.40', away: '2.10' }, isLive: false },
  { time: '12:45', league: 'La Liga • Spain', team1: 'Real Madrid', team2: 'FC Barcelona', score1: 0, score2: 0, odds: { home: '1.90', draw: '3.20', away: '1.95' }, isLive: false },
];

const upcomingData = [
  { time: '14:00', league: 'Serie A • Italy', team1: 'AC Milan', team2: 'Inter Milan', score1: 0, score2: 0, odds: { home: '2.10', draw: '3.30', away: '2.80' } },
  { time: '16:30', league: 'Bundesliga • Germany', team1: 'Bayern Munich', team2: 'Borussia Dortmund', score1: 0, score2: 0, odds: { home: '1.55', draw: '4.00', away: '3.80' } },
  { time: '19:00', league: 'Ligue 1 • France', team1: 'PSG', team2: 'Olympique Marseille', score1: 0, score2: 0, odds: { home: '1.40', draw: '4.50', away: '5.00' } },
];

const POPULAR_BETS = [
  { icon: '⚾', match: 'EDM Oilers @ ANA Ducks', market: 'Winner(Incl. overtime and penalties)', pick: 'ANA Ducks', odds: '1.95' },
  { icon: '🏈', match: 'Wisconsin Badgers @ Oregon Ducks', market: 'Winner(Incl. OT)', pick: 'Oregon Ducks', odds: '2.85' },
  { icon: '⚽', match: 'Trabzonspor vs. Fatih Karagumruk SK', market: '1x2', pick: 'Trabzonspor', odds: '1.36' },
];

const upcomingSportsData = [
  { liveTime: '63', league: 'Club Friendly Games · World', team1: 'Narva Trans', team2: 'Tartu JK Welco', score1: 1, score2: 1, odds: { home: '1.29', draw: '1.29', away: '1.29' } },
  { liveTime: '63', league: 'Club Friendly Games · World', team1: 'Narva Trans', team2: 'Tartu JK Welco', score1: 1, score2: 1, odds: { home: '1.29', draw: '1.29', away: '1.29' } },
];

const highlightsSportsData = [
  { liveTime: '63', league: 'Club Friendly Games · World', team1: 'Narva Trans', team2: 'Tartu JK Welco', score1: 1, score2: 1, odds: { home: '1.29', draw: '1.29', away: '1.29' } },
  { liveTime: '63', league: 'Club Friendly Games · World', team1: 'Narva Trans', team2: 'Tartu JK Welco', score1: 1, score2: 1, odds: { home: '1.29', draw: '1.29', away: '1.29' } },
];

const sportsLiveData = [
  { liveTime: '63', league: 'Club Friendly Games · World', team1: 'Narva Trans', team2: 'Tartu JK Welco', score1: 1, score2: 1, odds: { home: '1.29', draw: '1.29', away: '1.29' } },
  { liveTime: '63', league: 'Club Friendly Games · World', team1: 'Narva Trans', team2: 'Tartu JK Welco', score1: 1, score2: 1, odds: { home: '1.29', draw: '1.29', away: '1.29' } },
  { liveTime: '63', league: 'Club Friendly Games · World', team1: 'Narva Trans', team2: 'Tartu JK Welco', score1: 1, score2: 1, odds: { home: '1.29', draw: '1.29', away: '1.29' } },
];

const SportsLiveRow = ({ liveTime, league, team1, team2, score1, score2, odds }) => (
  <div className="bg-[#F8F8F9] border border-[#EBEBEB] rounded-[10px] overflow-hidden">
    <div className="flex items-center gap-2 px-3 pt-3 pb-2">
      <span className="flex items-center gap-[5px] bg-[#FF8C00] text-white text-[9px] font-extrabold px-[7px] py-[3px] rounded-full shrink-0 tracking-wide">
        <span className="w-[5px] h-[5px] rounded-full bg-white shrink-0" />
        LIVE
      </span>
      <span className="text-[12px] font-semibold text-[#333]">{liveTime}'</span>
      <span className="text-[11px] text-[#888] flex-1 truncate">{league}</span>
      <button className="shrink-0 text-[#CCCCCC] hover:text-[#FFB800] transition-colors">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </button>
    </div>
    <div className="px-3 pb-2.5">
      <div className="flex items-center justify-between py-[3px]">
        <span className="text-[13px] font-bold text-[#1A1A1A]">{team1}</span>
        <span className="text-[13px] font-bold text-[#1A1A1A]">{score1}</span>
      </div>
      <div className="flex items-center justify-between py-[3px]">
        <span className="text-[13px] font-bold text-[#1A1A1A]">{team2}</span>
        <span className="text-[13px] font-bold text-[#1A1A1A]">{score2}</span>
      </div>
    </div>
    <div className="flex items-stretch gap-1.5 px-3 pb-3">
      {[{ key: 'home' }, { key: 'draw' }, { key: 'away' }].map(({ key }) => (
        <button key={key} className="flex-1 flex flex-col items-center justify-center bg-white border border-[#E5E7EB] rounded-[7px] py-[7px] hover:border-[#1CD4FF] transition-all cursor-pointer active:scale-[0.97]">
          <span className="text-[13px] font-bold text-[#1A1A1A] leading-tight">{odds[key]}</span>
          <span className="text-[9px] text-[#999] truncate max-w-full px-1 mt-[2px]">{team1}</span>
        </button>
      ))}
      <button className="w-[38px] flex items-center justify-center bg-white border border-[#B8EFFF] rounded-[7px] text-[#1CD4FF] hover:bg-[#1CD4FF] hover:text-white transition-all shrink-0 cursor-pointer">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </div>
  </div>
);

/* ─── Reusable Components ─── */

const SearchBarContent = () => (
  <div className="bg-white rounded-[12px] p-[12px] sm:p-[16px] shadow-sm w-full border border-[#F0F0F0]">
    <div className="relative border border-[#E0E0E0] rounded-[6px] px-3 h-[44px] flex items-center bg-white hover:border-[#CCCCCC] transition-all">
      <input type="text" placeholder="Search Game..." className="w-full text-[14px] outline-none text-[#4A4A4A] bg-transparent appearance-none" />
      <img src={searchIcon} alt="search" className="w-4 h-4 opacity-50 ml-2" />
    </div>
  </div>
);

const MatchCard = ({ time, league, team1, team2, score1, score2, odds, isLive, liveTime }) => (
  <div className="border border-[#e5e7eb] rounded-[10px] bg-white overflow-hidden hover:border-[#1CD4FF]/40 transition-all shadow-sm">
    <div className="flex items-center gap-2 px-3 py-2 bg-[#fafafa] border-b border-[#f0f0f0]">
      {isLive ? (
        <>
          <span className="inline-flex items-center gap-1 bg-[#ff3b30] text-white text-[9px] font-bold px-1.5 py-[2px] rounded tracking-wide shrink-0">
            <span className="w-[4px] h-[4px] rounded-full bg-white shrink-0" />LIVE
          </span>
          <span className="text-[11px] font-semibold text-[#6b7280]">{liveTime}</span>
          <span className="text-[#d1d5db] text-[10px]">•</span>
        </>
      ) : (
        <span className="text-[11px] font-bold text-[#1A1A1A] shrink-0">{time}</span>
      )}
      <img src={footballIcon} alt="sport" className="w-3 h-3 opacity-40 shrink-0" />
      <span className="text-[10px] text-[#6b7280] truncate">{league}</span>
    </div>
    <div className="px-3 py-2.5">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[13px] font-bold text-[#1A1A1A] truncate pr-3">{team1}</span>
        <span className="text-[13px] font-bold text-[#1A1A1A]">{score1}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-bold text-[#1A1A1A] truncate pr-3">{team2}</span>
        <span className="text-[13px] font-bold text-[#1A1A1A]">{score2}</span>
      </div>
    </div>
    <div className="flex gap-2 px-3 pb-3">
      {Object.entries(odds).map(([key, value]) => (
        <button key={key} className="flex-1 flex flex-col items-center justify-center bg-[#F5F5F7] border border-[#E5E7EB] rounded-[6px] h-[40px] hover:border-[#1CD4FF] hover:bg-white transition-all cursor-pointer active:scale-[0.97]">
          <span className="text-[9px] font-bold text-gray-400 uppercase">{key === 'home' ? '1' : key === 'draw' ? 'X' : '2'}</span>
          <span className="text-[13px] font-black text-[#1CD4FF] leading-none">{value}</span>
        </button>
      ))}
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════
   MAIN SPORTS PAGE
   ═══════════════════════════════════════════════════ */

const Sports = () => {
  const navigate = useNavigate();
  const [activeSport, setActiveSport] = useState('Football');
  const [activeLiveSport, setActiveLiveSport] = useState('Football');
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeHighlightCat, setActiveHighlightCat] = useState('Football');
  const [activeUpcomingCat, setActiveUpcomingCat] = useState('Football');

  return (
    <div className="flex flex-col min-h-screen bg-[#ECECEC] pt-[14px] px-[8px] sm:px-[12px] md:px-[16px] gap-[12px] md:gap-[16px] overflow-x-hidden pb-10">

      {/* ── Row 1: Search Header + Lobby Icons (Responsive) ── */}
      <div className="flex flex-col lg:flex-row gap-[12px] md:gap-[16px] w-full">
        {/* Search bar aligns with Left Column width on desktop */}
        <div className="w-full lg:w-[280px] 2xl:w-[320px] shrink-0">
          <SearchBarContent />
        </div>

        {/* Lobby Icons - Full width on mobile, flexible on desktop */}
        <div className="flex-1 flex gap-[6px] sm:gap-[10px] overflow-x-auto py-2 scrollbar-hide bg-white rounded-[12px] px-3 sm:px-4 shadow-sm h-[80px] sm:h-[94px] items-center border border-[#F0F0F0]">
          {LOBBY_ICONS.map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center shrink-0 cursor-pointer hover:bg-gray-50 transition-all px-1 group h-[60px] sm:h-[70px] border border-transparent hover:border-gray-100 rounded-lg" style={{ width: '70px' }}>
              <div className="w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] flex items-center justify-center mb-1 bg-gray-50 rounded-lg group-hover:bg-white transition-all">
                <img src={item.icon} alt={item.label} className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] object-contain opacity-80 group-hover:opacity-100" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-[#4A4A4A] whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Row 2: 3-Column Content Layout (Responsive) ── */}
      <div className="flex flex-col lg:flex-row gap-[12px] md:gap-[16px] items-start w-full">

        {/* Column 1: Top Leagues + Menu (Left Sidebar) */}
        <div className="w-full lg:w-[280px] 2xl:w-[320px] shrink-0 flex flex-col gap-[12px] md:gap-[16px]">
          {/* Top Leagues */}
          <div className="bg-white rounded-[12px] border border-[#F2F2F2] shadow-sm overflow-hidden w-full">
            <div className="px-4 py-3 border-b border-gray-50 bg-[#FAFAFA]">
              <h3 className="text-[13px] sm:text-[14px] font-bold text-[#1A1A1A]">Top leagues</h3>
            </div>
            <div className="py-2">
              {TOP_LEAGUES.map((league) => (
                <button key={league.label} onClick={() => navigate('/sports/match')} className="flex items-center justify-between w-full h-[40px] px-4 group hover:bg-gray-50 transition-all">
                  <div className="flex items-center gap-3">
                    <TrophyIcon />
                    <span className="text-[13px] font-bold text-[#4A4A4A] group-hover:text-black">{league.label}</span>
                  </div>
                  <ChevronDown size="14" />
                </button>
              ))}
            </div>
          </div>

          {/* Menu Section */}
          <div className="bg-white rounded-[12px] border border-[#F2F2F2] shadow-sm overflow-hidden pb-1 w-full">
            <div className="px-4 py-3 border-b border-gray-50 bg-[#FAFAFA]">
              <h3 className="text-[14px] font-bold text-[#1A1A1A]">Menu</h3>
            </div>
            <div className="p-3">
              <div className="flex items-center gap-1 bg-[#F5F7FA] p-1 rounded-full border border-[#E0E0E0]">
                {FILTERS.map((f) => (
                  <button key={f} onClick={() => setActiveFilter(f)}
                    className={`flex-1 h-[28px] text-[10px] font-bold rounded-full transition-all ${activeFilter === f ? 'bg-[#1CD4FF] text-white shadow-sm' : 'text-[#96A0AF] hover:text-[#4A4A4A]'}`}
                  >{f}</button>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              {SPORT_LIST.map((sport) => (
                <button key={sport.label} onClick={() => navigate('/sports/match')} className="flex items-center justify-between w-full h-[44px] px-4 group hover:bg-gray-50 transition-all">
                  <div className="flex items-center gap-3">
                    <img src={sport.icon} alt={sport.label} className="w-[16px] h-[16px] opacity-70" />
                    <span className="text-[13px] font-bold text-[#4A4A4A] group-hover:text-black">{sport.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {sport.live && <LiveDot />}
                    {sport.count && <span className="text-[11px] font-bold text-[#96A0AF]">{sport.count}</span>}
                    <ChevronDown size="14" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2: Center Feed (Main Content) */}
        <div className="flex-1 min-w-0 flex flex-col gap-[12px] md:gap-[16px]">
          {/* Top Events */}
          <div className="bg-white rounded-[12px] p-[12px] sm:p-[16px] md:p-[20px] shadow-sm border border-[#F0F0F0] w-full">
            <TopEventsSection />
          </div>

          {/* Live Now */}
          <div className="bg-white p-[12px] sm:p-[16px] md:p-[20px] shadow-sm rounded-[12px] border border-[#F0F0F0] w-full">
            <h2 className="text-[16px] sm:text-[18px] font-bold text-[#1A1A1A] mb-3 sm:mb-4">Live Now</h2>
            {/* Sport tabs + scroll arrow */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide flex-1 pb-1">
                {LIVE_NOW_CATEGORIES.map((cat) => (
                  <button key={cat.label} onClick={() => setActiveLiveSport(cat.label)}
                    className={`flex-shrink-0 flex items-center gap-1.5 px-3 h-[34px] rounded-[8px] text-[12px] font-bold transition-all border ${activeLiveSport === cat.label ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-white text-[#4A4A4A] border-[#E0E0E0] hover:bg-gray-50'}`}
                  >
                    <img src={cat.icon} alt={cat.label} className={`w-3.5 h-3.5 ${activeLiveSport === cat.label ? 'invert brightness-0' : 'opacity-60'}`} />
                    {cat.label}
                  </button>
                ))}
              </div>
              <button className="shrink-0 w-[34px] h-[34px] flex items-center justify-center bg-white border border-[#E0E0E0] rounded-[8px] text-[#4A4A4A] hover:bg-gray-50 transition-all">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M9 6l6 6-6 6" /></svg>
              </button>
            </div>
            {/* 1x2 dropdown */}
            <div className="mb-4">
              <div className="w-full h-[42px] bg-white border border-[#E5E7EB] rounded-[8px] flex items-center justify-between px-4 cursor-pointer hover:bg-gray-50 transition-all">
                <span className="text-[13px] font-semibold text-[#4A4A4A]">1x2</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 9l6 6 6-6" /></svg>
              </div>
            </div>
            {/* Match cards */}
            <div className="flex flex-col gap-2">
              {sportsLiveData.map((match, i) => (<SportsLiveRow key={i} {...match} />))}
            </div>
            {/* View All Events */}
            <button className="w-full mt-3 h-[44px] border border-[#E5E7EB] rounded-[10px] text-[13px] font-bold text-[#1CD4FF] hover:bg-[#F0FEFF] transition-all">
              View All Events
            </button>
          </div>

          {/* Highlights */}
          <div className="bg-white p-[12px] sm:p-[16px] md:p-[20px] shadow-sm rounded-[12px] border border-[#F0F0F0] w-full">
            <h2 className="text-[16px] sm:text-[18px] font-bold text-[#1A1A1A] mb-3 sm:mb-4">Highlights</h2>
            {/* Sport tabs + scroll arrow */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide flex-1 pb-1">
                {LIVE_NOW_CATEGORIES.map((cat) => (
                  <button key={cat.label} onClick={() => setActiveHighlightCat(cat.label)}
                    className={`flex-shrink-0 flex items-center gap-1.5 px-3 h-[34px] rounded-[8px] text-[12px] font-bold transition-all border ${activeHighlightCat === cat.label ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-white text-[#4A4A4A] border-[#E0E0E0] hover:bg-gray-50'}`}
                  >
                    <img src={cat.icon} alt={cat.label} className={`w-3.5 h-3.5 ${activeHighlightCat === cat.label ? 'invert brightness-0' : 'opacity-60'}`} />
                    {cat.label}
                  </button>
                ))}
              </div>
              <button className="shrink-0 w-[34px] h-[34px] flex items-center justify-center bg-white border border-[#E0E0E0] rounded-[8px] text-[#4A4A4A] hover:bg-gray-50 transition-all">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M9 6l6 6-6 6" /></svg>
              </button>
            </div>
            {/* 1x2 dropdown */}
            <div className="mb-4">
              <div className="w-full h-[42px] bg-white border border-[#E5E7EB] rounded-[8px] flex items-center justify-between px-4 cursor-pointer hover:bg-gray-50 transition-all">
                <span className="text-[13px] font-semibold text-[#4A4A4A]">1x2</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 9l6 6 6-6" /></svg>
              </div>
            </div>
            {/* Match cards */}
            <div className="flex flex-col gap-2">
              {highlightsSportsData.map((match, i) => (<SportsLiveRow key={i} {...match} />))}
            </div>
            {/* View All Events */}
            <button className="w-full mt-3 h-[44px] border border-[#E5E7EB] rounded-[10px] text-[13px] font-bold text-[#1CD4FF] hover:bg-[#F0FEFF] transition-all">
              View All Events
            </button>
          </div>

          {/* Upcoming */}
          <div className="bg-white p-[12px] sm:p-[16px] md:p-[20px] shadow-sm rounded-[12px] border border-[#F0F0F0] w-full">
            <h2 className="text-[16px] sm:text-[18px] font-bold text-[#1A1A1A] mb-3 sm:mb-4">Upcoming</h2>
            {/* Sport tabs + scroll arrow */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide flex-1 pb-1">
                {LIVE_NOW_CATEGORIES.map((cat) => (
                  <button key={cat.label} onClick={() => setActiveUpcomingCat(cat.label)}
                    className={`flex-shrink-0 flex items-center gap-1.5 px-3 h-[34px] rounded-[8px] text-[12px] font-bold transition-all border ${activeUpcomingCat === cat.label ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-white text-[#4A4A4A] border-[#E0E0E0] hover:bg-gray-50'}`}
                  >
                    <img src={cat.icon} alt={cat.label} className={`w-3.5 h-3.5 ${activeUpcomingCat === cat.label ? 'invert brightness-0' : 'opacity-60'}`} />
                    {cat.label}
                  </button>
                ))}
              </div>
              <button className="shrink-0 w-[34px] h-[34px] flex items-center justify-center bg-white border border-[#E0E0E0] rounded-[8px] text-[#4A4A4A] hover:bg-gray-50 transition-all">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M9 6l6 6-6 6" /></svg>
              </button>
            </div>
            {/* 1x2 dropdown */}
            <div className="mb-4">
              <div className="w-full h-[42px] bg-white border border-[#E5E7EB] rounded-[8px] flex items-center justify-between px-4 cursor-pointer hover:bg-gray-50 transition-all">
                <span className="text-[13px] font-semibold text-[#4A4A4A]">1x2</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 9l6 6 6-6" /></svg>
              </div>
            </div>
            {/* Match cards */}
            <div className="flex flex-col gap-2">
              {upcomingSportsData.map((match, i) => (<SportsLiveRow key={i} {...match} />))}
            </div>
            {/* View All Events */}
            <button className="w-full mt-3 h-[44px] border border-[#E5E7EB] rounded-[10px] text-[13px] font-bold text-[#1CD4FF] hover:bg-[#F0FEFF] transition-all">
              View All Events
            </button>
          </div>
        </div>

        {/* Column 3: Right Sidebar (Betslip + Popular Bets) */}
        <div className="w-full lg:w-[260px] 2xl:w-[300px] flex flex-col gap-[12px] md:gap-[16px] shrink-0">
          {/* Betslip */}
          <div className="bg-white rounded-[12px] border border-[#E0E0E0] shadow-sm overflow-hidden">
            <div className="px-4 py-3 flex items-center justify-between" style={{ background: 'linear-gradient(90deg, #1CD4FF 0%, #15B8D9 100%)' }}>
              <h3 className="text-[13px] font-bold uppercase text-white tracking-widest">Betslip</h3>
              <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">0</span>
            </div>
            <div className="p-5 flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-3 text-gray-400">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
              </div>
              <p className="text-[13px] font-bold text-[#1A1A1A] mb-1">No selections in the betslip</p>
              <p className="text-[11px] text-gray-400 mb-4">Add an event to start</p>
              <input type="text" placeholder="Enter Booking Code" className="w-full h-[38px] px-3 text-[12px] border border-gray-200 rounded-lg bg-[#FAFAFA] outline-none focus:border-[#1CD4FF] text-center text-gray-400 transition-all" />
            </div>
          </div>

          {/* Popular Bets */}
          <div className="bg-white rounded-[12px] border border-[#E0E0E0] shadow-sm overflow-hidden">
            <div className="px-4 py-3" style={{ background: 'linear-gradient(90deg, #1CD4FF 0%, #15B8D9 100%)' }}>
              <h3 className="text-[13px] font-bold uppercase text-white tracking-widest">Popular Bets</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {POPULAR_BETS.map((bet, i) => (
                <div key={i} className="px-4 py-3 hover:bg-gray-50 transition-all cursor-pointer">
                  <div className="flex items-start gap-2.5 mb-1">
                    <span className="text-[14px] mt-0.5 shrink-0">{bet.icon}</span>
                    <p className="text-[13px] font-bold text-[#1A1A1A] leading-snug">{bet.match}</p>
                  </div>
                  <p className="text-[11px] text-gray-400 mb-2 ml-[26px]">{bet.market}</p>
                  <div className="flex items-center justify-between ml-[26px]">
                    <span className="text-[13px] font-bold text-[#1A1A1A]">{bet.pick}</span>
                    <span className="text-[14px] font-black text-[#1CD4FF]">{bet.odds}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sports;
