import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/router";
const Navbar = () => {
  // setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // close menu on click
  const closeMenu = () => setClick(false);

  const router = useRouter();

  return (
    <div className="header text-black duration-300  w-full z-20  header-home py-2">
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
            <Link href="/services">
            <li
              className={
                router.pathname == "/services"
                  ? "active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer "
                  : "group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary  group relative cursor-pointer text-black"
              }
            >
               Our Expertise
            </li>
            </Link>
            {/* for mobile start */}
            <li className="md:hidden block ">
              <Link href="/services">
                <p className="text-white px-10">Our Expertise</p>
              </Link>
            </li>
            {/* for mobile end */}
            <Link href="/advisors">
            <li
              className={
                router.pathname == "/advisors"
                  ? "active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer "
                  : "group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary  group relative cursor-pointer text-black"
              }
            >
              Advisors
            </li>
            </Link>
            {/* for mobile start */}
            <li className="md:hidden block ">
              <Link href="/advisors">
                <p className="text-white px-10">Advisors</p>
              </Link>
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
            {/* for mobile end */}
            <Link href="/technology">
            <li
              className={
                router.pathname == "/technology"
                  ? "active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer "
                  : "group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary  group relative cursor-pointer text-black"
              }
            >
               Technologies
            </li>
            </Link>
            {/* for mobile start */}
            <li className="md:hidden block ">
              <Link href="/technology">
                <p className="text-white px-10">Technologies</p>
              </Link>
            </li>
            {/* for mobile end */}
            <Link href="/industryWeServe">
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
              <Link href="/industryWeServe">
                <p className="text-white px-10">Industry We Serve</p>
              </Link>
            </li>
            {/* for mobile end */}
            {/* <li className="group dropdown drop-shadow-2xl md:flex items-center hidden nav-item text-sm  font-semibold nav-desk  text-black hover:text-secondary group relative cursor-pointer">
              Blog
              <span>
                <FiChevronDown
                  className="text-black group-hover:text-secondary"
                  size={15}
                />
              </span>
              <div className="group-hover:block dropdown-menu absolute hidden transition-all  duration-300 translate-y-2 h-auto top-7 md:-left-10 ">
                <div className="top-0 bg-white p-2 shadow-lg shadow-black/30 text-black text-xs w-60 flex flex-col ">
                  <Link
                    href="/"
                    className=" hover:bg-black hover:text-white    px-4 py-3"
                  >
                    lorem
                  </Link>
                  <Link
                    href="/"
                    className=" hover:bg-black hover:text-white  py-3    px-4"
                  >
                    lorem
                  </Link>
                </div>
              </div>
            </li> */}
            {/* for mobile start */}{" "}
            {/* <li className="md:hidden block">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="py-2 text-white flex items-center px-10 justify-start w-full">
                      Blog
                      <MdKeyboardArrowDown
                        className={
                          open ? "rotate-180 transform w-8 h-8" : "w-8 h-8"
                        }
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500 px-10 ">
                      <div className=" text-white space-y-4  rounded">
                        <li>
                          <Link
                            href="/"
                            className=" hover:bg-black hover:text-white  text-xs  py-3"
                          >
                            lorem
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/"
                            className=" hover:bg-black hover:text-white  py-3  text-xs "
                          >
                            lorem
                          </Link>
                        </li>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </li>{" "} */}
          </ul>
        </div>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#000" }} />
          ) : (
            <FaBars size={30} style={{ color: "#000" }} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
