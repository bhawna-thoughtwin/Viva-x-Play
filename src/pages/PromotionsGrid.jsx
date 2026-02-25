import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import promotiongrid1 from '../assets/images/promotiongrid1.png';
import promotiongrid2 from '../assets/images/promotiongrid2.png';
import promotiongrid3 from '../assets/images/promotiongrid3.png';

import { selectAllIcon, sportsIconPng, casinoIcon, liveDealerIconAlt, promotionsIconAlt } from '../assets/icons';

/* ── Filter tabs ── */
const tabs = [
  { label: 'All',         icon: selectAllIcon },
  { label: 'Sports',      icon: sportsIconPng },
  { label: 'Casino',      icon: casinoIcon },
  { label: 'Live Casino', icon: liveDealerIconAlt },
];

/* ── Promotions data ── */
const promotions = [
    { id: 'casino-welcome-offer', title: 'Casino Welcome Offer', desc: 'Deposit $50 Today and Receive $50 Extra on Us', category: 'Sports', image: promotiongrid1 },
    { id: 'free-spin-bonus-1', title: 'Free Spin Bonus', desc: 'Deposit $50 Today and Receive $50 Extra on Us', category: 'Sports', image: promotiongrid2 },
    { id: 'bet-and-win-1', title: 'Bet & Win', desc: 'Deposit $50 Today and Receive $50 Extra on Us', category: 'Sports', image: promotiongrid3 },
    { id: 'free-spin-bonus-2', title: 'Free Spin Bonus', desc: 'Deposit $50 Today and Receive $50 Extra on Us', category: 'Sports', image: promotiongrid1 },
    { id: 'double-deposit-1', title: 'Double Deposit', desc: 'Deposit $50 Today and Receive $50 Extra on Us', category: 'Sports', image: promotiongrid2 },
    { id: 'bet-and-win-2', title: 'Bet & Win', desc: 'Deposit $50 Today and Receive $50 Extra on Us', category: 'Sports', image: promotiongrid3 },
    { id: 'free-spin-bonus-3', title: 'Free Spin Bonus', desc: 'Deposit $50 Today and Receive $50 Extra on Us', category: 'Sports', image: promotiongrid1 },
    { id: 'double-deposit-2', title: 'Double Deposit', desc: 'Deposit $50 Today and Receive $60 Extra on Us', category: 'Sports', image: promotiongrid2 },
];

/* ── Badge config: className + optional inline style ── */
const badgeConfig = {
    Casino: {
        className: 'bg-[#1E88E5] text-white',
        style: {},
    },
    Sports: {
        className: 'text-[#3A5200] border border-[#B8CC4A]',
        style: { background: 'linear-gradient(180deg, #E3FC7B 0%, #C2D95A 100%)' },
    },
    'Live Dealer': {
        className: 'bg-[#FB8C00] text-white',
        style: {},
    },
};

