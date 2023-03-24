import React from "react";

function PortfolioTopHeader() {
  return (
    <>
      {" "}
      <div className="container-custom">
        <div className="w-full relative">
          <div className="relative">
            <div class="md:text-[10rem] text-[5rem] leading-[170px] text-white tracking-wider text-center texttransparent font-bold  md:pt-10 ">
              Portfolio
            </div>
            <div className="psAbsolute"> Portfolio </div>
            <div className="HdingAboutMeDta Profolio">
              <p className="text-textcolor">
                Nunc convallis semper justo quis tempor. Praesent molestie,
                lorem sed imperdiet tempor, libero urna semper urna, facilisis
                vulputate velit arcu vitae mi. Donec ac nisi ex.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioTopHeader;
