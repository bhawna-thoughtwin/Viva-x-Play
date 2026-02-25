import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import SearchBar from '../common/SearchBar';
import { useNavigate, useLocation } from 'react-router-dom';
import sportsIcon from '../../assets/icons/sportsicon.png';
import liveSportsIcon from '../../assets/icons/Livesports.png';
import casinoIcon from '../../assets/icons/icon-casino2.svg';
import liveDealerIcon from '../../assets/icons/icon-live-dealer2.svg';
import promotionsIcon from '../../assets/icons/icon-promotions2.svg';
import referIcon from '../../assets/icons/icon-refer.svg';
import bonusIcon from '../../assets/icons/icon-bonus.svg';
import supportIcon from '../../assets/icons/icon-support.svg';
import aboutIcon from '../../assets/icons/icon-about.svg';
import { chatIcon, faqIcon, envelopeIcon, profileIcon, slotsIcon, rouletteIcon, blackjackIcon, pokerIcon, crashIcon, baccaratIcon, jackpotIcon, newReleaseIcon, casinoDiceIcon, monitorIcon } from '../../assets/icons';

const casinoLinks = [
  { label: 'Slots', icon: slotsIcon },
  { label: 'Roulette', icon: rouletteIcon },
  { label: 'Blackjack', icon: blackjackIcon },
  { label: 'Poker', icon: pokerIcon },
  { label: 'Crash', icon: crashIcon },
  { label: 'Baccarat', icon: baccaratIcon },
  { label: 'Jackpot', icon: jackpotIcon },
  { label: 'New Release', icon: newReleaseIcon },
];

const liveCasinoLinks = [
  { label: 'Roulette', icon: rouletteIcon, path: '/live-casino?filter=roulette' },
  { label: 'Blackjack', icon: blackjackIcon, path: '/live-casino?filter=blackjack' },
  { label: 'Poker', icon: pokerIcon, path: '/live-casino?filter=poker' },
  { label: 'Baccarat & Dice', icon: casinoDiceIcon, path: '/live-casino?filter=baccarat' },
  { label: 'Game Shows', icon: monitorIcon, path: '/live-casino?filter=gameshows' },
];

const aboutLinks = [
  { label: 'AML Policy', path: '/about/aml-policy' },
  { label: 'Cookie Policy', path: '/about/cookie-policy' },
  { label: 'Dispute Policy', path: '/about/dispute-policy' },
  { label: 'KYC Policy', path: '/about/kyc-policy' },
  { label: 'Privacy Policy', path: '/about/privacy-policy' },
  { label: 'Responsible Gaming', path: '/about/responsible-gaming' },
  { label: 'Self Exclusion Policy', path: '/about/self-exclusion-policy' },
  { label: 'Terms & Conditions', path: '/about/terms-and-conditions' },
];
const supportLinks = [
  { label: 'FAQ', path: '/support/faq', icon: faqIcon },
  { label: 'Contact', path: '/support/contact', icon: envelopeIcon, disabled: true },
  { label: 'Chat', path: '/support/chat', icon: chatIcon, disabled: true },
];

/* Groups with dividers between them — matches Figma layout */
const menuGroups = [
  [
    { label: 'Sports', icon: sportsIcon, path: '/sports' },
    { label: 'Casino', icon: casinoIcon, expandable: true, path: '/casino', children: casinoLinks },
    { label: 'Live Casino', icon: liveDealerIcon, expandable: true, path: '/live-casino', children: liveCasinoLinks },
  ],
  [
     { label: 'Promotions', icon: promotionsIcon, path: '/promotion' },
    { label: 'Refer a friend', icon: referIcon },
    { label: 'Welcome Bonuses', icon: bonusIcon },
  
  ],
  [
    { label: 'Support', icon: supportIcon, expandable: true, children: supportLinks },
    { label: 'About Us', icon: aboutIcon, expandable: true, children: aboutLinks },
    { label: 'Profile', icon: profileIcon, path: '/profile', requiresAuth: true },
  ],

];

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M6 9l6 6 6-6" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ChevronUp = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M18 15l-6-6-6 6" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LiveBadge = () => (
  <span className="inline-flex items-center gap-1 bg-[#ff3b30] text-white text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wide shrink-0">
    <span className="w-[5px] h-[5px] rounded-full bg-white shrink-0" />
    LIVE
  </span>
);

