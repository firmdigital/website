import React from 'react'


const tech = [
    { id: 1, logo: '../assets/script-java.png' },
    { id: 2, logo: '../assets/python.png' },
    { id: 3, logo: '../assets/php.png' },
    { id: 4, logo: '../assets/java.png' },
]

function TechStack() {
    return (
        <div className='w-full flex flex-col gap-4'>
            <span className="bg-[#5FC4E6]/30 py-1.5 items-center px-6 w-fit rounded-full border border-[#5FC4E6] text-[10px] text-gray-500">
                TECHNOLOGIES
            </span>
            <h4 className='md:text-5xl font-thin text-3xl'>Decouvrez les
                <span className='font-bold text-[#5FC4E6] hover:text-orange-500'>TECHNOLOGIES</span>
                <br /> que nous utilisons quotidiennement
            </h4>
            <div className="relative isolate overflow-hidden bg-gray-900 rounded-2xl shadow-sm shadow-slate-400 py-20">
                <img
                    src="https://solace.com/wp-content/uploads/2022/07/Banner-CTA-for-Blog-Post-2.png"
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
                />
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        className="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#5FC4E6] to-orange-500 opacity-60"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <dl className="mx-auto grid max-w-2xl text-white grid-cols-2 sm:gap-5 gap-10 lg:max-w-none sm:grid-cols-4">
                        {tech.map((stat) => (
                            <div key={stat.id} className="flex flex-col items-center border-white/10">
                                <img src={stat.logo} alt="" className='sm:w-20 w-16 object-cover'/>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default TechStack