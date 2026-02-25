import {
    ChevronLeftIcon, ChevronRightIcon, providerIcon
} from '../../assets/icons';

// import your provider images
import providerimg from "../../assets/images/providerimg.png";
import providerimg2 from "../../assets/images/providerimg2.svg";
import providerimg3 from "../../assets/images/providerimg3.svg";

const providers = [
    { id: 1, image: providerimg, name: "Pragmatic Play" },
    { id: 2, image: providerimg2, name: "Skywind" },
    { id: 3, image: providerimg3, name: "Creedroomz" },
    { id: 4, image: providerimg, name: "Pragmatic Play" },
    { id: 5, image: providerimg2, name: "Skywind" },
    { id: 6, image: providerimg, name: "Pragmatic Play" },
    { id: 7, image: providerimg2, name: "Skywind" },
];
const ChevronLeft = () => (
    <img
        src={ChevronLeftIcon}
        alt="left"
        className="w-[18px] h-[18px] object-contain"
    />
);

const ChevronRight = () => (
    <img
        src={ChevronRightIcon}
        alt="right"
        className="w-[18px] h-[18px] object-contain"
    />
);
 const Casinoprovider = () => {
    return (
        <div className="bg-white rounded-xl p-4 md:p-5 mb-0 md:mb-0">

            {/* Header */}
            <div className="flex items-center justify-between mb-4">

                {/* Left title */}
                <div className="flex items-center gap-2">
                    <img
                        src={providerIcon}
                        alt="providers"
                        className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] object-contain"
                    />
                    <span className="font-['SF_Pro'] font-[700] text-[24px] leading-[20px] text-[#0D0C22]">
                        Providers
                    </span>
                </div>

                {/* Right controls */}
                <div className="flex items-center gap-3 md:gap-4">
                    {/* Arrows — desktop only */}
                    <div className="hidden md:flex items-center gap-2">
                        <button
                            onClick={() => scroll('left')}
                            className="w-[44px] h-[44px] flex items-center justify-center border border-[#1CD4FF] rounded-lg bg-white hover:bg-[#f0fdff] transition-colors cursor-pointer"
                        >
                            <ChevronLeft />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-[44px] h-[44px] flex items-center justify-center border border-[#1CD4FF] rounded-lg bg-white hover:bg-[#f0fdff] transition-colors cursor-pointer"
                        >
                            <ChevronRight />
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-[44px] bg-[#6b7280]/30" />

                    {/* See All */}
                    <button className="border-2 border-[#1CD4FF] text-[#1CD4FF] bg-white rounded-lg px-4 md:px-8 h-[36px] md:h-[44px] text-[14px] leading-[20px] font-[590] font-['SF_Pro'] cursor-pointer hover:bg-[#f0fdff] transition-colors whitespace-nowrap">
                        View All
                    </button>
                </div>
            </div>

            {/* Providers list */}
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">

                {providers.map((provider) => (
                    <div
                        key={provider.id}
                        className="min-w-[140px] h-[60px] bg-[#F3F4F6] rounded-lg flex items-center justify-center px-4"
                    >
                        <img
                            src={provider.image}
                            alt={provider.name}
                            className="max-h-[32px] object-contain"
                        />
                    </div>
                ))}

            </div>

        </div>
    );
};
export default Casinoprovider;