import freeSpinImg from '../../assets/images/freespin.png';

const FreeSpinBonus = () => (
  <section className="w-full max-w-full mb-3 md:mb-4 box-border relative">

    {/* Card */}
    <div
      className="relative w-full h-[160px] md:h-[240px] rounded-xl overflow-hidden flex items-center box-border"
      style={{ background: 'linear-gradient(90deg, #92FE9D 0%, #00C9FF 100%)' }}
    >

      {/* LEFT — freespin image — Figma: w594 h446 top:-20 left:-65 angle:0 */}
      <img
        src={freeSpinImg}
        alt="Free spin"
        className="absolute object-contain pointer-events-none z-[1]"
        style={{
          top: '-20px',
          left: '-65px',
          width: '594px',
          height: '446px',
        }}
      />

      {/* RIGHT — text block */}
      <div className="absolute right-4 md:right-10 flex flex-col gap-2 md:gap-8 z-[1] text-right items-end max-w-[55%] md:max-w-none">
        <h2
          className="m-0 p-0 font-medium text-[#131313] leading-none whitespace-nowrap"
          style={{ fontSize: 'clamp(22px, 4vw, 72px)' }}
        >
          Free Spin Bonus
        </h2>
        <p
          className="m-0 text-[#131313] whitespace-nowrap"
          style={{ fontSize: 'clamp(11px, 2vw, 34px)', fontWeight: 274 }}
        >
          Deposit $25,{' '}
          <strong style={{ fontWeight: 274 }}>Grab 50 free spins.</strong>
        </p>
      </div>

    </div>
  </section>
);

export default FreeSpinBonus;
