import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="lg"
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-hero hover:opacity-90 transition-all duration-300 transform hover:scale-110 shadow-glow"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop; 