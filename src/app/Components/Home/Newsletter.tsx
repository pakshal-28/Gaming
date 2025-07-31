import Image from "next/image";
import ctaimg from "../../../../public/ctabg.jpg"; // replace with actual image

export default function Newsletter() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 md:px-4 py-16 bg-white">
      <div className="grid md:grid-cols-3 gap-6 items-center">
        {/* Left Card */}
        <div className="bg-gray-100 rounded-2xl p-6 md:p-8 text-left">
          <p className="text-red-500 font-semibold text-sm mb-2">OUR SHOP</p>
          <h2 className="text-[36px] font-bold text-[#1E1E1E] mb-4 leading-tight">
            Go Pre-Order <span className="hidden md:inline"><br /></span>
            Buy & Get <span className="hidden md:inline"><br /></span>
            Best <span className="text-[#006CEC]">Prices</span> <span className="hidden md:inline"><br /></span>
            For You!
          </h2>

          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor consectetur adipiscing elit sed do eiusmod.
          </p>
        </div>

        {/* Center Image */}
        <div className="relative w-full rounded-2xl overflow-hidden">
          <Image
            src={ctaimg}
            alt="Newsletter Banner"
            className="w-full h-full object-cover"
            width={500}
            height={300}
          />
        </div>

        {/* Right Card */}
        <div className="bg-gray-100 rounded-2xl p-6 md:p-8 text-left">
          <p className="text-red-500 font-semibold text-sm mb-2">NEWSLETTER</p>
          <h2 className="text-[36px] font-bold text-[#1E1E1E] mb-4 leading-tight">
            Get Up To $100 Off <span className="hidden md:inline"><br /></span>
            Just Buy <span className="hidden md:inline"><br /></span>
            <span className="text-[#006CEC]">Subscribe</span> <span className="hidden md:inline">
              <br /></span>
            Newsletter!
          </h2>

          <p className="text-gray-600 text-sm">
            Join now and receive exclusive offers delivered to your inbox.
          </p>
        </div>
      </div>
    </section>
  );
}
