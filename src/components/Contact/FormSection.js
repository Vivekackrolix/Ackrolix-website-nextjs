import Link from "next/link";
import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { GrMapLocation } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";

const FormSection = () => {
  return (
    <>
      <div
        className="bg-cover"
      // style={{ backgroundImage: `url("/assets/images/banner/3.webp")` }}
      >
        <div className="relative mb-50 ">
          <div className="md:text-[7rem] text-[5rem] text-white tracking-wider text-center texttransparent font-bold  md:pt-10 ">
            Connect
          </div>
          <div className=" md:top-[5.8rem] font-bold  left-16 text-[46px]  text-center flex flex-col md:space-y-6 absolute left-[39%] bottom-[15px]">
            <h2>
              Get in <span className="text-primary">Touch</span>
            </h2>
          </div>
        </div>
        <div className="container-ack md:grid grid-cols-2 md:px-0 md:pt-0 ">
          <div className="col-span-1 border mt-10 pt-10 px-8  rounded-xl hover:border-[#FDDA0D] border-gray-300 ">
            <p style={{ width: '113%' }} className=" md:text-start text-center text-sm md:pr-12 md:top-[5.8rem] font-bold top-10 left-16 text-[46px]  flex flex-col md:space-y-6 ">
              {"We appreciate your interest in Ackrolix. We're available to respond to any queries you may have."}
            </p>
            
            {/* form start */}
            <form className="md:pt-0 pt-7  ">
              <div className="space-y-4 md:pr-16 py-8 text-sm">
                <input
                  style={{ width: '113%' }}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className=" rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                />
                <input
                  style={{ width: '113%' }}
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="rounded-md border border-[#e0e0e0] bg-white py-2 px-6  text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                />
                <input
                  style={{ width: '113%' }}
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  className="rounded-md border border-[#e0e0e0] bg-white py-2 px-6  text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                />
                <input
                  style={{ width: '113%' }}
                  type="text"
                  name="service"
                  id="service"
                  placeholder="Service you looking for?"
                  className="rounded-md border border-[#e0e0e0] bg-white py-2 px-6  text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                />
                <textarea
                  style={{ width: '113%' }}
                  type="text"
                  rows={5}
                  name="message"
                  id="mesage"
                  placeholder="Write your message"
                  className="rounded-md border border-[#e0e0e0] bg-white py-2 px-6  text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
                />
                <button style={{ width: '113%' }} className="bg-secondary hover:bg-primary text-white px-8 py-2 rounded-md w-full flex justify-center items-center  ">
                  <span className="text-base"> SEND </span>
                </button>
              </div>
            </form>
            {/* form end */}

          </div>
          <div className="grid pl-16 justify-items items-center ">
            <div className="">
              <h1 className="font-extrabold text-3xl mb-5">Connect with Our Experts for Expert Advice and Supports</h1>
              <p>When you choose to connect with our experts, you gain access to a wealth of knowledge and experience. Our team comprises professionals who have excelled in their respective fields and possess a deep understanding of the challenges and complexities you may face.</p>
              
              <Link href="mailto:info@ackrolix.com">
                <div className="flex space-x-2 mb-3 mt-5">
                  <MdOutlineMail size={25} />
                    <p className="text-primary ">info@ackrolix.com</p>
                </div>
              </Link>
              <Link href="tel:+918178567042" >
                <div className="flex space-x-2 mb-2 " >
                  <BiPhoneCall size={25} />
                    <p className="text-primary mb-2">+91-8178567042</p>
                </div>
              </Link>
              <div className="flex space-x-2 cursor-pointer ">
                <GrMapLocation size={25} className="fill-orange"/>
                  <p className="text-primary ">136 Rider House Sec 44, Gurugram 122108 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSection;