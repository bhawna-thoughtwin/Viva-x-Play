import { useApp } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import {
  logo,
  worldIcon,
  sportsIconAlt,
  casinoIconAlt,
  liveDealerIconAlt,
  promotionsIconAlt,
} from '../../assets/icons';

// Alias for compatibility
const logoSvg = logo;
const sportsIcon = sportsIconAlt;
const casinoIcon = casinoIconAlt;
const liveDealerIcon = liveDealerIconAlt;
const promotionsIcon = promotionsIconAlt;

const navLinks = [
  { label: 'Sports',      path: '/sports',      icon: sportsIcon },
  { label: 'Casino',      path: '/casino',       icon: casinoIcon },
  { label: 'Live Dealer', path: '/live-dealer',  icon: liveDealerIcon },
  { label: 'Promotions',  path: '/promotions',   icon: promotionsIcon },
];

const Navbar = () => {
  const { toggleSidebar, activeNav, setActiveNav } = useApp();
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between bg-[#1f1f1f] h-[62px] px-5">

      {/* ── Left: Hamburger (mobile only) + Logo ── */}
      <div className="flex items-center gap-[14px]">

        {/* Hamburger — mobile only */}
        <button
          className="flex md:hidden items-center justify-center bg-transparent border-none cursor-pointer p-1"
          onClick={toggleSidebar}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round"/>
          </svg>
        </button>

        <img
          src={logoSvg}
          alt="VIVA X PLAY"
          className="w-[230px] h-[42px] object-contain cursor-pointer"
          onClick={() => navigate('/')}
        />
      </div>

      {/* ── Center: Nav links (desktop only) ── */}
      <nav className="hidden md:flex items-center gap-[42px] absolute left-1/2 -translate-x-1/2 px-4 py-2 text-[14px]">
        {navLinks.map((link) => (
          <button
            key={link.label}
            className={`flex items-center gap-[7px] bg-transparent border-none text-white cursor-pointer px-[10px] py-2 rounded-md text-[18px] font-[510] transition-all duration-200 ${
              activeNav === link.label ? 'opacity-100' : 'opacity-75'
            }`}
            onClick={() => {
              setActiveNav(link.label);
              navigate(link.path);
            }}
          >
            <img src={link.icon} alt={link.label} className="w-[18px] h-[18px] brightness-[10]" />
            {link.label}
          </button>
        ))}
      </nav>

      {/* ── Right: Auth buttons ── */}
      <div className="flex items-center gap-[8px]">

        {/* Globe + EN */}
        <button className="flex items-center justify-center gap-[10px] bg-[#121212] text-white px-[10px] pt-[4px] pb-[4px] w-[71px] h-[44px] rounded-[8px] text-[12px] font-[500] border-2 border-[#1cd4ff] cursor-pointer">
          <img src={worldIcon} alt="lang" className="w-[14px] h-[14px]" />
          <span className="hidden md:inline">EN</span>
        </button>

        {/* Login */}
        <button
          className="bg-[#121212] text-white px-[10px] pt-[4px] pb-[4px] w-[90px] h-[44px] rounded-[8px] text-[12px] font-[500] uppercase border-2 border-[#1cd4ff] cursor-pointer"
          onClick={() => navigate('/login')}
        >
          LOGIN
        </button>

        {/* Register */}
        <button
          className="bg-[#1cd4ff] text-[#121212] px-[10px] pt-[4px] pb-[4px] w-[122px] h-[44px] rounded-[8px] text-[12px] font-[510] uppercase cursor-pointer border-none"
          onClick={() => navigate('/register')}
        >
          Register
        </button>
      </div>

    </header>
  );
};

export default Navbar;
