import React from "react";
import Layout from "./Lajout";
import DownloadGAZ from "./DownloadGAZ";

const featuresGAZ = [
  { id: 1, description: "Détection des fuites de gaz butane" },
  { id: 2, description: "Détection des fuites de gaz butane" },
  { id: 3, description: "Détection des fuites de gaz butane" },
  { id: 4, description: "Détection des fuites de gaz butane" },
];

function FeaturesGaZ() {
  return (
    <div className="h-full">
      {/* Fonctionnalité */}
      <Layout>
        {/* <div className="w-full items-stretch flex sm:flex-row flex-col gap-10">
          <div className="w-full h-full">
            <div className="relative isolate overflow-hidden bg-gray-900 rounded-2xl shadow-sm shadow-slate-400 py-10">
              <img
                src="../assets/gaz.png"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
              />
              <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div
                  className="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
                  aria-hidden="true"
                >
                  <div
                    className="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#5FC4E6] to-orange-500 opacity-60"
                    style={{
                      clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-7">
                  <h1 className="font-bold text-2xl text-white border-b">
                    Fonctionnalités
                  </h1>
                  <div className="flex flex-col items-start gap-4">
                    {featuresGAZ.map((f) => (
                      <div className="flex items-center gap-4">
                        <div
                          key={f.id}
                          className="w-7 h-7 flex items-center justify-center bg-[#5FC4E6] rounded-tl-md rounded-br-md text-white font-semibold text-xl"
                        >
                          {f.id}
                        </div>
                        <h4 className="md:text-base text-sm text-white">
                          {f.description}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex flex-col gap-5 sm:px-0 px-2">
            <p className="w-full lglg::tex py-1t-base text-sm text-justify text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="w-full lglg::tex py-1t-base text-sm text-justify text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="flex flex-col gap-2">
              <span className="md:text-base font-semibold">
                Télécharger l'application
              </span>
              <div className="flex sm:flex-row flex-col items-center gap-3">
                <button className="sm:w-fit w-full hover:shadow-lg hover:shadow-gray-700/30 hover:-translate-y-1 duration-300 transition-all px-6 py-2 bg-gray-900 rounded ring-1 ring-black text-white flex items-center gap-1 justify-center">
                  <img
                    src="../assets/app-store.png"
                    alt=""
                    className="w-5 h-5"
                  />
                  <span className="md:font-semibold md:text-base text-sm truncate">
                    App Store
                  </span>
                </button>
                <button className="sm:w-fit w-full hover:shadow-lg hover:shadow-gray-700/30 hover:-translate-y-1 duration-300 transition-all px-6 py-2 shadow-sm bg-white ring-1 ring-black rounded text-black flex items-center gap-1 justify-center">
                  <img
                    src="../assets/play-store.png"
                    alt=""
                    className="w-5 h-5"
                  />
                  <span className="md:font-semibold md:text-base text-sm truncate">
                    Play Store
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div> */}

        <DownloadGAZ />

        {/* Video */}
        {/* <div className="w-full flex flex-col mt-20 gap-5 items-center justify-center">
          <h1 className="md:text-5xl text-3xl text-center font-thin">
            Vidéo de démonstration <br /> du dispositif{" "}
            <span className="font-bold hover:text-orange-500">
              SO SECURIGAZ
            </span>{" "}
          </h1>

          <div className="relative w-full bg-gray-700 rounded-2xl">
            <img
              src="../assets/hero.png"
              alt="hero"
              className="w-full object-cover rounded-2xl md:h-[400px] opacity-30 h-[300px]"
            />
            <div className="absolute md:p-8 p-5 bg-[#5FC4E6] hover:shadow-white/50 hover:shadow-md hover:cursor-pointer duration-300 transition-all hover:scale-105 rounded-full bottom-[40%] lg:left-[47%] sm:left-[45%] left-[40%] ">
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
        </div> */}
      </Layout>
    </div>
  );
}

export default FeaturesGaZ;
