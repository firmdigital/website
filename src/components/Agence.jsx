function Agence() {
  return (
    <div id="about" className="w-full flex md:flex-row flex-col md:justify-between md:items-center md:gap-10 gap-5">
      <div className="flex flex-col gap-3 xl:max-w-[55%] md:max-w-[50%] max-w-full">
        <span className="bg-[#5FC4E6]/30 py-1.5 px-6 w-fit rounded-full border border-[#5FC4E6] text-[10px] text-gray-500">
          DÉCOUVREZ
        </span>
        <h1 className="md:text-5xl text-3xl font-thin">
          Notre{" "}
          <span className="font-bold text-[#5FC4E6] hover:text-orange-500">
            agence
          </span>
        </h1>
        <p className="md:text-lg text-base font-light text-gray-500 mt-3 text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry&apos;s standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>

        <a
          href="/"
          className="mt-10 py-1.5 px-4 bg-[#5FC4E6] w-fit flex items-center justify-between gap-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-500/40 hover:bg-orange-500"
        >
          <span className="text-white text-sm">Je veux en savoir plus</span>
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
      <div className="w-full relative md:border-2 rounded-lg md:border-[#5FC4E6] h-96">
        <img src="../assets/hero.png" alt="" className="object-cover h-full w-full md:absolute md:top-5 md:right-5 rounded-lg transition-all duration-300 md:hover:top-0 md:hover:right-0 md:hover:rounded-md md:hover:scale-95"/>
      </div>
    </div>
  );
}

export default Agence;
