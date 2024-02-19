const tech = [
  { id: 1, name: "Java Script", logo: "../assets/tech/script-java.png" },
  { id: 2, name: "Python", logo: "../assets/tech/python.png" },
  { id: 3, name: "Php", logo: "../assets/tech/php.png" },
  { id: 4, name: "Java", logo: "../assets/tech/java.png" },
];

function TechStack() {
  return (
    <div className="w-full flex flex-col gap-4">
      <span className="bg-[#5FC4E6]/30 py-1.5 items-center px-6 w-fit rounded-full border border-[#5FC4E6] text-[10px] text-gray-500">
        TECHNOLOGIES
      </span>
      <h4 className="md:text-5xl font-thin sm:text-3xl text-2xl">
        Decouvrez les
        <span className="font-bold text-[#5FC4E6] hover:text-orange-500">
          TECHNOLOGIES
        </span>
        <br /> que nous utilisons quotidiennement
      </h4>
      <div className="relative isolate overflow-hidden bg-slate-900 rounded-2xl shadow-sm shadow-slate-400  py-10">
        <img
          src="https://tms-outsource.com/blog/wp-content/uploads/2019/02/luca-bravo-217276-unsplash.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-10"
        />
        <div className="relative mx-auto max-w-7xl">
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
          <dl className="mx-auto items-center justify-evenly sm:flex grid grid-cols-2 max-w-2xl text-white sm:gap-5 gap-10 lg:max-w-none">
            {tech.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col gap-2 md:flex-row items-center border-white/10"
              >
                <img
                  src={stat.logo}
                  alt=""
                  className="w-6 md:w-10 object-cover"
                />
                <span className="text-lg md:text-3xl font-semibold">
                  {stat.name}
                </span>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
