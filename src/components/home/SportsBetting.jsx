import { useNavigate } from 'react-router-dom';
import useScrollDots from '../../hooks/useScrollDots';
import ScrollDots from '../common/ScrollDots';
import SectionHeader from '../common/SectionHeader';
import TopEventsSection from '../sports/TopEventsSection';
import LiveNowSection from '../sports/LiveNowSection';
import { volleyballPlayer3 as sportsIcon } from '../../assets/icons';
import sport1 from '../../assets/images/sport1.png';
import sport2 from '../../assets/images/sport2.png';
import sport3 from '../../assets/images/sport3.png';
import sport4 from '../../assets/images/sport4.png';
import sport5 from '../../assets/images/sport5.png';

const sports = [
  { label: 'Football', image: sport1, number: '1' },
  { label: 'Tennis', image: sport2, number: '2' },
  { label: 'Basketball', image: sport3, number: '3' },
  { label: 'Baseball', image: sport4, number: '4' },
  { label: 'Boxing', image: sport5, number: '5' },
];






const SportsBetting = () => {
  const navigate = useNavigate();
  const { scrollRef: sportsRef, activeIndex: sportsActive, scrollToIndex: sportsScrollTo } = useScrollDots(sports.length);

  return (
    <section className="bg-white rounded-xl w-full box-border" style={{ padding: '20px 24px' }}>

      <SectionHeader
        icon={<img src={sportsIcon} alt="Sports Betting" className="w-full h-full object-contain" />}
        title="Sports Betting"
        subtitle="Bet on 30+ sports with the best odds"
        onViewAll={() => navigate('/sports')}
      />

      {/* Sports image strip — scrollable on mobile */}
      <div
        ref={sportsRef}
        className="flex mb-0 overflow-x-auto md:overflow-x-visible"
        style={{
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {sports.map((sport) => (
          <div
            key={sport.label}
            className="shrink-0 w-[calc(100vw/3.5)] md:flex-1 flex justify-center"
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className="relative w-[120px] md:w-[180px] h-[140px] md:h-[200px] flex items-end justify-center">
              <span
                className="absolute bottom-0 left-0 font-black text-[#1CD4FF] leading-none z-10 select-none -translate-x-1/5"
                style={{
                  fontSize: 'clamp(80px, 10vw, 160px)',
                  fontFamily: 'Impact, "Arial Narrow", Arial, sans-serif',
                }}
              >
                {sport.number}
              </span>
              <img
                src={sport.image}
                alt={sport.label}
                className="relative z-20 h-[130px] md:h-[190px] w-auto object-contain object-bottom"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Scroll dots — below sports strip, above Trending */}
      <ScrollDots count={sports.length} activeIndex={sportsActive} scrollToIndex={sportsScrollTo} className="md:hidden mb-2" />

      <TopEventsSection />
      <LiveNowSection />

    </section>
  );
};

export default SportsBetting;
