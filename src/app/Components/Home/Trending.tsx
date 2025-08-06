import Image from "next/image";
import { FaLock } from "react-icons/fa";

export default function Trending({games = []}:any) {
  return (
    <section className="max-w-6xl mx-auto px-2 pt-50 pb-25">
      {/* Heading */}
      <div className="flex justify-between items-center flex-wrap gap-4 mb-8">
        <div>
          <h6 className="text-[#ee626b] uppercase text-[15px] font-bold">
            Trending
          </h6>
          <h2 className="text-[30px] md:text-[36px] font-bold text-[#1e1e1e] mt-3">
            Trending Games
          </h2>
        </div>

        <button className="hidden md:inline-block h-12 text-[14px] font-semibold bg-[#ee626b] hover:bg-[#1B7FFA] uppercase px-7 rounded-[25px] cursor-pointer">
          VIEW ALL
        </button>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map((game:any) => (
          <div
            key={game.id}
            className="bg-[#eeeeee] rounded-3xl overflow-hidden transition hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Game Image */}
            <div className="relative w-full h-[200px]">
              <Image
                src={game.image}
                alt={game.title}
                fill
                className="rounded-t-3xl object-cover"
              />
              {/* Price tags */}
              <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-2 rounded-lg text-right">
                {game.oldPrice && (
                  <span className="block text-sm line-through text-gray-200">
                    ${game.oldPrice}
                  </span>
                )}
                <span className="block text-lg font-bold">${game.price}</span>
              </div>
            </div>

            {/* Game Info */}
            <div className="p-6 flex justify-between items-center">
              <div>
                <p className="text-[14px] text-[#7a7a7a] mb-1">{game.category}</p>
                <h3 className="font-semibold text-[17px] text-[#1e1e1e] hover:text-[#1B7FFA]">
                  {game.title}
                </h3>
              </div>
              <div className="bg-[#ee626b] text-white rounded-full p-2 hover:bg-[#1B7FFA] transition">
                <FaLock size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
