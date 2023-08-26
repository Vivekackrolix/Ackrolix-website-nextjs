import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBars, FaCross, FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";
import { useRouter } from "next/router";
const Navbar = () => {
  // setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // close menu on click
  const closeMenu = () => setClick(false);

  const router = useRouter();

  return (
    <div className="header text-black duration-300  w-full z-20  header-home py-2 ">
      <nav className="navbar ">
        <Link href="/" className="md:hidden block">
          <img src="/assets/images/acklogo.png" alt="image" />
        </Link>
        <div>
          <ul
            className={
              click
                ? "nav-menu active md:space-y-0 space-y-4 pb-3 "
                : "nav-menu flex justify-between space-x-4"
            }
          >
            <Link href="/">
              <li
                className={
                  router.pathname == "/"
                    ? "active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer "
                    : "group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary  group relative cursor-pointer text-black"
                }
              >
                Home
              </li>
            </Link>
            {/* for mobile start */}
            <li className="md:hidden block ">
              <Link href="/">
                <p className="text-white px-10">Home</p>
              </Link>
            </li>
            {/* for mobile end */}
            <Link href="/about">
              <li
                className={
                  router.pathname == "/about"
                    ? "active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer "
                    : "group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer text-black"
                }
              >
                About
              </li>
            </Link>
            {/* for mobile start */}
            <li className="md:hidden block ">
              <Link href="/about">
                <p className="text-white px-10">About</p>
              </Link>
            </li>
            {/* for mobile end */}

            <li
              className="group dropdown md:flex hidden nav-item text-sm  font-semibold nav-desk hover:text-black hover:border-b-2 hover:duration-150 border-b-[#edb00a]  rounded-md group relative cursor-pointer text-black
              "
            >
              <p className="group-hover:text-[#edb00a] flex items-center justify-center">
                Services{" "}
                <span>
                  <BsChevronDown
                    className="text-black group-hover:text-[#edb00a]"
                    size={14}
                  />
                </span>
              </p>
              <div className="group-hover:block z-[999] shadow-lg shadow-black/30 dropdown-menu absolute hidden transition-all  duration-300 translate-y-2 h-auto top-[2.1rem] md:-left-10 ">
                <div className="top-0 bg-white flex py-5">
                  <div className="p-1 text-black text-xs  w-80 text-left flex flex-col rounded-l-md  border-r-2 border-primary">
                    <p className=" text-black text-base font-bold px-4 py-5 ">
                      {" "}
                      <Link href="/services">
                        Product Conceptualization
                      </Link>{" "}
                    </p>

                    <Link
                      href="/prototyping-design-company-gurgaon"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Prototyping Design Company
                    </Link>
                    <Link
                      href="/ux-design-company-gurgaon"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      UX Design Company
                    </Link>
                    <Link
                      href="/ui-designing-company-gurgaon"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      UI Designing Company
                    </Link>
                    <Link
                      href="/user-research-company-gurgaon"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                    >
                      User Research Company
                    </Link>
                    <Link
                      href="/usability-testing-company-gurgaon"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Usability Testing Company
                    </Link>
                    <Link
                      href="/data-visualisation-company-gurgaon"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Data Visualisation Company
                    </Link>
                  </div>

                  <div className="p-1 text-black text-xs  w-80 text-left flex flex-col  border-r-2 border-primary">
                    <p className=" text-black text-base font-bold px-4 py-5 ">
                      {" "}
                      <Link href="/services">Product Development</Link>{" "}
                    </p>

                    <Link
                      href="/website-development-company-gurgaon"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Web Development Company
                    </Link>
                    <Link
                      href="/app-modernization-company-gurgaon"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      App Modernization Company
                    </Link>
                    <Link
                      href="/software-development-company-gurgaon"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Software Development Company
                    </Link>
                    <Link
                      href="/digital-product-design-company-gurgaon"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                    >
                      Digital Product Design Company
                    </Link>

                    <Link
                      href="/ecommerce-developement-company-gurgaon"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Ecommerce Development Company
                    </Link>

                    <Link
                      href="/cloud-app-development-company-gurgaon"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Cloud Application Development Company
                    </Link>
                  </div>

                  <div className="p-1 text-black text-xs  w-80 text-left flex flex-col rounded-r-md">
                    <p className=" text-black text-base font-bold px-4 py-5 ">
                      {" "}
                      <Link href="/services">Digital Modernization </Link>
                    </p>

                    <Link
                      href="/digital-marketing-company-gurgaon"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                    >
                      Digital Marketing Company
                    </Link>

                    <Link
                      href="/social-media-marketing-company-gurgaon"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Social Media Marketing Company
                    </Link>

                    <Link
                      href="/sem-company-gurgaon"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Search Engine Marketing Company
                    </Link>
                    <Link
                      href="/seo-company-gurgaon"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      SEO Company
                    </Link>
                    <Link
                      href="/pr-agency-gurgaon"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      PR Agency
                    </Link>
                    <Link
                      href="/media-buying-company-gurgaon"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Media Buying Company
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            {/* for mobile start */}
            <li className="md:hidden block ">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="text-white flex items-center px-10 justify-start w-full">
                      Services
                      <RiArrowDropDownLine
                        className={
                          open ? "rotate-180 transform w-8 h-8" : "w-8 h-8"
                        }
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500 px-10 ">
                      <div className="top-0 bg-white flex flex-col py-5">
                        <div className="p-1 text-black text-xs  w-80 text-left flex flex-col rounded-l-md  border-r-2 border-primary">
                          <p className=" text-black text-base font-bold px-4 py-5 ">
                            {" "}
                            <Link href="/services">
                              Product Conceptualization
                            </Link>{" "}
                          </p>

                          <Link
                            href="/prototyping-design-company-gurgaon"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Prototyping Design Company
                          </Link>
                          <Link
                            href="/ux-design-company-gurgaon"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            UX Design Company
                          </Link>
                          <Link
                            href="/ui-designing-company-gurgaon"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            UI Designing Company
                          </Link>
                          <Link
                            href="/user-research-company-gurgaon"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                          >
                            User Research Company
                          </Link>
                          <Link
                            href="/usability-testing-company-gurgaon"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Usability Testing Company
                          </Link>
                          <Link
                            href="/data-visualisation-company-gurgaon"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Data Visualisation Company
                          </Link>
                        </div>

                        <div className="p-1 text-black text-xs  w-80 text-left flex flex-col  border-r-2 border-primary">
                          <p className=" text-black text-base font-bold px-4 py-5 ">
                            {" "}
                            <Link href="/services">
                              Product Development
                            </Link>{" "}
                          </p>

                          <Link
                            href="/website-development-company-gurgaon"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Web Development Company
                          </Link>
                          <Link
                            href="/app-modernization-company-gurgaon"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            App Modernization Company
                          </Link>
                          <Link
                            href="/software-development-company-gurgaon"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Software Development Company
                          </Link>
                          <Link
                            href="/digital-product-design-company-gurgaon"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                          >
                            Digital Product Design Company
                          </Link>

                          <Link
                            href="/ecommerce-developement-company-gurgaon"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Ecommerce Development Company
                          </Link>

                          <Link
                            href="/cloud-app-development-company-gurgaon"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Cloud Application Development Company
                          </Link>
                        </div>

                        <div className="p-1 text-black text-xs  w-80 text-left flex flex-col rounded-r-md">
                          <p className=" text-black text-base font-bold px-4 py-5 ">
                            {" "}
                            <Link href="/services">Digital Modernization </Link>
                          </p>

                          <Link
                            href="/digital-marketing-company-gurgaon"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                          >
                            Digital Marketing Company
                          </Link>

                          <Link
                            href="/social-media-marketing-company-gurgaon"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Social Media Marketing Company
                          </Link>

                          <Link
                            href="/sem-company-gurgaon"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Search Engine Marketing Company
                          </Link>
                          <Link
                            href="/seo-company-gurgaon"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            SEO Company
                          </Link>
                          <Link
                            href="/pr-agency-gurgaon"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            PR Agency
                          </Link>
                          <Link
                            href="/media-buying-company-gurgaon"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Media Buying Company
                          </Link>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </li>
            {/* for mobile end */}

            <Link href="/experts">
              <li
                className={
                  router.pathname == "/experts"
                    ? "active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer "
                    : "group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary  group relative cursor-pointer text-black"
                }
              >
                Our Experts
              </li>
            </Link>
            {/* for mobile start */}
            <li className="md:hidden block ">
              <Link href="/experts">
                <p className="text-white px-10">Our Experts</p>
              </Link>
            </li>
            {/* for mobile end */}
            <Link href="/moments">
              <li
                className={
                  router.pathname == "/moments"
                    ? "active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer "
                    : "group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary  group relative cursor-pointer text-black"
                }
              >
                Moments
              </li>
            </Link>
            {/* for mobile start */}
            <li className="md:hidden block ">
              <Link href="/moments">
                <p className="text-white px-10">Moments</p>
              </Link>
            </li>
            {/* for mobile end */}
            <Link href="/career">
              <li
                className={
                  router.pathname == "/career"
                    ? "active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer "
                    : "group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary  group relative cursor-pointer text-black"
                }
              >
                Career
              </li>
            </Link>
            {/* for mobile start */}
            <li className="md:hidden block ">
              <Link href="/career">
                <p className="text-white px-10">Career</p>
              </Link>
            </li>
            {/* for mobile end */}
            <Link href="/portfolio">
              <li
                className={
                  router.pathname == "/portfolio"
                    ? "active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer "
                    : "group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary  group relative cursor-pointer text-black"
                }
              >
                Portfolio
              </li>
            </Link>
            {/* for mobile start */}
            <li className="md:hidden block ">
              <Link href="/portfolio">
                <p className="text-white px-10">Portfolio</p>
              </Link>
            </li>
            <li
              className="group dropdown md:flex hidden nav-item text-sm  font-semibold nav-desk hover:text-black hover:border-b-2 hover:duration-150 border-b-[#edb00a]  rounded-md group relative cursor-pointer text-black
              "
            >
              <Link href="/technology">
                <p className="group-hover:text-[#edb00a] flex items-center justify-center">
                  Technologies{" "}
                  <span>
                    <BsChevronDown
                      className="text-black group-hover:text-[#edb00a]"
                      size={14}
                    />
                  </span>{" "}
                </p>
              </Link>
              <div className="group-hover:block z-[999] shadow-lg shadow-black/30 dropdown-menu absolute hidden transition-all  duration-300 translate-y-2 h-auto top-[2.1rem] md:-right-20 ">
                <div className="top-0 bg-white flex py-5">
                  <div className="p-1 text-black text-xs  w-44 text-left flex flex-col rounded-l-md  border-r-2 border-primary">
                    <p className=" text-black text-base font-bold px-4 py-5 ">
                      <Link href="/technology">Frontend Development </Link>
                    </p>

                    <Link
                      href="https://html.com/html5/"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      HTML 5
                    </Link>
                    <Link
                      href="https://react.dev/"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      React.js
                    </Link>
                    <Link
                      href="https://nextjs.org/"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Next.js
                    </Link>
                    <Link
                      href="https://vuejs.org/"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                    >
                      Vue
                    </Link>
                    <Link
                      href="https://angularjs.org/"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Angular
                    </Link>
                  </div>

                  <div className="p-1 text-black text-xs  w-44 text-left flex flex-col  border-r-2 border-primary">
                    <p className=" text-black text-base font-bold px-4 py-5 ">
                      <Link href="/technology"> Backend Development</Link>{" "}
                    </p>

                    <Link
                      href="https://www.java.com/en/"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Java
                    </Link>
                    <Link
                      href="https://nodejs.org/en"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Node.js
                    </Link>
                    <Link
                      href="https://www.python.org/"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Python
                    </Link>
                    <Link
                      href="https://www.php.net/"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                    >
                      PHP
                    </Link>

                    <Link
                      href="https://laravel.com/"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Laravel
                    </Link>

                    <Link
                      href="https://www.codeigniter.com/"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Codelgniter
                    </Link>
                    <Link
                      href="https://dotnet.microsoft.com/en-us/apps/aspnet"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Asp.net
                    </Link>
                  </div>

                  <div className="p-1 text-black text-xs  w-40 text-left flex flex-col border-r-2 border-primary">
                    <p className=" text-black text-base font-bold px-4 py-5 ">
                      <Link href="/technology"> Mobile App</Link>
                    </p>

                    <Link
                      href="https://reactnative.dev/"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                    >
                      React Native
                    </Link>

                    <Link
                      href="https://flutter.dev/"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Flutter
                    </Link>

                    <Link
                      href="https://ionicframework.com/"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Ionic
                    </Link>
                    <Link
                      href="https://www.android.com/intl/en_in/"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Android
                    </Link>
                    <Link
                      href="https://developer.apple.com/tutorials/app-dev-training/"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      IOS
                    </Link>
                  </div>
                  <div className="p-1 text-black text-xs  w-40 text-left flex flex-col border-r-2 border-primary">
                    <p className=" text-black text-base font-bold px-4 py-5 ">
                      <Link href="/technology"> Database</Link>
                    </p>

                    <Link
                      href="https://www.mysql.com/"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                    >
                      My SQL
                    </Link>

                    <Link
                      href="https://www.mongodb.com/"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      mongoDB
                    </Link>

                    <Link
                      href="https://www.postgresql.org/"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      PostgreSQL
                    </Link>
                  </div>

                  <div className="p-1 text-black text-xs  w-40 text-left flex flex-col border-r-2 border-primary">
                    <p className=" text-black text-base font-bold px-4 py-5 ">
                      <Link href="/technology"> Server </Link>
                    </p>

                    <Link
                      href="https://aws.amazon.com/free/?trk=14a4002d-4936-4343-8211-b5a150ca592b&sc_channel=ps&ef_id=Cj0KCQjwqs6lBhCxARIsAG8YcDioZGMXbB2U3DLIJ6poTKl2siDlc9esREaZUhxhSVjOiCkdFG3EWTIaAvIoEALw_wcB:G:s&s_kwcid=AL!4422!3!453405184782!e!!g!!aws!10712784856!111477279771&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                    >
                      AWS
                    </Link>

                    <Link
                      href="https://cloud.google.com/free?utm_source=google&utm_medium=cpc&utm_campaign=japac-IN-all-en-dr-BKWS-all-core-trial-EXA-dr-1605216&utm_content=text-ad-none-none-DEV_c-CRE_644159077394-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt%20~%20GCP_General_core%20brand_main-KWID_43700074766895889-kwd-87853815&userloc_1007765-network_g&utm_term=KW_gcp&gclid=Cj0KCQjwqs6lBhCxARIsAG8YcDiI0c51eQKwBZl_wbDBc6XqHdFEEAkZnDJduK0l_yf8XQ2PO5Aid4UaAuU0EALw_wcB&gclsrc=aw.ds"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      GCP
                    </Link>

                    <Link
                      href="https://azure.microsoft.com/en-in/free/search/?ef_id=_k_Cj0KCQjwqs6lBhCxARIsAG8YcDi_N6l8T5iQaLn8Y1tB8ZK-S9cyU6rTpNYzA__U74LAn_13MhaBuhUaAhEJEALw_wcB_k_&OCID=AIDcmmf1elj9v5_SEM__k_Cj0KCQjwqs6lBhCxARIsAG8YcDi_N6l8T5iQaLn8Y1tB8ZK-S9cyU6rTpNYzA__U74LAn_13MhaBuhUaAhEJEALw_wcB_k_&gclid=Cj0KCQjwqs6lBhCxARIsAG8YcDi_N6l8T5iQaLn8Y1tB8ZK-S9cyU6rTpNYzA__U74LAn_13MhaBuhUaAhEJEALw_wcB"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Azure
                    </Link>
                    <Link
                      href="https://cpanel.net/"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Cpanel Hosting
                    </Link>
                  </div>

                  <div className="p-1 text-black text-xs  w-40 text-left flex flex-col rounded-r-md ">
                    <p className=" text-black text-base font-bold px-4 py-5 ">
                      <Link href="/technology"> CMS </Link>
                    </p>

                    <Link
                      href="https://wordpress.com/hosting/?aff=15767&cid=1654213&cmp_id=11549382845&adg_id=111353876614&kwd=wordpress&device=c&gclid=Cj0KCQjwqs6lBhCxARIsAG8YcDjEb1FTNbf3VX2KdRbWrvdBz4sW2NYxiL6EfjgYHmkN6CFVg6H5Nm8aAoE0EALw_wcB"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                    >
                      Wordpress
                    </Link>

                    <Link
                      href="https://www.shopify.com/in/free-trial/3-steps?term=shopify&adid=566014743975&campaignid=15433369407&branded_enterprise=1&BOID=brand&gclid=Cj0KCQjwqs6lBhCxARIsAG8YcDgC_fr_lME3dYpVQYeRCRO0ReGyrH43QMLXjPL6wG3xDDEnMWSo1fkaAuxjEALw_wcB&cmadid=516585705;cmadvertiserid=10730501;cmcampaignid=26990768;cmplacementid=324494758;cmcreativeid=163722649;cmsiteid=5500011"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Shopify
                    </Link>

                    <Link
                      href="https://www.joomla.org/"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Joomla
                    </Link>
                    <Link
                      href="https://business.adobe.com/in/products/magento/magento-commerce.html"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Magento
                    </Link>
                    <Link
                      href="https://webflow.com/?utm_source=google&utm_medium=search&utm_campaign=general-paid-branded&utm_term=keyword-targeting&utm_content=branded-ads&utm_source=google&utm_medium=search&utm_campaign=SS-GoogleSearch-Brand-Tier3&utm_term=kwd-11668981_webflow_e_649953696920__&gclid=Cj0KCQjwqs6lBhCxARIsAG8YcDgOm4PrlxGzbuCPcHhyM9PPKr3YdokO039Md0TlR_978f1Qa95V2EcaAg8TEALw_wcB"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                    >
                      Webflow
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            {/* for mobile start */}
            <li className="md:hidden block ">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="text-white flex items-center px-10 justify-start w-full">
                      Technologies
                      <RiArrowDropDownLine
                        className={
                          open ? "rotate-180 transform w-8 h-8" : "w-8 h-8"
                        }
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500 px-10 ">
                      <div className="top-0 bg-white flex flex-col py-5">
                        <div className="p-1 text-black text-xs  w-44 text-left flex flex-col rounded-l-md  border-r-2 border-primary">
                          <p className=" text-black text-base font-bold px-4 py-5 ">
                            <Link href="/technology">
                              Frontend Development{" "}
                            </Link>
                          </p>

                          <Link
                            href="https://html.com/html5/"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            HTML 5
                          </Link>
                          <Link
                            href="https://react.dev/"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            React.js
                          </Link>
                          <Link
                            href="https://nextjs.org/"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Next.js
                          </Link>
                          <Link
                            href="https://vuejs.org/"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                          >
                            Vue
                          </Link>
                          <Link
                            href="https://angularjs.org/"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Angular
                          </Link>
                        </div>

                        <div className="p-1 text-black text-xs  w-44 text-left flex flex-col  border-r-2 border-primary">
                          <p className=" text-black text-base font-bold px-4 py-5 ">
                            <Link href="/technology"> Backend Development</Link>{" "}
                          </p>

                          <Link
                            href="https://www.java.com/en/"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Java
                          </Link>
                          <Link
                            href="https://nodejs.org/en"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Node.js
                          </Link>
                          <Link
                            href="https://www.python.org/"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Python
                          </Link>
                          <Link
                            href="https://www.php.net/"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                          >
                            PHP
                          </Link>

                          <Link
                            href="https://laravel.com/"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Laravel
                          </Link>

                          <Link
                            href="https://www.codeigniter.com/"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Codelgniter
                          </Link>
                          <Link
                            href="https://dotnet.microsoft.com/en-us/apps/aspnet"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Asp.net
                          </Link>
                        </div>

                        <div className="p-1 text-black text-xs  w-40 text-left flex flex-col border-r-2 border-primary">
                          <p className=" text-black text-base font-bold px-4 py-5 ">
                            <Link href="/technology"> Mobile App</Link>
                          </p>

                          <Link
                            href="https://reactnative.dev/"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                          >
                            React Native
                          </Link>

                          <Link
                            href="https://flutter.dev/"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Flutter
                          </Link>

                          <Link
                            href="https://ionicframework.com/"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Ionic
                          </Link>
                          <Link
                            href="https://www.android.com/intl/en_in/"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Android
                          </Link>
                          <Link
                            href="https://developer.apple.com/tutorials/app-dev-training/"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            IOS
                          </Link>
                        </div>
                        <div className="p-1 text-black text-xs  w-40 text-left flex flex-col border-r-2 border-primary">
                          <p className=" text-black text-base font-bold px-4 py-5 ">
                            <Link href="/technology"> Database</Link>
                          </p>

                          <Link
                            href="https://www.mysql.com/"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                          >
                            My SQL
                          </Link>

                          <Link
                            href="https://www.mongodb.com/"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            mongoDB
                          </Link>

                          <Link
                            href="https://www.postgresql.org/"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            PostgreSQL
                          </Link>
                        </div>

                        <div className="p-1 text-black text-xs  w-40 text-left flex flex-col border-r-2 border-primary">
                          <p className=" text-black text-base font-bold px-4 py-5 ">
                            <Link href="/technology"> Server </Link>
                          </p>

                          <Link
                            href="https://aws.amazon.com/free/?trk=14a4002d-4936-4343-8211-b5a150ca592b&sc_channel=ps&ef_id=Cj0KCQjwqs6lBhCxARIsAG8YcDioZGMXbB2U3DLIJ6poTKl2siDlc9esREaZUhxhSVjOiCkdFG3EWTIaAvIoEALw_wcB:G:s&s_kwcid=AL!4422!3!453405184782!e!!g!!aws!10712784856!111477279771&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                          >
                            AWS
                          </Link>

                          <Link
                            href="https://cloud.google.com/free?utm_source=google&utm_medium=cpc&utm_campaign=japac-IN-all-en-dr-BKWS-all-core-trial-EXA-dr-1605216&utm_content=text-ad-none-none-DEV_c-CRE_644159077394-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt%20~%20GCP_General_core%20brand_main-KWID_43700074766895889-kwd-87853815&userloc_1007765-network_g&utm_term=KW_gcp&gclid=Cj0KCQjwqs6lBhCxARIsAG8YcDiI0c51eQKwBZl_wbDBc6XqHdFEEAkZnDJduK0l_yf8XQ2PO5Aid4UaAuU0EALw_wcB&gclsrc=aw.ds"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            GCP
                          </Link>

                          <Link
                            href="https://azure.microsoft.com/en-in/free/search/?ef_id=_k_Cj0KCQjwqs6lBhCxARIsAG8YcDi_N6l8T5iQaLn8Y1tB8ZK-S9cyU6rTpNYzA__U74LAn_13MhaBuhUaAhEJEALw_wcB_k_&OCID=AIDcmmf1elj9v5_SEM__k_Cj0KCQjwqs6lBhCxARIsAG8YcDi_N6l8T5iQaLn8Y1tB8ZK-S9cyU6rTpNYzA__U74LAn_13MhaBuhUaAhEJEALw_wcB_k_&gclid=Cj0KCQjwqs6lBhCxARIsAG8YcDi_N6l8T5iQaLn8Y1tB8ZK-S9cyU6rTpNYzA__U74LAn_13MhaBuhUaAhEJEALw_wcB"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Azure
                          </Link>
                          <Link
                            href="https://cpanel.net/"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Cpanel Hosting
                          </Link>
                        </div>

                        <div className="p-1 text-black text-xs  w-40 text-left flex flex-col rounded-r-md ">
                          <p className=" text-black text-base font-bold px-4 py-5 ">
                            <Link href="/technology"> CMS </Link>
                          </p>

                          <Link
                            href="https://wordpress.com/hosting/?aff=15767&cid=1654213&cmp_id=11549382845&adg_id=111353876614&kwd=wordpress&device=c&gclid=Cj0KCQjwqs6lBhCxARIsAG8YcDjEb1FTNbf3VX2KdRbWrvdBz4sW2NYxiL6EfjgYHmkN6CFVg6H5Nm8aAoE0EALw_wcB"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a]   rounded-md px-4 py-2 text-sm"
                          >
                            Wordpress
                          </Link>

                          <Link
                            href="https://www.shopify.com/in/free-trial/3-steps?term=shopify&adid=566014743975&campaignid=15433369407&branded_enterprise=1&BOID=brand&gclid=Cj0KCQjwqs6lBhCxARIsAG8YcDgC_fr_lME3dYpVQYeRCRO0ReGyrH43QMLXjPL6wG3xDDEnMWSo1fkaAuxjEALw_wcB&cmadid=516585705;cmadvertiserid=10730501;cmcampaignid=26990768;cmplacementid=324494758;cmcreativeid=163722649;cmsiteid=5500011"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Shopify
                          </Link>

                          <Link
                            href="https://www.joomla.org/"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Joomla
                          </Link>
                          <Link
                            href="https://business.adobe.com/in/products/magento/magento-commerce.html"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Magento
                          </Link>
                          <Link
                            href="https://webflow.com/?utm_source=google&utm_medium=search&utm_campaign=general-paid-branded&utm_term=keyword-targeting&utm_content=branded-ads&utm_source=google&utm_medium=search&utm_campaign=SS-GoogleSearch-Brand-Tier3&utm_term=kwd-11668981_webflow_e_649953696920__&gclid=Cj0KCQjwqs6lBhCxARIsAG8YcDgOm4PrlxGzbuCPcHhyM9PPKr3YdokO039Md0TlR_978f1Qa95V2EcaAg8TEALw_wcB"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-[#edb00a] py-2  rounded-md  px-4 text-sm"
                          >
                            Webflow
                          </Link>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </li>
            {/* for mobile end */}

            <Link href="/industry-we-serve">
              <li
                className={
                  router.pathname == "/industry-we-serve"
                    ? "active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer "
                    : "group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary  group relative cursor-pointer text-black"
                }
              >
                Industry We Serve
              </li>
            </Link>
            {/* for mobile start */}
            <li className="md:hidden block ">
              <Link href="/industry-we-serve">
                <p className="text-white px-10">Industry We Serve</p>
              </Link>
            </li>
            {/* for mobile end */}
          </ul>
        </div>

        <div className="hamburger cursor-pointer" onClick={handleClick}>
          {click ? (
            <>
              <FaTimes
                size={30}
                style={{ color: "#000" }}
                onClick={closeMenu}
              />
              {/* <FaCross size={20} style={{color: "#fff"}}/> */}
            </>
          ) : (
            <FaBars size={30} style={{ color: "#000" }} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
