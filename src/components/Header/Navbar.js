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
    <div className="header text-black duration-300  w-full z-20  header-home ">
      <nav className="navbar  bg-white">
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
            <li
              className={
                router.pathname == "/"
                  ? "active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer "
                  : "group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary  group relative cursor-pointer text-black"
              }
            >
              <Link href="/">Home</Link>
            </li>
            {/* for mobile start */}
            <li className="md:hidden block ">
              <Link href="/">
                <p className="text-white px-10">Home</p>
              </Link>
            </li>
            {/* for mobile end */}
            <li
              className={
                router.pathname == "/about"
                  ? "active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer "
                  : "group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer text-black"
              }
            >
              <Link href="/about">About</Link>
            </li>
            {/* for mobile start */}
            <li className="md:hidden block ">
              <Link href="/about">
                <p className="text-white px-10">About</p>
              </Link>
            </li>
            {/* for mobile end */}
            <li
              className={
                router.pathname == "/services"
                  ? "active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer "
                  : "group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary  group relative cursor-pointer text-black"
              }
            >
              <Link href="/services"> Our Expertise</Link>
            </li>
            {/* for mobile start */}
            <li className="md:hidden block ">
              <Link href="/services">
                <p className="text-white px-10">Our Expertise</p>
              </Link>
            </li>
            {/* for mobile end */}
            <li
              className={
                router.pathname == "/advisors"
                  ? "active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer "
                  : "group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary  group relative cursor-pointer text-black"
              }
            >
              <Link href="/advisors">Advisors</Link>
            </li>
            {/* for mobile start */}
            <li className="md:hidden block ">
              <Link href="/advisors">
                <p className="text-white px-10">Advisors</p>
              </Link>
            </li>
            {/* for mobile end */}
            <li
              className={
                router.pathname == "/experts"
                  ? "active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer "
                  : "group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary  group relative cursor-pointer text-black"
              }
            >
              <Link href="/experts"> Our Experts</Link>
            </li>
            {/* for mobile start */}
            <li className="md:hidden block ">
              <Link href="/experts">
                <p className="text-white px-10">Our Experts</p>
              </Link>
            </li>
            {/* for mobile end */}
            <li
              className={
                router.pathname == "/moments"
                  ? "active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer "
                  : "group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary  group relative cursor-pointer text-black"
              }
            >
              <Link href="/moments"> Moments</Link>
            </li>
            {/* for mobile start */}
            <li className="md:hidden block ">
              <Link href="/">
                <p className="text-white px-10">Moments</p>
              </Link>
            </li>
            {/* for mobile end */}
            <li
              className={
                router.pathname == "/career"
                  ? "active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer "
                  : "group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary  group relative cursor-pointer text-black"
              }
            >
              <Link href="/career"> Career</Link>
            </li>
            {/* for mobile start */}
            <li className="md:hidden block ">
              <Link href="/career">
                <p className="text-white px-10">Career</p>
              </Link>
            </li>
            {/* for mobile end */}
            <li
              className={
                router.pathname == "/portfolio"
                  ? "active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer "
                  : "group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary  group relative cursor-pointer text-black"
              }
            >
              <Link href="/portfolio"> Portfolio</Link>
            </li>
            {/* for mobile start */}
            <li className="md:hidden block ">
              <Link href="/">
                <p className="text-white px-10">Portfolio</p>
              </Link>
            </li>
            {/* for mobile end */}
            <li
              className={
                router.pathname == "/technology"
                  ? "active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer "
                  : "group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary  group relative cursor-pointer text-black"
              }
            >
              <Link href="/technology"> Technologies</Link>
            </li>
            {/* for mobile start */}
            <li className="md:hidden block ">
              <Link href="/technology">
                <p className="text-white px-10">Technologies</p>
              </Link>
            </li>
            {/* for mobile end */}
            <li
              className={
                router.pathname == "/serve"
                  ? "active text-primary hover:text-primary border-secondary border-b-2 group dropdown  md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary   group relative cursor-pointer "
                  : "group dropdown hover:text-primary md:flex hidden nav-item text-sm  font-semibold nav-desk hover:border-b-2 hover:duration-150 border-b-secondary  group relative cursor-pointer text-black"
              }
            >
              <Link href="/serve"> Industry We Serve</Link>
            </li>
            {/* for mobile start */}
            <li className="md:hidden block ">
              <Link href="/">
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
