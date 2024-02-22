import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const services = [
  {
    id: 1,
    name: "DEVELOPPEMENT D'APPLICATION",
    desription:
      "Plongez dans l'innovation numérique avec nos développeurs experts, créant des applications sur mesure qui transforment vos idées en réalité interactive.",
    image: "../assets/services/appdev.png",
  },
  {
    id: 2,
    name: "UX UI DESIGN",
    desription:
      "Redéfinissez l'expérience utilisateur à travers des interfaces élégantes et des designs intuitifs, offrant une immersion visuelle qui captive et engage.",
    image: "../assets/services/uxui.png",
  },
  {
    id: 3,
    name: "Community Management",
    desription:
      "Cultivez des connexions significatives avec votre audience grâce à notre gestion de communauté experte, stimulant l'engagement et renforçant la présence en ligne de votre marque.",
    image: "../assets/services/cm.png",
  },
  {
    id: 4,
    name: "Électronique et Systèmes Embarqués",
    desription:
      " Explorez l'avant-garde de la technologie avec notre expertise en électronique et systèmes embarqués, offrant des solutions innovantes pour propulser votre entreprise vers l'avenir.",
    image: "../assets/services/electronique.png",
  },
  {
    id: 5,
    name: "Design 3D",
    desription:
      " Explorez un monde tridimensionnel captivant, où notre équipe de designers donne vie à vos concepts avec une profondeur visuelle et une créativité époustouflantes.",
    image: "../assets/services/3d.png",
  },
  {
    id: 6,
    name: "DESIGN GRAPHIQUE",
    desription:
      "Fusionnez esthétique et communication visuelle de manière exceptionnelle, grâce à notre expertise en design graphique qui transforme votre identité en une œuvre d&apos;art.",
    image: "../assets/services/design.png",
  },
];
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
      <div className="w-full lg:grid hidden gap-3 py-10 min-h-[200px]">
        <div className="grid grid-cols-2 w-full gap-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="w-full bg-[#5FC4E6]/10 shadow-lg shadow-slate-400/10 rounded-lg flex items-start p-8 min-h-[200px] gap-6 overflow-hidden"
            >
              <div className="flex w-3/5 gap-2 flex-col">
                <h1 className="font-semibold leading-5 text-lg uppercase">
                  {service.name}
                </h1>
                <span className="text-sm text-gray-400 overflow-hidden text-ellipsis">
                  {service.desription}
                </span>
              </div>
              <div className="px-5 w-2/5 bg-gradient-to-b from-white hover:shadow-lg hover:shadow-slate-500/10 hover:scale-105 transition-all duration-300 rounded-md h-full items-center justify-center flex">
                <img
                  src={service.image}
                  alt={service.name}
                  className="object-cover lg:w-[70%] md:w-full aspect-square object-fit-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Servie */}
      <div className="w-full flex lg:hidden py-10 px-2">
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
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="w-full bg-[#5FC4E6]/10 shadow-lg shadow-slate-500/10 rounded-lg flex flex-col items-start p-4 h-96 gap-6">
                <div className="flex gap-2 flex-col">
                  <h1 className="font-semibold leading-5 text-lg uppercase">
                    {service.name}
                  </h1>
                  <span className="text-sm text-gray-400 font-light">
                    {service.desription}
                  </span>
                </div>
                <div className="w-full bg-gradient-to-b from-white rounded-md items-center justify-center flex">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="object-cover aspect-square w-[70%]"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Services;
