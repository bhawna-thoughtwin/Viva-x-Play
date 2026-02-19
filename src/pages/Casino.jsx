import { useState } from 'react';
import PromotionsSection from '../components/home/PromotionsSection';
import HeroBanner from '../components/home/HeroBanner';

import sportsIconPng  from '../assets/icons/sportsicon.png';
import casinoIconImg  from '../assets/icons/icon-casino2.svg';
import liveDealerIconImg from '../assets/icons/icon-live-dealer2.svg';

/* ── Filter tabs ── */
const tabs = [
  { label: 'All',         icon: null,             static: true  },
  { label: 'Sports',      icon: sportsIconPng,    static: true  },
  { label: 'Casino',      icon: casinoIconImg,    static: false },
  { label: 'Live Dealer', icon: liveDealerIconImg, static: false },
];

/* ── T&C sections ── */
const tcSections = [
  {
    heading: 'Eligibility',
    points: [
      'The 500% First Deposit Bonus is available only to newly registered players at TigerBet247 who are aged 18 years or older.',
      'This promotion is available from 22nd August 2025 and remains valid for 1 year unless otherwise terminated by TigerBet247.',
      'Players must make a first deposit of $20 or more. Subsequent deposits are not eligible.',
      'The maximum bonus amount is $10,000 and is credited only on the first deposit.',
    ],
  },
  {
    heading: 'Game Restrictions',
    points: [
      'This Casino Welcome Offer is valid only for casino games.',
      'Only wagers placed on the Casino page contribute toward the wagering requirements.',
      'Bets placed on Sportsbook or other products do not count and may result in the confiscation of all winnings.',
      'Players must adhere to these terms to qualify for the bonus and any associated winnings.',
    ],
  },
  {
    heading: 'Wagering Requirements',
    points: [
      'The bonus is subject to a 60x wagering requirement on the bonus amount before withdrawal.',
      'A maximum of $20 per bet will contribute toward the wagering requirement, regardless of the actual stake amount.',
      'The maximum conversion amount from the Welcome Bonus is $40,000.',
      'Not all games contribute to this promotion. Bonus-exempt games contribute 0% toward wagering requirements.',
    ],
  },
  {
    heading: 'Wagering Contributions by Game Type:',
    points: [
      'Slots – 100%',
      'Roulette – 68%',
      'Instant Games & Baccarat – 25%',
      'Live Casino, Table Games & Blackjack – 17%',
      'Progressive Jackpot Slots – 0%',
    ],
    note: 'The wagering requirement applies to the bonus amount only (subject to change).',
  },
  {
    heading: 'Bonus Usage and Restrictions',
    points: [
      'The deposited amount is played first, followed by the bonus amount.',
      'Players may forfeit the bonus at any time and receive the remaining balance in the real money wallet.',
      'Wagering requirements must be completed within 30 days from the date the bonus is credited.',
      'No withdrawals will be permitted until the full wagering requirement is met or the bonus is forfeited.',
      'Failure to meet the wagering requirement will result in the forfeiture of the bonus and any winnings derived from it.',
      'It is strictly prohibited to use the Sportsbook to hold real money funds while an active casino bonus is in play.',
      'The bonus will automatically forfeit once the bonus balance drops below $0.20.',
    ],
  },
  {
    heading: 'General Rules',
    points: [
      'TigerBet247 reserves the right to amend, suspend, or cancel the Welcome Offer at any time.',
      'Any violation of these terms may result in forfeiture of the bonus and associated winnings.',
      "TigerBet247's General Terms & Conditions apply to this promotion.",
    ],
  },
];

