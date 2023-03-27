import React from "react";

function WhyJoinUsCareer() {
  return (
    <>
      <div className="container-custom ">
        <div className="whyJoinUsHeading mt-10">
          <div className="col4WhyHding">
            <div className="relative">
              <div className="md:text-[8rem] text-[5rem] leading-[170px] text-white tracking-wider text-center texttransparent font-bold   ">
                Why
              </div>
              <div className="psAbsolute"> Why Join Us </div>
            </div>
          </div>

          <div className="txthding">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </div>
        </div>

        <div className="flex justify-between w-full whyJoinUs">
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
