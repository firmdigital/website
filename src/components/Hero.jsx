import React from "react";

function Hero() {
  return (
    <>
      <div className="relative mx-auto max-w-[1920px]">
        {/* Hero Image */}
        <img
          src="../assets/hero.png"
          alt="hero"
          className="w-full object-cover h-[500px]"
        />
        <div className="w-full absolute inset-0 h-[500px] bg-black/70 md:pt-20 pt-5 mx-auto max-w-[1920px] xl:px-48 md:px-8 px-4">
          <div className="flex flex-col items-start gap-6 justify-evenly">
            <h1 className="md:text-5xl text-3xl text-white">
              Construisons ensemble vos <br />
              <span className="font-bold text-[#5FC4E6] hover:text-orange-500">
                projets digitaux.
              </span>
            </h1>
            <p className="text-white font-light max-w-xl text-justify md:text-lg text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        {/* Polygon */}
        <img
          src="../assets/polygon.png"
          alt="polygon"
          className="absolute -bottom-60 xl:left-0 -left-16"
        />

        {/* Call to action */}
        <div className="p-10 absolute md:-bottom-20 -bottom-40 xl:right-48 xl:left-48 md:right-8 md:left-8 right-4 left-4 bg-white shadow-lg rounded-lg shadow-slate-600/10">
          <div className="flex md:flex-row flex-col items-center gap-8 w-full">
            <div className="hover:cursor-pointer transition-all duration-300 hover:scale-95 hover:shadow-md hover:shadow-slate-500/20 hover:bg-orange-500 flex items-center justify-between gap-5 bg-[#5FC4E6] p-4 w-full rounded-md">
              <h4 className="text-white text-sm truncate">
                J'ai un <br />{" "}
                <span className="font-semibold">Projet Digital</span>
              </h4>
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
            </div>

            <div className="hover:cursor-pointer transition-all duration-300 hover:scale-95 hover:shadow-md hover:shadow-slate-500/20 hover:bg-orange-500 flex items-center justify-between gap-5 bg-[#5FC4E6] p-4 w-full rounded-md">
              <h4 className="text-white text-sm truncate">
                J’ai besoin d’une <br />{" "}
                <span className="font-semibold">Expertise UX/UI</span>
              </h4>
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
            </div>

            <div className="hover:cursor-pointer transition-all duration-300 hover:scale-95 hover:shadow-md hover:shadow-slate-500/20 hover:bg-orange-500 flex items-center justify-between gap-5 bg-[#5FC4E6] p-4 w-full rounded-md">
              <h4 className="text-white text-sm truncate">
                J’ai besoin d’une <br />{" "}
                <span className="font-semibold">Expertise Technologique</span>
              </h4>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
