import Image from "next/image";
import ctaimg from "../../../../public/ctabg.jpg";

export default function Newsletter() {
  return (
    <section className="relative max-w-6xl mx-auto py-16 bg-white">
      <div className="relative grid md:grid-cols-3 gap-6 items-center">

        {/* Center Image - placed absolutely */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-95 w-[550px] rounded-2xl overflow-hidden z-0">
          <Image
            src={ctaimg}
            alt="Newsletter Banner"
            className="object-cover"
            width={650}
            height={480}
          />
        </div>

        {/* Left Card */}
        <div className="relative bg-[#f7f7f7] rounded-2xl p-[80px] w-[451px] h-[608px] z-10">
          <h6 className="text-[#ee626b] uppercase font-bold text-[15px]">OUR SHOP</h6>
          <h2 className="text-[36px] font-bold text-[#1e1e1e] mt-5">
            Go Pre-Order <br />
            Buy & Get <br />
            Best <span className="text-[#0071f8]">Prices</span> <br />
            For You!
          </h2>
          <p className="text-[#4a4a4a] font-semibold text-[16px] my-10">
            Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.
          </p>
          <button className="h-12 text-[14px] font-semibold bg-[#ee626b] hover:bg-[#1B7FFA] uppercase px-7 rounded-[25px] cursor-pointer">
            SHOP NOW
          </button>
        </div>

        {/* Empty column (for spacing in grid) */}
        {/* <div></div> */}

        {/* Right Card */}
        <div className="relative bg-[#f7f7f7] rounded-2xl ml-[315px] p-[80px] w-[440px] mt-[120px] mr-[-15px] z-10">
          <h6 className="text-[#ee626b] uppercase font-bold text-[15px]">
            NEWSLETTER
          </h6>

          <h2 className="text-[36px] font-bold text-[#1e1e1e] mt-5 leading-tight">
            Get Up To $100 Off <br />
            Just Buy <br />
            <span className="text-[#0071f8]">Subscribe</span> <br />
            Newsletter!
          </h2>

          <div className="flex items-center w-full mt-10">
            <input
              type="text"
              placeholder="Your email..."
              className="flex-1 px-4 h-12 rounded-l-full bg-white text-[14px] font-medium text-[#7a7a7a] outline-none"
            />
            <button className="bg-[#ee626b] px-2 h-12 rounded-r-full uppercase text-[14px] font-semibold text-white hover:bg-[#0071f8] transition">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
