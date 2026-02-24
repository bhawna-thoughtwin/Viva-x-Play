import { useState } from 'react';

/* ─── Sport Icons (inline SVG) ─── */
const FootballIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="9.5" stroke={active ? '#fff' : '#000'} strokeWidth="1"/>
    <circle cx="10" cy="10" r="9" fill={active ? 'rgba(255,255,255,0.2)' : '#fff'}/>
    <polygon points="10,4 12.5,8 17,8 13.5,11 15,15.5 10,12.5 5,15.5 6.5,11 3,8 7.5,8" fill={active ? '#fff' : '#333'} opacity="0.85"/>
  </svg>
);

const BasketballIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="9" fill={active ? 'rgba(255,255,255,0.3)' : '#F26635'}/>
    <path d="M1 10h18M10 1v18M4.5 3.5Q10 8 10 10Q10 12 4.5 16.5M15.5 3.5Q10 8 10 10Q10 12 15.5 16.5" stroke={active ? '#fff' : '#000'} strokeWidth="1" fill="none"/>
    <circle cx="10" cy="10" r="9" stroke={active ? '#fff' : '#000'} strokeWidth="0.8" fill="none"/>
  </svg>
);

const TennisIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="9" fill={active ? 'rgba(255,255,255,0.2)' : '#ABCC00'}/>
    <path d="M3 10Q7 6 7 10Q7 14 3 10M17 10Q13 6 13 10Q13 14 17 10" stroke={active ? '#fff' : '#fff'} strokeWidth="1.5" fill="none"/>
    <circle cx="10" cy="10" r="9" stroke={active ? '#fff' : '#000'} strokeWidth="0.6" fill="none"/>
  </svg>
);

const BaseballIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="9" fill={active ? 'rgba(255,255,255,0.2)' : '#FED2A4'}/>
    <path d="M4 5Q6 10 4 15M16 5Q14 10 16 15" stroke={active ? '#fff' : '#C57A44'} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M4.5 7.5h2M13.5 7.5h2M4.5 12.5h2M13.5 12.5h2" stroke={active ? '#fff' : '#C57A44'} strokeWidth="0.8"/>
    <circle cx="10" cy="10" r="9" stroke={active ? '#fff' : '#000'} strokeWidth="0.6" fill="none"/>
  </svg>
);

const HockeyIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="1" y="7" width="14" height="5" rx="2.5" fill={active ? 'rgba(255,255,255,0.3)' : '#FEC165'}/>
    <rect x="13" y="7" width="2" height="10" rx="1" fill={active ? '#fff' : '#FE8607'}/>
    <ellipse cx="14" cy="17" rx="4" ry="1.5" fill={active ? 'rgba(255,255,255,0.4)' : '#668D97'}/>
    <rect x="1" y="7" width="14" height="5" rx="2.5" stroke={active ? '#fff' : '#000'} strokeWidth="0.6" fill="none"/>
  </svg>
);

const AmericanFootballIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <ellipse cx="10" cy="10" rx="8" ry="6" fill={active ? 'rgba(255,255,255,0.2)' : '#CE775F'}/>
    <path d="M10 4v12M4 10h12" stroke={active ? '#fff' : '#B5DCFF'} strokeWidth="1.5"/>
    <ellipse cx="10" cy="10" rx="8" ry="6" stroke={active ? '#fff' : '#000'} strokeWidth="0.6" fill="none"/>
  </svg>
);

const HorseRacingIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <ellipse cx="12" cy="9" rx="5" ry="4" fill={active ? 'rgba(255,255,255,0.2)' : '#D68751'}/>
    <path d="M3 14Q5 10 8 9Q11 8 14 10L17 8" stroke={active ? '#fff' : '#D68751'} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <circle cx="6" cy="6" r="2" fill={active ? 'rgba(255,255,255,0.3)' : '#FFDB80'}/>
    <path d="M3 14Q5 10 8 9Q11 8 14 10L17 8" stroke={active ? '#fff' : '#000'} strokeWidth="0.5" fill="none"/>
  </svg>
);

const GreyhoundIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3 14Q4 10 7 9Q10 8 14 9L17 7Q17 10 15 12Q13 13 10 13L7 15L5 15Z" fill={active ? 'rgba(255,255,255,0.3)' : '#914400'}/>
    <circle cx="15" cy="6" r="1.5" fill={active ? '#fff' : '#914400'}/>
    <path d="M3 14Q4 10 7 9Q10 8 14 9L17 7Q17 10 15 12Q13 13 10 13L7 15L5 15Z" stroke={active ? '#fff' : '#000'} strokeWidth="0.5"/>
  </svg>
);

const TableTennisIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="2" y="9" width="12" height="2" rx="1" transform="rotate(-30 2 9)" fill={active ? 'rgba(255,255,255,0.3)' : '#0055A3'}/>
    <rect x="2" y="9" width="12" height="2" rx="1" transform="rotate(-30 2 9)" stroke={active ? '#fff' : '#000'} strokeWidth="0.5"/>
    <circle cx="15" cy="5" r="3" fill={active ? 'rgba(255,255,255,0.3)' : '#FD4755'}/>
    <circle cx="15" cy="5" r="3" stroke={active ? '#fff' : '#000'} strokeWidth="0.5"/>
  </svg>
);

const EsportsIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="2" y="5" width="16" height="10" rx="3" fill={active ? 'rgba(255,255,255,0.2)' : '#6864F7'}/>
    <path d="M7 10h4M9 8v4" stroke={active ? '#6864F7' : '#fff'} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="13" cy="9" r="1" fill={active ? '#6864F7' : '#B1D952'}/>
    <circle cx="13" cy="11" r="1" fill={active ? '#6864F7' : '#B1D952'}/>
    <rect x="2" y="5" width="16" height="10" rx="3" stroke={active ? '#fff' : '#000'} strokeWidth="0.5" fill="none"/>
  </svg>
);

const MMAIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M5 15L8 8L12 6L16 8L15 14" fill={active ? 'rgba(255,255,255,0.2)' : '#FF7B79'}/>
    <path d="M8 8L6 12M12 6L14 11" stroke={active ? '#fff' : '#000'} strokeWidth="1.2" strokeLinecap="round"/>
    <circle cx="10" cy="5" r="2" fill={active ? 'rgba(255,255,255,0.3)' : '#FF9EB1'}/>
    <path d="M5 15L8 8L12 6L16 8L15 14" stroke={active ? '#fff' : '#000'} strokeWidth="0.5" fill="none"/>
  </svg>
);

const VolleyballIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="8" fill={active ? 'rgba(255,255,255,0.2)' : '#F9F9F9'}/>
    <path d="M2 10Q5 6 10 7Q15 8 18 10" stroke={active ? '#fff' : '#5AB5FF'} strokeWidth="1.2" fill="none"/>
    <path d="M5 5Q8 10 10 10Q12 10 15 15" stroke={active ? '#fff' : '#FFF255'} strokeWidth="1.2" fill="none"/>
    <circle cx="10" cy="10" r="8" stroke={active ? '#fff' : '#000'} strokeWidth="0.8" fill="none"/>
  </svg>
);

const BoxingIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="4" y="7" width="12" height="9" rx="3" fill={active ? 'rgba(255,255,255,0.2)' : '#2B8FFC'}/>
    <rect x="4" y="7" width="5" height="9" rx="3" fill={active ? 'rgba(255,255,255,0.3)' : '#2B8FFC'}/>
    <rect x="7" y="4" width="4" height="6" rx="2" fill={active ? 'rgba(255,255,255,0.2)' : '#9E6861'}/>
    <rect x="4" y="7" width="12" height="9" rx="3" stroke={active ? '#fff' : '#000'} strokeWidth="0.5" fill="none"/>
  </svg>
);

const CricketIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M4 16L14 4" stroke={active ? '#fff' : '#DAE5ED'} strokeWidth="3" strokeLinecap="round"/>
    <path d="M4 16L14 4" stroke={active ? 'rgba(255,255,255,0.5)' : '#8294AF'} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="15" cy="4" r="2.5" fill={active ? 'rgba(255,255,255,0.3)' : '#D37976'}/>
    <circle cx="15" cy="4" r="2.5" stroke={active ? '#fff' : '#000'} strokeWidth="0.4" fill="none"/>
  </svg>
);

const DartsIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="9" cy="11" r="7" stroke={active ? '#fff' : '#000'} strokeWidth="0.5" fill={active ? 'rgba(255,255,255,0.1)' : '#FD646F'}/>
    <circle cx="9" cy="11" r="5" fill={active ? 'rgba(255,255,255,0.15)' : '#F5F5F5'}/>
    <circle cx="9" cy="11" r="3" fill={active ? 'rgba(255,255,255,0.2)' : '#FD646F'}/>
    <circle cx="9" cy="11" r="1.5" fill={active ? '#fff' : '#F5F5F5'}/>
    <path d="M9 11L17 3" stroke={active ? '#fff' : '#50758D'} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 3L17 2L16 5Z" fill={active ? '#fff' : '#918291'}/>
  </svg>
);

const RugbyIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <ellipse cx="10" cy="10" rx="7" ry="5" fill={active ? 'rgba(255,255,255,0.2)' : '#CCD1D9'}/>
    <path d="M10 5v10M4 10h12" stroke={active ? '#fff' : '#DFB28B'} strokeWidth="1.2"/>
    <path d="M10 5Q14 7 14 10Q14 13 10 15Q6 13 6 10Q6 7 10 5Z" stroke={active ? '#fff' : '#000'} strokeWidth="0.5" fill="none"/>
  </svg>
);

const VRFootballIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="1" y="7" width="18" height="8" rx="3" fill={active ? 'rgba(255,255,255,0.2)' : '#32ADDB'}/>
    <circle cx="7" cy="11" r="2" fill={active ? 'rgba(255,255,255,0.3)' : '#298BB0'}/>
    <circle cx="13" cy="11" r="2" fill={active ? 'rgba(255,255,255,0.3)' : '#298BB0'}/>
    <path d="M9 11h2" stroke={active ? '#fff' : '#000'} strokeWidth="0.8"/>
    <rect x="6" y="4" width="8" height="4" rx="1" fill={active ? 'rgba(255,255,255,0.3)' : '#634653'}/>
    <rect x="1" y="7" width="18" height="8" rx="3" stroke={active ? '#fff' : '#000'} strokeWidth="0.5" fill="none"/>
  </svg>
);

const LotteryIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="2" y="4" width="8" height="8" rx="1.5" fill={active ? 'rgba(255,255,255,0.2)' : '#FD8087'}/>
    <rect x="10" y="4" width="8" height="8" rx="1.5" fill={active ? 'rgba(255,255,255,0.2)' : '#B3DAFE'}/>
    <rect x="2" y="12" width="8" height="5" rx="1.5" fill={active ? 'rgba(255,255,255,0.2)' : '#B3DAFE'}/>
    <rect x="10" y="12" width="8" height="5" rx="1.5" fill={active ? 'rgba(255,255,255,0.2)' : '#FD8087'}/>
    <circle cx="6" cy="8" r="1.5" fill={active ? '#1CD4FF' : '#FFE177'}/>
    <circle cx="14" cy="8" r="1.5" fill={active ? '#1CD4FF' : '#FFE177'}/>
  </svg>
);

const ShortFootballIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="9" fill={active ? 'rgba(255,255,255,0.15)' : '#fff'}/>
    <polygon points="10,4 12.5,8 17,8 13.5,11 15,15.5 10,12.5 5,15.5 6.5,11 3,8 7.5,8" fill={active ? '#fff' : '#333'} opacity="0.8"/>
    <circle cx="10" cy="10" r="9" stroke={active ? '#fff' : '#000'} strokeWidth="0.8" fill="none"/>
    <path d="M6 18L5 20M14 18L15 20" stroke={active ? '#fff' : '#666'} strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const TrophyIcon = ({ active }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M4 2h10v7a5 5 0 01-10 0V2z" fill={active ? '#fff' : '#FECE00'}/>
    <path d="M4 5H1v3a3 3 0 003 3M14 5h3v3a3 3 0 01-3 3" stroke={active ? '#fff' : '#CBA400'} strokeWidth="1.2" fill="none"/>
    <path d="M7 9v2M11 9v2" stroke={active ? 'rgba(255,255,255,0.6)' : '#DDB201'} strokeWidth="1"/>
    <rect x="6" y="13" width="6" height="1.5" rx="0.5" fill={active ? 'rgba(255,255,255,0.7)' : '#77767E'}/>
    <rect x="5" y="15.5" width="8" height="1.5" rx="0.5" fill={active ? 'rgba(255,255,255,0.7)' : '#3E3D43'}/>
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="7" stroke="#4A4A4A" strokeWidth="2"/>
    <path d="M16 16l4 4" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ChevronDown = ({ active }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M6 9l6 6 6-6" stroke={active ? '#fff' : '#999'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LiveDot = () => (
  <span className="inline-flex items-center justify-center w-[24px] h-[24px]">
    <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
      <rect x="0" y="0" width="17" height="12" rx="3" fill="#E60026"/>
      <text x="8.5" y="9" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="SF Pro, sans-serif">LIVE</text>
    </svg>
  </span>
);

/* ─── Data ─── */
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

const SPORTS = [
  { label: 'Football',         Icon: FootballIcon,         live: true,  count: 303 },
  { label: 'Basketball',       Icon: BasketballIcon,       live: true,  count: 303 },
  { label: 'Tennis',           Icon: TennisIcon,           live: true,  count: 303 },
  { label: 'Baseball',         Icon: BaseballIcon,         live: false, count: 52  },
  { label: 'Ice Hockey',       Icon: HockeyIcon,           live: false, count: null },
  { label: 'American Football',Icon: AmericanFootballIcon, live: false, count: null },
  { label: 'Horse Racing',     Icon: HorseRacingIcon,      live: true,  count: 303 },
  { label: 'Greyhounds',       Icon: GreyhoundIcon,        live: true,  count: 303 },
  { label: 'Table Tennis',     Icon: TableTennisIcon,      live: false, count: null },
  { label: 'E-sports',         Icon: EsportsIcon,          live: true,  count: 303 },
  { label: 'MMA',              Icon: MMAIcon,              live: false, count: null },
  { label: 'Beach Volley',     Icon: VolleyballIcon,       live: false, count: null },
  { label: 'Boxing',           Icon: BoxingIcon,           live: false, count: null },
  { label: 'Cricket',          Icon: CricketIcon,          live: false, count: null },
  { label: 'Darts',            Icon: DartsIcon,            live: false, count: null },
  { label: 'Rugby League',     Icon: RugbyIcon,            live: true,  count: 303 },
  { label: 'Football VR',      Icon: VRFootballIcon,       live: false, count: null },
  { label: 'Lotteries',        Icon: LotteryIcon,          live: false, count: null },
  { label: 'Short Football',   Icon: ShortFootballIcon,    live: false, count: null },
];

/* ─── Single row ─── */
const SidebarRow = ({ label, Icon, live, count, active, onClick, isTrophy }) => (
  <button
    onClick={onClick}
    className={`
      flex items-center gap-[8px] w-full box-border
      px-[12px] h-[44px] rounded-[4px]
      border-none outline-none cursor-pointer text-left
      transition-colors duration-150
      ${active
        ? 'bg-[#1CD4FF] text-white'
        : 'bg-white text-[#333333] hover:bg-[#f0f9ff]'}
    `}
  >
    {/* icon */}
    <span className="w-[24px] h-[24px] flex items-center justify-center shrink-0">
      {isTrophy
        ? <TrophyIcon active={active} />
        : <Icon active={active} />}
    </span>

    {/* label */}
    <span className={`flex-1 text-[14px] font-[510] leading-[20px] truncate ${active ? 'text-white' : 'text-[#333333]'}`}>
      {label}
    </span>

    {/* right side: live + count + chevron */}
    <span className="flex items-center gap-[4px] shrink-0">
      {live && <LiveDot />}
      {count != null && (
        <span className={`text-[10px] font-[510] w-[24px] text-center ${active ? 'text-white' : 'text-[#6B7280]'}`}>
          {count}
        </span>
      )}
      <ChevronDown active={active} />
    </span>
  </button>
);

/* ─── Time filter bar ─── */
const TIME_FILTERS = ['All', 'Today', '3h', '6h', '24h', 'Tomorrow'];

/* ─── Main component ─── */
const SportsSidebar = ({ activeSport, onSelectSport }) => {
  const [search, setSearch] = useState('');
  const [activeLeague, setActiveLeague] = useState(null);

  const filteredLeagues = TOP_LEAGUES.filter(l =>
    l.label.toLowerCase().includes(search.toLowerCase())
  );
  const filteredSports = SPORTS.filter(s =>
    s.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-[16px] w-[300px] py-[13px] px-[12px]">

      {/* ── Search ── */}
      <div className="w-full h-[68px] bg-white rounded-[12px] flex items-center justify-center">
        <div className="relative w-[276px] h-[44px]">
          <input
            type="text"
            placeholder="Search Game..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="
              w-full h-full box-border
              border border-[#CCCCCC] rounded-[4px]
              pl-[14px] pr-[40px]
              text-[14px] font-[510] text-[#4A4A4A] placeholder-[#4A4A4A]/40
              outline-none bg-white
            "
          />
          <span className="absolute right-[12px] top-1/2 -translate-y-1/2">
            <SearchIcon />
          </span>
        </div>
      </div>

      {/* ── Top leagues ── */}
      {filteredLeagues.length > 0 && (
        <div className="flex flex-col gap-[8px]">
          <span className="text-[14px] font-[700] leading-[20px] text-black">
            Top leagues
          </span>
          <div className="bg-white rounded-[12px] py-[12px] flex flex-col gap-0">
            {filteredLeagues.map(league => (
              <SidebarRow
                key={league.label}
                label={league.label}
                isTrophy={true}
                live={false}
                count={null}
                active={activeLeague === league.label}
                onClick={() => {
                  setActiveLeague(prev => prev === league.label ? null : league.label);
                  if (onSelectSport) onSelectSport(null);
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── Menu (sports) ── */}
      {filteredSports.length > 0 && (
        <div className="flex flex-col gap-[8px]">
          <span className="text-[14px] font-[700] leading-[20px] text-black">
            Menu
          </span>
          <div className="bg-white rounded-[12px] py-[12px] flex flex-col gap-0">
            {filteredSports.map(sport => (
              <SidebarRow
                key={sport.label}
                label={sport.label}
                Icon={sport.Icon}
                live={sport.live}
                count={sport.count}
                active={activeSport === sport.label}
                onClick={() => {
                  setActiveLeague(null);
                  if (onSelectSport) onSelectSport(sport.label);
                }}
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default SportsSidebar;
