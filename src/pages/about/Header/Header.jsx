import headerImage from "../../../assets/images/headerImage.png";

const PageHeader = ({ title }) => {
  return (
    <header className="w-full h-[175px] flex justify-between items-center px-[30px] shadow-[0_4px_18px_rgba(15,23,42,0.06)] overflow-hidden box-border mb-[30px] mt-[20px]"
      style={{ background: "linear-gradient(0deg, #025877, #025877)" }}
    >
      <h1 className="font-bold text-[20px] md:text-[clamp(20px,2.8vw,42px)] leading-[100%] md:leading-[1.2] m-0 text-white whitespace-nowrap flex-1 min-w-0 shrink"
        style={{ fontFamily: "SF Pro, -apple-system, BlinkMacSystemFont, sans-serif" }}
      >
        {title}
      </h1>

      <img
        src={headerImage}
        alt="Header Visual"
        className="h-[200px] object-contain shrink-0 ml-[105px]"
      />
    </header>
  );
};

export default PageHeader;
