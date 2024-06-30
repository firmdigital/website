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
              href="https://www.linkedin.com/company/firmdigitalsarl/"
              className="bg-[#5FC4E6] hover:bg-orange-500 hover:scale-105 duration-300 transition-all hover:shadow-md p-3 flex items-center justify-center rounded-full"
            >
              <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 448 512"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3M447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z" /></svg>
            </a>
            <a
              href="https://www.facebook.com/firmdigitalsarl"
              className="bg-[#5FC4E6] hover:bg-orange-500 hover:scale-105 duration-300 transition-all hover:shadow-md p-3 flex items-center justify-center rounded-full"
            >
              <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 512 512"><path fill="currentColor" d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z" /></svg>
            </a>
            <a
              href="https://www.facebook.com/firmdigitalsarl"
              className="bg-[#5FC4E6] hover:bg-orange-500 hover:scale-105 duration-300 transition-all hover:shadow-md p-3 flex items-center justify-center rounded-full"
            >
              <svg fill="currentColor" className="text-white" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 320 512"><path fill="currentColor" d="M80 299.3V512h116V299.3h86.5l18-97.8H196v-34.6c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4.4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8z" /></svg>
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
                    className={`cursor-pointer px-2 py-1 text-xs rounded hover:bg-[#5FC4E6] hover:text-white ${selectedServices.includes(service.id)
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
