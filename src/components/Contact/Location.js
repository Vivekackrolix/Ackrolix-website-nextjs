import Link from "next/link";
import React from "react"
import { BiPhoneCall } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const location = [
  {
    id: 1,
    img: "/assets/images/india.png",
    place: "Gurgaon",
    number: "+91-8178567042",
    address: " 139 Rider House Sec 44, Gurugram 122108",
    mail: "info@ackrolix.com",
  },
  {
    id: 2,
    img: "/assets/images/india.png",
    place: "Banglore",
    number: "+91-8178567042",
    address: " 139 Rider House Sec 44, Gurugram 122108",
    mail: "info@ackrolix.com",
  },
  {
    id: 3,
    img: "/assets/images/india.png",
    place: "Kolkata",
    number: "+91-8178567042",
    address: " 139 Rider House Sec 44, Gurugram 122108",
    mail: "info@ackrolix.com",
  },
  {
    id: 4,
    img: "/assets/images/india.png",
    place: "Mumbai",
    number: "+91-8178567042",
    address: " 139 Rider House Sec 44, Gurugram 122108",
    mail: "info@ackrolix.com",
  },
  {
    id: 5,
    img: "/assets/images/UAEflag.jpg",
    place: "Dubai",
    number: "+91-8178567042",
    address: " 139 Rider House Sec 44, Gurugram 122108",
    mail: "info@ackrolix.com",
  },
  {
    id:6,
    img: "/assets/images/UAEflag.jpg",
    place: "Sharjah",
    number: "+91-8178567042",
    address: " 139 Rider House Sec 44, Gurugram 122108",
    mail: "info@ackrolix.com",
  },
  {
    id: 7,
    img: "/assets/images/uk.png",
    place: "UK",
    number: "+91-8178567042",
    address: " 139 Rider House Sec 44, Gurugram 122108",
    mail: "info@ackrolix.com",
  },
  {
    id: 8,
    img: "/assets/images/USAflag.jpg",
    place: "USA",
    number: "+91-8178567042",
    address: " 139 Rider House Sec 44, Gurugram 122108",
    mail: "info@ackrolix.com",
  },

]
const Location = () => {
  return (
    <div className="container-sck bg-[url('../../public/assets/images/locationbackground.png')] background-size:cover background-position:center background-repeat:no-repeat bg-fixed">
      <div className="relative mb-50 my-10"

      // style={{ backgroundImage: `url("../../assets/images/locationbackground.png")` }}
      >
        <div className="md:text-[7rem] text-[5rem] tracking-wider text-center textdark font-bold  md:pt-10 ">
          Locations
        </div>
        <div className=" md:top-[5.8rem] font-bold  text-white left-16 text-[46px]  text-center flex flex-col md:space-y-6 absolute left-[39%] bottom-[15px]">
          <h2>
            Global <span className="text-primary">Spread</span>
          </h2>
        </div>
      </div>
      <div className="grid md:grid-cols-4 items-center  container-ack px-5 ">

        <div className=" md:col-span-4 grid md:grid-cols-4 items-center md:py-8 py-2 md:px-8 px-2 ">

          {location.map((item, index) => (
            <>

              <div style={{ margin: 7 }}>

                <div className="relative text-left px-6  py-3 bg-gray-50 rounded-xl border mb-5" key={index}>
                  <div className="inline-flex justify-left items-center rounded-md md:mt-8 ">
                    <img
                      src={item.img}
                      alt=""
                      className="  rounded-lg w-12 h-12 mx-auto "
                    />
                  </div>
                  <h2 className="font-semibold text-lg py-2 text-black text-left">
                    {item.place}
                  </h2>
                  <div className="grid gap-4 pb-4">
                    <Link href="tel:+918178567042">
                      <div className="flex space-x-2">
                        <BiPhoneCall size={20} />
                        <div className="text-xs">
                          <h2 className="font-semibold">PHONE</h2>
                          <p className="text-primary">{item.number}</p>
                        </div>
                      </div>
                    </Link>
                    <div className="flex space-x-2 cursor-pointer">
                      <FaLocationArrow size={20} />
                      <div className="text-xs">
                        <h2 className="font-semibold">ADDRESS</h2>
                        <p className="text-primary">
                          {item.address}
                        </p>
                      </div>
                    </div>
                    <Link href="mailto:info@ackrolix.com">
                      <div className="flex space-x-2">
                        <MdOutlineMail size={20} />
                        <div className="text-xs">
                          <h2 className="font-semibold">EMAIL</h2>
                          <p className="text-primary">{item.mail}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

              </div>
            </>
          ))}
         
        </div>
      </div>
      <div className="grid ">
        <div className="h-full ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9262399201243!2d77.07328361427676!3d28.451639798997576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19e83941db41%3A0x7885f10d8a89ac20!2sAckrolix%20Innovations!5e0!3m2!1sen!2sin!4v1679741201844!5m2!1sen!2sin"
            width="100%"
            height={500}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Location;