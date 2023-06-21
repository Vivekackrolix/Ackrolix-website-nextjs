import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Section = () => {
  return (
    <div>
      <div className="container-ack md:px-0 px-5 ">
        <div>
        <div className="md:grid grid-cols-2 gap-6 items-center container-ack  ">
        <div className="pb-5 pt-10">
          <img src="/assets/images/aboutusimg3.png" alt="" width={500} height={500}/>
        </div>

        <div className=" md:px-0 px-5 pb-10 md:pb-0  relative">
          
          <div>
          Creating a competitive advantage is essential for success in the increasingly cutthroat corporate climate. Ackrolix takes advantage of this circumstance by utilising the top technology on the market. We constantly make an effort to stay on top of trends and be a top IT firm.
          </div>
          {/* <div className="">
            <div className="text-3xl  font-bold ">
             Lorem Ipsum dolor sit amet
              Eget at auctor purus
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4 md:pt-8 pt-4">
              Lorem ipsum dolor sit amet consectetur. Sapien porttitor non
              ultrices id enim lectus sagittis viverra interdum. Nisi lobortis
              tincidunt convallis viverra. Scelerisque sed orci amet proin cras
              quam pellentesque. Sollicitudin sed velit nunc nunc morbi sed
              aliquam.
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  py-4">
              Lorem ipsum dolor sit amet consectetur. Fermentum tortor et arcu
              pellentesque tempor cursus cursus amet odio. Orci eu sagittis leo
              duis enim mi massa etiam.
            </div>

            <div className="pt-4">
              <Link href="/technologyDetailPage" >
              <button className="bg-secondary hover:bg-primary text-white px-8 py-2 rounded-md flex items-center">
                <span className="text-base"> Know More </span>
                <MdKeyboardArrowRight className=" text-base text-white hover:text-" />
              </button>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
