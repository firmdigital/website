import { Fragment, useEffect, useState } from "react";
import AlertModal from "./Alert";
import AOS from "aos";
import "aos/dist/aos.css";
import { blogs } from "../utils/Blogs.ts";
import { Dialog, Transition } from "@headlessui/react";
import {
  XMarkIcon,
} from "@heroicons/react/24/outline";


export default function Blogs() {
  const [showAlert, setShowAlert] = useState(false);
  const [selectBlogId, setSelectedBlogId] = useState(null);
  const [open, setOpen] = useState(true);

  const openModal = (blogId) => {
    setSelectedBlogId(blogId);
    setOpen(true);
  };

  const closeModal = () => {
    setSelectedBlogId(null);
  };

  useEffect(() => {
    setOpen(true);
    setSelectedBlogId(null);
  }, []);

  const selectedBlog = blogs.find((blog) => blog.id === selectBlogId);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {showAlert && <AlertModal setClose={setShowAlert} />}

      <div id="blog" className="isolate mt-32 overflow-hidden bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-4xl flex flex-col justify-center items-center">
            <span className="bg-[#5FC4E6]/30 py-1.5 items-center px-6 w-fit rounded-full border border-[#5FC4E6] text-[10px] text-gray-300">
              BLOGS
            </span>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Bienvenue dans l&apos;Espace Blogs{" "}
              <br className="hidden sm:inline" />
              de{" "}
              <span className="text-[#5FC4E6] hover:text-orange-500">
                FIRM DIGITAL
              </span>
            </p>
          </div>
          <div className="relative mt-6">
            <p className="mx-auto max-w-2xl font-medium text-lg leading-8 text-white/60">
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
                {blogs.map((blog) => (
                  <div
                    key={blog.id}
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="flex flex-col justify-between hover:scale-105 duration-300 transition-all rounded-3xl bg-white shadow-xl ring-1 ring-gray-900/10 p-5"
                  >
                    <div>
                      <div className="relative">
                        <img
                          alt={blog.title}
                          className="rounded-3xl shadow-md border-2 z-10 mb-4"
                          src={blog.image}
                          style={{
                            aspectRatio: "150/100",
                            objectFit: "cover",
                          }}
                        />
                        <span className="text-xs absolute top-3 left-3 shadow-md bg-[#5FC4E6] w-fit text-center text-white rounded-xl px-4 py-1.5">
                          Publié le : <b>{blog.date}</b>
                        </span>
                      </div>
                      <div className="flex items-start justify-between gap-10">
                        <h4 className="font-semibold text-lg">
                          {blog.title}
                        </h4>
                      </div>
                      <p className="py-1 mt-3 text-sm md:text-base text-gray-500">
                        {blog.description}
                      </p>
                    </div>
                    <button
                      onClick={() => openModal(blog.id)}
                      aria-describedby={blog.id}
                      type="button"
                      className="mt-8 block rounded-md bg-[#5FC4E6] px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#449ab7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Lire plus
                    </button>
                  </div>
                ))}
                <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 sm:col-span-2 lg:flex-row lg:items-center">
                  <div className="lg:min-w-0 lg:flex-1">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-[#449ab7]">
                      Prêt à commencer ?
                    </h3>
                    <p className="mt-1 text-base font-medium leading-7 text-gray-600">
                      Rejoignez-nous dans cette aventure digitale passionnante
                      et restez à la pointe de l&apos;industrie. Explorez nos
                      articles dès maintenant !
                    </p>
                  </div>
                  <div
                    onClick={() => setShowAlert(true)}
                    className="rounded-md cursor-pointer hover:-translate-y-1 transition-all duration-300 px-3.5 py-2 text-sm font-semibold leading-6 text-[#449ab7] ring-1 ring-inset ring-[#449ab7]/30 hover:ring-[#449ab7]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#449ab7]"
                  >
                    Voir tous nos articles{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Detail Modal */}

      {selectedBlog && (
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative w-full md:max-w-[95%] lg:max-w-[60%] h-full sm:max-h-[95%] transform overflow-auto rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:p-6">
                    <div className="absolute right-0 top-0 pr-4 pt-4">
                      <button
                        type="button"
                        className="rounded-md bg-gray-200 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="sm:flex sm:items-start">
                      
                      <div className="bg-white py-10">
                        <div className="mx-auto max-w-7xl px-2 lg:px-8">
                          <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none">
                            <div className="w-full lg:flex-auto">
                              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                {selectedBlog.title}
                              </h2>
                              <p className="mt-6 text-base leading-8 text-gray-600">
                                {selectedBlog.description}
                              </p>
                              <img
                                src={selectedBlog.image}
                                alt=""
                                className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
                              />
                            </div>
                            <div className="w-full lg:flex-auto">
                              <ul className="-my-8 flex flex-col gap-5">
                                <span className="text-gray-600 text-base">{selectedBlog.detail1}</span>
                                <span className="text-gray-600 text-base">{selectedBlog.detail2}</span>
                                <span className="text-gray-600 text-base">{selectedBlog.detail3}</span>
                                <span className="text-gray-800 text-base">{selectedBlog.conclusion}</span>
                              </ul>
                              <div className="mt-8 flex border-t border-gray-100 pt-8">
                                <a
                                  href="#"
                                  className="text-sm font-semibold leading-6 text-[#5FC4E6]"
                                >
                                  Publié le : {selectedBlog.date}{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </>
  );
}
