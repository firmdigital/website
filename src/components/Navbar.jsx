import { useEffect, useState } from "react";
import { navlinks } from "../Navlinks";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    const sectionActive = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveMenu(id);
          }
        });
      },
      { threshold: 0.7 }
    );

    const sections = document.querySelectorAll(
      "about",
      "service",
      "contact",
      "project",
      "blog"
    );

    sections.forEach((section) => {
      sectionActive.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        sectionActive.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (mobileMenu) {
      document.body.classList.add("no-scroll");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("no-scroll");
      document.body.style.overflow = originalStyle;
    }

    // Nettoyage : s'exécute lorsque le composant est démonté ou avant que l'effet se réexécute
    return () => {
      document.body.classList.remove("no-scroll");
      document.body.style.overflow = originalStyle;
    };
  }, [mobileMenu]);

  return (
    <div className="w-full bg-transparent -z-50 py-5 mx-auto max-w-[1920px] xl:px-48 md:px-8 px-4">
      {/* Desktop Menu */}
      <div className="lg:flex hidden w-full items-center justify-between gap-8">
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
        <div className="flex items-center lg:gap-16 gap-10">
          {navlinks.map((nav) => {
            return (
              <div key={nav.id}>
                <a
                  href={nav.href}
                  onClick={(e) => {
                    e.preventDefault(); // Empêche le comportement par défaut du lien
                    setActiveMenu(nav.href);
                    document
                      .getElementById(nav.href.substring(1))
                      .scrollIntoView({
                        behavior: "smooth", // Active l'animation de défilement
                      });
                  }}
                  className={`${
                    activeMenu === nav.href &&
                    "text-[#5FC4E6] font-semibold text-base border-b-[#5FC4E6] border-b-2 border-r-[#5FC4E6] border-r-2 shadow-lg p-2 rounded"
                  } text-black cursor-pointer hover:text-[#5FC4E6] font-semibold text-base hover:border-b-[#5FC4E6] hover:border-b hover:border-r-[#5FC4E6] hover:border-r hover:p-2 hover:rounded hover:scale-95 transition-all duration-300`}
                >
                  {nav.name}
                </a>
              </div>
            );
          })}
        </div>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault(); // Empêche le comportement par défaut du lien
            setActiveMenu("#contact");
            document.getElementById("contact").scrollIntoView({
              behavior: "smooth", // Active l'animation de défilement
            });
            setMobileMenu(false);
          }}
          className="bg-[#5FC4E6] text-semibold hover:bg-transparent hover:text-[#5FC4E6] duration-300 transition-all hover:scale-100 hover:border-[#5FC4E6] hover:border-2 text-white text-sm px-4 py-2 rounded-full hover:shadow-md hover:shadow-[#5FC4E6]/20"
        >
          Nous Contacter
        </a>
      </div>
      {/* End Desktop Menu */}

      {/* Mobile menu */}
      <div className="lg:hidden z-[999]">
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
            className="w-8 h-8 text-[#5FC4E6] font-extrabold cursor-pointer transition-all duration-500 hover:scale-95"
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
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
          <div className="h-full min-h-full z-50 translate-x-[-0%] ease-in-out transition-all duration-500 bg-white absolute inset-0 p-5">
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
            <div className="flex flex-col gap-10 pt-8 pb-2">
              {navlinks.map((nav) => {
                return (
                  <div key={nav.id}>
                    <a
                      href={nav.href}
                      onClick={(e) => {
                        e.preventDefault(); // Empêche le comportement par défaut du lien
                        setActiveMenu(nav.href);
                        document
                          .getElementById(nav.href.substring(1))
                          .scrollIntoView({
                            behavior: "smooth", // Active l'animation de défilement
                          });
                        setMobileMenu(false);
                      }}
                      className={`${
                        activeMenu === nav.href &&
                        "text-[#5FC4E6] font-semibold text-base border-b-[#5FC4E6] border-b-2 border-r-[#5FC4E6] border-r-2 shadow-lg p-2 rounded"
                      } font-semibold text-base cursor-pointer`}
                    >
                      {nav.name}
                    </a>
                  </div>
                );
              })}
            </div>
            <hr className="border-[#5FC4E6]/40 mb-5" />
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault(); // Empêche le comportement par défaut du lien
                setActiveMenu("#contact");
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth", // Active l'animation de défilement
                });
                setMobileMenu(false);
              }}
              className="bg-[#5FC4E6] text-semibold hover:bg-transparent hover:text-[#5FC4E6] duration-300 transition-all hover:scale-100 hover:border-[#5FC4E6] hover:border-2 text-white text-sm px-4 py-2 rounded-full hover:shadow-md hover:shadow-[#5FC4E6]/20"
            >
              Nous Contacter
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
