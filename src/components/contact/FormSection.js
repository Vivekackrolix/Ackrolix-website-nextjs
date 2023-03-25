import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const FormSection = () => {
  return (
    <>
      <div
        className="bg-cover"
        style={{ backgroundImage: `url("/assets/images/careerBg.png")` }}
      >
        <div className="container-ack md:grid grid-cols-2">
          <div className="col-span-1">
            <div className="relative">
              <div className="md:text-[7rem] text-[5rem] text-white tracking-wider text-center texttransparent font-bold  md:pt-10 ">
                Connect
              </div>
              <div className="absolute md:top-28 top-5 left-16 text-3xl  text-center font-semibold flex flex-col space-y-6 items-start">
                <h2>
                  Get in <span className="text-primary">Touch</span>
                </h2>
                <p className=" text-start text-sm md:pr-12">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley
                </p>
              </div>
            </div>
            {/* form start */}
            <form>
              <div className="space-y-4 px-16 py-8 text-sm">
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6  text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6  text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="service"
                    id="service"
                    placeholder="Service you looking for?"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6  text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                  />
                </div>
                <div>
                  <textarea
                    type="text"
                    rows={5}
                    name="message"
                    id="mesage"
                    placeholder="Write your message"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6  text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                  />
                </div>
                <div className="">
                  <button className="bg-secondary hover:bg-primary text-white px-8 py-2 rounded-md w-full flex justify-center items-center">
                    <span className="text-base"> SEND </span>
                  </button>
                </div>
              </div>
            </form>
            {/* form end */}
            <div className="grid grid-cols-3 gap-4 pl-16 pb-4">
              <div className="flex space-x-2">
                <BiPhoneCall size={25} />
                <div className="text-xs">
                  <h2 className="font-semibold">PHONE</h2>
                  <p className="text-primary">03 5432 1234</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <FaLocationArrow size={30} />
                <div className="text-xs">
                  <h2 className="font-semibold">ADDRESS</h2>
                  <p className="text-primary">
                    139 Ride House Sec 44, Gurugram 122108
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <MdOutlineMail size={25} />
                <div className="text-xs">
                  <h2 className="font-semibold">EMAIL</h2>
                  <p className="text-primary">info@marcc.com.au</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="h-full py-20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9262399201243!2d77.07328361427676!3d28.451639798997576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19e83941db41%3A0x7885f10d8a89ac20!2sAckrolix%20Innovations!5e0!3m2!1sen!2sin!4v1679741201844!5m2!1sen!2sin"
                width="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-96 h-full rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSection;
