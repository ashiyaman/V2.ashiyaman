import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./tooltip.css"; // Make sure this path is correct

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className={`p-[2px] rounded-full bg-gradient-to-r from-red-400 via-purple-500 to-cyan-400 transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-transparent rounded-full">
          <button
            onClick={handleScrollTop}
            aria-label="Scroll to Top"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-transparent group relative"
          >
            <div className="w-full h-full flex items-center justify-center rounded-full bg-transparent group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:via-purple-500 group-hover:to-cyan-400 transition-all duration-300">
              <FaArrowUp className="text-xl text-slate-100 group-hover:text-slate-900 transition-colors duration-300" />
            </div>
            <span className="tooltip w-30">Scroll to Top</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScrollToTop;
