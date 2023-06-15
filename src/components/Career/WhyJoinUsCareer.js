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
                <div className="text-[46px] max-[480px]:text-[30px] text-left font-bold max-w-xl">
                  Why Join Us
                </div> </div>
            </div>
          </div>


        </div>

        <div className="md:flex justify-between w-full gap-5 whyJoinUs">
          <div className="col4WhyJon">
            <div className="Icon">
              <img src="/assets/images/career-img/3square.png" />
            </div>
            <div className="CntWhyJoinUs">
              <h5>Collaborative and dynamic work environment </h5>
              <p>
                Our company values teamwork and encourages collaboration among employees.
                {" "}
              </p>
            </div>
          </div>

          <div className="col4WhyJon">
            <div className="Icon">
              <img src="/assets/images/career-img/calendar-tick.png" />
            </div>
            <div className="CntWhyJoinUs">
              <h5> Open Communication </h5>
              <p>
                Our company values transparency and provides employees
                with open communication channels. Leaders are approachable and actively engage with employees at all levels. Feedback culture is very prevalent in our company, such as feedback sessions, or surveys that allow employees to share their thoughts and contribute to the continuous improvement of the company.{" "}
              </p>
            </div>
          </div>

          <div className="col4WhyJon">
            <div className="Icon">
              <img src="/assets/images/career-img/money-tick.png" />
            </div>
            <div className="CntWhyJoinUs">
              <h5> Company Culture and Values </h5>
              <p>
                Our company prioritizes a supportive, inclusive, and diverse work environment. It also values integrity, innovation, and customer-centricity.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyJoinUsCareer;
