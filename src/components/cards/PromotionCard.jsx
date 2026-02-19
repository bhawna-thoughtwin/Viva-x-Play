const PromotionCard = ({ title, line1, line1Bold, line2, line2Highlight, btnLabel, image, gradient }) => {
  return (
    <div
      className="relative rounded-xl overflow-hidden cursor-pointer shrink-0 w-full md:w-[456px] h-[160px] md:h-[240px]"
      style={{ background: gradient || '#1a3a52' }}
    >
      {/* Character image — Figma: w401 h401 top:33 left:151 angle:-180deg */}
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute object-contain pointer-events-none z-0"
          style={{
            top: '33px',
            left: '151px',
            width: '401px',
            height: '401px',
            transform: 'scaleX(-1)',
          }}
        />
      )}

      {/* Overlay — left readable, right transparent */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.30) 50%, transparent 80%)' }}
      />

      {/* Text content */}
      <div className="relative z-10 h-full flex flex-col justify-center gap-1 px-5 py-5 md:px-7 md:py-6 max-w-[58%] box-border">
        <h3 className="text-white font-bold leading-tight m-0 mb-1 text-[20px] md:text-[24px]">
          {title}
        </h3>

        <p className="text-white/90 text-[12px] md:text-[14px] font-normal m-0 leading-relaxed">
          {line1}
          {line1Bold && <strong className="font-bold text-white"> {line1Bold}</strong>}
        </p>

        {line2 && (
          <p className="text-white/90 text-[12px] md:text-[14px] font-normal m-0 leading-relaxed">
            {line2}
            {line2Highlight && <strong className="font-bold text-[#d4f542]"> {line2Highlight}</strong>}
          </p>
        )}

        <button className="self-start mt-3 md:mt-[14px] border-none rounded-full cursor-pointer text-[12px] md:text-[13px] font-semibold bg-white text-[#121212] px-5 md:px-[22px] py-2 md:py-[9px]">
          {btnLabel}
        </button>
      </div>
    </div>
  );
};

export default PromotionCard;
