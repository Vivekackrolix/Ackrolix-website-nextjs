import React from "react";
import ComponentHead from "../../Common/ComponentHead";

const Work = () => {
  const work = [
    {
      id: "1",
      src: "/assets/images/service/workshowcase.png",
    },
    {
      id: "2",
      src: "/assets/images/service/workshowcase.png",
    },
    {
      id: "3",
      src: "/assets/images/service/workshowcase.png",
    },
    {
      id: "4",
      src: "/assets/images/service/workshowcase.png",
    },
    {
      id: "5",
      src: "/assets/images/service/workshowcase.png",
    },
    {
      id: "6",
      src: "/assets/images/service/workshowcase.png",
    },
  ];
  return (
    <div className="container-ack md:px-0 px-5">
      <ComponentHead
        title="Showcase"
        sub="Work Showcase"
        head="Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex."
      />

      <div className="grid md:grid-cols-3 gap-5 pt-12">
        {work.map((item, e) => (
          <>
            <div className="border border-textcolor p-2 rounded-md" key={e}>
              <img src={item.src} alt="" />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Work;
