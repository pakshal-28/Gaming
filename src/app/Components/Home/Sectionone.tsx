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
    <section className="relative max-w-6xl mx-auto text-white px-2 py-12 lg:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:items-center text-center lg:text-left gap-8">
        {/* Left Content */}
        <div className="flex flex-col items-center lg:items-start gap-6">
          <div>
            <h6 className="uppercase text-[20px] font-medium text-[#fff] tracking-wide mb-4">
              Welcome to LUGX
            </h6>

            <h2 className="text-[48px] font-bold text-[#fff] mt-5 mb-10 pb-1 leading-tight">
              BEST GAMING SITE <span className="hidden md:inline"><br /></span>
              <span>EVER!</span>
            </h2>

            <p className="text-[14px] font-medium text-[#fff] mb-[70px] max-w-lg">
              LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites.
              You can download and use this layout for commercial purposes.
              Please tell your friends about TemplateMo.
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex items-center bg-[#fff] rounded-[25px] overflow-hidden w-full 
          lg:max-w-[450px] h-12 py-6">
            <input
              type="text"
              placeholder="Type Something"
              className="flex-1 px-4 py-2 text-[14px] font-medium text-[#7a7a7a] outline-none"
            />
            <button className="bg-[#ee626b] px-5 py-4 uppercase text-[15px] font-medium text-white rounded-full hover:bg-[#0071f8] transition">
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
              className="rounded-[25px] w-[354px] md:w-[700px] lg:w-[356px] h-auto"
              style={{ objectFit: "cover" }}
            />

            {/* Price Tag */}
            <div className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-[#008af8] text-white text-[22px] font-bold p-1 sm:px-4 rounded-[25px]">
              $22
            </div>

            {/* Discount Badge */}
            <div className="absolute w-[100px] h-[100px] bottom-[-40px] left-[-25px] bg-[#EE626B] uppercase text-[28px] text-white font-bold rounded-full flex items-center justify-center z-20">
              -40%
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative max-w-7xl mx-auto bottom-[-180px] z-1">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md w-full max-w-[261px] min-h-[180px] rounded-[25px] p-6 text-center flex flex-col items-center justify-center transition"
            >
              <div className="bg-[#0071f8] hover:bg-[#ee626b] text-white w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] lg:w-[90px] lg:h-[90px] rounded-full flex items-center justify-center cursor-pointer">
                {feature.icon}
              </div>
              <h4 className="uppercase text-[15px] sm:text-[16px] lg:text-[17px] font-bold text-[#1e1e1e] mt-4">
                {feature.title}
              </h4>
            </div>
          ))}
        </div>
      </section>

    </section>
  );
}
