const MatchCard = ({
  league,
  team1,
  team2,
  score1,
  score2,
  odds,
  isLive = true,
}) => {
  return (
    /* Card */
    <div className="
      bg-[#f5f5f7]
      rounded-[12px]
      w-[301px]
      min-w-[301px]
      h-[202px]
      flex
      flex-col
      cursor-pointer
      box-border
      shrink-0
      px-[24px]
      py-[16px]
      relative
    ">

      {/* League row */}
      <div className="flex items-center justify-between h-[27px] mb-[16px]">
        <span className="text-[13px] font-medium text-[#555]">
          {league}
        </span>

        {isLive && (
          <span className="
            flex items-center gap-[4px]
            bg-[#ff6a00]
            text-white
            text-[11px]
            font-bold
            px-[10px]
            py-[3px]
            rounded-full
          ">
            <span className="w-[7px] h-[7px] rounded-full bg-[#ff2d2d] inline-block"></span>
            LIVE
          </span>
        )}
      </div>

      {/* Teams */}
      <div className="flex flex-col gap-[4px] mb-[16px]">

        <div className="flex justify-between items-center h-[27px]">
          <span className="text-[14px] font-semibold text-[#222]">
            {team1}
          </span>

          <span className="text-[15px] font-bold text-[#3b6fd4]">
            {score1}
          </span>
        </div>

        <div className="flex justify-between items-center h-[27px]">
          <span className="text-[14px] font-semibold text-[#222]">
            {team2}
          </span>

          <span className="text-[15px] font-bold text-[#3b6fd4]">
            {score2}
          </span>
        </div>

      </div>

      {/* Divider */}
      <div className="
        h-[1px]
        bg-[#e0e0e0]
        -mx-[24px]
        mb-[12px]
      " />

      {/* Odds */}
      <div className="flex gap-[16px] h-[37px]">
        {odds.map((odd, i) => {
          const isLast = i === odds.length - 1;

          return (
            <button
              key={i}
              className={`
                w-[74px]
                h-[37px]
                rounded-[10px]
                px-[16px]
                py-[8px]
                text-[13px]
                font-semibold
                flex items-center justify-center
                shrink-0
                box-border
                transition

                ${isLast
                  ? 'bg-[#7ed321] text-white border-none'
                  : 'bg-white text-[#222] border border-[#e0e0e0] hover:bg-gray-50'
                }
              `}
            >
              {odd}
            </button>
          );
        })}
      </div>

    </div>
  );
};

export default MatchCard;
