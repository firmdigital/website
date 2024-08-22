import { useCallback, memo, useEffect } from "react";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  const handleScroll = useCallback((id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        className="relative mx-auto max-w-[1920px]"
        style={{
          backgroundImage: "url('../assets/img/banner-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <Navbar />

        <div className="relative mx-auto max-w-[1920px]">
          <div className="relative flex items-center justify-between">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-orange-500 to-[#5FC4E6] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div className="w-full lg:py-20 py-10 xl:px-16 md:px-8 px-4">
              <div className="flex flex-col lg:items-start items-center justify-center gap-6 lg:justify-evenly">
                <h1 className="sm:text-3xl text-2xl xl:text-5xl lg:text-left text-center text-gray-200">
                  Construisons ensemble vos <br />
                  <span className="bg-gradient-to-r py-1 font-black from-[#5FC4E6] to-orange-500 inline-block text-transparent bg-clip-text">
                    projets digitaux.
                  </span>
                </h1>
                <p className="text-gray-200 lg:text-left text-center font-medium max-w-xl lg:text-lg text-base">
                  <span className="font-semibold hover:text-orange-500">
                    FIRM DIGITAL SARL
                  </span>{" "}
                  est une entreprise dynamique opérant dans le domaine digital,
                  offrant une gamme variée de services pour répondre aux besoins
                  diversifiés de ses clients.
                </p>
                <a
                  id="more"
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("about");
                  }}
                >
                  <span>
                    En savoir plus
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="w-full lg:block hidden -mr-40 p-10">
              <img
                src="../assets/img/header-img.svg"
                alt="header img"
                className="w-[70%] fade-down" />
            </div>
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#5FC4E6] to-orange-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Hero);