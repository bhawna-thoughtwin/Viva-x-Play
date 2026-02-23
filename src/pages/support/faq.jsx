import { useState } from "react";
import PageHeader from "../about/Header/Header";
import faqData  from "../support/faqData/faqData";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("General");
  const [openIndex, setOpenIndex] = useState(null);

  const categories = Object.keys(faqData);

  return (
    <>
     <PageHeader title="FAQ's" />

    <div className="flex gap-2">
        
      {/* LEFT SIDE - Categories */}
      <div className="w-[250px] bg-white rounded-xl p-4">
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

      {/* RIGHT SIDE - Questions */}
      <div className="flex-1 bg-white rounded-xl p-6 ml-4">
        {faqData[activeCategory].map((item, index) => (
          <div key={index} className="border-b py-4">

            <button
              className="w-full text-left flex justify-between items-center"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <span className="font-medium text-[#121212]">
                {item.question}
              </span>
              <span className="text-[#1cd4ff] text-xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <p className="mt-3 text-[#666] text-sm">
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
