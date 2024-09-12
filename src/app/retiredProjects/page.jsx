import React from "react";

const Page = () => {
  const retireProject = [
    {
      level: "Level 2",
      imgSrc: "/images/C2-ecwid.webp",
      title: "Ecwid",
      bgColor: "#fcff74",
    },
    {
      level: "Level 3",
      imgSrc: "images/C2-grasshopper.webp",
      title: "Grasshopper",
      bgColor: "#ffd430",
    },
    {
      level: "level 1",
      imgSrc: "/images/C2-instrument.webp",
      title: "Instrument",
      bgColor: "#bcff93",
    },
    {
      level: "level 1",
      imgSrc: "/images/C1-Red-Square.webp",
      title: "Red Square",
      bgColor: "#bcff93",
    },
    {
      level: "level 2",
      imgSrc: "/images/C2-shopify-dev.webp",
      title: "Shopify Dev",
      bgColor: "#fcff74",
    },
    {
      level: "level 2",
      imgSrc: "/images/C2-sketch.webp",
      title: "Sketch",
      bgColor: "#fcff74",
    },
    {
      level: "level 2",
      imgSrc: "/images/C2-trello.webp",
      title: "Trello",
      bgColor: "#fcff74",
    },
  ];

  return (
    <div className=" flex justify-center items-center">
      <div className=" container">
        <div className=" flex justify-center items-center flex-col">
          <h1 className=" py-4 lg:py-8 text-2xl lg:text-4xl font-extrabold font-serif">Retired Projects</h1>
          <p className=" text-center text-xs sm:text-base lg:text-md font-semibold lg:w-[550px]">
            Projects with updates designs and no archived versions available.
            The projects and reference images are still viewable, should you
            wish to learn from them.
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-4 md:gap-7 items-center my-10">
          {retireProject.map((project, index) => (
            <div
              key={index}
              className="relative w-full hover:-translate-y-2 max-w-[295px] bg-white border-2 border-black shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <h1
                className="absolute -right-2 -top-2 text-center w-20 py-1.5 border-2 border-black"
                style={{ backgroundColor: project.bgColor }}
              >
                {project.level}
              </h1>
              <img src={project.imgSrc} alt={project.title} />
              <p className="underline p-4 border-t-2 font-bold border-black text-xl bg-[#faebd7]">
                {project.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
