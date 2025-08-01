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
    <section className="px-2 py-4 bg-[#f7f7f7] rounded-[150px]">
      <div className="max-w-6xl mx-auto px-2 py-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <h6 className="text-[#ee626b] uppercase text-[15px] font-bold">
              Top Games
            </h6>
            <h2 className="text-[36px] font-bold text-[#1e1e1e] mt-5">
              Most Played
            </h2>
          </div>

          <button className="hidden md:inline-block h-12 text-[14px] font-semibold bg-[#ee626b] hover:bg-[#1B7FFA] uppercase px-7 rounded-[25px] cursor-pointer">
            View All
          </button>
        </div>

        {/* Games Grid (grid on large screens, horizontal scroll on small) */}
        <div className="relative overflow-x-auto md:overflow-visible">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 min-w-max md:min-w-full">
            {games.map((game, index) => (
              <div
                key={index}
                className="bg-white rounded-[24px] flex flex-col relative hover:shadow-xl transition"
              >
                {/* Image */}
                <div className="relative w-full h-36 sm:h-40">
                  <Image
                    src={game.src}
                    alt={game.title}
                    fill
                    className="rounded-t-[24px] object-cover"
                    sizes="(max-width: 768px) 100vw, 200px"
                  />
                </div>

                {/* Info */}
                <div className="p-4 text-center flex flex-col items-center">
                  <span className="text-[#7a7a7a] text-[14px] mb-1">
                    Adventure
                  </span>
                  <h4 className="text-[17px] font-semibold text-[#1e1e1e] mb-3">
                    {game.title}
                  </h4>
                  <button
                    className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] 
                             inline-block text-center leading-[40px] h-10 px-4 
                             bg-[#ee626b] text-white rounded-[20px] text-[15px] 
                             uppercase font-semibold hover:bg-[#1B7FFA] transition cursor-pointer"
                  >
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
