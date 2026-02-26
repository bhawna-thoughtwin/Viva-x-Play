import { useState } from "react";
import PageHeader from "../about/Header/Header";
import faqData from "../support/faqData/faqData";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState("General");
    const [openIndex, setOpenIndex] = useState(null);
    const navigate = useNavigate();
    const categories = Object.keys(faqData);

    return (
        <>
            {/* ── Breadcrumb ── */}
            <nav className="flex items-center gap-2 text-[13px] text-[#6b7280] mb-4 mt-4">
                <button
                    onClick={() => navigate('/')}
                    className="bg-transparent border-none cursor-pointer p-0 hover:text-[#1CD4FF] transition-colors font-medium"
                >
                    Home
                </button>
                <span className="text-[#ccc]">›</span>
                <span className="text-[#6b7280]">Support</span>
                <span className="text-[#ccc]">›</span>
                <span className="text-[#0D0C22] font-semibold">FAQ's</span>
            </nav>

            <PageHeader title="FAQ's" />

            <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6">

                {/* ───────── DESKTOP SIDEBAR ───────── */}
                <div className="hidden md:block w-[250px] bg-white rounded-xl p-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setActiveCategory(category);
                                setOpenIndex(null);
                            }}
                            className={`w-full text-left px-4 py-2 rounded-lg mb-2 transition font-medium ${activeCategory === category
                                ? "text-white font-semibold"
                                : "hover:bg-gray-100 text-[#555]"
                                }`}
                        style={activeCategory === category
                            ? { background: 'linear-gradient(90deg, #117F99 0%, #1CD4FF 100%)' }
                            : {}
                        }
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* ───────── MOBILE DROPDOWN ───────── */}
                <div className="md:hidden w-full relative">

                    <select
                        value={activeCategory}
                        onChange={(e) => {
                            setActiveCategory(e.target.value);
                            setOpenIndex(null);
                        }}
                        className="
      w-full
      appearance-none
      bg-white
      border border-[#e6e8ec]
      rounded-xl
      px-4
      py-3
      pr-10
      text-[16px]
      leading-[20px]
      font-normal
      text-[#121212]
      outline-none
      cursor-pointer
      shadow-[0_2px_6px_rgba(0,0,0,0.04)]

        focus:border-black
      focus:ring-0
    "
                    >
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>

                    {/* Custom Arrow */}
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#121212"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>

                </div>


                {/* ───────── QUESTIONS PANEL ───────── */}
                <div className="flex-1 bg-white rounded-xl p-4 md:p-6">
                    <h2 className="mb-4 text-[#121212] text-[16px] leading-[20px] font-normal tracking-[0%] ">
                        {activeCategory}
                    </h2>


                    {faqData[activeCategory]?.map((item, index) => (
                        <div key={index} className="border-b py-4">

                            <button
                                className="w-full text-left flex justify-between items-center gap-3"
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                            >
                                <span className="font-medium text-[#121212] text-[14px] md:text-[16px] leading-snug">
                                    {item.question}
                                </span>

                                <span className="text-[#1cd4ff] text-[20px] font-semibold shrink-0">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>

                            {openIndex === index && (
                                <p className="mt-3 text-[#666] text-[13px] md:text-[14px] leading-relaxed">
                                    {item.answer}
                                </p>
                            )}

                        </div>
                    ))}

                </div>

            </div>
        </>
    );
};

export default FAQ;
