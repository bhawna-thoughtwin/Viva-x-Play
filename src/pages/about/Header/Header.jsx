import { useNavigate } from "react-router-dom";
import headerImage from "../../../assets/images/headerImage.png";

const PageHeader = ({ title, breadcrumb }) => {
  const navigate = useNavigate();

  return (
    <>
      {breadcrumb && (
        <nav className="flex items-center gap-2 text-[13px] text-[#6b7280] mb-4 mt-4">
          <button
            onClick={() => navigate('/')}
            className="bg-transparent border-none cursor-pointer p-0 hover:text-[#1CD4FF] transition-colors font-medium"
          >
            Home
          </button>
          <span className="text-[#ccc]">›</span>
          <button
            onClick={() => navigate(-1)}
            className="bg-transparent border-none cursor-pointer p-0 hover:text-[#1CD4FF] transition-colors font-medium"
          >
            About Us
          </button>
          <span className="text-[#ccc]">›</span>
          <span className="text-[#0D0C22] font-semibold">{title}</span>
        </nav>
      )}

      <header className="w-full h-[175px] flex justify-between items-center px-[30px] shadow-[0_4px_18px_rgba(15,23,42,0.06)] overflow-hidden box-border mb-[30px] mt-[20px] rounded-[12px]"
        style={{ background: "linear-gradient(0deg, #025877, #025877)" }}
      >
        <h1 className="font-bold text-[20px] md:text-[clamp(20px,2.8vw,42px)] leading-[100%] md:leading-[1.2] m-0 text-white whitespace-nowrap flex-1 min-w-0 shrink">
          {title}
        </h1>

        <img
          src={headerImage}
          alt="Header Visual"
          className="h-[200px] object-contain shrink-0 ml-[105px]"
        />
      </header>
    </>
  );
};

export default PageHeader;
