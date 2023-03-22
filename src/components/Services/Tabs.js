import React from "react";

const clientsData = [
  {
    id: 1,
    text: "Products Based",
  },

  {
    id: 2,
    text: "Services Based",
  },
];

const sliderData = [
  {
    id: 1,
    image: "/assets/images/advisorone.png",
    name: "Layan  Alrahmain, M.D.",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    image: "/assets/images/advisortwo.png",
    name: "Layan, M.D.",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    image: "/assets/images/advisorthree.png",
    name: "Layan  Alrahmain, M.D.",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 4,
    image: "/assets/images/advisortwo.png",
    name: "Layan  Alrahmain, M.D.",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 5,
    image: "/assets/images/advisorthree.png",
    name: "Layan  Alrahmain, M.D.",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 6,
    image: "/assets/images/advisorone.png",
    name: "Layan  Alrahmain, M.D.",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];
const Tabs = () => {
  const [select, setSelect] = React.useState(sliderData[0]);
  const [slidecss, setSlidecss] = React.useState("");

  return (
    <div>
      <div>
        <div className="flex justify-center space-x-3 ">
            
          {clientsData.map((item) => (
            <div
              onClick={() =>
                setSelect(sliderData.filter((a) => a.id == item.id)?.[0])
              }
              className="group py-10"
              key={item}
            >
              {" "}
              <div
                className={` px-12 py-2 rounded-md ${
                  select == sliderData.filter((a) => a.id == item.id)?.[0]
                    ? "bg-secondary text-white border-2 "
                    : "   border-2 border-black/90"
                }`}
              >
                {item.text}
              </div>
            </div>
          ))}

        </div>
      </div>
      <div className="">
        <div className={`${slidecss} transition duration-1000 `}>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="group p-6" key="id">
              <div className="relative text-center py-6 border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-sm hover:bg-[#F6F8F9]/40 hover:border rounded-xl">
                <div className="inline-flex justify-center items-center rounded-md md:mt-8 ">
                  <img
                    src={select.image}
                    alt=""
                    className="  rounded-lg w-20 h-20 mx-auto "
                  />
                </div>

                <h2 className="font-semibold text-lg py-3 text-black text-center">
                  {select.name}
                </h2>

                <p className="text-black/50 group-hover:text-black py-2 pb-4  text-center px-3 text-sm ">
                  {select.desc}
                </p>

                <div className="pb-5">
                  <button className="text-black py-2 text-sm border-b group-hover:border-primary group-hover:border-b-2">
                    See More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
