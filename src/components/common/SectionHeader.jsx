const SectionHeader = ({ icon, title, subtitle, onViewAll }) => {
  return (
    <div className="flex items-center justify-between mb-4">

      {/* Left — icon + title/subtitle */}
      <div className="flex items-center gap-2.5">
        {icon && (
          <span className="flex items-center w-10 h-10 md:w-[51px] md:h-[51px] shrink-0">
            {icon}
          </span>
        )}
        <div className="flex flex-col gap-0.5">
          <h2 className="text-[22px] md:text-[32px] font-bold text-[#121212] m-0 p-0 leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[13px] md:text-[14px] font-normal text-[#777] m-0">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Right — View All button */}
      {onViewAll && (
        <button
          className="bg-transparent border border-[#e0e0e0] text-[#1cd4ff] px-3 md:px-[14px] py-1.5 rounded-md text-xs md:text-[13px] font-semibold cursor-pointer shrink-0"
          onClick={onViewAll}
        >
          VIEW ALL ›
        </button>
      )}

    </div>
  );
};

export default SectionHeader;
