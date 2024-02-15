import Layout from "./Lajout";

const features = [
  { id: 1, name: "Détection des fuites de gaz butane" },
  { id: 2, name: "Alerte sonore et led rouge" },
  /* eslint no-useless-escape: "warn" */
  { id: 3, name: "Fermeture automatique par l\'electrovane"},
  /* eslint no-useless-escape: "warn" */
  { id: 4, name: "Envoi d\'sms suivie d\'un appel" },
];

export default function FeatureGaZ() {
  return (
    <Layout>
      <div className="relative isolate overflow-hidden rounded-2xl bg-gray-900 py-10 md:mt-20 mt-10">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80&blend=111827&blend-mode=multiply&sat=-100&exp=15"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
            aria-hidden="true"
          >
            <div
              className="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#5FC4E6] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <h2 className="text-base font-semibold leading-8 text-[#5FC4E6]">
              Fonctionnalités principales de SO SECURIGAZ
            </h2>
            <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              L'utilisation du gaz présente&nbsp;un réel risque
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Dispositif qui vise à préserver et à sauver des vies humaines
              contre les accidents domestiques dûs au cas d'oubli ou de fuite de
              gaz.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.id}
                className="flex flex-col gap-y-3 border-l border-white/10 pl-6"
              >
                <dt className="order-first text-lg font-semibold tracking-tight">{f.name}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Layout>
  );
}