/* ════════════════════════════════════════════════════════ */
const PromotionsGrid = () => {
    const [activeTab, setActiveTab] = useState('All');
    const navigate = useNavigate();

    const filtered =
        activeTab === 'All'
            ? promotions
            : promotions.filter((p) => p.category === activeTab);

    return (
        /* outer: add px-3 on mobile so cards don't touch screen edges */
        <div className="w-full flex flex-col gap-4 md:gap-5 pb-10 px-3 md:pl-0 md:pr-4 mt-4 md:mt-5">
<nav className="hidden md:flex items-center gap-1.5 md:gap-2 text-[12px] md:text-[13px] flex-wrap">
                <button
                    onClick={() => navigate('/')}
                    className="bg-transparent border-none cursor-pointer text-[#666] hover:text-[#0D0C22] p-0 transition-colors"
                >
                    Home
                </button>
                <span className="text-[#aaa]">›</span>
                <button
                    onClick={() => navigate('/promotion')}
                    className="bg-transparent border-none cursor-pointer text-[#666] hover:text-[#0D0C22] p-0 transition-colors"
                >
                    Promotions
                </button>
                
            </nav>
            {/* ── Promotions header ── */}
            <div
                className="bg-white px-4 md:px-6 py-3 md:py-[14px] flex items-center gap-3"
                style={{ borderRadius: '12px' }}
            >
                <img src={promotionsIconAlt} alt="" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                <h1 className="text-[17px] md:text-[20px] font-bold text-[#0D0C22] m-0">Promotions</h1>
            </div>

            {/* ── Filter tabs + card grid ── */}
            <div
                className="bg-white p-3 md:p-6 flex flex-col gap-4 md:gap-6"
                style={{ borderRadius: '12px' }}
            >

                {/* ── Tabs — horizontally scrollable on mobile ── */}
                <div className="overflow-x-auto -mx-3 px-3 md:mx-0 md:px-0 pb-1 md:pb-0">

                    {/* Rounded container */}
                    <div className="inline-flex items-center gap-1 bg-[#f5f5f7] rounded-[10px] p-1 min-w-max">

                      {tabs.map(({ label, icon }) => {
                        const isActive = activeTab === label;
                        return (
                          <button
                            key={label}
                            onClick={() => setActiveTab(label)}
                            className={`
                              flex items-center gap-2
                              px-4 py-2
                              rounded-[8px]
                              border-0
                              text-[14px] font-semibold
                              whitespace-nowrap cursor-pointer
                              transition-all duration-200 shrink-0
                              ${isActive
                                ? 'bg-[#0D0C22] text-white shadow-md'
                                : 'bg-transparent text-[#0D0C22] hover:bg-white/70'
                              }
                            `}
                          >
                            {icon && (
                              <img
                                src={icon}
                                alt={label}
                                className="w-[16px] h-[16px] object-contain shrink-0"
                                style={isActive ? { filter: 'brightness(0) invert(1)' } : {}}
                              />
                            )}
                            {label}
                          </button>
                        );
                      })}

                    </div>

                </div>

                {/* ── Card grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {filtered.map((promo) => (
                        <div
                            key={promo.id}
                            className="flex flex-col w-full bg-white overflow-hidden border border-[#EBEBEB] shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
                            style={{ borderRadius: '12px', height: 'clamp(300px, 45vw, 394px)' }}
                        >
                            {/* ── Image ── */}
                            <div className="relative flex-1 overflow-hidden">
                                <img
                                    src={promo.image}
                                    alt={promo.title}
                                    className="absolute inset-0 w-full h-full object-cover object-top"
                                />
                                {/* Category badge */}
                                <span
                                    className={`absolute font-bold text-[11px] leading-none flex items-center justify-center ${badgeConfig[promo.category].className}`}
                                    style={{
                                        top: '12px',
                                        right: '12px',
                                        height: '22px',
                                        borderRadius: '100px',
                                        padding: '4px 10px',
                                        ...badgeConfig[promo.category].style,
                                    }}
                                >
                                    {promo.category}
                                </span>
                            </div>

                            {/* ── Text content ── */}
                            <div className="shrink-0 px-3 md:px-[18px] pt-3 md:pt-[14px] pb-3 md:pb-[14px] flex flex-col gap-2 md:gap-[10px]">

                                {/* Title + sub-heading */}
                                <div className="flex flex-col gap-1 md:gap-[10px]">
                                    <h3 className="text-[14px] md:text-[16px] font-bold text-[#0D0C22] m-0 leading-snug">
                                        {promo.title}
                                    </h3>
                                    <p
                                        className="text-[#666] m-0"
                                        style={{
                                            fontSize: 'clamp(12px, 2vw, 16px)',
                                            fontWeight: 510,
                                            lineHeight: '1.45',
                                        }}
                                    >
                                        {promo.desc}
                                    </p>
                                </div>

                                {/* Button */}
                                <button
                                    onClick={() => navigate('/promotion/detail')}
                                    style={{
                                        width: '108px',
                                        height: '31px',
                                        // borderRadius: '28.34px',
                                        padding: '8px 16px',
                                    }}
                                    className="flex items-center justify-center bg-white hover:bg-[#f0fdff] text-[#1CD4FF] text-[12px] md:text-[13px] font-semibold border border-[#1CD4FF] cursor-pointer transition-colors shrink-0 whitespace-nowrap"
                                >
                                    Deposit Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default PromotionsGrid;