/* ════════════════════════════════════════════════════════ */
const Casino = ({ defaultTab = 'Casino' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="w-full flex flex-col gap-[32px] pb-10 box-border">

      {/* ── 1. Filter Tab Bar ── */}
      <div className="inline-flex self-start items-center gap-1 bg-white rounded-full p-1 shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => !tab.static && setActiveTab(tab.label)}
            className={`
              flex items-center gap-1.5 px-4 py-2 rounded-full border-0 text-[14px] font-[510] whitespace-nowrap cursor-pointer transition-all duration-200
              ${tab.static
                ? 'text-[#888] cursor-default'
                : activeTab === tab.label
                  ? 'bg-[#1CD4FF] text-[#0d0c22] font-semibold shadow-[0_1px_6px_rgba(28,212,255,0.35)]'
                  : 'bg-transparent text-[#0d0c22]'
              }
            `}
          >
            {tab.icon && (
              <img
                src={tab.icon}
                alt={tab.label}
                className={`w-4 h-4 object-contain ${activeTab === tab.label ? 'opacity-100' : 'opacity-70'}`}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── 2. Promotions Section ── */}
      <PromotionsSection />

      {/* ── 3. Hero + Content (conditional by tab) ── */}
      {activeTab === 'Casino' ? (
        <>
          {/* Hero wrapper */}
          <div className="bg-white rounded-xl px-4 md:px-6 pt-6 pb-0 flex flex-col gap-6 overflow-hidden">
            <div className="w-full flex flex-col gap-3">
              <h2 className="text-[28px] md:text-[42px] font-bold text-[#333] uppercase m-0 leading-tight md:whitespace-nowrap">
                Casino Welcome Offer
              </h2>
              <p className="text-[16px] md:text-[24px] font-[510] text-[#333] m-0">
                Get a 500% Bonus up to $10,000
              </p>
            </div>
            <HeroBanner />
          </div>

          {/* Content block */}
          <div className="bg-white rounded-xl p-4 md:p-[22px] flex flex-col">
            <h3 className="text-[20px] md:text-[25px] font-bold text-[#0d0c22] m-0 mb-2">
              Get a 500% Bonus up to $10,000
            </h3>
            <p className="text-[16px] md:text-[18px] font-semibold text-[#0d0c22] m-0 mb-2">
              What are you waiting for?
            </p>
            <p className="text-[13px] md:text-[14px] text-[#555] leading-[1.7] m-0">
              Kick things up a notch with a 500% deposit match up to $10,000 when you sign up as a new
              customer at TigerBet247. Sounds exciting, right?
            </p>

            <div className="h-px bg-[#f0f0f0] my-5" />

            <h3 className="text-[20px] md:text-[25px] font-bold text-[#0d0c22] m-0 mb-3">
              How to Claim Your Offer
            </h3>
            <ol className="m-0 pl-7 flex flex-col gap-2 list-decimal">
              {['Sign up for a new account at TigerBet247', 'Make a deposit of $20 to $2,000', 'Get a casino bonus matching 500% of your deposit amount', 'Play with up to $12,000'].map((item, i) => (
                <li key={i} className="text-[13px] md:text-[14px] text-[#555] leading-[1.6]">{item}</li>
              ))}
            </ol>

            <div className="h-px bg-[#f0f0f0] my-5" />

            <h3 className="text-[20px] md:text-[25px] font-bold text-[#0d0c22] m-0 mb-3">
              Terms and Conditions – 500% Deposit Bonus for New Customers
            </h3>

            {tcSections.map((sec) => (
              <div key={sec.heading} className="mt-4">
                <p className="text-[18px] md:text-[22px] font-bold text-[#0d0c22] m-0 mb-2">{sec.heading}</p>
                <ul className="m-0 pl-7 list-disc flex flex-col gap-1.5">
                  {sec.points.map((pt, i) => (
                    <li key={i} className="text-[13px] md:text-[13.5px] text-[#555] leading-[1.65]">{pt}</li>
                  ))}
                </ul>
                {sec.note && (
                  <p className="text-[12px] md:text-[13px] italic text-[#777] mt-2 m-0">{sec.note}</p>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Live Dealer hero */}
          <div className="bg-white rounded-xl px-4 md:px-6 pt-6 pb-0 flex flex-col gap-6 overflow-hidden">
            <div className="w-full flex flex-col gap-3">
              <h2 className="text-[28px] md:text-[42px] font-bold text-[#333] uppercase m-0 leading-tight">
                Live Casino Welcome Reward
              </h2>
              <p className="text-[14px] md:text-[24px] font-[510] text-[#333] m-0">
                Enter the world of live gaming with Tigerbet247's immersive Live Casino welcome reward.
              </p>
            </div>
            <HeroBanner />
          </div>

          {/* Live Dealer content */}
          <div className="bg-white rounded-xl p-4 md:p-[22px] flex flex-col">
            <h3 className="text-[20px] md:text-[25px] font-bold text-[#0d0c22] m-0 mb-2">
              Live Dealer Bonus
            </h3>
            <p className="text-[16px] md:text-[18px] font-semibold text-[#0d0c22] m-0 mb-2">
              What are you waiting for?
            </p>
            <ul className="m-0 pl-7 list-disc flex flex-col gap-1.5">
              <li className="text-[13px] md:text-[14px] text-[#555] leading-[1.65]">Extra bonus on your first Live Casino deposit.</li>
              <li className="text-[13px] md:text-[14px] text-[#555] leading-[1.65]">Use your bonus on popular games like Live Roulette, Blackjack, Baccarat, and Game Shows.</li>
            </ul>

            <div className="h-px bg-[#f0f0f0] my-5" />

            <h3 className="text-[20px] md:text-[25px] font-bold text-[#0d0c22] m-0 mb-3">How It Works</h3>
            <ol className="m-0 pl-7 list-decimal flex flex-col gap-2">
              {['Register a new account', 'Make a first deposit on Live Casino games', 'The Live Casino bonus is credited to your account', 'Play with real dealers in real time'].map((item, i) => (
                <li key={i} className="text-[13px] md:text-[14px] text-[#555] leading-[1.6]">{item}</li>
              ))}
            </ol>

            <div className="h-px bg-[#f0f0f0] my-5" />

            <h3 className="text-[20px] md:text-[25px] font-bold text-[#0d0c22] m-0 mb-3">Terms You Should Know</h3>
            <ul className="m-0 pl-7 list-disc flex flex-col gap-1.5">
              {[
                'Live Casino games contribute to wagering at their own rate',
                'Some games may offer higher contribution rates toward clearing the bonus',
                'Wagering requirements must be completed before cashing out',
                'Maximum bet limits apply when playing with bonus funds',
              ].map((item, i) => (
                <li key={i} className="text-[13px] md:text-[14px] text-[#555] leading-[1.65]">{item}</li>
              ))}
            </ul>
          </div>
        </>
      )}

    </div>
  );
};

export default Casino;
