import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const posts = [
  {
    id: 1,
    fullname: "Manuela ALOKPO",
    position: "Gérante",
    imageUrl:
      "https://media.licdn.com/dms/image/D4D35AQF2ffw7eCBjmg/profile-framedphoto-shrink_400_400/0/1687550103900?e=1709222400&v=beta&t=f8nuvZ8Pi6s2VGw6pPy-y8hCR0lMsq6qZqHUGPivH3I",
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
    imageUrl:
      "https://lh3.googleusercontent.com/pw/ABLVV86KmS9soStGzzKjRlOKU5p4aqml6_f-RsnTFA_sC6hNs6F-_6rUWZv9mC4Vlph023HbfFfSnDt5Yd7fHNWXWUaBh--B2p4ISnyg_mBf2tHfJ42-XwVaWnZr_5UlcG017uCm5ulxr1eXIPBEa8k3YcCNDwBfNNI8cEKAkU4Pzt4b3U-qhvKU_KmQFzHawv_3OCmWReEZJa5BLRf5mwwDTa73WqutggSMwH-dGtZlWlmscSNKWfAj_uYLpUWWNwr5LapcZ5fzDXXNh_WgBWrjzkMRrkg_wmkKodMdH09rXEGNoAzDJ7X3xl7IzAAqelua4OE6Ohk00LUa5RHt5qey3Ke4oE--rmgjCh3MBZ_-hsD-kAj_JKDji89RDPzDFwxvNibRHj_XL2KXKzSeQjgeJaPo1IErCyBnc3Ib6qAH2fhlz-auFg16djfvMk8d2DaBCeSYeuahP5RY6hsZgOu-9lBcc2YzBE8yrfGrdsc71BTs8lM2KSIF63D-cUakckJjdGn0WZW6CpHBwEKcf9Aez5XAp1JS16RIDfuS0Ol8KqD0g75qz2qNHWUtChKa24keAEbGgndOw6LoK5re5s1tb0tvB24E5n3etmRvsXUKGaCJVB9VGZ-0WjjIfPB16A4XspYzHGRXkvDfxA_b0aEhEgAjnjzVJxXFyhR9pcRjA3247A9ZIw_WRK_WnmyEmZHhe3SQ68RXDW_uVYojR6QB31nQFSRu2US_u7XRx80uTe2OJ7gtMpAZM2SzVs9Bxpclm9pBelMTM9uU1l8m3spy6iQ9y-G8RGtphhL4i6WqoorriXHeT65oeZ9qqg6ZLnUo2tKKFs6jABEo-XVWKlOl7oCtQoA0bcTbTTDCJe4rWlozMq7a2_aYbBlAdpy0lqfJwK3aCu0SGe53D-wFXUveS5WhCQzB2FlboAzCnFExi125skBossiKoAHwH9XGMhHplk8r37ycPiH96Dx7JD_30sZJjZsEQsU-5U3K6EuOBR-iY_l2Sprm8OzuTU3lrdGYEHwIOJkZRr2WC7lhF2aq8UfENBrPVmCBpd6xS10=w958-h1280-s-no-gm?authuser=0",
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
      "https://media.licdn.com/dms/image/D4E03AQGeuvsMKgmR3A/profile-displayphoto-shrink_400_400/0/1692035642710?e=1714003200&v=beta&t=LyuJbG8AudVa8evLpP496g4MNhJ7OTeLZi7G-lV8nIs",
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
      "https://media.licdn.com/dms/image/D4E03AQFsYUJDhCnGXg/profile-displayphoto-shrink_400_400/0/1700996843127?e=1714003200&v=beta&t=tIh0WYYnAD76doe_yA1JMHg7taoJXxoaGW97Xf4N-HQ",
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
    <div className="bg-slate-50 sm:p-10 p-5 mb-20">
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
                  className="rounded-lg hover:-translate-y-2 duration-300 shadow-md transition-all border-2 z-20 border-white -mt-[45%] sm:-mt-[35%] lg:-mt-[40%] xl:-mt-[50%] mb-4"
                  src={post.imageUrl}
                  style={{
                    aspectRatio: "150/150",
                    objectFit: "cover",
                  }}
                />
                <div className="text-center flex flex-col items-center justify-center z-20 truncate">
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
        <div className="w-full flex sm:hidden py-10 px-2">
          <Swiper
            spaceBetween={10}
            slidesPerView={1.1}
            breakpoints={{
              // when window width is >= 768px
              500: {
                slidesPerView: 2.1,
              },
            }}
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
                      className="rounded-lg hover:scale-105 duration-300 shadow-md transition-all border-2 z-20 border-white mb-4"
                      src={post.imageUrl}
                      style={{
                        aspectRatio: "150/150",
                        objectFit: "cover",
                      }}
                    />
                    <div className="text-center flex flex-col items-center justify-center z-20 truncate">
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
