import Layout from "./Lajout";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-white mb-44">
        <div className="mx-auto w-full">
          <div className="mx-auto w-full lg:mx-0">
            <span className="bg-[#5FC4E6]/30 py-1.5 items-center px-6 w-fit rounded-full border border-[#5FC4E6] text-[10px] text-gray-500">
              NOUS CONTACTER
            </span>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nous sommes impatients de vous écouter et de vous aider de la
              meilleure manière possible.
            </p>
          </div>
          <div className="mx-auto mt-16 grid grid-cols-1 gap-8 text-base leading-7  sm:gap-y-16 lg:mx-0 lg:max-w-none sm:grid-cols-3">
            <div>
              <h3 className="border-l border-[#5FC4E6] pl-6 font-semibold text-gray-900">
                Adresse
              </h3>
              <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                <p className="md:text-base text-sm">Niamakoro koko, Bamako - MALI</p>
                <p className="md:text-base text-sm">Rue : 614 - Porte : 26</p>
              </address>
            </div>
            <div>
              <h3 className="border-l border-[#5FC4E6] pl-6 font-semibold text-gray-900">
                E-mail
              </h3>
              <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                <p className="md:text-base text-sm">contact@firmdigital.net</p>
                <p className="md:text-base text-sm">firmdigital.sarl@gmail.com</p>
              </address>
            </div>
            <div>
              <h3 className="border-l border-[#5FC4E6] pl-6 font-semibold text-gray-900">
                Téléphone
              </h3>
              <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                <p className="md:text-base text-sm">+223 71780482</p>
                <p className="md:text-base text-sm">+223 62691718</p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
