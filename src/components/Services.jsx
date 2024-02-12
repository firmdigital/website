import React from "react";
// import Swiper core and required modules
import { Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Services() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center gap-6">
        <span className="bg-[#5FC4E6]/30 py-1.5 items-center px-6 w-fit rounded-full border border-[#5FC4E6] text-[10px] text-gray-500">
          NOS SERVICES
        </span>
        <h1 className="md:text-5xl text-3xl font-thin text-center leading-7">
          Ce que{" "}
          <span className="text-[#5FC4E6] hover:text-orange-500 font-bold">
            NOUS FAISONS
          </span>{" "}
          réellement
        </h1>
      </div>

      {/* Service card */}
      <div className="w-full md:flex md:flex-col hidden gap-3 py-10">
        <div className="flex items-center w-full gap-3">
          <div className="w-[55%] bg-[#5FC4E6]/30 rounded-lg flex items-start p-8 h-52 gap-6">
            <div className="flex gap-2 flex-col">
              <h1 className="font-semibold leading-5 text-xl">
                DEVELOPPEMENT D'APPLICATION
              </h1>
              <span className="text-base font-thin">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </span>
            </div>
            <div className="px-5 bg-[#5FC4E6] rounded-md h-full items-center justify-center flex">
              <img
                src="../assets/dev.png"
                alt="DEVELOPPEMENT D'APPLICATION"
                className="object-cover lg:w-[70%] md:w-full aspect-square"
              />
            </div>
          </div>
          <div className="w-[45%] bg-[#5FC4E6]/30 rounded-lg flex items-start p-8 h-52 gap-6">
            <div className="flex gap-2 flex-col">
              <h1 className="font-semibold leading-5 text-xl">UX UI DESIGN</h1>
              <span className="text-base font-thin">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </span>
            </div>
            <div className="px-5 bg-[#5FC4E6] rounded-md h-full items-center justify-center flex">
              <img
                src="../assets/ux-ui.png"
                alt="Ux UI design"
                className="object-cover lg:w-[70%] md:w-full aspect-square"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center w-full gap-3">
          <div className="w-[45%] bg-[#5FC4E6]/30 rounded-lg flex flex-row-reverse items-start p-8 h-52 gap-6">
            <div className="flex gap-2 flex-col">
              <h1 className="font-semibold leading-5 text-xl">FORMATIONS</h1>
              <span className="text-base font-thin">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </span>
            </div>
            <div className="px-5 bg-[#5FC4E6] rounded-md h-full items-center justify-center flex">
              <img
                src="../assets/formations.png"
                alt=""
                className="object-cover lg:w-[70%] md:w-full"
              />
            </div>
          </div>
          <div className="w-[55%] bg-[#5FC4E6]/30 rounded-lg flex flex-row-reverse items-start p-8 h-52 gap-6">
            <div className="flex gap-2 flex-col">
              <h1 className="font-semibold leading-5 text-xl">
                DESIGN 3D & PROTOTYPAGE
              </h1>
              <span className="text-base font-thin">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </span>
            </div>
            <div className="px-5 bg-[#5FC4E6] rounded-md h-full items-center justify-center flex">
              <img
                src="../assets/design.png"
                alt=""
                className="object-cover lg:w-[70%] md:w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Servie */}
      <div className="w-full flex md:hidden py-10 px-2">
        <Swiper
          modules={[Pagination, A11y]}
          className="mySwiper"
          spaceBetween={10}
          slidesPerView={1.1}
          pagination={{ clickable: false, dynamicBullets: true }}
        >
          <SwiperSlide>
            <div className="w-full bg-[#5FC4E6]/30 rounded-lg flex flex-col items-start p-4 h-96 gap-6">
              <div className="w-full h-[50%] bg-[#5FC4E6] rounded-md items-center justify-center flex">
                <img
                  src="../assets/dev.png"
                  alt="DEVELOPPEMENT D'APPLICATION"
                  className="object-cover aspect-square"
                />
              </div>
              <div className="flex gap-2 flex-col">
                <h1 className="font-semibold leading-5 text-xl">
                  DEVELOPPEMENT D'APPLICATION
                </h1>
                <span className="text-base font-light">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.{" "}
                </span>
              </div>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full bg-[#5FC4E6]/30 rounded-lg flex flex-col items-start p-4 h-96 gap-6">
              <div className="w-full h-[50%] bg-[#5FC4E6] rounded-md items-center justify-center flex">
                <img
                  src="../assets/ux-ui.png"
                  alt="UX UI DESIGN"
                  className="object-cover aspect-square"
                />
              </div>
              <div className="flex gap-2 flex-col">
                <h1 className="font-semibold leading-5 text-xl">
                  UX UI DESIGN
                </h1>
                <span className="text-base font-light">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.{" "}
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full bg-[#5FC4E6]/30 rounded-lg flex flex-col items-start p-4 h-96 gap-6">
              <div className="w-full h-[50%] bg-[#5FC4E6] rounded-md items-center justify-center flex">
                <img
                  src="../assets/formations.png"
                  alt="FORMATIONS"
                  className="object-cover aspect-square"
                />
              </div>
              <div className="flex gap-2 flex-col">
                <h1 className="font-semibold leading-5 text-xl">
                  FORMATIONS
                </h1>
                <span className="text-base font-light">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.{" "}
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full bg-[#5FC4E6]/30 rounded-lg flex flex-col items-start p-4 h-96 gap-6">
              <div className="w-full h-[50%] bg-[#5FC4E6] rounded-md items-center justify-center flex">
                <img
                  src="../assets/design.png"
                  alt="DESIGN 3D & PROTOTYPAGE"
                  className="object-cover aspect-square"
                />
              </div>
              <div className="flex gap-2 flex-col">
                <h1 className="font-semibold leading-5 text-xl">
                  DESIGN 3D & PROTOTYPAGE
                </h1>
                <span className="text-base font-light">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.{" "}
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

      </div>
    </div>
  );
}

export default Services;
