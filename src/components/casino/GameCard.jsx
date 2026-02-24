const GameCard = ({ image, name }) => {
  return (
    <div className="relative shrink-0 w-[142px] h-[194px] rounded-[13px] overflow-hidden bg-[#333] cursor-pointer group">
      {/* Game image */}
      {image && (
        <img
          src={image}
          alt={name || 'Game'}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />

      {/* Play button on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-10 h-10 rounded-full bg-[#1CD4FF] flex items-center justify-center shadow-lg">
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
            <path d="M1 1L13 8L1 15V1Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Name tag at bottom */}
      {name && (
        <div className="absolute bottom-0 left-0 right-0 px-2 py-1.5 bg-gradient-to-t from-black/70 to-transparent">
          <p className="text-white text-[11px] font-semibold truncate leading-tight">{name}</p>
        </div>
      )}
    </div>
  );
};

export default GameCard;
