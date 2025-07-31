import Image from "next/image";

export default function Topgames() {
  const games = [
    { src: "/topgame1.jpg", title: "Assassin Creed" },
    { src: "/topgame2.jpg", title: "Assassin Creed" },
    { src: "/topgame3.jpg", title: "Assassin Creed" },
    { src: "/topgame4.jpg", title: "Assassin Creed" },
    { src: "/topgame5.jpg", title: "Assassin Creed" },
    { src: "/topgame6.jpg", title: "Assassin Creed" },
  ];

  return (
    <section className="px-6 md:px-4 py-12 bg-[#f9f9f9] rounded-[150px]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-2 py-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-[#ee626b] uppercase text-[15px] font-bold">Top Games</p>
            <h2 className="text-[36px] font-bold text-[#1e1e1e] mt-1">Most Played</h2>
          </div>

          <button className="hidden md:inline-block text-[14px] font-bold bg-[#EE626B] hover:bg-[#1B7FFA] uppercase px-5 py-3 rounded-full cursor-pointer mt-4 md:mt-0">
            VIEW ALL
          </button>
        </div>

        {/* Games Grid for large screens / horizontal scroll for small */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] shadow-lg flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-36 sm:h-40">
                <Image
                  src={game.src}
                  alt={game.title}
                  fill
                  className="rounded-[24px] object-cover"
                  sizes="(max-width: 768px) 100vw, 200px"
                />
              </div>
              {/* Info */}
              <div className="p-4 text-center">
                <p className="text-[#7a7a7a] text-[14px]">Adventure</p>
                <h3 className="text-[17px] font-semibold text-[#1e1e1e] mb-3">{game.title}</h3>
                <button className="bg-[#ee626b] text-white px-4 py-1 rounded-full text-[15px]  font-semibold hover:bg-[#d85057] transition">
                  EXPLORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
