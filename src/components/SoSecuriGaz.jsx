import { memo, useEffect, useState } from "react";
import AlertModal from "./Alert";
import AOS from "aos";
import "aos/dist/aos.css";
import DemoVideo from "./DemoVideo.jsx";

function SoSecuriGaz() {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {showAlert && <AlertModal setClose={setShowAlert} />}

      <div className="bg-white py-20">
        <div className="relative isolate">
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
          <div id="sosecurigaz">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <span className="bg-[#5FC4E6]/30 py-1.5 items-center px-6 w-fit rounded-full border border-[#5FC4E6] text-[10px] text-gray-500">
                  NOS PROJETS
                </span>
                <h1 className="text-4xl mt-5 font-bold tracking-tight text-gray-700 sm:text-6xl">
                  SO SECURIGAZ
                </h1>
                <p className="mt-6 text-base font-medium leading-8 text-gray-600">
                  SO SECURIGAZ est un dispositif qui vise à préserver et à
                  sauver des vies humaines contre les accidents domestiques dûs
                  au cas d&apos;oubli ou de fuite de gaz.
                </p>
                <div className="mt-10 flex sm:flex-row flex-col  items-center justify-center gap-4">
                  <div
                    onClick={() => setShowAlert(true)}
                    className="rounded-md sm:w-fit w-full justify-center cursor-pointer flex items-center gap-1 bg-[#5FC4E6] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#5FC4E6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5FC4E6]"
                  >
                    <img
                      src="../assets/play-store.webp"
                      alt=""
                      className="w-5"
                    />
                    <span>Play Store</span>
                  </div>
                  <div
                    onClick={() => setShowAlert(true)}
                    className="rounded-md sm:w-fit w-full justify-center cursor-pointer flex items-center gap-1 bg-white ring-1 ring-black px-3.5 py-2 text-sm font-semibold text-black shadow-sm"
                  >
                    <img src="../assets/app-store.webp" alt="" className="w-5" />
                    <span>App Store</span>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-out" data-aos-duration="3000" className="mt-16 flex sm:mt-24 items-center justify-center sm:mx-24 mx-6">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <img
                    src="../assets/sosecurigaz.webp"
                    alt="App screenshot"
                    width={900}
                    height={144}
                    className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <DemoVideo />
        </div>
      </div>
    </>
  );
}

export default memo(SoSecuriGaz)