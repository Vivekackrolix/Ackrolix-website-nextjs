import React from "react";

const AppModEnquiry = () => {
  return (
    <div className="bg-[#282828]">
      <div className="container-ack md:px-0 px-5">
        <div className="grid md:grid-cols-5 md:gap-[2.5rem] gap-2 items-center">
          <div className="md:col-span-2 md:px-0 px-5 md:pt-0 pt-8  relative">
            <div className="md:text-[4rem] text-[3rem] tracking-wider text-left texttransparent1 font-bold  md:pt-10 ">
              Contact Us
            </div>
            <div className="">
              <div className="absolute md:top-[5.5rem] top-[3rem] inset-x-0 flex justify-left">
                <div className="text-[32px] capitalize text-left text-white font-bold max-w-xl">
                Want to start a project?
                </div>
              </div>

              <div className="md:w-[95%] w-full text-md text-textcolor text-justify font-text  py-4">
              Product strategy minimises the risk of building the wrong product and aligns it with business goals.
              </div>
            </div>
          </div>

          <div className="pb-5 md:pt-10 md:col-span-3 ">
            <form>
              <div className="flex justify-start items-center space-x-4">
                <div className="w-full">
                  <label for="name" className="text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="  p-2  outline-none bg-[#D9D9D9]/50 rounded-md w-full text-white"
                  />
                </div>
                <div className="w-full">
                  <label for="mail" className="text-white">
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="mail"
                    className="  p-2  outline-none bg-[#D9D9D9]/50 rounded-md w-full text-white"
                    name="mail"
                  />
                </div>
              </div>

              <div className=" flex justify-start items-center space-x-4 pt-3">
                <div className="w-full">
                  <label for="phone" className="text-white">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="  p-2  outline-none bg-[#D9D9D9]/50 rounded-md w-full text-white"
                    value=""
                  />
                </div>
                <div className="w-full">
                  <label for="subject" className="text-white">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="  p-2  outline-none bg-[#D9D9D9]/50 rounded-md w-full text-white"
                    name="subject"
                    value=""
                  />
                </div>
              </div>
              <div className="pt-3">
                <label for="message" className="text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="  p-2  outline-none bg-[#D9D9D9]/50 rounded-md w-full text-white"
                  rows="4"
                />{" "}
              </div>
              <div className="pt-4">
                <button className=" bg-transparent border border-white text-white px-12 py-2 rounded-md">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppModEnquiry;