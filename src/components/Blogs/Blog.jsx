import Layout from '../Layout'
import { Fragment, React, useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Dialog, Transition } from "@headlessui/react";
import {
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { blogs } from '../../utils/Blogs.ts';

function Blog() {
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

    return (
        <>
            <Layout>
                <div className='flex flex-col items-center justify-center mb-20'>
                    <p className='text-center md:text-2xl text-xl text-gray-700 py-10 mt-5 md:max-w-3xl font-semibold'>
                        Transformez votre quotidien avec nos articles inspirants et nos
                        astuces pratiques. Lire notre blog, c&apos;est ouvrir une porte vers
                        un monde de possibilités !
                    </p>

                    <div className="flow-root bg-white md:my-16 my-5">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {blogs
                                .map((blog) => (
                                    <div
                                        key={blog.id}
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
                                            </div>
                                            <div className="flex items-start justify-between gap-10">
                                                <h4 className="font-semibold text-lg">
                                                    {blog.title}
                                                </h4>
                                            </div>
                                            <p className='text-base text-gray-600 line-clamp-3 my-2'>
                                                {blog.description}
                                            </p>
                                            <span className="text-xs text-center text-gray-400 rounded-xl mt-5">
                                                Publié le : <b>{blog.date}</b>
                                            </span>
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
                        </div>
                    </div>
                </div>
            </Layout>

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
    )
}

export default Blog