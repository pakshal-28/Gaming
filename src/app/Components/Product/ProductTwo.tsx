import Image from "next/image";
import Productimg from "../../../../public/Productimage.jpg";

export default function ProductTwo() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left Image Section */}
        <div className="flex justify-center">
          <Image
            src={Productimg}
            alt="Game Character"
            className="rounded-[20px] w-[354px] md:w-[450px] lg:w-[556px] h-auto object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <p className="text-[24px] md:text-[27px] font-bold text-[#1e1e1e] tracking-wide mb-4">
            Call of Duty®: Modern Warfare® II
          </p>

          <h1 className="text-[16px] md:text-[18px] font-medium text-[#c8c8c8] leading-tight mb-6">
            $28 <br className="block md:hidden" />
            <span className="text-[22px] md:text-[27px] font-bold text-[#0070f8] ml-2 md:ml-0">
              $22!
            </span>
          </h1>

          <p className="text-[14px] font-medium text-[#4a4a4a] mb-8 max-w-lg mx-auto lg:mx-0">
            LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework.
            This template is provided by TemplateMo and it is suitable for your
            gaming shop ecommerce websites. Feel free to use this for any purpose.
            Thank you.
          </p>

          {/* Game Info */}
          <div className="space-y-2">
            <h3 className="text-[14px] font-medium text-[#0070f8]">
              <span className="text-[#aaaaaa] mx-2">Game ID:</span> COD MMII
            </h3>
            <h3 className="text-[14px] font-medium text-[#0070f8]">
              <span className="text-[#aaaaaa] mx-2">Genre:</span> Action, Team, Single
            </h3>
            <h3 className="text-[14px] font-medium text-[#0070f8]">
              <span className="text-[#aaaaaa] mx-2">Multi-tags:</span> War, Battle, Royal
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
