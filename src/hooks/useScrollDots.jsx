import { useRef, useState, useEffect } from 'react';

const useScrollDots = (itemCount) => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const handleScroll = () => {
            const cardWidth = el.scrollWidth / itemCount;
            const index = Math.round(el.scrollLeft / cardWidth);
            setActiveIndex(Math.min(index, itemCount - 1));
        };

        el.addEventListener('scroll', handleScroll, { passive: true });
        return () => el.removeEventListener('scroll', handleScroll);
    }, [itemCount]);

    const scrollToIndex = (index) => {
        const el = scrollRef.current;
        if (!el) return;
        const cardWidth = el.scrollWidth / itemCount;
        el.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
        setActiveIndex(index);
    };

    return { scrollRef, activeIndex, scrollToIndex };
};

export default useScrollDots;