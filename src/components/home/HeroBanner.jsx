import casinoBg from '../../assets/images/casino-bg.png';

const HeroBanner = () => {
  return (
    <>
      {/* ── Mobile — full bleed (cancel px-3 of MainLayout) ── */}
      <div
        className="relative overflow-hidden mb-3 md:hidden bg-[#041437]"
        style={{ marginLeft: '-12px', marginRight: '-12px', marginTop: '-12px', height: '393px' }}
      >
        <img
          src={casinoBg}
          alt="Hero Banner"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* Dark top gradient */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(4,20,55,0.85) 0%, rgba(4,20,55,0.45) 35%, transparent 60%)' }}
        />
        {/* Text */}
        <div className="absolute top-7 left-4 right-4 z-10 flex flex-col gap-1.5">
          <h1 className="text-white font-extrabold text-[28px] leading-tight m-0">
            <span className="block">Celebrate Every Spin.</span>
            <span className="block">Feel Every Match.</span>
          </h1>
          <p className="text-[#e3ff00] font-medium text-[22px] italic m-0">
            Live. Play. Win
          </p>
        </div>
      </div>

      {/* ── Desktop ── */}
      <div className="relative hidden md:block w-full h-[380px] rounded-xl overflow-hidden mb-4">
        <img
          src={casinoBg}
          alt="Hero Banner"
          className="absolute object-cover object-center"
          style={{ top: '-8px', left: '-25px', width: 'calc(100% + 50px)', height: 'calc(100% + 16px)' }}
        />
        {/* Left overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(5,30,60,0.55) 0%, rgba(5,30,60,0.15) 50%, transparent 100%)' }}
        />
        {/* Text */}
        <div className="absolute top-[93px] left-[55px] w-[568px] z-10 flex flex-col gap-[10px]">
          <h1 className="text-white font-bold text-[56px] leading-none m-0 mb-2">
            <span className="block whitespace-nowrap">Celebrate Every Spin.</span>
            <span className="block whitespace-nowrap">Feel Every Match.</span>
          </h1>
          <p className="text-[#e3ff00] font-normal text-[44px] m-0">
            Live. Play. Win
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
