import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import SearchBar from '../common/SearchBar';

import sportsIcon     from '../../assets/icons/sportsicon.png';
import liveSportsIcon from '../../assets/icons/Livesports.png';
import casinoIcon     from '../../assets/icons/icon-casino2.svg';
import liveDealerIcon from '../../assets/icons/icon-live-dealer2.svg';
import promotionsIcon from '../../assets/icons/icon-promotions2.svg';
import referIcon      from '../../assets/icons/icon-refer.svg';
import bonusIcon      from '../../assets/icons/icon-bonus.svg';
import supportIcon    from '../../assets/icons/icon-support.svg';
import aboutIcon      from '../../assets/icons/icon-about.svg';

const aboutLinks = [
  { label: 'AML Policy',            path: '/about/aml-policy' },
  { label: 'Cookie Policy',         path: '/about/cookie-policy' },
  { label: 'Dispute Policy',        path: '/about/dispute-policy' },
  { label: 'KYC Policy',            path: '/about/kyc-policy' },
  { label: 'Privacy Policy',        path: '/about/privacy-policy' },
  { label: 'Responsible Gaming',    path: '/about/responsible-gaming' },
  { label: 'Self Exclusion Policy', path: '/about/self-exclusion-policy' },
  { label: 'Terms & Conditions',    path: '/about/terms-and-conditions' },
];

/* Groups with dividers between them — matches Figma layout */
const menuGroups = [
  [
    { label: 'Sports',      icon: sportsIcon },
    { label: 'Live Sports', icon: liveSportsIcon, isLive: true },
  ],
  [
    { label: 'Casino',      icon: casinoIcon,     path: '/casino' },
    { label: 'Live Dealer', icon: liveDealerIcon },
  ],
  [
    { label: 'Promotions',      icon: promotionsIcon },
    { label: 'Refer a friend',  icon: referIcon },
    { label: 'Welcome Bonuses', icon: bonusIcon },
  ],
  [
    { label: 'Support',  icon: supportIcon },
    { label: 'About Us', icon: aboutIcon, expandable: true, children: aboutLinks },
  ],
];

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M6 9l6 6 6-6" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ChevronUp = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M18 15l-6-6-6 6" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LiveBadge = () => (
  <span className="inline-flex items-center gap-1 bg-[#ff3b30] text-white text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wide shrink-0">
    <span className="w-[5px] h-[5px] rounded-full bg-white shrink-0" />
    LIVE
  </span>
);

const Sidebar = () => {
  const { sidebarOpen, toggleSidebar } = useApp();
  const [expanded, setExpanded] = useState({});
  const [activeSubItem, setActiveSubItem] = useState(null);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    if (window.innerWidth < 768) toggleSidebar();
  };

  return (
    <>
      {/* ── Backdrop: mobile only ── */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[1099] md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* ── Sidebar panel ── */}
      <aside
        className={`
          fixed left-0 top-[62px]
          w-[300px]
          h-[calc(100vh-62px)]
          bg-white rounded-br-[12px]
          overflow-y-auto overflow-x-hidden
          flex flex-col
          transition-transform duration-300 ease-in-out
          z-[1100] md:z-[900]
          shadow-[4px_0_20px_rgba(0,0,0,0.10)]
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >

        {/* ── Inner content container: width 276, left 12px, gap 16px ── */}
        <div className="flex flex-col gap-[16px] px-[12px] pt-[13px] pb-6 w-full">

          {/* Search bar */}
          <SearchBar />

          {/* Menu groups with dividers */}
          {menuGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="flex flex-col">

              {/* Divider above each group except first */}
              {groupIndex > 0 && (
                <div className="h-px bg-[#f0f0f0] mb-[16px]" />
              )}

              {group.map((item) => (
                <div key={item.label}>

                  {/* ── Expandable (About Us) ── */}
                  {item.expandable ? (
                    <button
                      className="flex items-center gap-3 w-full bg-transparent border-none outline-none cursor-pointer px-2 py-[11px] text-[15px] font-medium text-[#0d0c22] text-left rounded-lg hover:bg-[#f7f7f7] transition-colors"
                      onClick={() => setExpanded(prev => ({ ...prev, [item.label]: !prev[item.label] }))}
                    >
                      <img src={item.icon} alt={item.label} className="w-[20px] h-[20px] object-contain shrink-0" />
                      <span className="flex-1 text-[#0d0c22] text-[15px]">{item.label}</span>
                      <span className="flex items-center shrink-0 mr-1">
                        {expanded[item.label] ? <ChevronUp /> : <ChevronDown />}
                      </span>
                    </button>

                  /* ── Navigable item ── */
                  ) : item.path ? (
                    <button
                      className="flex items-center gap-3 w-full bg-transparent border-none outline-none cursor-pointer px-2 py-[11px] text-[15px] font-medium text-[#0d0c22] text-left rounded-lg hover:bg-[#f7f7f7] transition-colors"
                      onClick={() => handleNavigate(item.path)}
                    >
                      <img src={item.icon} alt={item.label} className="w-[20px] h-[20px] object-contain shrink-0" />
                      <span className="flex-1 text-[#0d0c22] text-[15px]">{item.label}</span>
                      <span className="flex items-center shrink-0 mr-1"><ChevronDown /></span>
                    </button>

                  /* ── Static item ── */
                  ) : (
                    <div className="flex items-center gap-3 w-full px-2 py-[11px] text-[15px] font-medium text-[#0d0c22] rounded-lg">
                      <img src={item.icon} alt={item.label} className="w-[20px] h-[20px] object-contain shrink-0" />
                      <span className="flex-1 text-[#0d0c22] text-[15px]">{item.label}</span>
                     <span className="flex items-center shrink-0 mr-1"><ChevronDown /></span>

                    </div>
                  )}

                  {/* ── About Us sub-links ── */}
                  {item.children && expanded[item.label] && (
                    <div className="flex flex-col pl-[44px] pb-1 pt-1">
                      {item.children.map((child) => (
                        <button
                          key={child.label}
                          className={`border-none outline-none cursor-pointer text-[13px] text-left py-[7px] px-[10px] rounded-md leading-snug transition-all ${
                            activeSubItem === child.label
                              ? 'bg-[#1cd4ff] text-white font-semibold'
                              : 'bg-transparent text-[#666] font-normal hover:text-[#0d0c22]'
                          }`}
                          onClick={() => {
                            setActiveSubItem(child.label);
                            handleNavigate(child.path);
                          }}
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}

                </div>
              ))}
            </div>
          ))}

        </div>
      </aside>
    </>
  );
};

export default Sidebar;
