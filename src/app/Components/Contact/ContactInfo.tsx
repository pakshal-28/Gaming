import React from 'react';

export default function ContactInfo() {
  return (
    <section className="relative max-w-6xl mx-auto text-white px-4 sm:px-6 lg:px-2 py-12 lg:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-start text-center lg:text-left gap-10">
        
        {/* Left Section */}
        <div className="flex flex-col text-left p-8 sm:p-10 lg:p-[60px] rounded-[25px] bg-[#f7f7f7]">
          <div className="mb-10">
            <h6 className="text-[15px] font-bold text-[#ee626b] uppercase">Contact us</h6>
            <h2 className="text-[30px] sm:text-[36px] font-bold text-[#1e1e1e] mt-5">Say Hello!</h2>
          </div>
          <p className="text-[14px] font-medium text-[#4a4a4a] mb-10">
            LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework...
          </p>

          <ul>
            <li className="text-[16px] text-[#aaaaaa] mb-6">
              <span className="text-[14px] font-semibold text-[#4a4a4a]">Address</span> <br />
              Sunny Isles Beach, FL 33160, United States
            </li>
            <li className="text-[16px] text-[#aaaaaa] mb-6">
              <span className="text-[14px] font-semibold text-[#4a4a4a]">Phone</span> <br />
              +123 456 7890
            </li>
            <li className="text-[16px] text-[#aaaaaa] mb-0">
              <span className="text-[14px] font-semibold text-[#4a4a4a]">Email</span> <br />
              lugx@contact.com
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-start mt-8 lg:mt-0">
          {/* Google Map */}
          <div className="mb-10 w-full">
           
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3089.343833295118!2d72.37077957445085!3d23.611401694100056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c42343b740083%3A0x2a4e7fadd58e25db!2sBriotechno!5e1!3m2!1sen!2sin!4v1754291031670!5m2!1sen!2sin"
              width="100%"
              height="325"
              className="rounded-[23px] w-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <form>
            <div className="flex flex-col md:flex-row gap-4 mb-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name..."
                required
                className="w-full h-12 px-5 rounded-[25px] bg-[#f7f7f7] border border-[#e7e7e7] text-[14px] text-[#4a4a4a] cursor-pointer"
              />
              <input
                type="text"
                name="surname"
                placeholder="Your Surname..."
                required
                className="w-full h-12 px-5 rounded-[25px] bg-[#f7f7f7] border border-[#e7e7e7] text-[14px] text-[#4a4a4a] cursor-pointer"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-5">
              <input
                type="email"
                name="email"
                placeholder="Your Email..."
                required
                className="w-full h-12 px-5 rounded-[25px] bg-[#f7f7f7] border border-[#e7e7e7] text-[14px] text-[#4a4a4a] cursor-pointer"
              />
              <input
                type="text"
                name="subject"
                placeholder="Your Subject..."
                className="w-full h-12 px-5 rounded-[25px] bg-[#f7f7f7] border border-[#e7e7e7] text-[14px] text-[#4a4a4a] cursor-pointer"
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              className="w-full h-32 px-5 py-3 rounded-[25px] bg-[#f7f7f7] border border-[#e7e7e7] text-[14px] text-[#4a4a4a] mb-5 cursor-pointer"
            ></textarea>

            <button
              type="submit"
              className="h-12 bg-[#ee626b] text-white uppercase text-[15px] font-medium px-6 rounded-[25px] cursor-pointer w-fit"
            >
              Send Message Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
