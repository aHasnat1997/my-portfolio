'use client';

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
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
    <div className="fixed bottom-5 right-5">
      {isVisible && (
        <Button
          variant={'outline'}
          size={'icon'}
          onClick={scrollToTop}
          className="size-20 text-3xl"
        >
          <FaArrowUp />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
