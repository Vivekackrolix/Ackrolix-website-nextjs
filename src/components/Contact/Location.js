import Link from "next/link";
import React from "react"
import { BiPhoneCall } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Location = () => {
  return (
    <div className="container-sck">
       <div className="relative mb-50 ">
          <div className="md:text-[7rem] text-[5rem] text-white tracking-wider text-center texttransparent font-bold  md:pt-10 ">
          Locations
          </div>
          <div className=" md:top-[5.8rem] font-bold  left-16 text-[46px]  text-center flex flex-col md:space-y-6 absolute left-[39%] bottom-[15px]">
            <h2>
            Global <span className="text-primary">Spread</span>
            </h2>
          </div>
        </div>
      <div className="grid md:grid-cols-4 items-center  container-ack px-5 ">
        
        <div className=" md:col-span-4 grid md:grid-cols-4 items-center md:py-8 py-2  ">
          <div style={{margin:7}}>
            
              <div className="relative text-left px-6  py-3 bg-gray-50 rounded-xl border mb-5">
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
                <div className="grid gap-4 pb-4">
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
            <div style={{margin:7}}>
            
              <div className="relative text-left px-6  py-3 bg-gray-50 rounded-xl border mb-5">
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
                <div className="grid gap-4 pb-4">
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
            <div style={{margin:7}}>
            
              <div className="relative text-left px-6  py-3 bg-gray-50 rounded-xl border mb-5">
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
                <div className="grid gap-4 pb-4">
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
            <div style={{margin:7}}>
            
              <div className="relative text-left px-6  py-3 bg-gray-50 rounded-xl border mb-5">
                <div className="inline-flex justify-left items-center rounded-md md:mt-8 ">
                  <img
                    src="/assets/images/uk.png"
                    alt=""
                    className="  rounded-lg w-12 h-12 mx-auto "
                  />
                </div>
                <h2 className="font-semibold text-lg py-2 text-black text-left">
                  UK
                </h2>
                <div className="grid gap-4 pb-4">
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
  );
};

export default Location;
