"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const container = document.querySelector("main");
        if (!container) return;

        const onScroll = () => {
            // Show if we've moved at least 1 full screen down
            setVisible(container.scrollTop > window.innerHeight * 0.5);
        };

        container.addEventListener("scroll", onScroll);
        return () => container.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        const container = document.querySelector("main");
        if (!container) return;
        container.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`
        fixed bottom-10 right-10 z-50 
        bg-white/10 hover:bg-white/20 
        backdrop-blur-md 
        border border-white/20 
        rounded-full p-4 
        transition-all
        ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
        >
            <ArrowUp className="text-white h-6 w-6" />
        </button>
    );
}