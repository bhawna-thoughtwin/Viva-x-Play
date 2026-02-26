import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AmFootBallballIcon,
  baseballIcon,
  basketballIcon,
  EsportsIcon,
  flatIcon,
  FootballClrIcon,
  footballIcon,
  greyhoundIcon,
  HorseIcon,
  IconHockeyIcon,
  searchIcon,
} from '../assets/icons';

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
  { label: 'Football', icon: FootballClrIcon, count: 303, live: true },
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
// const SPORT_LIST = [
//   { label: 'Football', icon: footballIcon, count: 303, live: true },
//   { label: 'Basketball', icon: footballIcon, count: 62, live: true },
//   { label: 'Tennis', icon: footballIcon, count: 12, live: true },
//   { label: 'Baseball', icon: footballIcon, count: 42, live: false },
//   { label: 'Ice Hockey', icon: footballIcon, count: 86, live: false },
//   { label: 'American Football', icon: footballIcon, count: 24, live: false },
//   { label: 'Horse Racing', icon: footballIcon, count: 36, live: true },
//   { label: 'Greyhounds', icon: footballIcon, count: 63, live: true },
//   { label: 'Table Tennis', icon: footballIcon, count: 43, live: false },
//   { label: 'E-sports', icon: footballIcon, count: 61, live: true },
// ];

const FILTERS = ['All', 'Today', '3h', '6h', '24h', 'Tomorrow'];

const MARKET_TABS = ['All', 'Main', 'Bet Builder', '1st half'];

const BETTING_MARKETS = [
  {
    title: '1x2',
    rows: [
      [
        { label: 'Angola(W)', odds: '5.00' },
        { label: 'x', odds: '3.10' },
        { label: 'Malawi(W)', odds: '1.66' },
      ],
    ],
  },
  {
    title: 'Total',
    rows: [
      [
        { label: 'Over 1.5', odds: '1.50' },
        { label: 'Under 1.5', odds: '2.35' },
      ],
      [
        { label: 'Over 2.5', odds: '2.50' },
        { label: 'Under 2.5', odds: '1.45' },
      ],
    ],
  },
  {
    title: 'First Goal',
    rows: [
      [
        { label: 'Angola(W)', odds: '3.00' },
        { label: 'None', odds: '6.00' },
        { label: 'Malawi(W)', odds: '1.53' },
      ],
    ],
  },
  {
    title: 'Double Chance',
    rows: [
      [
        { label: 'Angola(w) Or Draw', odds: '2.00' },
        { label: 'Angola (w) or Malawi(w)', odds: '1.28' },
        { label: 'Draw or Malawi(w)', odds: '1.14' },
      ],
    ],
  },
  {
    title: 'Draw',
    rows: [
      [
        { label: 'Angola(w)', odds: '3.70' },
        { label: 'Malawi(W)', odds: '1.22' },
      ],
    ],
  },
];

/* ─── Sub-components ─── */
const TrophyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M4 2H14V9C14 11.7614 11.7614 14 9 14C6.23858 14 4 11.7614 4 9V2Z" fill="#FFCB00" />
    <path d="M4 5H1V8C1 9.65685 2.34315 11 4 11H4M14 5H17V8C17 9.65685 15.6569 11 14 11H14" stroke="#DBAF00" strokeWidth="1.2" />
    <path d="M9 14V16H6M9 16H12M9 16V14" stroke="#777" strokeWidth="1.2" />
    <rect x="5" y="16" width="8" height="1.5" rx="0.5" fill="#3E3D43" />
  </svg>
);

