"use client";
import React, { useState } from "react";
import Navbar from '../navbar/page';
import Footer from '@/app/footer/page'
import RetiredProject from '@/app/retiredProjects/page'

const Page = () => {
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [displayText, setDisplayText] = useState({
    text: "There are no rules with these projects. Use any languages, libraries, or frameworks you want to recreate and learn from them.",
    color: "text-black",
  });

  const levelTexts = {
    All: {
      text: "There are no rules with these projects. Use any languages, libraries, or frameworks you want to recreate and learn from them.",
      color: "text-black",
    },
    "Level 1": {
      text: "A great place to start learning about layouts, animations, color choices, and more.",
      color: "bg-[#bcff93]",
    },
    "Level 2": {
      text: "A wonderful variety of projects with well designed layouts, interactive elements, hover effects and animations.",
      color: "bg-[#fcff74]",
    },
    "Level 3": {
      text: "Test and push your skills even further with these complex layouts, animations, and interactive elements..",
      color: "bg-[#ffd430]",
    },
  };

  const projects = [
    {
      level: "Level 1",
      title: "Ableton",
      imgSrc: "/images/Ableton-L1.webp",
      bgColor: "#bcff93",
    },
    {
      level: "Level 1",
      title: "Abstract",
      imgSrc: "/images/Abstract-L1.webp",
      bgColor: "#bcff93",
    },
    {
      level: "Level 1",
      title: "Backstage Talks",
      imgSrc: "/images/Backstage-talks-L1.webp",
      bgColor: "#bcff93",
    },
    {
      level: "Level 3",
      title: "basic",
      imgSrc: "/images/basic-L3.webp",
      bgColor: "#ffd430",
    },
    {
      level: "Level 1",
      title: "bonsai",
      imgSrc: "/images/bonsai-L1.webp",
      bgColor: "#bcff93",
    },
    {
      level: "Level 3",
      title: "Caneel Street Market",
      imgSrc: "/images/C1-Canal-StreetL3.webp",
      bgColor: "#ffd430",
    },
    {
      level: "Level 3",
      title: "Deplace Mention",
      imgSrc: "/images/C1-deplace-maison-L3.webp",
      bgColor: "#ffd430",
    },
    {
      level: "Level 3",
      title: "Figma Merch",
      imgSrc: "/images/C2-figma-L3.webp",
      bgColor: "#ffd430",
    },
    {
      level: "Level 2",
      title: "Go Dady",
      imgSrc: "/images/C3-go-daddy-L2.webp",
      bgColor: "#fcff74",
    },
    {
      level: "Level 1",
      title: "Lobe",
      imgSrc: "/images/C2-lobe-L1.webp",
      bgColor: "#bcff93",
    },
    {
      level: "Level 2",
      title: "Monogram",
      imgSrc: "/images/C3-Monogram-L2.webp",
      bgColor: "#fcff74",
    },
    {
      level: "Level 2",
      title: "Monstercat",
      imgSrc: "/images/C2-Monstercat-L2.webp",
      bgColor: "#fcff74",
    },
    {
      level: "Level 3",
      title: "Nintendo",
      imgSrc: "/images/C1-Nintendo-L3.webp",
      bgColor: "#ffd430",
    },
    {
      level: "Level 1",
      title: "Oh.Studio",
      imgSrc: "/images/C3-oh-L1.webp",
      bgColor: "#bcff93",
    },
    {
      level: "Level 2",
      title: "Podia",
      imgSrc: "/images/C3-podia-L2.webp",
      bgColor: "#fcff74",
    },
    {
      level: "Level 1",
      title: "Pulse",
      imgSrc: "/images/C2-pulse-L1.webp",
      bgColor: "#bcff93",
    },
    {
      level: "Level 3",
      title: "Qrates",
      imgSrc: "/images/C1-Qrates-L3.webp",
      bgColor: "#ffd430",
    },
    {
      level: "Level 2",
      title: "Starbacks",
      imgSrc: "/images/C1-Starbucks-L2.webp",
      bgColor: "#fcff74",
    },
    {
      level: "Level 2",
      title: "Stark",
      imgSrc: "/images/C3-Stark-L2.webp",
      bgColor: "#fcff74",
    },
  ];

  const filteredProjects =
    selectedLevel === "All"
      ? projects.filter((project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : projects
          .filter((project) => project.level === selectedLevel)
          .filter((project) =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase())
          );

  const handleLevelClick = (level) => {
    setSelectedLevel(level);
    setDisplayText(levelTexts[level]);
  };

  return (
    <>
      <Navbar />
      <div className="px-3 bg-slate-50 py-10 border-b-2 border-black">
        <div className="flex justify-center items-center flex-col gap-4 md:gap-6">
          <h1 className="font-bold font-sans text-3xl md:text-6xl lg:text-7xl pt-5">
            Project Library
          </h1>
          <h3 className="underline text-sm sm:text-2xl md:text-3xl lg:text-3xl font-bold">
            How to get started:
          </h3>
          <ul className="flex justify-center flex-col gap-3">
            <li className="md:text-2xl">→ Choose one of our projects below.</li>
            <li className="md:text-2xl">
              → Recreate all <span className="underline font-bold">or</span>{" "}
              parts of the page.
            </li>
            <li className="md:text-2xl">→ Improve and test your skills.</li>
            <li className="md:text-2xl font-sans font-bold">
              ✔ Become a better frontend developer.
            </li>
          </ul>
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-2 md:gap-4 lg:gap-5">
            <li
              className={`border-2 border-black w-24 sm:w-20 md:w-24 py-3 text-center cursor-pointer ${
                selectedLevel === "All" ? "bg-black text-white" : "hover:bg-black hover:text-white"
              }`}
              onClick={() => handleLevelClick("All")}
            >
              View All
            </li>
            <li
              className={`border-2 border-black w-24 sm:w-20 md:w-28 py-3 text-center cursor-pointer ${
                selectedLevel === "Level 1" ? "bg-[#bcff93]" : "hover:bg-[#bcff93]"
              }`}
              onClick={() => handleLevelClick("Level 1")}
            >
              Level 1
            </li>
            <li
              className={`border-2 border-black w-24 sm:w-20 md:w-28 py-3 text-center cursor-pointer ${
                selectedLevel === "Level 2" ? "bg-[#fcff74]" : "hover:bg-[#fcff74]"
              }`}
              onClick={() => handleLevelClick("Level 2")}
            >
              Level 2
            </li>
            <li
              className={`border-2 border-black w-24 sm:w-20 md:w-28 py-3 text-center cursor-pointer ${
                selectedLevel === "Level 3" ? "bg-[#ffd430]" : "hover:bg-[#ffd430]"
              }`}
              onClick={() => handleLevelClick("Level 3")}
            >
              Level 3
            </li>
          </ul>
          <input
            className="border-2 pl-4 border-black w-full md:w-[500px] h-14"
            type="text"
            placeholder="Search project by name: Nintendo"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center">
          <p
            className={`w-full md:w-[720px] font-bold mt-7 p-3 text-xl text-center ${displayText.color}`}
          >
            {displayText.text}
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-4 md:gap-7 items-center my-10">
          {filteredProjects.map((project, index) => (
            <a
              key={index}
              href={`/ProjectLibrary/${project.title.replace(/\s+/g, '-').toLowerCase()}`}
              className="relative w-full hover:-translate-y-2 max-w-[295px] bg-white border-2 border-black shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <h1
                className={`absolute -right-2 -top-2 text-center w-20 py-1.5 border-2 border-black`}
                style={{ backgroundColor: project.bgColor }}
              >
                {project.level}
              </h1>
              <img src={project.imgSrc} alt={project.title} />
              <p className="underline p-4 border-t-2 font-bold border-black text-xl bg-[#faebd7]">
                {project.title}
              </p>
            </a>
          ))}
        </div>
      </div>
      <RetiredProject/>
      <Footer/>
    </>
  );
};

export default Page;
