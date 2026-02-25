import { searchIcon } from "../../assets/icons";

const SearchBar = ({
  value = '',
  onChange = () => {},   // prevent read-only warning
  onClear,
  placeholder = "Search Game..."
}) => {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-[#f5f5f5] border border-[#e0e0e0] rounded-[2px]">
      
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent border-none outline-none text-[#4a4a4a] text-[14px] font-inherit placeholder:text-[#4a4a4a]/70"
      />

      {value ? (
        <button
          onClick={onClear}
          className="text-[#9ca3af] hover:text-[#333] text-[16px] leading-none shrink-0"
        >
          ×
        </button>
      ) : (
        <img
          src={searchIcon}
          alt="search"
          className="w-4 h-4 opacity-50 shrink-0"
        />
      )}

    </div>
  );
};

export default SearchBar;