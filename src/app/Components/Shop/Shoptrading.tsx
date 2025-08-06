"use client";

import Image from "next/image";
import { useState } from "react";
import trending1 from "../../../../public/trending1.jpg";
import trending2 from "../../../../public/trending2.jpg";
import trending3 from "../../../../public/trending3.jpg";
import trending4 from "../../../../public/trending4.jpg";
import Trending from "../Home/Trending";

// Sample Games Data (category different rakho)
const games = [
  { id: 1, title: "Assassin Creed", category: "Action", image: trending1, price: 36, oldPrice: 24 },
  { id: 2, title: "Hitman", category: "Adventure", image: trending2, price: 32, oldPrice: 22 },
  { id: 3, title: "Need for Speed", category: "Racing", image: trending3, price: 45, oldPrice: 30 },
  { id: 4, title: "Far Cry", category: "Adventure", image: trending4, price: 32, oldPrice: 22 },
  { id: 5, title: "GTA V", category: "Strategy", image: trending1, price: 28, oldPrice: 20 },
  { id: 6, title: "PUBG", category: "Strategy", image: trending2, price: 30, oldPrice: 18 },
  { id: 7, title: "Watch Dogs", category: "Adventure", image: trending3, price: 42, oldPrice: 35 },
  { id: 8, title: "Far Cry", category: "Adventure", image: trending4, price: 32, oldPrice: 22 },
  { id: 9, title: "Assassin Creed", category: "Action", image: trending1, price: 36, oldPrice: 24 },
  { id: 10, title: "Hitman", category: "Strategy", image: trending2, price: 32, oldPrice: 22 },
  { id: 11, title: "Need for Speed", category: "Racing", image: trending3, price: 45, oldPrice: 30 },
  { id: 12, title: "Far Cry", category: "Adventure", image: trending4, price: 32, oldPrice: 22 },
];

export default function Shoptrading() {
  const [active, setActive] = useState("SHOW ALL");
  const filters = ["SHOW ALL", "Adventure", "Strategy", "Racing"];

  // Filtering logic
  let filteredGames = [];
  if (active === "SHOW ALL") {
    filteredGames = games; // show all games
  } else {
    // filter by category and limit to 5 games
    filteredGames = games.filter((game) => game.category === active).slice(0, 5);
  }

  return (
    <section className="max-w-6xl flex-col mx-auto px-2 pt-40 pb-10">
      {/* Filters */}
      <div className="flex justify-center items-center">
        <ul className="flex gap-4 flex-wrap justify-center">
          {filters.map((text) => (
            <li key={text}>
              <button
                onClick={() => setActive(text)}
                className={`text-[14px] font-bold uppercase px-5 py-2 rounded-full cursor-pointer transition 
                  ${active === text
                    ? "bg-[#EE626B] text-white"
                    : "bg-[#EEEEEE] hover:text-[#EE626B] text-black"
                  }`}
              >
                {text}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Games Grid */}
      <Trending games={games} />
    </section>
  );
}