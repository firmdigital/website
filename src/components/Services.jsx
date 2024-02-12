import React from "react";

function Services() {
    return (
        <div className="w-full">
            <div className="flex flex-col items-center justify-center gap-6">
                <span className="bg-[#5FC4E6]/30 py-1.5 items-center px-6 w-fit rounded-full border border-[#5FC4E6] text-[10px] text-gray-500">
                    NOS SERVICES
                </span>
                <h1 className="md:text-5xl text-3xl font-thin">
                    Ce que{" "}
                    <span className="text-[#5FC4E6] hover:text-orange-500 font-bold">
                        NOUS FAISONS
                    </span>{" "}
                    réellement
                </h1>
            </div>

            {/* Service card */}
            <div className="w-full md:flex md:flex-col hidden gap-3 py-10">
                {/* <div className="flex items-center w-full gap-3">
                    <div className="w-[55%] bg-[#5FC4E6]/30 rounded-lg flex items-start p-8 h-52 gap-6">
                        <div className="flex gap-2 flex-col">
                            <h1 className="font-semibold leading-5 text-xl">
                                DEVELOPPEMENT D'APPLICATION
                            </h1>
                            <span className="text-base font-thin">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry.{" "}
                            </span>
                        </div>
                        <div className="px-5 bg-[#5FC4E6] rounded-md h-full items-center justify-center flex">
                            <img
                                src="../assets/dev.png"
                                alt=""
                                className="object-cover w-full "
                            />
                        </div>
                    </div>
                    <div className="w-[45%] bg-[#5FC4E6]/30 rounded-lg flex items-start p-8 h-52 gap-6">
                        <div className="flex gap-2 flex-col">
                            <h1 className="font-semibold leading-5 text-xl">UX UI DESIGN</h1>
                            <span className="text-base font-thin">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry.{" "}
                            </span>
                        </div>
                        <div className="px-5 bg-[#5FC4E6] rounded-md h-full items-center justify-center flex">
                            <img
                                src="../assets/dev.png"
                                alt=""
                                className="object-cover w-full "
                            />
                        </div>
                    </div>
                </div> */}

                {/* <div className="flex items-center w-full gap-3">
                    <div className="w-[45%] bg-[#5FC4E6]/30 rounded-lg flex flex-row-reverse items-start p-8 h-52 gap-6">
                        <div className="flex gap-2 flex-col">
                            <h1 className="font-semibold leading-5 text-xl">FORMATIONS</h1>
                            <span className="text-base font-thin">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry.{" "}
                            </span>
                        </div>
                        <div className="px-5 bg-[#5FC4E6] w-44 rounded-md h-full items-center justify-center flex">
                            <img
                                src="../assets/dev.png"
                                alt=""
                                className="object-cover w-full "
                            />
                        </div>
                    </div>
                    <div className="w-[55%] bg-[#5FC4E6]/30 rounded-lg flex flex-row-reverse items-start p-8 h-52 gap-6">
                        <div className="flex gap-2 flex-col">
                            <h1 className="font-semibold leading-5 text-xl">
                                DESIGN 3D & PROTOTYPAGE
                            </h1>
                            <span className="text-base font-thin">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry.{" "}
                            </span>
                        </div>
                        <div className="px-5 bg-[#5FC4E6] w-44 rounded-md h-full items-center justify-center flex">
                            <img
                                src="../assets/dev.png"
                                alt=""
                                className="object-cover w-full"
                            />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Services;
