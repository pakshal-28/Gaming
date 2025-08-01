import Image from "next/image";
import { FaLock } from "react-icons/fa";
import trending1 from "../../../../public/trending1.jpg"
import trending2 from "../../../../public/trending2.jpg"
import trending3 from "../../../../public/trending3.jpg"
import trending4 from "../../../../public/trending4.jpg"


const games = [
  {
    id: 1,
    title: "Assassin Creed",
    category: "Action",
    image: trending1,
    price: 20,
    oldPrice: 28,
  },
  {
    id: 2,
    title: "Assassin Creed",
    category: "Action",
    image: trending2,
    price: 44,
    oldPrice: null,
  },
  {
    id: 3,
    title: "Assassin Creed",
    category: "Action",
    image: trending3,
    price: 44,
    oldPrice: 64,
  },
  {
    id: 4,
    title: "Assassin Creed",
    category: "Action",
    image: trending4,
    price: 32,
    oldPrice: null,
  },
];

export default function Trending() {
  return (
    <section className="max-w-6xl flex-col mx-auto pt-50 pb-25">
      {/* Heading */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h6 className="text-[#ee626b] uppercase text-[15px] font-bold">Trending</h6>
          <h2 className="text-[36px] font-bold text-[#1e1e1e] mt-5">Trending Games</h2>
        </div>

        <button className="hidden md:inline-block h-12 text-[14px] font-semibold bg-[#ee626b] hover:bg-[#1B7FFA] uppercase px-7 rounded-[25px] cursor-pointer">
          VIEW ALL
        </button>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <div key={game.id} className="bg-[#eeeeee] rounded-3xl mb-7 overflow-hidden transition">
            {/* Game Image */}
            <div className="relative">
              <Image src={game.image} alt={game.title} width={261} height={191} 
              className="rounded-[24px] object-cover" />
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
                <p className="text-[14px] text-[#7a7a7a] mb-1 ">{game.category}</p>
                <h3 className="font-semibold text-[17px] text-[#1e1e1e] hover:text-[#1B7FFA]">{game.title}</h3>
              </div>
              <div className="bg-[#ee626b] text-white rounded-full p-2 hover:bg-[#1B7FFA]">
                <FaLock size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
