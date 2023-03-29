import React from "react";

function WhyJoinUsCareer() {
  return (
    <>
      <div className="container-custom ">
        <div className="whyJoinUsHeading mt-10">
          <div className="col4WhyHding">
            <div className="relative">
            <div className="md:text-[8rem] text-[5rem] tracking-wider text-left texttransparent font-bold  md:pt-10 ">
                Why
              </div>
              <div className="absolute md:top-[6.7rem] top-[4rem] inset-x-0 flex justify-left">
              <div className="text-[46px] text-left font-bold max-w-xl">
               Why Join Us
               </div> </div>
            </div>
          </div>

          <div className="txthding">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </div>
        </div>

        <div className="md:flex justify-between w-full gap-5 whyJoinUs">
          <div className="col4WhyJon">
            <div className="Icon">
              <img src="/assets/images/career-img/3square.png" />
            </div>
            <div className="CntWhyJoinUs">
              <h5> Lorem Ipsum </h5>
              <p>
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non.{" "}
              </p>
            </div>
          </div>

          <div className="col4WhyJon">
            <div className="Icon">
              <img src="/assets/images/career-img/calendar-tick.png" />
            </div>
            <div className="CntWhyJoinUs">
              <h5> Lorem Ipsum </h5>
              <p>
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non.{" "}
              </p>
            </div>
          </div>

          <div className="col4WhyJon">
            <div className="Icon">
              <img src="/assets/images/career-img/money-tick.png" />
            </div>
            <div className="CntWhyJoinUs">
              <h5> Lorem Ipsum </h5>
              <p>
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyJoinUsCareer;
