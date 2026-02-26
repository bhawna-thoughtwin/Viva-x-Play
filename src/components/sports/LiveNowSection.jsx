import { useNavigate } from 'react-router-dom';
import { footballIcon, monitorIcon, chatIcon, liveIcon } from '../../assets/icons';

const liveNowData = [
  {
    score: '3823',
    liveTime: '20:34',
    league: 'Champions League AFC • Ukraine',
    team1: 'FC Seoul (Flewless_phoenix)',
    team2: 'Al Ahli (sane4ekB)',
    score1: 0,
    score2: 0,
    odds: { home: '1.80', draw: '4.90', away: '3.06', over: '1.70', under: '2.05', x1: '1.35', x12: '1.15', x2: '1.92' },
  },
  {
    score: '9234',
    liveTime: '46:45',
    league: 'Champions League AFC • Ukraine',
    team1: 'FC Seoul (Flewless_phoenix)',
    team2: 'Al Ahli (sane4ekB)',
    score1: 0,
    score2: 0,
    odds: { home: '1.80', draw: '4.90', away: '3.06', over: '1.70', under: '2.05', x1: '1.35', x12: '1.15', x2: '1.92' },
  },
];

const ODD_COLS = [
  { key: 'home',  label: '1' },
  { key: 'draw',  label: 'Draw' },
  { key: 'away',  label: '2' },
  { key: 'over',  label: 'Over 4.5' },
  { key: 'under', label: 'Under 4.5' },
  { key: 'x1',    label: '1X' },
  { key: 'x12',   label: '12' },
  { key: 'x2',    label: 'X2' },
];

const LiveNowRow = ({ score, liveTime, league, team1, team2, score1, score2, odds }) => (
  <div className="border border-[#e5e7eb] rounded-[8px] overflow-hidden bg-white">

    {/* ── Top info bar ── */}
    <div className="flex items-center gap-2.5 px-3 py-2 bg-[#fafafa] border-b border-[#f0f0f0]">

      {/* Score — inside gradient badge */}
      <div
        className="flex items-center gap-1.5 px-[6px] py-[3px] rounded-[4px] border shrink-0"
        style={{
          background: 'linear-gradient(180deg, #E3FC7B 0%, #C2D95A 100%)',
          borderColor: '#A0B73B',
        }}
      >
        <span className="text-[11px] font-bold text-[#3a5a00] leading-none">{score}</span>
      </div>

      {/* Live icon */}
      <img src={liveIcon} alt="live" className="w-[13px] h-[13px] object-contain shrink-0" />

      {/* Live time */}
      <span className="text-[11px] font-semibold text-[#6b7280] leading-none shrink-0">{liveTime}</span>

      {/* Divider dot */}
      <span className="text-[#d1d5db] text-[10px] shrink-0">•</span>

      {/* Icons */}
      <div className="flex items-center gap-2.5 ml-18">
        <img src={footballIcon} alt="football" className="w-[14px] h-[14px] object-contain opacity-60 shrink-0" />
        <img src={monitorIcon} alt="monitor" className="w-[14px] h-[14px] object-contain opacity-60 shrink-0" />
        <img src={chatIcon} alt="chat" className="w-[14px] h-[14px] object-contain opacity-60 shrink-0" />
      </div>

      {/* League */}
      <span className="text-[12px] text-[#6b7280] truncate">{league}</span>
    </div>

    {/* ── Teams + Odds grid ── */}
    <div className="overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
      <table className="w-full min-w-[700px] border-collapse">

        {/* Column headers row */}
        <thead>
          <tr className="border-b border-[#f0f0f0]">
            {/* Team column */}
            <th className="text-left px-3 py-1.5 w-[200px]" />
            {/* Score column */}
            <th className="px-2 py-1.5 text-center">
              <span className="text-[11px] text-[#9ca3af] font-medium"></span>
            </th>
            {/* Odds headers */}
            {ODD_COLS.map(col => (
              <th key={col.key} className="px-2 py-1.5 text-center min-w-[52px]">
                <span className="text-[11px] text-[#9ca3af] font-medium whitespace-nowrap">{col.label}</span>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {/* Team 1 row */}
          <tr className="border-b border-[#f5f5f5]">
            <td className="px-3 py-2">
              <span className="text-[13px] font-semibold text-[#1a1a1a] whitespace-nowrap">{team1}</span>
            </td>
            <td className="px-2 py-2 text-center">
              <span className="text-[13px] font-bold text-[#1a1a1a]">{score1}</span>
            </td>
            {ODD_COLS.map((col, i) => (
              <td key={col.key} className="px-1.5 py-2 text-center">
                {i === 0 && (
                  <button className="w-full min-w-[52px] h-[30px] px-2 bg-[#f5f5f7] hover:bg-[#1CD4FF] hover:text-white border border-[#e5e7eb] hover:border-[#1CD4FF] rounded-[6px] text-[12px] font-semibold text-[#1CD4FF] transition-colors cursor-pointer">
                    {odds[col.key]}
                  </button>
                )}
                {i !== 0 && (
                  <button className="w-full min-w-[52px] h-[30px] px-2 bg-[#f5f5f7] hover:bg-[#1CD4FF] hover:text-white border border-[#e5e7eb] hover:border-[#1CD4FF] rounded-[6px] text-[12px] font-semibold text-[#222] transition-colors cursor-pointer">
                    {odds[col.key]}
                  </button>
                )}
              </td>
            ))}
          </tr>

          {/* Team 2 row */}
          <tr>
            <td className="px-3 py-2">
              <span className="text-[13px] font-semibold text-[#1a1a1a] whitespace-nowrap">{team2}</span>
            </td>
            <td className="px-2 py-2 text-center">
              <span className="text-[13px] font-bold text-[#1a1a1a]">{score2}</span>
            </td>
            {ODD_COLS.map((col) => (
              <td key={col.key} className="px-1.5 py-2 text-center">
                <button className="w-full min-w-[52px] h-[30px] px-2 bg-[#f5f5f7] hover:bg-[#1CD4FF] hover:text-white border border-[#e5e7eb] hover:border-[#1CD4FF] rounded-[6px] text-[12px] font-semibold text-[#1CD4FF] transition-colors cursor-pointer">
                  {odds[col.key]}
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const LiveNowSection = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 gap-2">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <span className="text-[16px] md:text-[20px] font-bold text-[#121212] truncate">Live Now</span>
        </div>
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

      {/* Match rows */}
      <div className="flex flex-col gap-3">
        {liveNowData.map((match, i) => (
          <LiveNowRow key={i} {...match} />
        ))}
      </div>
    </div>
  );
};

export default LiveNowSection;
