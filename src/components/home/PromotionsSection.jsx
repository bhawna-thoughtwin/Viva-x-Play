import { useRef, useState, useEffect } from 'react';
import SectionHeader from '../common/SectionHeader';
import PromotionCard from '../cards/PromotionCard';
import promo1 from '../../assets/images/promo1.png';
import promo2 from '../../assets/images/promo2.png';
import promo3 from '../../assets/images/promo3.png';
import { volleyballPlayer2 as promotionsIcon } from '../../assets/icons';

const promotions = [
  {
    title: 'Double Deposit',
    line1: 'Deposit',
    line1Bold: '$50',
    line2: 'Get',
    line2Highlight: '$50 to play.',
    btnLabel: 'Deposit Now',
    image: promo1,
    gradient: 'linear-gradient(135deg, #163E5E 0%, #1E6E8F 100%)',
  },
  {
    title: 'Free Spin Bonus',
    line1: 'Deposit $25,',
    line2: 'Grab',
    line2Highlight: '50 free spins.',
    btnLabel: 'Deposit Now',
    image: promo2,
    gradient: 'linear-gradient(90deg, #9EBB9C 0%, #85AB91 100%)',
  },
  {
    title: 'Bet & Win',
    line1: 'Place a bet.',
    line2: 'Earn',
    line2Highlight: 'Instant Rewards.',
    btnLabel: 'Bet Now',
    image: promo3,
    gradient: 'linear-gradient(135deg, #163E5E 0%, #1E6E8F 100%)',
  },
];

const PromotionsSection = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track scroll position and update active indicator
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const cardWidth = el.scrollWidth / promotions.length;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(index, promotions.length - 1));
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  // Click indicator → scroll to that card
  const scrollToIndex = (index) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / promotions.length;
    el.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
    setActiveIndex(index);
  };

  return (
    <section className="bg-white rounded-xl p-4 md:p-5 mb-3 md:mb-4 w-full box-border">

      <SectionHeader
        title="Promotions"
        icon={
          <img
            src={promotionsIcon}
            alt="Promotions"
            className="w-full h-full object-contain"
          />
        }
        onViewAll={() => { }}
        viewAllClassName="hidden md:block"
      />


      {/* Cards — horizontal scroll, snap on mobile */}
      <div
        ref={scrollRef}
        className="flex gap-3 md:gap-4 overflow-x-auto"
        style={{
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {promotions.map((promo) => (
          <div
            key={promo.title}

            className="shrink-0 w-[calc(100vw-56px)] md:w-auto"
            style={{ scrollSnapAlign: 'start' }}
          >
            <PromotionCard {...promo} />
          </div>
        ))}
      </div>

      {/* Scroll indicators — pill lines like image */}
      <div className="flex justify-center items-center gap-1.5 mt-3.5">
        {promotions.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`h-[6px] rounded-full transition-all duration-300 cursor-pointer border-none p-0 ${i === activeIndex
              ? 'w-[22px] bg-[#4CAF50]'          /* active — green pill */
              : 'w-[22px] bg-[#D0D0D0]'           /* inactive — gray pill */
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default PromotionsSection;