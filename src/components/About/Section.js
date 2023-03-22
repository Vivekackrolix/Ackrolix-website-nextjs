import React from "react";

const Section = () => {

    const productData = [
        {
          id: 1,
          name: "Lorem Ipsum dolor",
          desc: "Lorem ipsum dolor sit amet consectetur. Tempor id mauris mollis diam est eget fusce.Lorem ipsum dolor sit amet consectetur. Tempor id mauris mollis diam est eget fusce.",
        },
        {
          id: 2,
          name: "Lorem Ipsum dolor",
          desc: "Lorem ipsum dolor sit amet consectetur. Tempor id mauris mollis diam est eget fusce.Lorem ipsum dolor sit amet consectetur. Tempor id mauris mollis diam est eget fusce.",
        },
        {
          id: 3,
          name: "Lorem Ipsum dolor",
          desc: "Lorem ipsum dolor sit amet consectetur. Tempor id mauris mollis diam est eget fusce.Lorem ipsum dolor sit amet consectetur. Tempor id mauris mollis diam est eget fusce.",
        },
        {
          id: 4,
          name: "Lorem Ipsum dolor",
          desc: "Lorem ipsum dolor sit amet consectetur. Tempor id mauris mollis diam est eget fusce.Lorem ipsum dolor sit amet consectetur. Tempor id mauris mollis diam est eget fusce.",
        },
        {
          id: 5,
          name: "Lorem Ipsum dolor",
          desc: "Lorem ipsum dolor sit amet consectetur. Tempor id mauris mollis diam est eget fusce.Lorem ipsum dolor sit amet consectetur. Tempor id mauris mollis diam est eget fusce.",
        },
        {
          id: 6,
          name: "Lorem Ipsum dolor",
          desc: "Lorem ipsum dolor sit amet consectetur. Tempor id mauris mollis diam est eget fusce.Lorem ipsum dolor sit amet consectetur. Tempor id mauris mollis diam est eget fusce.",
        },
      ];
      
  return (
    <div className="container-ack md:px-0 px-5 md:pt-0 pt-[32rem]">
      <div className="relative">
        <div className="md:text-[10rem] text-[5rem] text-white tracking-wider text-center texttransparent font-bold  md:pt-10 ">
          Lorem
        </div>
        <div className="absolute md:top-[9.5rem] top-5 md:left-[11rem]">
          <div className="text-3xl  text-center font-bold ">Lorem</div>
          <p className="text-base text-center ">
            Lorem ipsum dolor sit amet consectetur. Leo tellus in maecenas
            tincidunt urna vulputate. Elit amet nam nulla
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-3">
        {productData.map((item, index) => (
          <>
          { index%2 ?
            <div className="group p-6" key="id">
             <img src="/assets/images/aboutusimg1.png" className="" alt="" />
            </div> :
           <div className="group p-6" key="id">
           <div className="relative h-[22rem] text-center px-6  py-12 border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-sm hover:bg-[#F6F8F9]/40 hover:border rounded-xl">
           
             <h2 className="font-semibold text-lg py-3 text-black text-center">
               {item.name}
             </h2>

             <p className="text-black/50 group-hover:text-black py-2 pb-4  text-center px-3 text-sm ">
               {item.desc}
             </p>

             <div className="pb-5">
               <button className="text-black font-semibold py-2 text-sm border-b group-hover:border-primary group-hover:border-b-2">
                 See More
               </button>
             </div>
           </div>
         </div>
}
          </>
        ))}
      </div>

    </div>
  );
};

export default Section;
