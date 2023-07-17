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
              className="group dropdown md:flex hidden nav-item text-sm  font-semibold nav-desk hover:text-black hover:border-b-2 hover:duration-150 border-b-pink  rounded-md group relative cursor-pointer text-black
              "
            >
              <p className="group-hover:text-pink flex items-center justify-center">Services  <span>
                <BsChevronDown
                  className="text-black group-hover:text-pink"
                  size={14}
                />
              </span>
              </p>
              <div className="group-hover:block z-[999] shadow-lg shadow-black/30 dropdown-menu absolute hidden transition-all  duration-300 translate-y-2 h-auto top-[2.1rem] md:-left-10 ">
                <div className="top-0 bg-white flex py-5">
                  <div className="p-1 text-black text-xs  w-80 text-left flex flex-col rounded-l-md  border-r-2 border-primary">
                    <p className=" text-black text-base font-bold px-4 py-5 "><Link href="/services">Product Conceptualization </Link></p>

                    <Link
                      href="/services/ui-ux-prototyping"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Prototyping
                    </Link>
                    <Link
                      href="/services/ui-ux-strategy"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      UX Strategy
                    </Link>
                    <Link
                      href="/services/ui-designing"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      UI Designing
                    </Link>
                    <Link
                      href="/services/ui-ux-research"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink   rounded-md px-4 py-2 text-sm"
                    >
                      User Research
                    </Link>
                    <Link
                      href="/services/product-usability-testing"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Usability Testing
                    </Link>
                    <Link
                      href="/services/data-visualisation"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Data Visualisation
                    </Link>

                  </div>

                  <div className="p-1 text-black text-xs  w-80 text-left flex flex-col  border-r-2 border-primary">
                    <p className=" text-black text-base font-bold px-4 py-5 "><Link href="/services"> Product Development</Link> </p>

                    <Link
                      href="/services/website-development-company"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Web Development
                    </Link>
                    <Link
                      href="/services/app-modernization-services"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      App Modernization
                    </Link>
                    <Link
                      href="/services/software-development-company"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Software Development
                    </Link>
                    <Link
                      href="/services/product-design-company"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink   rounded-md px-4 py-2 text-sm"
                    >
                      Digital Product Design
                    </Link>

                    <Link
                      href="/services/ecommerce-developement-company"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Ecommerce Development
                    </Link>

                    <Link
                      href="/services/cloud-engineering-and-devOps"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Cloud Engineering & DevOps
                    </Link>

                  </div>


                  <div className="p-1 text-black text-xs  w-80 text-left flex flex-col rounded-r-md">
                    <p className=" text-black text-base font-bold px-4 py-5 "><Link href="/services">  Digital Modernization </Link></p>

                    <Link
                      href="/services/digital-marketing-company"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink   rounded-md px-4 py-2 text-sm"
                    >
                      Digital Marketing Strategy
                    </Link>

                    <Link
                      href="/services/social-media-marketing-agency"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Social Media Marketing (SMM)
                    </Link>

                    <Link
                      href="/services/sem-services-company"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Search Engine Marketing (SEM)
                    </Link>
                    <Link
                      href="/services/seo-services-company"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Search Engine Optimization (SEO)
                    </Link>
                    <Link
                      href="/services/pr-agency"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Public Relations (PR)
                    </Link>
                    <Link
                      href="/services/media-buying-agency"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Media Buying and Planning
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
                          <p className=" text-black text-base font-bold px-4 py-5 "> <Link href="/services">Product Conceptualization</Link>  </p>

                          <Link
                            href="/services/ui-ux-prototyping"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                          >
                            Prototyping
                          </Link>
                          <Link
                            href="/services/ui-ux-strategy"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                          >
                            UX Strategy
                          </Link>
                          <Link
                            href="/services/ui-designing"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                          >
                            UI Designing
                          </Link>
                          <Link
                            href="/services/ui-ux-research"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink   rounded-md px-4 py-2 text-sm"
                          >
                            User Research
                          </Link>
                          <Link
                            href="/services/product-usability-testing"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                          >
                            Usability Testing
                          </Link>
                          <Link
                            href="/services/data-visualisation"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                          >
                            Data Visualisation
                          </Link>

                        </div>

                        <div className="p-1 text-black text-xs  w-80 text-left flex flex-col  border-r-2 border-primary">
                          <p className=" text-black text-base font-bold px-4 py-5 "> <Link href="/services">Product Development</Link> </p>

                          <Link
                            href="/services/website-development-company"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                          >
                            Web Development
                          </Link>
                          <Link
                            href="/services/app-modernization-services"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                          >
                            App Modernization
                          </Link>
                          <Link
                            href="/services/software-development-company"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                          >
                            Software Development
                          </Link>
                          <Link
                            href="/services/product-design-company"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink   rounded-md px-4 py-2 text-sm"
                          >
                            Digital Product Design
                          </Link>

                          <Link
                            href="/services/ecommerce-developement-company"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                          >
                            Ecommerce Development
                          </Link>

                          <Link
                            href="/services/cloud-engineering-and-devOps"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                          >
                            Cloud Engineering & DevOps
                          </Link>

                        </div>


                        <div className="p-1 text-black text-xs  w-80 text-left flex flex-col rounded-r-md">
                          <p className=" text-black text-base font-bold px-4 py-5 "> <Link href="/services">Digital Modernization </Link></p>

                          <Link
                            href="/services/digital-marketing-company"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink   rounded-md px-4 py-2 text-sm"
                          >
                            Digital Marketing Strategy
                          </Link>


                          <Link
                            href="/services/social-media-marketing-agency"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                          >
                            Social Media Marketing (SMM)
                          </Link>

                          <Link
                            href="/services/sem-services-company"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                          >
                            Search Engine Marketing (SEM)
                          </Link>
                          <Link
                            href="/services/seo-services-company"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                          >
                            Search Engine Optimization (SEO)
                          </Link>
                          <Link
                            href="/services/pr-agency"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                          >
                            Public Relations (PR)
                          </Link>
                          <Link
                            href="/services/media-buying-agency"
                            className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                          >
                            Media Buying and Planning
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
              className="group dropdown md:flex hidden nav-item text-sm  font-semibold nav-desk hover:text-black hover:border-b-2 hover:duration-150 border-b-pink  rounded-md group relative cursor-pointer text-black
              "
            >

              <Link href="/technology">
                <p className="group-hover:text-pink flex items-center justify-center">Technologies  <span>
                  <BsChevronDown
                    className="text-black group-hover:text-pink"
                    size={14}
                  />
                </span> </p>
              </Link>
              <div className="group-hover:block z-[999] shadow-lg shadow-black/30 dropdown-menu absolute hidden transition-all  duration-300 translate-y-2 h-auto top-[2.1rem] md:-right-20 ">
                <div className="top-0 bg-white flex py-5">
                  <div className="p-1 text-black text-xs  w-40 text-left flex flex-col rounded-l-md  border-r-2 border-primary">
                    <p className=" text-black text-base font-bold px-4 py-5 "><Link href="/technology">Frontend Development </Link></p>

                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      HTML
                    </Link>
                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                     React.js
                    </Link>
                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Next.js
                    </Link>
                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink   rounded-md px-4 py-2 text-sm"
                    >
                     Vue
                    </Link>
                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Angular
                    </Link>
                   

                  </div>

                  <div className="p-1 text-black text-xs  w-40 text-left flex flex-col  border-r-2 border-primary">
                    <p className=" text-black text-base font-bold px-4 py-5 "><Link href="/technology"> Backend Development</Link> </p>

                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Java
                    </Link>
                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Node.js
                    </Link>
                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Phython
                    </Link>
                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink   rounded-md px-4 py-2 text-sm"
                    >
                      PHP
                    </Link>

                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Laravel
                    </Link>

                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Codelgniter
                    </Link>
                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Asp.net
                    </Link>

                  </div>


                  <div className="p-1 text-black text-xs  w-32 text-left flex flex-col border-r-2 border-primary">
                    <p className=" text-black text-base font-bold px-4 py-5 "><Link href="/technology">  Mobile App</Link></p>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink   rounded-md px-4 py-2 text-sm"
                    >
                      React Native
                    </Link>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Flutter
                    </Link>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Ionic
                    </Link>
                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Native
                    </Link>
                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Android
                    </Link>
                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      IOS
                    </Link>

                  </div>
                  <div className="p-1 text-black text-xs  w-32 text-left flex flex-col border-r-2 border-primary">
                    <p className=" text-black text-base font-bold px-4 py-5 "><Link href="/technology">  Database</Link></p>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink   rounded-md px-4 py-2 text-sm"
                    >
                      My SQL
                    </Link>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      mongoDB
                    </Link>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      PostgreSQL
                    </Link>
                    
                  </div>
                  <div className="p-1 text-black text-xs  w-32 text-left flex flex-col border-r-2 border-primary">
                    <p className=" text-black text-base font-bold px-4 py-5 "><Link href="/technology">  Database</Link></p>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink   rounded-md px-4 py-2 text-sm"
                    >
                      My SQL
                    </Link>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      mongoDB
                    </Link>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      PostgreSQL
                    </Link>
                  </div>

                  <div className="p-1 text-black text-xs  w-32 text-left flex flex-col border-r-2 border-primary">
                    <p className=" text-black text-base font-bold px-4 py-5 "><Link href="/technology">  Server </Link></p>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink   rounded-md px-4 py-2 text-sm"
                    >
                     AWS
                    </Link>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      GCP
                    </Link>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Azure
                    </Link>
                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Cpanel Hosting
                    </Link>
                    
                  </div>

                  <div className="p-1 text-black text-xs  w-32 text-left flex flex-col rounded-r-md ">
                    <p className=" text-black text-base font-bold px-4 py-5 "><Link href="/technology">  CMS </Link></p>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink   rounded-md px-4 py-2 text-sm"
                    >
                     Wordpress
                    </Link>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Shopify
                    </Link>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Joomla
                    </Link>
                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                     Magento
                    </Link>
                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                     Workflow
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
                      <div className="p-1 text-black text-xs  w-40 text-left flex flex-col rounded-l-md  border-r-2 border-primary">
                    <p className=" text-black text-base font-bold px-4 py-5 "><Link href="/technology">Frontend Development </Link></p>

                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      HTML
                    </Link>
                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                     React.js
                    </Link>
                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Next.js
                    </Link>
                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink   rounded-md px-4 py-2 text-sm"
                    >
                     Vue
                    </Link>
                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Angular
                    </Link>
                   

                  </div>

                  <div className="p-1 text-black text-xs  w-40 text-left flex flex-col  border-r-2 border-primary">
                    <p className=" text-black text-base font-bold px-4 py-5 "><Link href="/technology"> Backend Development</Link> </p>

                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Java
                    </Link>
                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Node.js
                    </Link>
                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Phython
                    </Link>
                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink   rounded-md px-4 py-2 text-sm"
                    >
                      PHP
                    </Link>

                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Laravel
                    </Link>

                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Codelgniter
                    </Link>
                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Asp.net
                    </Link>

                  </div>


                  <div className="p-1 text-black text-xs  w-32 text-left flex flex-col border-r-2 border-primary">
                    <p className=" text-black text-base font-bold px-4 py-5 "><Link href="/technology">  Mobile App</Link></p>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink   rounded-md px-4 py-2 text-sm"
                    >
                      React Native
                    </Link>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Flutter
                    </Link>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Ionic
                    </Link>
                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Native
                    </Link>
                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Android
                    </Link>
                    <Link
                      href=""
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      IOS
                    </Link>

                  </div>
                  <div className="p-1 text-black text-xs  w-32 text-left flex flex-col border-r-2 border-primary">
                    <p className=" text-black text-base font-bold px-4 py-5 "><Link href="/technology">  Database</Link></p>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink   rounded-md px-4 py-2 text-sm"
                    >
                      My SQL
                    </Link>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      mongoDB
                    </Link>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      PostgreSQL
                    </Link>
                    
                  </div>
                  <div className="p-1 text-black text-xs  w-32 text-left flex flex-col border-r-2 border-primary">
                    <p className=" text-black text-base font-bold px-4 py-5 "><Link href="/technology">  Database</Link></p>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink   rounded-md px-4 py-2 text-sm"
                    >
                      My SQL
                    </Link>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      mongoDB
                    </Link>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      PostgreSQL
                    </Link>
                  </div>

                  <div className="p-1 text-black text-xs  w-32 text-left flex flex-col border-r-2 border-primary">
                    <p className=" text-black text-base font-bold px-4 py-5 "><Link href="/technology">  Server </Link></p>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink   rounded-md px-4 py-2 text-sm"
                    >
                     AWS
                    </Link>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      GCP
                    </Link>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Azure
                    </Link>
                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Cpanel Hosting
                    </Link>
                    
                  </div>

                  <div className="p-1 text-black text-xs  w-32 text-left flex flex-col rounded-r-md ">
                    <p className=" text-black text-base font-bold px-4 py-5 "><Link href="/technology">  CMS </Link></p>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink   rounded-md px-4 py-2 text-sm"
                    >
                     Wordpress
                    </Link>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Shopify
                    </Link>

                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                      Joomla
                    </Link>
                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                     Magento
                    </Link>
                    <Link
                      href="#"
                      className=" hover:text-white hover:bg-gradient-to-r from-primary to-pink py-2  rounded-md  px-4 text-sm"
                    >
                     Workflow
                    </Link>
                    
                  </div>

                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </li>
            {/* for mobile end */}

            <Link href="/IndustryWeServe">
              <li
                className={
                  router.pathname == "/industryWeServe"
                    ? "active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer "
                    : "group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary  group relative cursor-pointer text-black"
                }
              >
                Industry We Serve
              </li>
            </Link>
            {/* for mobile start */}
            <li className="md:hidden block ">
              <Link href="/IndustryWeServe">
                <p className="text-white px-10">Industry We Serve</p>
              </Link>
            </li>
            {/* for mobile end */}
          </ul>
        </div>

        <div className="hamburger cursor-pointer" onClick={handleClick}>
          {click ? (
            <>
              <FaTimes size={30} style={{ color: "#000" }} onClick={closeMenu} />
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
