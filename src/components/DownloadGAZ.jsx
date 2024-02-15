import React from "react";

function DownloadGAZ() {
  return (
    <div className="mx-auto max-w-7xl py-24">
      <div className="relative isolate overflow-hidden bg-[#5FC4E6] px-6 pt-16 shadow-2xl rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#000" />
              <stop offset={1} stopColor="#000" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Utilisez le gaz avec
            <br />
            sérénité.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Dispositif qui vise à préserver et à sauver des vies humaines contre
            les accidents domestiques dûs au cas d'oubli ou de fuite de gaz.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <div className="rounded-md bg-white flex items-center justify-center gap-2  px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              <img src="../assets/app-store.png" alt="" className="w-5 h-5" />
              <span className="md:font-semibold md:text-base text-sm truncate">
                App Store
              </span>
            </div>
            <div className="text-sm flex items-center border rounded px-3.5 py-2 justify-center gap-2 font-semibold leading-6 text-white">
              <img src="../assets/play-store.png" alt="" className="w-5 h-5" />
              <span className="md:font-semibold md:text-base text-sm truncate">
                App Store
              </span>
            </div>
          </div>
        </div>
        <div className="relative mt-16 h-80 lg:mt-8">
          <img
            className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="App screenshot"
            width={1824}
            height={1080}
          />
        </div>
      </div>
    </div>
  );
}

export default DownloadGAZ;
