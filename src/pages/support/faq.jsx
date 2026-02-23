import { useState } from "react";
import PageHeader from "../about/Header/Header";
import faqData from "../support/faqData/faqData";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("General");
  const [openIndex, setOpenIndex] = useState(null);

  const categories = Object.keys(faqData);

  return (
    <>
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
              className={`w-full text-left px-4 py-2 rounded-lg mb-2 transition ${
                activeCategory === category
                  ? "bg-[#1cd4ff] text-white font-semibold"
                  : "hover:bg-gray-100 text-[#555]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ───────── MOBILE DROPDOWN ───────── */}
        <div className="md:hidden w-full">
          <select
            value={activeCategory}
            onChange={(e) => {
              setActiveCategory(e.target.value);
              setOpenIndex(null);
            }}
            className="w-full bg-white rounded-xl p-3 text-[14px] font-medium border border-gray-200 outline-none"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* ───────── QUESTIONS PANEL ───────── */}
        <div className="flex-1 bg-white rounded-xl p-4 md:p-6">

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
