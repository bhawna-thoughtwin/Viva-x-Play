const ScrollDots = ({ count, activeIndex, scrollToIndex, className = '' }) => (
    <div className={`flex justify-center items-center gap-1.5 mt-3.5 ${className}`}>
        {Array.from({ length: count }).map((_, i) => (
            <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`h-[6px] rounded-full transition-all duration-300 cursor-pointer border-none p-0 ${i === activeIndex
                        ? 'w-[22px] bg-[#4CAF50]'
                        : 'w-[22px] bg-[#D0D0D0]'
                    }`}
                aria-label={`Go to slide ${i + 1}`}
            />
        ))}
    </div>
);

export default ScrollDots;