const Sidebar = () => {
  const { sidebarOpen, toggleSidebar, user } = useApp();
  const isLoggedIn = !!user;
  const [expanded, setExpanded] = useState(() => {
    const path = window.location.pathname;
    if (path === '/casino') return { Casino: true };
    if (path === '/live-casino') return { 'Live Casino': true };
    return {};
  });
  const [activeSubItem, setActiveSubItem] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

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
     left-0 
     pt-[62px]
    w-[300px]
    h-full
    md:relative
    fixed
    md:z-[0]
    z-[99]
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

              {group.filter(item => !item.requiresAuth || isLoggedIn).map((item) => (
                <div key={item.label}>

                  {/* ── Expandable (Casino / Support / About Us) ── */}
                  {item.expandable ? (
                    (() => {
                      const isActive = item.path && location.pathname === item.path;
                      return (
                        <button
                          className={`flex items-center gap-3 w-full border-none outline-none cursor-pointer px-2 py-[11px] text-[15px] font-medium text-left rounded-lg transition-all ${
                            isActive ? 'text-white font-semibold' : 'bg-transparent text-[#0d0c22] hover:bg-[#f7f7f7]'
                          }`}
                          style={isActive ? { background: 'linear-gradient(90deg, #117F99 0%, #1CD4FF 100%)' } : {}}
                          onClick={() => {
                            setExpanded(prev => ({ ...prev, [item.label]: !prev[item.label] }));
                            if (item.path) handleNavigate(item.path);
                          }}
                        >
                          <img
                            src={item.icon}
                            alt={item.label}
                            className="w-[20px] h-[20px] object-contain shrink-0"
                            style={isActive ? { filter: 'brightness(0) invert(1)' } : {}}
                          />
                          <span className={`flex-1 text-[15px] ${isActive ? 'text-white' : 'text-[#0d0c22]'}`}>
                            {item.label}
                          </span>
                          <span className="flex items-center shrink-0 mr-1">
                            {expanded[item.label] ? <ChevronUp /> : <ChevronDown />}
                          </span>
                        </button>
                      );
                    })()

                    /* ── Navigable item ── */
                  ) : item.path ? (
                    (() => {
                      const isActive = location.pathname === item.path;
                      return (
                        <button
                          className={`flex items-center gap-3 w-full border-none outline-none cursor-pointer px-2 py-[11px] text-[15px] font-medium text-left rounded-lg transition-all ${
                            isActive ? 'text-white font-semibold' : 'bg-transparent text-[#0D0C22] hover:bg-[#F7F7F7]'
                          }`}
                          style={isActive ? { background: 'linear-gradient(90deg, #117F99 0%, #1CD4FF 100%)' } : {}}
                          onClick={() => {
                            setActiveSubItem(item.label);
                            handleNavigate(item.path);
                          }}
                        >
                          <img
                            src={item.icon}
                            alt={item.label}
                            className="w-[20px] h-[20px] object-contain shrink-0"
                            style={isActive ? { filter: 'brightness(0) invert(1)' } : {}}
                          />
                          <span className={`flex-1 text-[15px] ${isActive ? 'text-white' : 'text-[#0D0C22]'}`}>
                            {item.label}
                          </span>
                          <span className="flex items-center shrink-0 mr-1"><ChevronDown /></span>
                        </button>
                      );
                    })()

                    /* ── Static item ── */
                  ) : (
                    <div className="flex items-center gap-3 w-full px-2 py-[11px] text-[15px] font-medium text-[#0d0c22] rounded-lg">
                      <img src={item.icon} alt={item.label} className="w-[20px] h-[20px] object-contain shrink-0" />
                      <span className="flex-1 text-[#0d0c22] text-[15px]">{item.label}</span>
                      <span className="flex items-center shrink-0 mr-1"><ChevronDown /></span>

                    </div>
                  )}

                  {/* ── Sub-links ── */}
                  {item.children && expanded[item.label] && (
                    <div className="flex flex-col py-1 gap-[2px]">
                      {item.children.map((child) => {
                        const isChildActive = child.path
                          ? `${location.pathname}${location.search}` === child.path ||
                            activeSubItem === child.label
                          : activeSubItem === child.label;
                        return (
                          <button
                            key={child.label}
                            disabled={child.disabled}
                            className={`border-none outline-none cursor-pointer text-[14px] font-medium text-left rounded-lg transition-all flex items-center gap-2.5 w-full
                              ${child.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                              ${isChildActive
                                ? 'px-3 py-[10px] text-white font-semibold'
                                : 'pl-7 pr-2 py-[9px] text-[#0d0c22] hover:bg-[#f7f7f7]'
                              }`}
                            style={isChildActive
                              ? { background: 'linear-gradient(90deg, #117F99 0%, #1CD4FF 100%)' }
                              : {}
                            }
                            onClick={() => {
                              if (!child.disabled) {
                                setActiveSubItem(child.label);
                                handleNavigate(child.path);
                              }
                            }}
                          >
                            {child.icon && (
                              <img
                                src={child.icon}
                                alt={child.label}
                                className="w-[16px] h-[16px] object-contain shrink-0"
                                style={isChildActive ? { filter: 'brightness(0) invert(1)' } : { opacity: 0.7 }}
                              />
                            )}
                            <span className="flex-1">{child.label}</span>
                          </button>
                        );
                      })}
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
