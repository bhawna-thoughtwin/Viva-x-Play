import { useNavigate } from 'react-router-dom';

import freespinbannerimg from '../assets/images/freespinbannerimg.png';

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
const Promotion = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full flex flex-col gap-4 md:gap-[32px] pb-10 px-3 md:pl-0 md:pr-4  box-border mt-4 md:mt-5">

            {/* ── Breadcrumb ── */}
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
                <span className="text-[#aaa]">›</span>
                <span className="text-[#0D0C22] font-medium">Free Spin Bonus</span>
            </nav>

            {/* ── Hero + title ── */}
            <div className="bg-white rounded-xl px-3 md:px-6 pt-4 md:pt-6 pb-0 flex flex-col gap-2 md:gap-6 overflow-hidden">
                <div className="w-full flex flex-col gap-2 md:gap-3">
                    <h2 className="text-[22px] md:text-[42px] font-bold text-[#333] uppercase m-0 leading-tight">
                       Get Up to 1,000 FREE Spins
                    </h2>
                    <p className="text-[14px] md:text-[24px] font-[510] text-[#333] m-0">
                        Deposit today and start spinning your way to big wins instantly.
                    </p>
                </div>
                <div className="-mx-3 md:-mx-6">
                    <img
                        src={freespinbannerimg}
                        alt="Casino Welcome Offer Banner"
                        className="w-full block object-cover"
                        style={{ aspectRatio: '1122 / 604' }}
                    />
                </div>
            </div>

            {/* ── Content ── */}
            {/* <div className="bg-white rounded-xl p-3 md:p-[22px] flex flex-col">

                <h3 className="text-[17px] md:text-[25px] font-bold text-[#0D0C22] m-0 mb-1.5 md:mb-2">
                    Get a 500% Bonus up to $10,000
                </h3>
                <p className="text-[14px] md:text-[18px] font-semibold text-[#0D0C22] m-0 mb-1.5 md:mb-2">
                    What are you waiting for?
                </p>
                <p className="text-[12px] md:text-[14px] text-[#555] leading-[1.7] m-0">
                    Kick things up a notch with a 500% deposit match up to $10,000 when you sign up as a new
                    customer at TigerBet247. Sounds exciting, right?
                </p>

                <div className="h-px bg-[#F0F0F0] my-4 md:my-5" />

                <h3 className="text-[17px] md:text-[25px] font-bold text-[#0D0C22] m-0 mb-2 md:mb-3">
                    How to Claim Your Offer
                </h3>
                <ol className="m-0 pl-5 md:pl-7 flex flex-col gap-1.5 md:gap-2 list-decimal">
                    {[
                        'Sign up for a new account at TigerBet247',
                        'Make a deposit of $20 to $2,000',
                        'Get a casino bonus matching 500% of your deposit amount',
                        'Play with up to $12,000',
                    ].map((item, i) => (
                        <li key={i} className="text-[12px] md:text-[14px] text-[#555] leading-[1.6]">{item}</li>
                    ))}
                </ol>

                <div className="h-px bg-[#F0F0F0] my-4 md:my-5" />

                <h3 className="text-[17px] md:text-[25px] font-bold text-[#0D0C22] m-0 mb-2 md:mb-3">
                    Terms and Conditions – 500% Deposit Bonus for New Customers
                </h3>

                {tcSections.map((sec) => (
                    <div key={sec.heading} className="mt-3 md:mt-4">
                        <p className="text-[15px] md:text-[22px] font-bold text-[#0D0C22] m-0 mb-1.5 md:mb-2">
                            {sec.heading}
                        </p>
                        <ul className="m-0 pl-5 md:pl-7 list-disc flex flex-col gap-1 md:gap-1.5">
                            {sec.points.map((pt, i) => (
                                <li key={i} className="text-[12px] md:text-[13.5px] text-[#555] leading-[1.65]">{pt}</li>
                            ))}
                        </ul>
                        {sec.note && (
                            <p className="text-[11px] md:text-[13px] italic text-[#777] mt-1.5 md:mt-2 m-0">{sec.note}</p>
                        )}
                    </div>
                ))}

            </div> */}
            <div className="bg-white rounded-xl p-3 md:p-[22px] flex flex-col gap-8">

            {/* Intro */}
            <section className="flex flex-col gap-3">
                <h1 className="text-[22px] md:text-[32px] font-[590] text-[#333333] leading-[28px]">
                    Spin Into Action – 1,000 Free Spins Welcome Offer!
                </h1>
                <p className="text-[16px] md:text-[18px] font-[590] text-[#333333]">
                    Ready to take your first spin with Monkey Tilt?
                </p>
                <p className="text-[14px] md:text-[16px] text-[#333333] leading-[24px]">
                    New players can kick things off with up to 1,000 Free Spins when signing up and making their first deposit. More spins, more chances, more excitement!
                </p>
            </section>

            <hr className="border-[#DFE8EB]" />

            {/* How to Claim */}
            <section className="flex flex-col gap-3">
                <h2 className="text-[18px] md:text-[24px] font-[590] text-[#333333]">
                    How to Claim Your Free Spins
                </h2>
                <ul className="list-disc pl-5 flex flex-col gap-2 text-[14px] md:text-[16px] text-[#333333] leading-[24px]">
                    <li>Register a new account at Monkey Tilt</li>
                    <li>Deposit $20 – $2,000</li>
                    <li>Receive Free Spins based on your deposit amount</li>
                    <li>Start spinning and unlock real winnings!</li>
                </ul>
            </section>

            <hr className="border-[#DFE8EB]" />

            {/* Free Spins Structure */}
            <section className="flex flex-col gap-3">
                <h2 className="text-[18px] md:text-[24px] font-[590] text-[#333333]">
                    Free Spins Structure
                </h2>
                <ul className="list-disc pl-5 flex flex-col gap-2 text-[14px] md:text-[16px] text-[#333333] leading-[24px]">
                    <li>Deposit $20 – $49 → Get 100 Free Spins</li>
                    <li>Deposit $50 – $99 → Get 300 Free Spins</li>
                    <li>Deposit $100 – $499 → Get 600 Free Spins</li>
                    <li>Deposit $500 – $2,000 → Get 1,000 Free Spins</li>
                    <li>Maximum: 1,000 Free Spins</li>
                    <li>Free Spins are valid on selected slot games only.</li>
                </ul>
            </section>

            <hr className="border-[#DFE8EB]" />

            {/* Terms & Conditions */}
            <section className="flex flex-col gap-4">
                <h2 className="text-[20px] md:text-[28px] font-[590] text-[#333333]">
                    Terms &amp; Conditions – Free Spins Welcome Offer
                </h2>

                <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] md:text-[20px] font-[590] text-[#333333]">
                        Wagering Contributions by Game Type:
                    </h3>
                    <ul className="list-disc pl-5 flex flex-col gap-2 text-[14px] md:text-[16px] text-[#333333] leading-[24px]">
                        <li>Available only to newly registered players aged 18+.</li>
                        <li>Promotion valid from 22nd August 2025 for 1 year unless amended or terminated.</li>
                        <li>Offer applies to the first deposit only.</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] md:text-[20px] font-[590] text-[#333333]">
                        Free Spins Rules
                    </h3>
                    <ul className="list-disc pl-5 flex flex-col gap-2 text-[14px] md:text-[16px] text-[#333333] leading-[24px]">
                        <li>Free Spins are credited instantly after qualifying deposit.</li>
                        <li>Each spin value: $0.20 per spin.</li>
                        <li>Winnings from Free Spins are credited as bonus funds.</li>
                    </ul>
                </div>
            </section>

            <hr className="border-[#DFE8EB]" />

            {/* Free Spins Rules */}
            <section className="flex flex-col gap-3">
                <h2 className="text-[20px] md:text-[28px] font-[590] text-[#333333]">
                    Free Spins Rules
                </h2>
                <ul className="list-disc pl-5 flex flex-col gap-2 text-[14px] md:text-[16px] text-[#333333] leading-[24px]">
                    <li>Free Spins are credited instantly after qualifying deposit.</li>
                    <li>Each spin value: $0.20 per spin.</li>
                    <li>Winnings from Free Spins are credited as bonus funds.</li>
                </ul>
            </section>

            <hr className="border-[#DFE8EB]" />

            {/* Wagering Requirements */}
            <section className="flex flex-col gap-3">
                <h2 className="text-[20px] md:text-[28px] font-[590] text-[#333333]">
                    Wagering Requirements
                </h2>
                <ul className="list-disc pl-5 flex flex-col gap-2 text-[14px] md:text-[16px] text-[#333333] leading-[24px]">
                    <li>Winnings from Free Spins are subject to a 35x wagering requirement.</li>
                    <li>Only selected slot games contribute 100% toward wagering.</li>
                    <li>Maximum bet allowed while wagering: $20 per spin.</li>
                    <li>Progressive Jackpot Slots do not count toward wagering (0%).</li>
                </ul>
            </section>

        </div>
        </div>
    );
};

export default Promotion;