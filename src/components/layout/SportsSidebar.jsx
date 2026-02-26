import { useState } from 'react';
import {
  homeIcon,
  liveIcon,
  virtualIcon,
  superjackIcon,
  liveStremingIcon,
  AllSportsIcon,
  resultIcon,
  footballIcon,
  rouletteIcon
} from '../../assets/icons';

const ChevronDown = ({ active, light, size = "12" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={active || light ? 'text-white' : 'text-gray-400 opacity-60'}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const SportsSidebar = ({ activeSport, onSelectSport }) => {
  return (
    <div className="flex flex-col gap-[16px] w-[300px] py-4 pr-1">

      {/* ── Sidebar Top Search ── */}
      <div className="bg-white rounded-lg p-3 border border-[#F2F2F2] shadow-sm">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Game..."
            className="w-full h-10 pl-3 pr-10 text-[13px] border border-gray-100 rounded bg-[#FAFAFA] outline-none focus:bg-white focus:border-[#1CD4FF] transition-all"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 opacity-30">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
          </span>
        </div>
      </div>

      {/* ── Sports Category Selector (Blue Head) ── */}
      <div className="flex flex-col gap-1">
        <div
          className="flex items-center justify-between h-[48px] px-4 cursor-pointer transition-all active:scale-[0.98]"
          style={{ background: 'linear-gradient(90deg, #117F99 0%, #1CD4FF 100%)', borderRadius: '4px' }}
        >
          <div className="flex items-center gap-3">
            <img src={AllSportsIcon} alt="sport" className="w-5 h-5 invert brightness-0" style={{ filter: 'brightness(0) invert(1)' }} />
            <span className="text-[15px] font-bold text-white uppercase tracking-wider">Sports</span>
          </div>
          <div className="rotate-180 transition-transform">
            <ChevronDown light />
          </div>
        </div>

        {/* Sub-menu inside blue category */}
        <div className="bg-white rounded-b-xl border border-[#F0F0F0] overflow-hidden">
          {[
            { label: 'Lobby', icon: homeIcon },
            { label: 'Live', icon: liveIcon },
            { label: 'Virtual', icon: virtualIcon },
            { label: 'Superjack', icon: superjackIcon },
            { label: 'Streaming', icon: liveStremingIcon },
            { label: 'All sports', icon: AllSportsIcon },
            { label: 'Results', icon: resultIcon }
          ].map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-5 w-full h-[40px] px-8 text-[14px] font-bold text-[#4A4A4A] hover:bg-gray-50 transition-all text-left group"
              onClick={() => onSelectSport(item.label)}
            >
              <img src={item.icon} alt={item.label} className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Secondary Categories (Casino) ── */}
      <div className="flex flex-col gap-2 mt-2 px-1">
        <div className="flex items-center justify-between py-2.5 px-3 rounded hover:bg-gray-50 cursor-pointer group transition-all">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <img src={rouletteIcon} alt="casino" className="w-5 h-5 opacity-60 group-hover:opacity-100" />
            </div>
            <span className="text-[14px] font-bold text-[#4A4A4A] group-hover:text-black">Casino</span>
          </div>
          <ChevronDown size="14" />
        </div>
        <div className="flex items-center justify-between py-2.5 px-3 rounded hover:bg-gray-50 cursor-pointer group transition-all border-t border-gray-100/50">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <img src={rouletteIcon} alt="live casino" className="w-5 h-5 opacity-60 group-hover:opacity-100" />
            </div>
            <span className="text-[14px] font-bold text-[#4A4A4A] group-hover:text-black">Live Casino</span>
          </div>
          <ChevronDown size="14" />
        </div>
      </div>

      {/* ── Footer Nav ── */}
      <div className="mt-6 flex flex-col gap-1 border-t border-gray-100 px-3 pt-4">
        <div className="flex items-center gap-3 py-2 text-[14px] font-bold text-[#4A4A4A] hover:text-[#1CD4FF] cursor-pointer group transition-colors">
          <span className="text-lg opacity-80 group-hover:opacity-100">🎁</span>
          <span>Promotions</span>
        </div>
        <div className="flex items-center gap-3 py-2 text-[14px] font-bold text-[#4A4A4A] hover:text-[#1CD4FF] cursor-pointer group transition-colors">
          <span className="text-lg opacity-80 group-hover:opacity-100">👥</span>
          <span>Refer a friend</span>
        </div>
      </div>

    </div>
  );
};

export default SportsSidebar;
