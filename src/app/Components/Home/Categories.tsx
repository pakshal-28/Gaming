import Image from "next/image";

export default function Categories() {
  const categories = [
    { src: "/topgame1.jpg", title: "Action" },
    { src: "/topgame2.jpg", title: "Action" },
    { src: "/topgame3.jpg", title: "Action" },
    { src: "/topgame1.jpg", title: "Action" },
    { src: "/topgame2.jpg", title: "Action" },
  ];

  return (
    <section className="max-w-7xl flex-col mx-auto py-14 text-center">
      {/* Header */}
      <div>
        <p className="text-[#ee626b] uppercase text-[15px] font-bold">Categories</p>
        <h2 className="text-[36px] font-bold text-[#1e1e1e] mt-1">Top Categories</h2>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center py-5">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md w-full max-w-[180px] overflow-hidden"
          >
            {/* Label */}
            <div className="bg-blue-600 text-white text-sm font-semibold">
              <h3 className="py-3">{cat.title}</h3>
              <div className="relative w-full h-54 sm:h-36">
                <Image
                  src={cat.src}
                  alt={cat.title}
                  fill
                  className="object-cover rounded-t-[24px]"
                  sizes="(max-width: 768px) 50vw, 180px"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
