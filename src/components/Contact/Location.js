import Link from "next/link";
import React from "react"
import { BiPhoneCall } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Location = () => {
  return (
    <div className="container-sck">
      <div className="grid md:grid-cols-4 items-center  container-ack px-5 ">
        <div className=" md:col-span-2 md:px-0 pb-5 md:pb-0  relative">
          <div className="md:text-8xl text-center md:text-left text-[2rem] text-white tracking-[0.5rem] texttransparent font-bold  md:pt-10 ">
            Locations
          </div>
          <div className="">
            <div className="text-[46px] text-secondary font-bold absolute md:top-[4.6rem] top-[2rem] md:left-2  text-center md:text-left">
              Global <span className="text-primary">Spread</span>
            </div>
            <div className=" w-[90%] text-base text-textcolor font-text  pb-4">
              We are delivering our world class services in three countries in the world.
              We’re passionate about supporting your objectives and committed to partnering
              with you to provide the best solutions.

            </div>
          </div>
        </div>
        <div className=" md:col-span-2 grid md:grid-cols-2 items-center md:py-8 py-2">
          <div>
            <div className="group" key="id">
              <div className="relative text-left px-6  py-3  duration duration-200 group-hover:-translate-y-2 bg-gray-50 hover:bg-white hover:drop-shadow-xl bg-transparent rounded-xl border">
                <div className="inline-flex justify-left items-center rounded-md md:mt-8 ">
                  <img
                    src="/assets/images/india.png"
                    alt=""
                    className="  rounded-lg w-12 h-12 mx-auto "
                  />
                </div>
                <h2 className="font-semibold text-lg py-2 text-black text-left">
                  India
                </h2>
                <div className="grid  pb-4">
                  <Link href="tel:+918178567042">
                    <div className="flex space-x-2">
                      <BiPhoneCall size={20} />
                      <div className="text-xs">
                        <h2 className="font-semibold">PHONE</h2>
                        <p className="text-primary">+91-8178567042</p>
                      </div>
                    </div>
                  </Link>
                  <div className="flex space-x-2 cursor-pointer">
                    <FaLocationArrow size={20} />
                    <div className="text-xs">
                      <h2 className="font-semibold">ADDRESS</h2>
                      <p className="text-primary">
                        139 Rider House Sec 44, Gurugram 122108
                      </p>
                    </div>
                  </div>
                  <Link href="mailto:info@ackrolix.com">
                    <div className="flex space-x-2">
                      <MdOutlineMail size={20} />
                      <div className="text-xs">
                        <h2 className="font-semibold">EMAIL</h2>
                        <p className="text-primary">info@ackrolix.com</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="group" key="id">
              <div className="relative text-left px-6  py-3  duration duration-200 group-hover:-translate-y-2 bg-gray-50 hover:bg-white hover:drop-shadow-xl bg-transparent rounded-xl border ">
                <div className="inline-flex justify-left items-center rounded-md md:mt-8 ">
                  <img
                    src="/assets/images/UAEflag.jpg"
                    alt=""
                    className="  rounded-lg w-12 h-12 mx-auto "
                  />
                </div>
                <h2 className="font-semibold text-lg py-2 text-black text-left">
                  UAE
                </h2>
                <div className="grid  gap-4  pb-4">
                  <Link href="tel:+918178567042">
                    <div className="flex space-x-2">
                      <BiPhoneCall size={20} />
                      <div className="text-xs">
                        <h2 className="font-semibold">PHONE</h2>
                        <p className="text-primary">+91-8178567042</p>
                      </div>
                    </div>
                  </Link>
                  <div className="flex space-x-2 cursor-pointer">
                    <FaLocationArrow size={20} />
                    <div className="text-xs">
                      <h2 className="font-semibold">ADDRESS</h2>
                      <p className="text-primary">
                        139 Rider House Sec 44, Gurugram 122108
                      </p>
                    </div>
                  </div>
                  <Link href="mailto:info@ackrolix.com">
                    <div className="flex space-x-2">
                      <MdOutlineMail size={20} />
                      <div className="text-xs">
                        <h2 className="font-semibold">EMAIL</h2>
                        <p className="text-primary">info@ackrolix.com</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-12">
            <div className="group" key="id">
              <div className="relative text-left px-6  py-3 duration duration-200 group-hover:-translate-y-2 bg-gray-50 hover:bg-white hover:drop-shadow-xl bg-transparent rounded-xl border">
                <div className="inline-flex justify-left items-center rounded-md md:mt-8 ">

                  <img
                    src="/assets/images/USAflag.jpg"
                    alt=""
                    className="  rounded-lg w-12 h-12 mx-auto "
                  />
                </div>
                <h2 className="font-semibold text-lg py-2 text-black text-left">
                  USA
                </h2>
                <div className="grid  gap-4  pb-4">
                  <Link href="tel:+918178567042">
                    <div className="flex space-x-2">
                      <BiPhoneCall size={20} />
                      <div className="text-xs">
                        <h2 className="font-semibold">PHONE</h2>
                        <p className="text-primary">+91-8178567042</p>
                      </div>
                    </div>
                  </Link>
                  <div className="flex space-x-2 cursor-pointer">
                    <FaLocationArrow size={20} />
                    <div className="text-xs">
                      <h2 className="font-semibold">ADDRESS</h2>
                      <p className="text-primary">
                        139 Rider House Sec 44, Gurugram 122108
                      </p>
                    </div>
                  </div>
                  <Link href="mailto:info@ackrolix.com">
                    <div className="flex space-x-2">
                      <MdOutlineMail size={20} />
                      <div className="text-xs">
                        <h2 className="font-semibold">EMAIL</h2>
                        <p className="text-primary">info@ackrolix.com</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="group" key="id">
              <div className="relative text-left px-6  py-3 duration duration-200 group-hover:-translate-y-2  bg-gray-50 hover:bg-white hover:drop-shadow-xl bg-transparent rounded-xl border ">
                <div className="inline-flex justify-left items-center rounded-md md:mt-8 ">
                  <img
                    src="/assets/images/aus.png"
                    alt=""
                    className="  rounded-lg w-12 h-12 mx-auto "
                  />
                </div>
                <h2 className="font-semibold text-lg py-2 text-black text-left">
                  UK
                </h2>
                <div className="grid  gap-4  pb-4">
                  <Link href="tel:+918178567042">
                    <div className="flex space-x-2">
                      <BiPhoneCall size={20} />
                      <div className="text-xs">
                        <h2 className="font-semibold">PHONE</h2>
                        <p className="text-primary">+91-8178567042</p>
                      </div>
                    </div>
                  </Link>
                  <div className="flex space-x-2 cursor-pointer">
                    <FaLocationArrow size={20} />
                    <div className="text-xs">
                      <h2 className="font-semibold">ADDRESS</h2>
                      <p className="text-primary">
                        139 Rider House Sec 44, Gurugram 122108
                      </p>
                    </div>
                  </div>
                  <Link href="mailto:info@ackrolix.com">
                    <div className="flex space-x-2">
                      <MdOutlineMail size={20} />
                      <div className="text-xs">
                        <h2 className="font-semibold">EMAIL</h2>
                        <p className="text-primary">info@ackrolix.com</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
