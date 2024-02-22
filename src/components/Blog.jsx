import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    title: "Visite à la Société KAMA GAZ",
    id: "tier-hobby",
    href: "#",
    image:
      "https://www.maliweb.net/wp-content/news/images/2019/08/Kama-gaz.jpg",
    date: "23 Août 2022",
    description:
      "Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae. Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae. Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.",
  },
  {
    title: "Visite à la Société KAMA GAZ",
    id: "tier-hobby",
    href: "#",
    image:
      "https://www.maliweb.net/wp-content/news/images/2019/08/Kama-gaz.jpg",
    date: "23 Août 2022",
    description:
      "Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.",
  },
];

export default function Blogs() {
  return (
    <div className="isolate mt-32 overflow-hidden bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl flex flex-col justify-center items-center">
          <span className="bg-[#5FC4E6]/30 py-1.5 items-center px-6 w-fit rounded-full border border-[#5FC4E6] text-[10px] text-gray-300">
            BLOGS
          </span>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Bienvenue dans l&apos;Espace Blogs <br className="hidden sm:inline" />
            de{" "}
            <span className="text-[#5FC4E6] hover:text-orange-500">
              FIRM DIGITAL
            </span>
          </p>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
            Découvrez le monde passionnant du digital à travers nos articles
            informatifs et inspirants.
          </p>
          <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
          >
            <ellipse
              cx={604}
              cy={512}
              fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
              rx={604}
              ry={512}
            />
            <defs>
              <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                <stop stopColor="#5FC4E6" />
                <stop offset={1} stopColor="#5FC4E6" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flow-root bg-white pb-5">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid grid-cols-1 gap-8 lg:max-w-4xl sm:grid-cols-2">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="flex flex-col justify-between hover:scale-105 duration-300 transition-all rounded-3xl bg-white shadow-xl ring-1 ring-gray-900/10 p-5"
                >
                  <div>
                    <div className="relative">
                      <img
                        alt={tier.title}
                        className="rounded-3xl shadow-md border-2 z-20 mb-4"
                        src={tier.image}
                        style={{
                          aspectRatio: "150/100",
                          objectFit: "cover",
                        }}
                      />
                      <span className="text-xs absolute top-3 left-3 shadow-md bg-[#5FC4E6] w-fit text-center text-white rounded-xl px-4 py-1.5">
                        Publié le : <b>{tier.date}</b>
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-10">
                      <h4 className="font-semibold text-lg break-all line-clamp-2">
                        {tier.title}
                      </h4>
                    </div>
                    <p className="py-1 mt-3 text-sm md:text-base text-gray-500">
                      {tier.description}
                    </p>
                  </div>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className="mt-8 block rounded-md bg-[#5FC4E6] px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#449ab7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Lire plus
                  </a>
                </div>
              ))}
              <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 sm:col-span-2 lg:flex-row lg:items-center">
                <div className="lg:min-w-0 lg:flex-1">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-[#449ab7]">
                    Prêt à commencer ?
                  </h3>
                  <p className="mt-1 text-base leading-7 text-gray-600">
                    Rejoignez-nous dans cette aventure digitale passionnante et
                    restez à la pointe de l&apos;industrie. Explorez nos articles dès
                    maintenant !
                  </p>
                </div>
                <a
                  href="#"
                  className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-[#449ab7] ring-1 ring-inset ring-[#449ab7]/30 hover:ring-[#449ab7]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#449ab7]"
                >
                  Voir toutes nos articles{" "}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
