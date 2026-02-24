import { useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import browse from "../../assets/icons/browse.png";
import casinoIcon from '../../assets/icons/icon-casino2.svg';
import liveDealerIcon from '../../assets/icons/icon-live-dealer2.svg';
import sportsIcon from '../../assets/icons/sportsicon.png';
import { profileIcon } from '../../assets/icons';

const whiteFilter = 'brightness(0) invert(1)';
const cyanFilter = 'invert(72%) sepia(60%) saturate(400%) hue-rotate(155deg) brightness(105%)';

/* ════════════════════════════════════════════════════════ */
const BottomNav = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { sidebarOpen, toggleSidebar } = useApp();

    /* BROWSE is "active" when the sidebar is open */
    const browseActive = sidebarOpen;

    const navItems = [
        { label: 'BROWSE', type: 'browse', path: null },
        { label: 'CASINO', type: 'casino', path: '/casino' },
        { label: 'LIVE DEALER', type: 'live-dealer', path: '/live-dealer' },
        { label: 'SPORTS', type: 'sports', path: '/sports' },
        { label: 'MY PROFILE', type: 'profile', path: '/profile' },
    ];

    const isActive = (item) => {
        if (item.type === 'browse') return browseActive;
        return pathname === item.path;
    };

    const handleClick = (item) => {
        if (item.type === 'browse') {
            toggleSidebar();/* open / close ful l-page sidebar */
        } else {
            navigate(item.path);
        }
    };

    const renderIcon = (item) => {
        const active = isActive(item);
        const color = active ? '#1CD4FF' : '#FFFFFF';
        const imgClass = 'w-[22px] h-[22px] object-contain';

        switch (item.type) {
            case 'browse':
                return <img src={browse} size={22} color={color} strokeWidth={1.8} />;
            case 'casino':
                return <img src={casinoIcon} alt="Casino" className={imgClass} style={{ filter: active ? cyanFilter : whiteFilter }} />;
            case 'live-dealer':
                return <img src={liveDealerIcon} alt="Live Dealer" className={imgClass} style={{ filter: active ? cyanFilter : whiteFilter }} />;
            case 'sports':
                return <img src={sportsIcon} alt="Sports" className={imgClass} style={{ filter: active ? cyanFilter : whiteFilter }} />;
            case 'profile':
                return <img src={profileIcon} alt="Profile" className={imgClass} style={{ filter: active ? cyanFilter : whiteFilter }} />;
            default:
                return null;
        }
    };

    return (
        <nav
            className="fixed bottom-0 left-0 right-0 z-[1200] md:hidden"
            style={{
                height: '64px',
                background: '#13131F',
                borderTop: '1px solid rgba(255,255,255,0.08)',
            }}
        >
            <div className="flex items-center justify-around h-full">
                {navItems.map((item) => {
                    const active = isActive(item);
                    return (
                        <button
                            key={item.type}
                            onClick={() => handleClick(item)}
                            className="relative flex flex-col items-center justify-center gap-[5px] flex-1 h-full bg-transparent border-0 cursor-pointer py-2"
                        >
                            {renderIcon(item)}
                            <span
                                className="text-[9px] font-semibold tracking-wide leading-none"
                                style={{ color: active ? '#1CD4FF' : 'rgba(255,255,255,0.70)' }}
                            >
                                {item.label}
                            </span>

                            {/* Active indicator dot */}
                            {active && (
                                <span
                                    className="absolute bottom-[6px] rounded-full"
                                    style={{ width: '4px', height: '4px', background: '#1CD4FF' }}
                                />
                            )}
                        </button>
                    );
                })}
            </div>
        </nav>
    );
};

export default BottomNav;
