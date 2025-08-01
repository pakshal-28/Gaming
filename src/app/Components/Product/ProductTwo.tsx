"use client";

import Image from "next/image";
import Productimg from "../../../../public/Productimage.jpg";
import { FaShoppingBag } from "react-icons/fa";
import { useState } from "react";

export default function ProductTwo() {
  const [quantity, setQuantity] = useState("1");

  return (
    <section className="relative max-w-6xl mx-auto px-4 py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left Image Section */}
        <div className="flex items-center justify-center lg:justify-start">
          <Image
            src={Productimg}
            alt="Game Character"
            className="rounded-[20px] w-[280px] sm:w-[350px] md:w-[450px] lg:w-[466px] h-auto object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h4 className="text-[22px] sm:text-[27px] font-bold text-[#1e1e1e] tracking-wide mb-5">
            Call of Duty®: Modern Warfare® II
          </h4>

          <div className="mb-6">
            <em className="text-[16px] sm:text-[17px] font-medium text-[#c8c8c8] mr-1 block sm:inline">
              $28
            </em>
            <span className="text-[24px] sm:text-[27px] font-bold text-[#0071f8] ml-0 sm:ml-2">
              $22
            </span>
          </div>

          <p className="text-[14px] leading-[26px] font-medium text-[#4a4a4a] mb-8">
            LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework.
            This template is provided by TemplateMo and it is suitable for your
            gaming shop ecommerce websites. Feel free to use this for any purpose.
            Thank you.
          </p>

          {/* Add to cart button */}

          <div className="flex flex-col sm:flex-row items-center md:justify-center lg:justify-start sm:space-x-4 gap-4 py-8">
            {/* Quantity Selector */}
            <div className="flex items-center justify-center w-full sm:w-20 h-12 rounded-full border border-[#e7e7e7] bg-[#f7f7f7]">
              <span className="text-lg font-medium text-black">{quantity}</span>
            </div>

            {/* Add to Cart Button */}
            <button
              className="flex items-center justify-center space-x-2 w-full sm:w-auto bg-[#ee626b] hover:bg-[#0071f1] text-white px-6 py-3 rounded-full transition"
            >
              <FaShoppingBag />
              <span className="text-[15px] uppercase font-medium">ADD TO CART</span>
            </button>
          </div>

          {/* Game Info */}
          <ul className="space-y-3">
            <li className="text-[14px] font-medium text-[#0071f8]">
              <span className="text-[#aaa]">Game ID:</span> COD MMII
            </li>
            <li className="text-[14px] font-medium text-[#0071f8]">
              <span className="text-[#aaa]">Genre:</span> Action, Team, Single
            </li>
            <li className="text-[14px] font-medium text-[#0071f8]">
              <span className="text-[#aaa]">Multi-tags:</span> War, Battle, Royal
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
