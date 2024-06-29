import { useState } from "react";
import AlertModal from "./Alert";

function Hero() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      {showAlert && <AlertModal setClose={setShowAlert} />}

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
          <div className="w-full md:pt-20 pt-5 mx-auto max-w-[1920px] xl:px-48 md:px-8 px-4">
            <div className="flex flex-col lg:items-start items-center justify-center gap-6 lg:justify-evenly">
              <h1 className="md:text-5xl text-3xl lg:text-left text-center text-gray-700">
                Construisons ensemble vos <br />
                <span className="bg-gradient-to-r py-1 font-black from-[#5FC4E6] to-orange-500 inline-block text-transparent bg-clip-text">
                  projets digitaux.
                </span>
              </h1>
              <p className="text-gray-700 lg:text-left text-center font-medium max-w-xl lg:text-lg text-base">
                <span className="font-semibold hover:text-orange-500">
                  FIRM DIGITAL SARL
                </span>{" "}
                est une entreprise dynamique opérant dans le domaine digital,
                offrant une gamme variée de services pour répondre aux besoins
                diversifiés de ses clients.
              </p>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault(); // Empêche le comportement par défaut du lien
                  document.getElementById("about").scrollIntoView({
                    behavior: "smooth", // Active l'animation de défilement
                  });
                }}
                className="relative w-fit py-5 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-slate-500 ml-2 text-sm">
                    En Savoir Plus
                  </span>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-[#5FC4E6]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
                <img
                  src="../assets/brush.png"
                  alt=""
                  className="w-full absolute -bottom-2 -z-10 right-3"
                />
              </a>
            </div>
          </div>

          <div className="w-full lg:block hidden">
            <img src="../assets/build.svg" alt="" className="w-[70%]" />
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

        {/* Call to action */}

        <div className="p-10 my-10 max-w-[1920px] xl:mx-48 md:mx-8 mx-4 bg-[#5FC4E6] shadow-lg rounded-lg shadow-slate-600/10">
          <div className="flex md:flex-row flex-col items-center gap-8 w-full">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault(); // Empêche le comportement par défaut du lien
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth", // Active l'animation de défilement
                });
              }}
              className="hover:cursor-pointer transition-all duration-300 hover:scale-95 hover:shadow-md hover:shadow-slate-500/20 hover:bg-slate-700 flex items-center justify-between gap-5 bg-white p-4 w-full rounded-md"
            >
              <h4 className="text-[#5FC4E6] text-sm truncate">
                J&apos;ai un <br />{" "}
                <span className="font-semibold">Projet Digital</span>
              </h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#5FC4E6]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault(); // Empêche le comportement par défaut du lien
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth", // Active l'animation de défilement
                });
              }}
              className="hover:cursor-pointer transition-all duration-300 hover:scale-95 hover:shadow-md hover:shadow-slate-500/20 hover:bg-slate-700 flex items-center justify-between gap-5 bg-white p-4 w-full rounded-md"
            >
              <h4 className="text-[#5FC4E6] text-sm truncate">
                J&apos;ai besoin d&apos;une <br />{" "}
                <span className="font-semibold">Expertise UX/UI</span>
              </h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#5FC4E6]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault(); // Empêche le comportement par défaut du lien
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth", // Active l'animation de défilement
                });
              }}
              className="hover:cursor-pointer transition-all duration-300 hover:scale-95 hover:shadow-md hover:shadow-slate-500/20 hover:bg-slate-700 flex items-center justify-between gap-5 bg-white p-4 w-full rounded-md"
            >
              <h4 className="text-[#5FC4E6] text-sm truncate">
                J&apos;ai besoin d&apos;une <br />{" "}
                <span className="font-semibold">Expertise Technologique</span>
              </h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#5FC4E6]"
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
      </div>
    </>
  );
}

export default Hero;
