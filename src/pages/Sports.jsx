import { useState } from 'react';
import SportsSidebar from '../components/layout/SportsSidebar';

const TIME_FILTERS = ['All', 'Today', '3h', '6h', '24h', 'Tomorrow'];

const Sports = () => {
  const [activeSport, setActiveSport] = useState('Football');
  const [activeTime, setActiveTime] = useState('All');

  return (
    <div className="flex min-h-screen bg-[#ECECEC] pt-[14px]">

      {/* ── Sports Sidebar ── */}
      <div className="w-[300px] shrink-0 overflow-y-auto max-h-[calc(100vh-76px)] sticky top-[14px]">
        <SportsSidebar
          activeSport={activeSport}
          onSelectSport={setActiveSport}
        />
      </div>

      {/* ── Main content ── */}
      <div className="flex-1 flex flex-col gap-[16px] px-[16px] pb-[24px]">

        {/* Time filter bar */}
        <div className="bg-white border border-[#D2D2D2] rounded-[100px] px-[4px] py-[4px] flex items-center gap-[1px] w-fit">
          {TIME_FILTERS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTime(tab)}
              className={`
                px-[8px] h-[26px] rounded-[100px] text-[12px] font-[590] leading-[14px]
                border-none outline-none cursor-pointer transition-colors
                ${activeTime === tab
                  ? 'bg-[#1CD4FF] text-white'
                  : 'bg-transparent text-[#4A4A4A] hover:bg-[#f0f0f0]'}
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeSport ? (
          <div className="bg-white rounded-[12px] p-[24px] flex flex-col gap-[12px]">
            <h2 className="text-[18px] font-[700] text-[#0D0C22]">
              {activeSport}
            </h2>
            <p className="text-[14px] text-[#6B7280]">
              Showing{' '}
              <span className="font-semibold text-[#1CD4FF]">{activeTime}</span>{' '}
              events for <span className="font-semibold">{activeSport}</span>.
            </p>
            <div className="flex flex-col gap-[8px] mt-[8px]">
              {[1, 2, 3].map(i => (
                <div
                  key={i}
                  className="flex items-center justify-between border border-[#ECECEC] rounded-[8px] px-[16px] py-[12px] hover:bg-[#f9fffe] cursor-pointer transition-colors"
                >
                  <span className="text-[14px] font-[510] text-[#333]">
                    Team A {i} vs Team B {i}
                  </span>
                  <span className="text-[12px] text-[#6B7280]">20:00</span>
                  <div className="flex gap-[8px]">
                    {['1', 'X', '2'].map(odd => (
                      <button
                        key={odd}
                        className="w-[48px] h-[32px] rounded-[6px] bg-[#F3F4F6] text-[13px] font-[600] text-[#333] hover:bg-[#1CD4FF] hover:text-white transition-colors border-none cursor-pointer"
                      >
                        {odd}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-[12px] p-[32px] text-center text-[14px] text-[#6B7280]">
            Select a sport from the left to view events.
          </div>
        )}
      </div>
    </div>
  );
};

export default Sports;
