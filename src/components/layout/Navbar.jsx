import { useApp } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import {
  logo,
  worldIcon,
  sportsIconAlt,
  casinoIconAlt,
  liveDealerIcon,
  promotionsIcon,
} from '../../assets/icons';

// Alias for compatibility
const logoSvg = logo;
const sportsIcon = sportsIconAlt;
const casinoIcon = casinoIconAlt;
const liveDealerIconb = liveDealerIcon;
const promotionsIconb = promotionsIcon;

const navLinks = [
  { label: 'Sports',      path: '/sports',      icon: sportsIcon },
  { label: 'Casino',      path: '/casino',       icon: casinoIcon },
  { label: 'Live Dealer', path: '/live-dealer',  icon: liveDealerIconb },
  { label: 'Promotions',  path: '/promotion',   icon: promotionsIconb },
];

const Navbar = () => {
  const { toggleSidebar, activeNav, setActiveNav, user } = useApp();
  const navigate = useNavigate();
  const isLoggedIn = !!user;

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between bg-[#1f1f1f] h-[62px] px-5">

      {/* ── Left: Hamburger (mobile only) + Logo ── */}
      <div className="flex items-center">

        <img
          src={logoSvg}
          alt="VIVA X PLAY"
          className="w-[100px] lg:w-[230px] h-[42px] object-contain cursor-pointer sm:w-[100px] ml-[15px] lg:ml-[23px]" 
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
      <div className="flex items-center gap-[4px] sm:gap-[8px]">

        {/* Globe + EN */}
        <button className="flex items-center justify-center gap-[6px] md:gap-[10px] bg-[#121212] text-white px-[6px] md:px-[10px] pt-[3px] md:pt-[4px] pb-[3px] md:pb-[4px] w-[44px] sm:w-[56px] md:w-[71px] h-[40px] md:h-[44px] rounded-[6px] md:rounded-[8px] text-[10px] sm:text-[11px] md:text-[12px] font-[500] border-2 border-[#1cd4ff] cursor-pointer transition-all duration-200">
          <img src={worldIcon} alt="lang" className="w-[12px] md:w-[14px] h-[12px] md:h-[14px]" />
          <span className="hidden sm:inline md:inline">EN</span>
        </button>

        {/* Login */}
        <button
          className={`bg-[#121212] text-white px-[6px] md:px-[10px] pt-[3px] md:pt-[4px] pb-[3px] md:pb-[4px] w-[55px] sm:w-[70px] md:w-[90px] h-[40px] md:h-[44px] rounded-[6px] md:rounded-[8px] text-[9px] sm:text-[10px] md:text-[12px] font-[500] uppercase border-2 border-[#1cd4ff] cursor-pointer transition-all duration-200 ${
            isLoggedIn ? 'hidden md:block' : 'block'
          }`}
          onClick={() => navigate('/login')}
        >
          LOGIN
        </button>

        {/* Register */}
        <button
          className={`bg-[#1cd4ff] text-[#121212] px-[6px] md:px-[10px] pt-[3px] md:pt-[4px] pb-[3px] md:pb-[4px] w-[70px] sm:w-[90px] md:w-[122px] h-[40px] md:h-[44px] rounded-[6px] md:rounded-[8px] text-[9px] sm:text-[10px] md:text-[12px] font-[510] uppercase cursor-pointer border-none transition-all duration-200 ${
            isLoggedIn ? 'hidden md:block' : 'block'
          }`}
          onClick={() => navigate('/register')}
        >
          Register
        </button>

        {/* Profile Button - shows when logged in on desktop only */}
        {isLoggedIn && (
          <button
            className="hidden md:flex items-center justify-center gap-2 bg-[#1cd4ff] text-[#121212] px-[14px] pt-[4px] pb-[4px] h-[44px] rounded-[8px] text-[12px] font-[510] uppercase cursor-pointer border-none transition-all duration-200 hover:bg-[#1ab4d0]"
            onClick={() => navigate('/profile')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>Profile</span>
          </button>
        )}
      </div>

    </header>
  );
};

export default Navbar;
