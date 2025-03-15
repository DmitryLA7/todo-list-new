import { useEffect, useRef, useState } from "react";

const useUserScroll = () => {
    const [isUserScrolled, setIsUserScrolled] = useState(false);
    const scrollTimer = useRef<NodeJS.Timeout>(null);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const onScroll = () => {
        if (!isUserScrolled) setIsUserScrolled(true)
        if (scrollTimer.current) clearTimeout(scrollTimer.current);
        scrollTimer.current = setTimeout(() => setIsUserScrolled(false), 200);
    };

    return isUserScrolled
}

export default useUserScroll