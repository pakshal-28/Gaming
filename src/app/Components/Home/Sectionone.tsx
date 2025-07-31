import Image from "next/image";
import bannerimg from "../../../../public/bannerimage.jpg";
import { FaCloudDownloadAlt, FaUserAlt, FaPlayCircle, FaThLarge } from "react-icons/fa";

const features = [
  { icon: <FaCloudDownloadAlt size={40} />, title: "FREE STORAGE" },
  { icon: <FaUserAlt size={40} />, title: "USER MORE" },
  { icon: <FaPlayCircle size={40} />, title: "REPLY READY" },
  { icon: <FaThLarge size={40} />, title: "EASY LAYOUT" },
];

export default function SectionOne() {
  return (
    <section className="relative max-w-7xl mx-auto text-white px-4 py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:items-center text-center lg:text-left gap-8">
        {/* Left Content */}
        <div className="flex flex-col items-center lg:items-start gap-6">
          <div>
            <p className="uppercase text-[18px] md:text-[20px] font-medium tracking-wide mb-4">
              Welcome to LUGX
            </p>

            <h1 className="text-[36px] md:text-[48px] font-bold leading-tight mb-6">
              BEST GAMING SITE <span className="hidden md:inline"><br /></span>
              <span>EVER!</span>
            </h1>

            <p className="text-[14px] font-medium mb-8 max-w-lg">
              LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites.
              You can download and use this layout for commercial purposes.
              Please tell your friends about TemplateMo.
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-[25px] overflow-hidden w-full lg:w-[450px]">
            <input
              type="text"
              placeholder="Type Something"
              className="flex-1 px-4 py-2 text-gray-700 outline-none text-sm md:text-base"
            />
            <button className="bg-[#ee626b] px-5 py-2 text-[14px] md:text-[15px] text-white font-semibold rounded-full hover:bg-[#0071f8] transition">
              SEARCH NOW
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative">
            <Image
              src={bannerimg}
              alt="Game Character"
              className="rounded-[20px] w-[354px] md:w-[700px] lg:w-[416px] h-auto"
              style={{ objectFit: "cover" }}
            />

            {/* Price Tag */}
            <div className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-[#1B7FFA] text-white text-[14px] sm:text-[22px] font-bold px-3 sm:px-4 py-1 rounded-[25px]">
              $22
            </div>

            {/* Discount Badge */}
            <div className="absolute w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] bottom-[-40px] left-[-30px] bg-[#EE626B] text-[18px] sm:text-[28px] text-white font-bold rounded-full flex items-center justify-center z-20">
              -40%
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative max-w-7xl mx-auto bottom-[-125px] w-full z-50">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-[25px] p-8 text-center flex flex-col items-center justify-center transition"
            >
              <div className="bg-[#0171F9] hover:bg-[#ee626b] text-white w-[90px] h-[90px] rounded-full flex items-center justify-center mb-4 cursor-pointer">
                {feature.icon}
              </div>
              <h3 className="uppercase text-[17px] font-bold text-[#1e1e1e] tracking-wide mb-2">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
