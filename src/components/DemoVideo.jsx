import { CardBody, CardContainer, CardItem } from "./UI/VideoSogaz.tsx";

export default function DemoVideo() {
    return (
        <div className="bg-white">
            <div className="py-24 sm:py-32">
                <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <svg
                        viewBox="0 0 1024 1024"
                        className="absolute left-1/2 top-1/2 -z-10 h-[54rem] w-[54rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                        aria-hidden="true"
                    >
                        <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stopColor="#5FC4E6" />
                                <stop offset={1} stopColor="#5FC4E6" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Video de démonstration
                            <br />
                            du kit SO SECURIGAZ
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Dans cette vidéo, nous vous montrons comment notre système fonctionne pour assurer la sécurité de votre foyer ou de votre entreprise.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <a
                                href="../assets/video/demo-video-sosecurigaz.mp4"
                                download
                                className="bg-white flex items-center text-center w-48 rounded-2xl h-14 relative font-sans text-xl font-semibold group"
                            >

                                <div
                                    className="bg-[#FF7109] rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                                    </svg>
                                </div>
                                <p className="translate-x-2 ml-14 text-black">Télécharger</p>
                            </a>
                        </div>
                    </div>
                    <div className="relative mt-16 lg:h-80 h-full md:h-96 lg:mt-8">
                        <CardContainer className="inter-var lg:mx-auto lg:w-[57rem] absolute left-0 top-0 w-full max-w-none rounded-md bg-white/5 ring-1 ring-white/10">
                            <CardBody className="bg-gray-50 relative group/card rounded-t-xl md:p-6 p-2 border">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl max-w-xs font-bold text-neutral-600"
                                >
                                </CardItem>
                                <CardItem
                                    translateZ="100"
                                    rotateX={2}
                                    rotateZ={0}
                                    className="w-full md:mt-4"
                                >
                                    <video autoPlay muted className="rounded-lg" width="1000" height="500">
                                        <source src="../assets/video/demo-video-sosecurigaz.mp4" type="video/mp4" />
                                    </video>
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}
