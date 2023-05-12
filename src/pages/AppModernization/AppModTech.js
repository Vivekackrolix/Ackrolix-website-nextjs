import React from "react";
import ComponentHead from "../../components/Common/ComponentHead";

const AppModTech = () => {
    const process = [
        {
            id: "1",
            img: "/assets/images/service/node.svg",
            name: "Node.js",
            desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
        },
        {
            id: "2",
            img: "/assets/images/service/react.svg",
            name: "React.js",
            desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
        },
        {
            id: "3",
            img: "/assets/images/service/angularjs.svg",
            name: "Angular",
            desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
        },
        {
            id: "4",
            img: "/assets/images/service/laravel.svg",
            name: "Laravel",
            desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
        },
        {
            id: "5",
            img: "/assets/images/service/typescript.svg",
            name: "Typescript",
            desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
        },
        {
            id: "6",
            img: "/assets/images/service/nextjs.svg",
            name: "Next.js",
            desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
        },
    ];

    return (
        <div className="container-ack md:px-0 px-5">
            <ComponentHead
                title="Technology"
                sub="Website Technology"
                head="Whatever web applications you’re building, we got your back at every stage of web development, including web design. We’ve built a core system for a bank, an MVP marketplace sold for millions, and other 5☆ custom projects for 140+ companies worldwide."
            />
            <div className="grid md:grid-cols-3 md:py-10 pt-16 gap-10">
                {process.map((item, e) => (
                    <>
                        <div key={e} className="group  flex justify-start items-center border border-textcolor rounded-md p-3 hover:bg-gray-100 hover:border-transparent gap-3 cursor-pointer">
                            <img src={item.img} alt="" className='w-[34px]' />
                            <div>
                                <span className="font-semibold text-lg pt-3 text-black ">
                                    {item.name}
                                </span>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default AppModTech;