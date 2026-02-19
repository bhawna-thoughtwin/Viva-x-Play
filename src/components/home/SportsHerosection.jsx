import sports1 from "../../assets/images/sportssection1.png";
import sports2 from "../../assets/images/sportssection2.png";
import sports3 from "../../assets/images/sportsection3.png";

const SportsHero = () => {
  return (
    <div className="w-full max-w-full relative mb-3 md:mb-4">

      {/* ── MOBILE layout (below md) ── */}
      <div
        className="md:hidden relative w-full rounded-xl overflow-hidden flex flex-col items-center"
        style={{ background: 'linear-gradient(0deg, #025877, #025877)' }}
      >
        {/* TOP — players centered */}
        <div className="relative w-full flex justify-center" style={{ height: '260px' }}>
          {/* group all 3 players as a centered block */}
          <div className="relative" style={{ width: '240px', height: '260px' }}>
            <img
              src={sports1}
              alt="player 1"
              className="absolute bottom-0 object-contain object-bottom"
              style={{ height: '220px', left: '0px', zIndex: 1 }}
            />
            <img
              src={sports2}
              alt="player 2"
              className="absolute bottom-0 object-contain object-bottom"
              style={{ height: '250px', left: '60px', zIndex: 3 }}
            />
            <img
              src={sports3}
              alt="player 3"
              className="absolute bottom-0 object-contain object-bottom"
              style={{ height: '235px', left: '125px', zIndex: 2 }}
            />
          </div>
        </div>

        {/* BOTTOM — text + button, center aligned */}
        <div className="w-full px-5 pb-6 pt-3 flex flex-col items-center gap-2 text-center">
          <h2 className="font-bold text-white m-0 p-0 leading-snug text-[20px]">
            All Your Favorite Sports, One Play
          </h2>

          <p className="text-white/85 m-0 text-[11px] leading-[1.6]">
            With <strong className="text-white">VIVA x PLAY,</strong> enjoy top odds across
            a huge range of global sports, including football, baseball, and more.
            Bet live in real time or pre-match, and never miss out on the excitement.
          </p>

          <button className="mt-2 w-full h-[44px] rounded-lg border border-[#1CD4FF] bg-[#1CD4FF] text-white font-bold text-[12px] tracking-[1px] cursor-pointer">
            EXPLORE ALL SPORTS
          </button>
        </div>
      </div>

      {/* ── DESKTOP layout (md and up) ── */}
      <div
        className="hidden md:block relative w-full"
        style={{ height: 'clamp(280px, 40vw, 482px)' }}
      >
        {/* Teal card — sits at the bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 rounded-xl flex items-center overflow-visible box-border pl-10 pr-10"
          style={{
            height: 'clamp(220px, 32vw, 406px)',
            background: 'linear-gradient(0deg, #025877, #025877)',
          }}
        >
          {/* LEFT — images anchored to bottom-left, overflow upward */}
          <div
            className="absolute bottom-0 left-[10px]"
            style={{ width: 'clamp(180px, 30vw, 448px)', height: 'clamp(280px, 40vw, 482px)' }}
          >
            <img
              src={sports1}
              alt="player 1"
              className="absolute bottom-0 object-contain object-bottom"
              style={{ height: 'clamp(160px, 28vw, 400px)', left: 0, zIndex: 1 }}
            />
            <img
              src={sports2}
              alt="player 2"
              className="absolute bottom-0 object-contain object-bottom"
              style={{ height: 'clamp(185px, 32vw, 460px)', left: 'clamp(50px, 9vw, 130px)', zIndex: 3 }}
            />
            <img
              src={sports3}
              alt="player 3"
              className="absolute bottom-0 object-contain object-bottom"
              style={{ height: 'clamp(172px, 30vw, 430px)', left: 'clamp(100px, 18vw, 270px)', zIndex: 2 }}
            />
          </div>

          {/* RIGHT — text content */}
          <div
            className="ml-auto flex flex-col gap-8 text-right items-end"
            style={{ width: 'clamp(180px, 55%, 668px)' }}
          >
            <h2
              className="font-bold text-white m-0 p-0 leading-snug"
              style={{ fontSize: 'clamp(20px, 3vw, 43px)' }}
            >
              Your Sports. Your Plays. Your Wins.
            </h2>

            <p
              className="text-white/90 m-0"
              style={{ fontSize: 'clamp(13px, 1.5vw, 18px)', lineHeight: '1.9' }}
            >
              With <strong>VIVA x PLAY,</strong> enjoy top odds across a huge
              range of global sports, including football, baseball, and more.
              Bet live in real time or pre-match, and never miss out on the
              excitement.
            </p>

            <button className="h-[52px] rounded-lg border border-[#1CD4FF] bg-[#1CD4FF] text-white font-bold text-[13px] tracking-[1px] cursor-pointer whitespace-nowrap px-8 box-border">
              EXPLORE ALL SPORTS
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SportsHero;
