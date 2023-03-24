import Link from 'next/link';
import React from 'react'

const List = () => {

    const advisors = [
        {
          id: 1,
    
          image: "/assets/images/advisorone.png",
          name: "Layan  Alrahmain, M.D.",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
       link:"/advisorDetailPage",
        },
        {
          id: 2,
    
          image: "/assets/images/advisortwo.png",
          name: "Layan  Alrahmain, M.D.",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
       
          link:"/advisorDetailPage", },
        {
          id: 3,
    
          image: "/assets/images/advisorthree.png",
          name: "Layan  Alrahmain, M.D.",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          link:"/advisorDetailPage",
        },
        {
          id: 4,
    
          image: "/assets/images/advisortwo.png",
          name: "Layan  Alrahmain, M.D.",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          link:"/advisorDetailPage",
        },
        {
          id: 5,
    
          image: "/assets/images/advisorthree.png",
          name: "Layan  Alrahmain, M.D.",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          link:"/advisorDetailPage",
        },
        {
          id: 6,
    
          image: "/assets/images/advisorone.png",
          name: "Layan  Alrahmain, M.D.",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          link:"/advisorDetailPage",
        },
      ];
  return (
    <div className='container-ack'>
         <div className="grid md:grid-cols-3 gap-3 py-16">
        {advisors.map((item) => (
          <>
            <div className="group p-6" key="id">
              <div className="relative text-center py-6 border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-sm hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl">
                <div className="inline-flex justify-center items-center rounded-md md:mt-8 ">
                  <img
                    src={item.image}
                    alt=""
                    className="  rounded-lg w-20 h-20 mx-auto "
                  />
                </div>

                <h2 className="font-semibold text-lg py-3 text-black text-center">
                  {item.name}
                </h2>

                <p className="text-black/50 group-hover:text-black py-2 pb-4  text-center px-3 text-sm ">
                  {item.desc}
                </p>

                <div className="pb-5">
                  {/* if link will be used only in one in maping */}
                  {/* <Link href={item.link ? item?.link : ''}> */}
                  <Link href={item.link} >
                  <button className="text-black py-2 text-sm border-b group-hover:border-primary group-hover:border-b-2">
                    See More
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default List