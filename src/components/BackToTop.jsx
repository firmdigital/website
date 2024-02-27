import { ArrowUpIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  // Fonction pour détecter le scroll
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          cursor: "pointer",
          backgroundColor: "#FF7109",
          padding: "10px",
          borderRadius: "100%",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          zIndex: "10",
        }}
      >
        <ArrowUpIcon className="w-5 text-white" />
      </button>
    )
  );
};

export default BackToTopButton;
