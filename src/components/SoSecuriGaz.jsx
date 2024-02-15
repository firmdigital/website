import React from "react";

function SoSecuriGaz() {
  return (
    <div className="w-full py-10 ">
      <div className="flex h-full flex-col gap-5 items-center relative justify-center">
        <h1 className="font-thin md:text-5xl text-3xl">
          SO <span className="font-bold hover:text-orange-500">SECURIGAZ</span>
        </h1>
        <div className="relative w-full md:mt-[13%] mt-[15%] isolate overflow-hidden bg-[#5FC4E6] md:py-[8%] py-[10%]">
          <img
            src="https://wallpapers.com/images/hd/texture-background-rkcpdtg3dxnfko8a.jpg"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-10"
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
          </div>
        </div>
        <img
          src="../assets/sosecurigaz.png"
          alt=""
          className="absolute md:w-[80%] w-full bottom-0"
        />
      </div>
    </div>
  );
}

export default SoSecuriGaz;
