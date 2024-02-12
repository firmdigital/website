import React, { useState } from "react";
import { navlinks } from "../Navlinks";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="w-full bg-black py-5 mx-auto max-w-[1920px] xl:px-48 md:px-8 px-4">
      {/* Desktop Menu */}
      <div className="md:flex hidden w-full items-center justify-between gap-8">
        {/* Logo */}
        <a
          href="/"
          className="hover:cursor-pointer transition-all duration-500 hover:scale-110"
        >
          <img
            alt="logo"
            width={100}
            height={100}
            src="../assets/firm-digital-logo.png"
          />
        </a>
        {/* Nav links */}
        <div className="flex items-center gap-10">
          {navlinks.map((nav) => {
            return (
              <div key={nav.id}>
                <a
                  href={nav.href}
                  className="text-white cursor-pointer font-semibold text-base hover:bg-[#5FC4E6] hover:p-2 hover:rounded hover:text-gray-700 hover:scale-95 transition-all duration-300"
                >
                  {nav.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      {/* End Desktop Menu */}

      {/* Mobile menu */}
      <div className="md:hidden">
        <div className="flex items-center gap-6 justify-between">
          {/* Logo */}
          <a
            href="/"
            className="hover:cursor-pointer transition-all duration-500 hover:scale-110"
          >
            <img
              alt="logo"
              width={80}
              height={80}
              src="../assets/firm-digital-logo.png"
            />
          </a>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-white cursor-pointer transition-all duration-500 hover:scale-95"
            onClick={() => setMobileMenu(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        {/* Sidebar Mobile menu */}
        {mobileMenu && (
          <div className="h-full z-50 translate-x-[-0%] ease-in-out transition-all duration-500 bg-white absolute inset-0 p-5">
            <div className="flex items-center justify-between">
              <a
                href="/"
                className="hover:cursor-pointer transition-all duration-500 hover:scale-95"
              >
                <img
                  alt="logo"
                  width={100}
                  height={100}
                  src="../assets/firm-digital-logo.png"
                />
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 text-gray-100 bg-[#5FC4E6] rounded-full p-1 cursor-pointer transition-all duration-500 hover:scale-95"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            <hr className="w-full border-[#5FC4E6]/20 my-1" />
            <div className="flex flex-col gap-10 py-5">
              {navlinks.map((nav) => {
                return (
                  <div key={nav.id}>
                    <a
                      href={nav.href}
                      className="font-semibold text-base cursor-pointer"
                    >
                      {nav.name}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
