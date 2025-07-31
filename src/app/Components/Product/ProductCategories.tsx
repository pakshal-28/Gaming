import Image from "next/image";

export default function ProductCategories() {
    const categories = [
        { src: "/topgame1.jpg", title: "Action" },
        { src: "/topgame2.jpg", title: "Action" },
        { src: "/topgame3.jpg", title: "Action" },
        { src: "/topgame1.jpg", title: "Action" },
        { src: "/topgame2.jpg", title: "Action" },
    ];
    return (
        <section className="max-w-7xl mx-auto px-4 py-14">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                <div>
                    <p className="text-[#ee626b] uppercase text-[15px] font-bold">
                        Action
                    </p>
                    <h2 className="text-[28px] md:text-[36px] font-bold text-[#1e1e1e] mt-1">
                        Related Games
                    </h2>
                </div>

                <button className="hidden md:inline-block text-[14px] font-bold bg-[#EE626B] hover:bg-[#1B7FFA] uppercase px-5 py-3 rounded-full cursor-pointer mt-4 md:mt-0">
                    VIEW ALL
                </button>
            </div>

            {/* Category Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md w-full max-w-[180px] overflow-hidden hover:shadow-lg transition"
                    >
                        {/* Label */}
                        <div className="bg-blue-600 text-white text-sm font-semibold text-center py-3">
                            {cat.title}
                        </div>
                        {/* Image */}
                        <div className="relative w-full h-28 sm:h-36">
                            <Image
                                src={cat.src}
                                alt={cat.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 180px"
                            />
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}
