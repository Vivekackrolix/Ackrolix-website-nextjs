import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function PortfolioListing() {
  const filterData = [
    {
      heading: 'The standard Lorem Ipsum passage, used since the 1500s',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category: 'web',
      img: '/assets/images/portfolio/project1.jpg',
      img2: '/assets/images/portfolio/project2.jpg'
    },
    {
      heading: 'The standard Lorem Ipsum passage, used since the 1500s',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category: 'web',
      img: '/assets/images/portfolio/project3.jpg',
      img2: '/assets/images/portfolio/project4.jpg'
    },
    {
      heading: 'The standard Lorem Ipsum passage, used since the 1500s',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category: 'web',
      img: '/assets/images/portfolio/project1.jpg',
      img2: '/assets/images/portfolio/project2.jpg'
    },
    {
      heading: 'The standard Lorem Ipsum passage, used since the 1500s',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category: 'eco',
      img: '/assets/images/portfolio/project3.jpg',
      img2: '/assets/images/portfolio/project4.jpg'
    },
    {
      heading: 'The standard Lorem Ipsum passage, used since the 1500s',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category: 'eco',
      img: '/assets/images/portfolio/project1.jpg',
      img2: '/assets/images/portfolio/project2.jpg'
    },
    {
      heading: 'The standard Lorem Ipsum passage, used since the 1500s',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category: 'soft',
      img: '/assets/images/portfolio/project2.jpg',
      img2: '/assets/images/portfolio/project4.jpg'
    },
    {
      heading: 'The standard Lorem Ipsum passage, used since the 1500s',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category: 'soft',
      img: '/assets/images/portfolio/project1.jpg',
      img2: '/assets/images/portfolio/project2.jpg'
    },
    {
      heading: 'The standard Lorem Ipsum passage, used since the 1500s',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category: 'soft',
      img: '/assets/images/portfolio/project3.jpg',
      img2: '/assets/images/portfolio/project4.jpg'
    },
  ]

  const [items, setItems] = useState(filterData)
  const filterItem = (categItem) => {
    const updatedItems = filterData.filter((curElem) => {
      return curElem.category === categItem
    })
    setItems(updatedItems)
  }
  return (
    <>
      <div className="container-ack md:px-0 px-5">
        <div className="grid md:grid-cols-4 md:gap-7 cursor-pointer w-[60%] mx-auto border-2 border-secondary/10 p-2 rounded-md md:mt-10 mt-12">
          <div>
            <div className="text-center py-2 rounded-md bg-secondary text-white border-2"
              onClick={() => setItems(filterData)}
            >
              All
            </div>
          </div>
          <div>
            <div className="text-center py-2 rounded-md bg-secondary text-white border-2"
              onClick={() => filterItem('web')}
            >
              Website
            </div>
          </div>
          <div>
            <div className="text-center py-2 rounded-md bg-secondary text-white border-2"
              onClick={() => filterItem('eco')}
            >
              Ecomerce
            </div>
          </div>
          <div>
            <div className="text-center py-2 rounded-md bg-secondary text-white border-2"
              onClick={() => filterItem('soft')}
            >
              Software
            </div>
          </div>
        </div>

        {items?.map((item) => {
          return (
            <>
              <div className="pt-16">
                <div className="container-ack gradientbackgroundone px-12 pt-12">
                  <div className="grid grid-cols-3 justify-between ">
                    <div className="col-span-2">
                      <h2 className="text-xl font-semibold ">
                        The standard Lorem Ipsum passage, used since the 1500s
                      </h2>
                      <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-end pb-10 col-span-1">
                        <Link href="#">
                          <button className=" button-2 px-7 py-2 rounded-md">
                            <div className="eff-2"></div>
                            <span className="text-base flex items-center ">
                              {" "}
                              View All
                              <MdKeyboardArrowRight className=" text-base" />
                            </span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='grid grid-cols-12 gap-4 py-5'>
                    <div className='col-span-6'>
                      <img src={item.img} className="rounded-md h-100 w-full" />
                    </div>
                    <div className='col-span-6'>
                      <img src={item.img2} className="rounded-md h-100 w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  );
}

export default PortfolioListing;
