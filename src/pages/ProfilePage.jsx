import { FiSearch, FiChevronDown } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import {
    sportsIcon,
    liveSportsIcon,
    casinoIcon,
    liveDealerIconAlt,
    promotionsIconAlt,
    referIcon,
    bonusIcon,
    supportIcon,
    logout2,
    global
} from "../assets/icons";

const ProfilePage = () => {
    const navigate = useNavigate();
    const { user, logout } = useApp();

    const menuSections = [
        {
            title: "GAME",
            items: [
                { label: "Sports", icon: sportsIcon },
                { label: "Live Sports", icon: liveSportsIcon },
                { label: "Casino", icon: casinoIcon },
                { label: "Live Dealer", icon: liveDealerIconAlt },
            ],
        },
        {
            title: "THE HUB",
            items: [
                { label: "Promotions", icon: promotionsIconAlt },
                { label: "Refer a friend", icon: referIcon },
                { label: "Welcome Bonuses", icon: bonusIcon },
            ],
        },
        {
            title: "OTHER",
            items: [
                { label: "Support", icon: supportIcon },
                { label: "Language", icon: global },
            ],
        },
    ];

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <div className="min-h-screen  flex justify-center py-10 px-4">
            <div className="w-full max-w-[420px] bg-white rounded-xl p-5">

                {/* Search */}
                <div className="relative mb-5">
                    <input
                        type="text"
                        placeholder="Search Game..."
                        className="w-full pl-4 pr-10 py-2 border border-[#e0e0e0] rounded-lg text-sm outline-none bg-[#fafafa]"
                    />
                    <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999]" />
                </div>

                {/* User Card */}
                <div className="flex items-center justify-between bg-[#f3f7fa] p-3 rounded-lg mb-6">
                    <div className="flex items-center gap-3">
                        <FaUserCircle size={36} className="text-[#1CD4FF]" />
                        <div>
                            <p className="text-sm font-semibold text-[#111]">
                                {user?.name || user?.username || "User"}
                            </p>
                            <span className="text-xs text-[#777]">{user?.email || "user@example.com"}</span>
                        </div>
                    </div>
                    <FiChevronDown className="text-[#777]" />
                </div>

                {/* Menu Sections */}
                {menuSections.map((section, i) => (
                    <div key={i} className="mb-6">
                        <p className="text-xs text-[#999] font-semibold mb-3">
                            {section.title}
                        </p>

                        {section.items.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between py-2 border-b border-[#eee] cursor-pointer hover:bg-[#f9f9f9] px-2 rounded-md transition"
                            >
                                <div className="flex items-center gap-3">
                                    {item.icon && (
                                        <img src={item.icon} alt={item.label} className="w-[18px] h-[18px] object-contain" />
                                    )}
                                    <span className="text-sm text-[#333]">{item.label}</span>
                                </div>
                                <FiChevronDown className="text-[#aaa] text-sm" />
                            </div>
                        ))}
                    </div>
                ))}

                {/* Logout */}
                <div
                    className="flex items-center gap-2 cursor-pointer text-[#333] hover:text-[#000] transition pt-4 mt-4 border-t border-[#eee]"
                    onClick={handleLogout}
                >
                    <img
                        src={logout2}
                        alt="Logout"
                        className="w-[18px] h-[18px] object-contain"
                    />

                    <span className="text-sm font-medium">
                        Logout
                    </span>
                </div>

            </div>
        </div>
    );
};

export default ProfilePage;
