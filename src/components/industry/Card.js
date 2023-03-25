import Link from "next/link";
import React from "react";

const Card = () => {
  const data = [
    {
      id: 1,
      para: "lorem",
      text: "lorem",
      designation: "lorem",
    },
    {
      id: 2,
      para: "lorem",
      text: "lorem",
      designation: "lorem",
    },
    {
      id: 3,
      para: "lorem",
      text: "lorem",
      designation: "lorem",
    },
    {
      id: 4,
      para: "lorem",
      text: "lorem",
      designation: "lorem",
    },
    {
      id: 5,
      para: "lorem",
      text: "lorem",
      designation: "lorem",
    },
    {
      id: 6,
      para: "lorem",
      text: "lorem",
      designation: "lorem",
    },
  ];
  return (
    <div className="container-ack">
      <div className="md:grid grid-cols-3 gap-8 px-8">
        {data.map((item, e) => (
          <div className="group pt-10 relative" key={item}>
            <div className="bg-[#F6F8F9] border-2 border-[#F6F8F9] text-left pt-12 pb-8 px-6 rounded-md hovertestimonial">
              <div className="flex flex-col space-y-3">
                <span className="rounded-full w-12 h-12 absolute top-4 text-white flex justify-center items-center bg-black left-[9rem]">
                  {item.id}
                </span>
                <h2 className="font-semibold text-black w-32">
                  Measure your performance
                </h2>{" "}
                <p className="text-gray-500 text-sm">
                  Stay connected with your team and make quick decisions
                  wherever you are.
                </p>
                <Link
                  href=""
                  className="text-black hover:underline underline-offset-2 decoration-primary text-sm"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
