// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

const posts = [
  {
    id: 1,
    fullname: "Manuela ALOKPO",
    position: "Gérante",
    imageUrl:
      "./assets/team/Alokpo-profil.jpeg",
    social: [
      {
        name: "linkedin",
        url: "",
        logo: "https://api.iconify.design/brandico:linkedin-rect.svg",
      },
      {
        name: "twitter",
        url: "",
        logo: "https://api.iconify.design/fa6-brands:square-x-twitter.svg",
      },
    ],
  },
  {
    id: 2,
    fullname: "Mohamed Lamine KONE",
    position: "Développeur Fullstack",
    imageUrl: "./assets/team/Malla.jpg",
    social: [
      {
        name: "linkedin",
        url: "",
        logo: "https://api.iconify.design/brandico:linkedin-rect.svg",
      },
      {
        name: "github",
        url: "",
        logo: "https://api.iconify.design/logos:github-icon.svg",
      },
      {
        name: "twitter",
        url: "",
        logo: "https://api.iconify.design/fa6-brands:square-x-twitter.svg",
      },
    ],
  },
  {
    id: 3,
    fullname: "Fatoumata THIAM",
    position: "Ingénieur electronicienne",
    imageUrl:
      "./assets/team/Thiam.jpeg",
    social: [
      {
        name: "linkedin",
        url: "",
        logo: "https://api.iconify.design/brandico:linkedin-rect.svg",
      },
      {
        name: "twitter",
        url: "",
        logo: "https://api.iconify.design/fa6-brands:square-x-twitter.svg",
      },
    ],
  },
  {
    id: 4,
    fullname: "Sidi Yaya SIMAGA",
    position: "Développeur Fullstack",
    imageUrl:
      "./assets/team/Simaga.jpeg",
    social: [
      {
        name: "linkedin",
        url: "",
        logo: "https://api.iconify.design/brandico:linkedin-rect.svg",
      },
      {
        name: "github",
        url: "",
        logo: "https://api.iconify.design/logos:github-icon.svg",
      },
      {
        name: "twitter",
        url: "",
        logo: "https://api.iconify.design/fa6-brands:square-x-twitter.svg",
      },
    ],
  },
  // Plus de posts...
];

export default function Team() {
  return (
    <div className="bg-slate-50 px-5 py-20 my-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Notre Équipe{" "}
            <span className="text-[#5FC4E6] hover:text-orange-500">
              Exceptionnelle
            </span>
          </h2>
          <p className="mt-2 text leading-8 text-gray-600">
            Découvrez les visages derrière notre succès et apprenez à connaître
            les personnes qui font de <b>FIRM DIGITAL</b> un acteur majeur de
            l&apos;ère digitale.
          </p>
        </div>
        <div className="mx-auto sm:grid hidden mt-16 max-w-2xl auto-rows-fr grid-cols-1 gap-x-10 sm:gap-y-36 sm:grid-cols-2 sm:mt-32 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-[#5FC4E6] relative p-4 rounded-lg">
              <img
                src="https://i.pinimg.com/564x/d3/55/86/d355861b3858aee85efe4c2b45afd001.jpg"
                alt=""
                className="absolute pointer-events-none inset-0 opacity-5 h-full w-full object-fill"
              />
              <div className="flex flex-col items-center">
                <img
                  alt={post.fullname}
                  className="rounded-lg hover:-translate-y-2 duration-300 shadow-md transition-all border-2 z-10 border-white -mt-[45%] sm:-mt-[35%] lg:-mt-[40%] xl:-mt-[50%] mb-4"
                  src={post.imageUrl}
                  style={{
                    aspectRatio: "150/150",
                    objectFit: "cover",
                  }}
                />
                <div className="text-center flex flex-col items-center justify-center z-10 truncate">
                  <h4 className="font-bold text-gray-50">{post.fullname}</h4>
                  <p className="text-sm text-gray-700">{post.position}</p>
                  <div className="flex items-center gap-2">
                    {post.social.map((s) => (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 hover:-translate-y-1 transition-all duration-300"
                      >
                        <img src={s.logo} alt={s.name} className="w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Mobile Servie */}
        <div className="w-full flex sm:hidden py-10 px-8">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {posts.map((post) => (
              <SwiperSlide key={post.id}>
                <div
                  key={post.id}
                  className="bg-[#5FC4E6] relative p-4 rounded-lg"
                >
                  <img
                    src="https://i.pinimg.com/564x/d3/55/86/d355861b3858aee85efe4c2b45afd001.jpg"
                    alt=""
                    className="absolute pointer-events-none inset-0 opacity-5 h-full w-full object-fill"
                  />
                  <div className="flex flex-col items-center">
                    <img
                      alt={post.fullname}
                      className="rounded-lg hover:scale-105 duration-300 shadow-md transition-all border-2 z-10 border-white mb-4"
                      src={post.imageUrl}
                      style={{
                        aspectRatio: "150/150",
                        objectFit: "cover",
                      }}
                    />
                    <div className="text-center flex flex-col items-center justify-center z-10 truncate">
                      <h4 className="font-bold text-gray-50">
                        {post.fullname}
                      </h4>
                      <p className="text-sm text-gray-700">{post.position}</p>
                      <div className="flex items-center gap-2">
                        {post.social.map((s) => (
                          <a
                            key={s.name}
                            href={s.url}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-2 hover:-translate-y-1 transition-all duration-300"
                          >
                            <img src={s.logo} alt={s.name} className="w-5" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
