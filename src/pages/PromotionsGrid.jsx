import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import promo1 from '../assets/images/promo1.png';
import promo2 from '../assets/images/promo2.png';
import promo3 from '../assets/images/promo3.png';

import sportsIconPng from '../assets/icons/sportsicon.png';
import casinoIconImg from '../assets/icons/icon-casino2.svg';
import liveDealerIconImg from '../assets/icons/icon-live-dealer2.svg';
import promotionsIcon from '../assets/icons/icon-promotions2.svg';

/* ── Filter tabs ── */
const tabs = [
    { label: 'All' },
    { label: 'Sports', icon: sportsIconPng },
    { label: 'Casino', icon: casinoIconImg },
    { label: 'Live Dealer', icon: liveDealerIconImg },
];

/* ── Promotions data ── */
const promotions = [
    { id: 'casino-welcome-offer', title: 'Casino Welcome Offer', desc: 'Deposit $50 Today and Receive $50 Extra on Us', category: 'Sports', image: promo1 },
    { id: 'free-spin-bonus-1', title: 'Free Spin Bonus', desc: 'Deposit $50 Today and Receive $50 Extra on Us', category: 'Sports', image: promo2 },
    { id: 'bet-and-win-1', title: 'Bet & Win', desc: 'Deposit $50 Today and Receive $50 Extra on Us', category: 'Sports', image: promo3 },
    { id: 'free-spin-bonus-2', title: 'Free Spin Bonus', desc: 'Deposit $50 Today and Receive $50 Extra on Us', category: 'Sports', image: promo1 },
    { id: 'double-deposit-1', title: 'Double Deposit', desc: 'Deposit $50 Today and Receive $50 Extra on Us', category: 'Sports', image: promo2 },
    { id: 'bet-and-win-2', title: 'Bet & Win', desc: 'Deposit $50 Today and Receive $50 Extra on Us', category: 'Sports', image: promo3 },
    { id: 'free-spin-bonus-3', title: 'Free Spin Bonus', desc: 'Deposit $50 Today and Receive $50 Extra on Us', category: 'Sports', image: promo1 },
    { id: 'double-deposit-2', title: 'Double Deposit', desc: 'Deposit $50 Today and Receive $60 Extra on Us', category: 'Sports', image: promo2 },
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
        <div className="w-full flex flex-col gap-4 md:gap-5 pb-10 px-3 md:px-0 mt-4 md:mt-5">

            {/* ── Promotions header ── */}
            <div
                className="bg-white px-4 md:px-6 py-3 md:py-[14px] flex items-center gap-3"
                style={{ borderRadius: '12px' }}
            >
                <img src={promotionsIcon} alt="" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                <h1 className="text-[17px] md:text-[20px] font-bold text-[#0D0C22] m-0">Promotions</h1>
            </div>

            {/* ── Filter tabs + card grid ── */}
            <div
                className="bg-white p-3 md:p-6 flex flex-col gap-4 md:gap-6"
                style={{ borderRadius: '12px' }}
            >

                {/* ── Tabs — horizontally scrollable on mobile ── */}
                <div className="overflow-x-auto -mx-3 px-3 md:mx-0 md:px-0 pb-1 md:pb-0">
                    <div className="inline-flex items-center gap-1 bg-white rounded-full p-1 shadow-[0_1px_4px_rgba(0,0,0,0.08)] min-w-max">
                        {tabs.map((tab) => (
                            <button
                                key={tab.label}
                                onClick={() => setActiveTab(tab.label)}
                                className={`flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 rounded-full border-0 text-[13px] md:text-[14px] font-[510] whitespace-nowrap cursor-pointer transition-all duration-200 ${activeTab === tab.label
                                        ? tab.label === 'All'
                                            ? 'bg-[#D6D6D6] text-[#0D0C22] font-semibold shadow-[0_1px_4px_rgba(0,0,0,0.12)]'
                                            : 'bg-[#1CD4FF] text-[#0D0C22] font-semibold shadow-[0_1px_6px_rgba(28,212,255,0.35)]'
                                        : 'bg-transparent text-[#0D0C22]'}`}
                            >
                                {tab.icon && (
                                    <img
                                        src={tab.icon}
                                        alt={tab.label}
                                        className={`w-3.5 h-3.5 md:w-4 md:h-4 object-contain ${activeTab === tab.label ? 'opacity-100' : 'opacity-70'}`}
                                    />
                                )}
                                {tab.label}
                            </button>
                        ))}
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
                                        borderRadius: '28.34px',
                                        padding: '8px 16px',
                                        gap: '8px',
                                    }}
                                    className="flex items-center justify-center bg-[#1CD4FF] hover:bg-[#00C4EF] text-white text-[12px] md:text-[13px] font-semibold border-0 cursor-pointer transition-colors shrink-0 whitespace-nowrap"
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