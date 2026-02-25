const SectionHeader = ({ icon, title, subtitle, onViewAll }) => {
  return (
    <div className="flex items-center justify-between mb-4 gap-2">

      {/* Left — icon + title/subtitle */}
      <div className="flex items-center gap-2 min-w-0 flex-1">
        {icon && (
          <span className="flex items-center shrink-0 w-8 h-8 md:w-[51px] md:h-[51px]">
            {icon}
          </span>
        )}

        <div className="flex flex-col min-w-0">
          <h2 className="text-[15px] md:text-[32px] font-bold text-[#121212] leading-tight truncate">
            {title}
          </h2>

          {subtitle && (
            <p className="text-[12px] md:text-[14px] text-[#777] truncate">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Right — View All button */}
      {onViewAll && (
        <button
          onClick={onViewAll}
          className="
            shrink-0
            border-2 border-[#1CD4FF] text-[#1CD4FF] bg-white
            rounded-md md:rounded-lg
            px-2.5 md:px-8
            h-[28px] md:h-[44px]
            text-[11px] md:text-[14px]
            leading-none font-[590] font-['SF_Pro']
            cursor-pointer hover:bg-[#f0fdff] transition-colors
            whitespace-nowrap
          "
        >
          View All
        </button>
      )}

    </div>
  );
};

export default SectionHeader;
