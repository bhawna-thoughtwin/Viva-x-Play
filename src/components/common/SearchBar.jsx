import { searchIcon } from "../../assets/icons";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-[#f5f5f5] border border-[#e0e0e0] rounded-[2px]">
      <input
        type="text"
        placeholder="Search Game..."
        className="w-full bg-transparent border-none outline-none text-[#4a4a4a] text-[14px] font-inherit placeholder:text-[#4a4a4a]/70"
      />
      <img
        src={searchIcon}
        alt="search"
        className="w-4 h-4 opacity-50"
      />
    </div>
  );
};

export default SearchBar;