const ChevronDown = ({ size = '12' }) => (
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

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

/* ─── OddsButton ─── */
const OddsBtn = ({ label, odds }) => (
  <button className="flex-1 flex items-center justify-between px-4 h-[42px] bg-white border border-[#E5E7EB] rounded-[8px] hover:border-[#1CD4FF] transition-all group cursor-pointer">
    <span className="text-[12px] font-semibold text-[#4A4A4A] group-hover:text-[#1A1A1A] truncate pr-2">{label}</span>
    <span className="text-[13px] font-bold text-[#22C55E] shrink-0">{odds}</span>
  </button>
);

/* ─── Main Page ─── */
const SportMatchDetail = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="flex flex-col min-h-screen bg-[#ECECEC] pt-[14px] px-[8px] sm:px-[12px] md:px-[16px] gap-[12px] md:gap-[16px] overflow-x-hidden pb-10">

      {/* ── 2-Column Layout ── */}
      <div className="flex flex-col lg:flex-row gap-[12px] md:gap-[16px] items-start w-full">

        {/* ── Left Sidebar ── */}
        <div className="w-full lg:w-[280px] 2xl:w-[320px] shrink-0 flex flex-col gap-[12px] md:gap-[16px]">

          {/* Search */}
          <div className="bg-white rounded-[12px] p-[12px] sm:p-[16px] shadow-sm w-full border border-[#F0F0F0]">
            <div className="relative border border-[#E0E0E0] rounded-[6px] px-3 h-[44px] flex items-center bg-white hover:border-[#CCCCCC] transition-all">
              <input type="text" placeholder="Search Game..." className="w-full text-[14px] outline-none text-[#4A4A4A] bg-transparent" />
              <img src={searchIcon} alt="search" className="w-4 h-4 opacity-50 ml-2" />
            </div>
          </div>

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

          {/* Menu */}
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

        {/* ── Center: Match Detail ── */}
        <div className="flex-1 min-w-0 flex flex-col gap-[12px] md:gap-[16px]">

          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {['Football', 'Africa', 'Cosafa Cup, Women', 'Angola(W) vs Malawi(W)'].map((crumb, i, arr) => (
              <span key={crumb} className="flex items-center gap-1.5">
                <span
                  onClick={() => crumb === 'Football' && navigate('/sports')}
                  className={`text-[12px] font-semibold transition-colors ${i === arr.length - 1 ? 'text-[#1A1A1A] cursor-default' : 'text-[#888] hover:text-[#1CD4FF] cursor-pointer'}`}
                >
                  {crumb}
                </span>
                {i < arr.length - 1 && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-[#BBBBBB]">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                )}
              </span>
            ))}
          </div>

          {/* Match Header Card */}
          <div className="bg-white rounded-[12px] border border-[#F0F0F0] shadow-sm overflow-hidden">
            <div className="flex flex-col items-center py-5 px-4">
              <span className="text-[12px] font-bold text-[#1A1A1A] tracking-widest uppercase mb-1">Cosafa Cup, Women</span>
              <span className="text-[11px] text-[#888] font-semibold mb-5">1ST | 20:09</span>
              <div className="flex items-center justify-between w-full max-w-[420px]">
                {/* Team 1 */}
                <div className="flex flex-col items-center gap-2 flex-1">
                  <span className="text-[28px]">🇦🇴</span>
                  <span className="text-[13px] font-bold text-[#1A1A1A] text-center">ANGOLA (W)</span>
                </div>
                {/* Score */}
                <div className="flex items-center gap-3 px-4">
                  <span className="text-[36px] font-black text-[#1A1A1A] leading-none">0</span>
                  <span className="text-[22px] font-bold text-[#BBBBBB]">:</span>
                  <span className="text-[36px] font-black text-[#1A1A1A] leading-none">0</span>
                </div>
                {/* Team 2 */}
                <div className="flex flex-col items-center gap-2 flex-1">
                  <span className="text-[28px]">🇲🇼</span>
                  <span className="text-[13px] font-bold text-[#1A1A1A] text-center">MALAWI (W)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Search + Market tabs */}
          <div className="bg-white rounded-[12px] border border-[#F0F0F0] shadow-sm p-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative border border-[#E0E0E0] rounded-[8px] px-3 h-[40px] flex items-center bg-[#FAFAFA] flex-1">
              <input type="text" placeholder="Search Game..." className="w-full text-[13px] outline-none text-[#4A4A4A] bg-transparent" />
              <img src={searchIcon} alt="search" className="w-4 h-4 opacity-40 ml-2" />
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              {MARKET_TABS.map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={`px-3 h-[36px] rounded-[7px] text-[12px] font-bold transition-all border ${activeTab === tab ? 'bg-[#1CD4FF] text-white border-[#1CD4FF]' : 'bg-white text-[#4A4A4A] border-[#E0E0E0] hover:bg-gray-50'}`}
                >{tab}</button>
              ))}
            </div>
          </div>

          {/* Betting Markets */}
          <div className="flex flex-col gap-[10px]">
            {BETTING_MARKETS.map((market) => (
              <div key={market.title} className="bg-white rounded-[12px] border border-[#F0F0F0] shadow-sm overflow-hidden">
                {/* Market header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[#F5F5F5]">
                  <button className="text-[#CCCCCC] hover:text-[#FFB800] transition-colors">
                    <StarIcon />
                  </button>
                  <span className="text-[13px] font-bold text-[#1A1A1A]">{market.title}</span>
                </div>
                {/* Odds rows */}
                <div className="p-3 flex flex-col gap-2">
                  {market.rows.map((row, ri) => (
                    <div key={ri} className="flex gap-2">
                      {row.map((item) => (
                        <OddsBtn key={item.label} label={item.label} odds={item.odds} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SportMatchDetail;
