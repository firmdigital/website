export default function HeroBlog() {
    return (
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mt-5 rounded-2xl overflow-hidden">
            <img
                src="../assets/blog/IMG_2844.JPG"
                alt="Fashion"
                className="absolute inset-0 object-cover w-full h-full"
                width="1200"
                height="500"
                style={{ aspectRatio: "1200/500", objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-70" />
            <div className="relative z-10 flex flex-col items-start justify-center h-full p-6 space-y-4 text-white md:p-10">
                <p className="sm:text-sm text-xs uppercase">Explorez notre blog dès maintenant !</p>
                <h1 className="text-2xl font-bold md:text-5xl max-w-3xl">
                    Laissez-vous inspirer par des <span className="text-[#00BFFF]">articles passionnants</span> et des perspectives uniques. 
                </h1>
            </div>
        </div>
    )
}