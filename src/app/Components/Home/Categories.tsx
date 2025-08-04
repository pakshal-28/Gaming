import Image from "next/image";

export default function Categories() {
  const categories = [
    { src: "/categories01.jpg", title: "Action" },
    { src: "/Categories02.jpg", title: "Action" },
    { src: "/categories03.jpg", title: "Action" },
    { src: "/categories03.jpg", title: "Action" },
    { src: "/Categories02.jpg", title: "Action" },
  ];

  return (
    <section className="max-w-6xl flex-col mx-auto px-2 py-14 text-center">
      {/* Header */}
      <div>
        <h6 className="text-[#ee626b] uppercase text-[15px] font-bold">Categories</h6>
        <h2 className="text-[36px] font-bold text-[#1e1e1e] mt-5">Top Categories</h2>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center py-7">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md w-full max-w-[230px] overflow-hidden"
          >
            {/* Label */}
            <div className="bg-[#0071f8] text-white text-sm font-semibold">
              <h3 className="text-[17px] font-semibold text-white p-5">{cat.title}</h3>
              <div className="relative w-full h-54 ">
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
