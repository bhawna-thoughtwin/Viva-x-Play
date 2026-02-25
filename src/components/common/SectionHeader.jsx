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

        <div className="flex flex-col min-w-0">
          <h2 className="text-[18px] md:text-[32px] font-bold text-[#121212] leading-tight">
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
          className="
    bg-transparent
    text-[#1CD4FF]
    font-semibold
    cursor-pointer
    outline-none

    px-2 py-1
    md:px-4 md:py-2

    border-none
    md:border md:border-[#1CD4FF]

    rounded-none
    md:rounded-md
  "
        >
          VIEW ALL
        </button>
      )}

    </div>
  );
};

export default SectionHeader;
