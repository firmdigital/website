import { MapIcon } from "@heroicons/react/20/solid";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  // Initialiser avec un tableau vide pour stocker les ids des services sélectionnés
  const [selectedServices, setSelectedServices] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [succesMessage, setSuccessMessage] = useState("");

  const services = [
    { id: 1, name: "Le développement d'application" },
    { id: 2, name: "L'Ux Ui Design" },
    { id: 3, name: "Le Design 3D" },
    { id: 4, name: "Le Design Graphique" },
    { id: 5, name: "Le Community Management" },
    { id: 6, name: "Une Solution électronique" },
    { id: 7, name: "La Maintenance informatique" },
  ];

  // Gérer le changement de chaque case à cocher
  const handleServiceChange = (serviceId) => {
    setError("");
    setSelectedServices((prevSelectedServices) =>
      prevSelectedServices.includes(serviceId)
        ? prevSelectedServices.filter((id) => id !== serviceId)
        : [...prevSelectedServices, serviceId]
    );
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const templateId = "template_ajmasg5";
    const serviceID = "service_yu2pmpr";
    const publicID = "u3r2fez9i5SZSBI9L";

    const templateParams = {
      from_firstname: firstName,
      from_lastname: lastName,
      from_phone: phone,
      from_hobbies: selectedServices,
      to_name: "FIRM DIGITAL",
      message: message,
    };
    setIsLoading(true);

    emailjs
      .send(serviceID, templateId, templateParams, {
        publicKey: publicID,
      })
      .then(
        () => {
          setIsLoading(false);
          setSuccessMessage("Votre message a été envoyer avec succès.");
        },
        (error) => {
          setIsLoading(false);
          setError("Erreur d'envoi du message. Veuillez réessayer SVP !! ");
        }
      );
  };

  return (
    <div id="contact" className="relative isolate bg-slate-50 md:p-10 p-5 mb-20 mx-auto max-w-5xl rounded-2xl">
      <div className="flex items-start h-full w-full min-h-full lg:flex-row flex-col gap-10">
        {/* Contact info */}
        <div className="flex flex-col gap-4 relative w-full h-full lg:w-2/5">
          <h1 className="font-bold text-gray-700 lg:text-3xl text-xl">
            Discutons ensemble de quelque chose de{" "}
            <span className="text-[#5FC4E6]">cool</span>
          </h1>

          {/* Adresse */}
          <div className="flex flex-col gap-3 mt-10">
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-5 text-[#5FC4E6]" />
              <span>(00223) 71 78 04 82 - 62 69 17 18</span>
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeIcon className="w-5 text-[#5FC4E6]" />
              <span>firmdigital.sarl@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapIcon className="w-5 text-[#5FC4E6]" />
              <span>Niamakoro Koko, Bamako MALI.</span>
            </div>
          </div>

          {/* Social network */}
          <div className="mt-5 flex items-center gap-3">
            <a
              href="/"
              className="bg-[#5FC4E6] hover:bg-orange-500 hover:scale-105 duration-300 transition-all hover:shadow-md p-3 flex items-center justify-center rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                viewBox="0 0 1046.16 1000"
              >
                <path
                  fill="currentColor"
                  className="text-white"
                  d="M237.485 1000V325.301H13.229V1000zM125.386 233.127c78.202 0 126.879-51.809 126.879-116.553C250.808 50.37 203.591-.001 126.87-.001C50.161-.001-.002 50.371-.002 116.574c0 64.747 48.665 116.553 123.924 116.553h1.457zM361.61 1000h224.256V623.215c0-20.165 1.457-40.309 7.379-54.724c16.212-40.289 53.111-82.017 115.06-82.017c81.149 0 113.613 61.872 113.613 152.572v360.949h224.242V613.129c0-207.241-110.636-303.668-258.183-303.668c-120.977 0-174.094 67.622-203.603 113.679h1.497v-97.853H361.615c2.943 63.31 0 674.699 0 674.699z"
                />
              </svg>
            </a>
            <a
              href="/"
              className="bg-[#5FC4E6] hover:bg-orange-500 hover:scale-105 duration-300 transition-all hover:shadow-md p-3 flex items-center justify-center rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                viewBox="0 0 1231.051 1000"
              >
                <path
                  fill="currentColor"
                  className="text-white"
                  d="M1231.051 118.453q-51.422 76.487-126.173 130.403q.738 14.46.738 32.687q0 101.273-29.53 202.791q-29.53 101.519-90.215 194.343q-60.685 92.824-144.574 164.468q-83.889 71.644-201.677 114.25q-117.788 42.606-252.474 42.606q-210.2 0-387.147-113.493q31.406 3.495 60.242 3.495q175.605 0 313.687-108.177q-81.877-1.501-146.654-50.409q-64.777-48.907-89.156-124.988q24.097 4.59 47.566 4.59q33.782 0 66.482-8.812q-87.378-17.5-144.975-87.04q-57.595-69.539-57.595-160.523v-3.126q53.633 29.696 114.416 31.592q-51.762-34.508-82.079-89.999q-30.319-55.491-30.319-120.102q0-68.143 34.151-126.908q95.022 116.607 230.278 186.392q135.258 69.786 290.212 77.514q-6.609-27.543-6.621-57.485q0-104.546 73.994-178.534Q747.623 0 852.169 0q109.456 0 184.392 79.711q85.618-16.959 160.333-61.349q-28.785 90.59-110.933 139.768q75.502-8.972 145.088-39.677z"
                />
              </svg>
            </a>
            
          </div>
        </div>
        {/* Form div */}
        <div className="flex-1 lg:w-3/5 w-full bg-white shadow-xl shadow-slate-200 h-full min-h-full rounded-xl p-4">
          {/* Form */}
          <form ref={form} onSubmit={sendEmail} method="POST">
            <div className="mb-10">
              <span className="font-semibold text-base">
                Je suis intéréssé par :
              </span>
              <div className="flex flex-wrap gap-x-2 gap-y-1.5">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => handleServiceChange(service.id)}
                    className={`cursor-pointer px-2 py-1 text-xs rounded ${
                      selectedServices.includes(service.id)
                        ? "bg-[#5FC4E6] py-1.5 text-white"
                        : "border border-[#5FC4E6] text-[#5FC4E6]"
                    }`}
                  >
                    {service.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="mx-auto lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Prénom
                  </label>
                  <div>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      value={firstName}
                      onChange={(e) => {
                        setError("");
                        setFirstName(e.target.value);
                      }}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5FC4E6] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Nom
                  </label>
                  <div>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      value={lastName}
                      onChange={(e) => {
                        setError("");
                        setLastName(e.target.value);
                      }}
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5FC4E6] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setError("");
                        setEmail(e.target.value);
                      }}
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5FC4E6] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Téléphone
                  </label>
                  <div>
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      value={phone}
                      onChange={(e) => {
                        setError("");
                        setPhone(e.target.value);
                      }}
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5FC4E6] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div>
                    <textarea
                      name="message"
                      id="message"
                      value={message}
                      onChange={(e) => {
                        setError("");
                        setMessage(e.target.value);
                      }}
                      rows={4}
                      className="block resize-none w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5FC4E6] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="text-red-500 text-center text-sm pt-2">
                {error}
              </div>
              <div className="text-green-500 text-center text-sm pt-2">
                {succesMessage}
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md flex items-center justify-center gap-2 bg-[#5FC4E6] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5FC4E6]"
                >
                  {isLoading && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      className="h-4 w-4 animate-spin fill-current text-white"
                      width="32"
                      height="32"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        fill="currentColor"
                        d="M988 548c-19.9 0-36-16.1-36-36c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9a437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3c.1 19.9-16 36-35.9 36z"
                      ></path>
                    </svg>
                  )}
                  Envoyer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
