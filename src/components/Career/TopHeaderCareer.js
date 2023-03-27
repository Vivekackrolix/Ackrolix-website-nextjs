import React from "react";

export default function TopHeaderCareer() {
  return (
    <>
      <div className="container-custom">
        <div className="w-full relative">
          <div className="relative">
            <div className="md:text-[10rem] text-[5rem] leading-[170px] text-white tracking-wider text-center texttransparent font-bold  md:pt-10 ">
              Career
            </div>
            <div className="psAbsolute"> Career </div>
            <div className="HdingAboutMeDta">
              <p>
                Nunc convallis semper justo quis tempor. Praesent molestie,
                lorem sed imperdiet tempor, libero urna semper urna, facilisis
                vulputate velit arcu vitae mi. Donec ac nisi ex.{" "}
              </p>
            </div>
          </div>
          <div className="TopCarerBnr">
            <img
              src="/assets/images/career-img/bnnnrContactus-bnr.jpg"
              alt="Carimg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
