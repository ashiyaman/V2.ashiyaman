import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const TopScroll = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowButton(true); 
            } else {
                setShowButton(false)
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        showButton && (
            <div className="w-full flex justify-center z-10">
                <div className="shadow-2xl border-slate-700 bg-gradient-to-r from-red-400 via-purple-500 to-cyan-400 rounded-full h-[70px] w-[70px] flex justify-center items-center fixed bottom-10 mx-auto p-5 transition-all hover:scale-110 hover:bg-gradient-to-l hover:from-cyan-400 hover:to-purple-500">
                    <a href="#" aria-label="Scroll to top" className="flex justify-center items-center">
                        <FaArrowUp fontSize={40} className="text-slate-800" />
                    </a>
                </div>
            </div>
        )
    );
}

export default TopScroll;
