import React, { useEffect } from "react";
import { FiSearch, FiChevronDown, FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import toast from "react-hot-toast";

const ProfilePage = () => {
    const navigate = useNavigate();
    const { user, logout } = useApp();

    // Check if user is logged in on component mount only
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, []); // Empty dependency array - only runs on mount

    const menuSections = [
        {
            title: "GAME",
            items: ["Sports", "Live Sports", "Casino", "Live Dealer"],
        },
        {
            title: "THE HUB",
            items: ["Promotions", "Refer a friend", "Welcome Bonuses"],
        },
        {
            title: "OTHER",
            items: ["Support", "Language"],
        },
    ];
    
    const handleLogout = () => {
        // Navigate first to avoid the redirect check at component start
        navigate("/");
        
        // Then call logout from AppContext
        if (logout) {
            logout();
        }
        
        // Clear localStorage
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
        localStorage.removeItem("dummyUser");
        localStorage.removeItem("rememberUser");
        
        toast.success("Logged out successfully!");
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
                                <span className="text-sm text-[#333]">{item}</span>
                                <FiChevronDown className="text-[#aaa] text-sm" />
                            </div>
                        ))}
                    </div>
                ))}

                {/* Logout */}
                <div className="flex items-center gap-2 cursor-pointer text-red-500 hover:text-red-600 transition">
                    <FiLogOut />
                    <span className="text-sm font-medium"
                        onClick={handleLogout}
                    >Logout</span>
                </div>

            </div>
        </div>
    );
};

export default ProfilePage;
