import React from "react";

const Band = () => {
  return (
    <div className="bg-[#282828] mt-16 relative">
      <div className="container-ack md:py-16  py-24 md:px-0 px-4 ">
        <div className="md:text-3xl text-2xl  font-bold text-white text-center">
          {" "}
          The fastest way from idea to live site. Period.{" "}
        </div>
        <p className="text-white text-center py-2 w-[85%] mx-auto md:text-base text-sm">
          Flex is a Small SaaS Business. Flex isn’t a traditional company. We
          believe a diverse team, approaches to work and transparency are key to
          our success.
        </p>
        <div className="pt-4 flex justify-center items-center">
          <button className="bg-white text-secondary px-12 py-3 rounded-md">
            Contact Us
          </button>
        </div>
      </div>
      <div>
        <img
          src="/assets/icons/dotsimg.png"
          alt=""
          className=" absolute top-6 left-16 w-24"
        />
        <img
          src="/assets/icons/dotsimg.png"
          alt=""
          className=" absolute bottom-6 right-16 w-24"
        />
      </div>
    </div>
  );
};

export default Band;
