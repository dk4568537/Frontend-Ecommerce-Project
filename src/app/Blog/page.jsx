import React from "react";
import Navbar from '@/app/navbar/page'
import Footer from '@/app/footer/page'

const Page = () => {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center py-5 md:py-10">
      <div className="flex flex-col items-center font-serif">
        <h1 className="text-lg md:text-6xl font-extrabold md:w-[500px] text-center">
          Frontend Practice Blog
        </h1>
        <p className="font-medium text-xs md:text-xl text-center md:w-[750px] py-4 md:py-8">
          Covering a wide range of topics, including project tutorials,
          responsive design, accessibility, testing, helpful tips, and more.
        </p>
      </div>
      <div className="w-full max-w-4xl px-4 font-serif">
        <div className="flex justify-between items-center hover:bg-slate-200 border-y-2 border-black py-2 md:py-4 px-6">
          <h1 className="text-sm md:text-xl ">
            Where to host your frontend projects.
          </h1>
          <div className="flex gap-2">
            <button className="bg-black hover:bg-slate-100 hover:text-black text-white py-2 px-4 rounded-full">
              Hosting
            </button>
            <button className="bg-black hover:bg-slate-100  hover:text-black text-white py-2 px-4 rounded-full">
              Projects
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center hover:bg-slate-200 py-2 md:py-4 px-6">
          <h1 className="text-sm md:text-xl">
            Where to host your frontend projects.
          </h1>
          <div className="flex gap-2">
            <button className="bg-black hover:bg-slate-100  hover:text-black text-white py-2 px-4 rounded-full">
              Tips
            </button>
            <button className="bg-black hover:bg-slate-100  hover:text-black text-white py-2 px-4 rounded-full">
              Portfolio
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center hover:bg-slate-200 border-y-2 border-black py-2 md:py-4 px-6">
          <h1 className="text-sm md:text-xl">
            Where to host your frontend projects.
          </h1>
          <div className="flex gap-2">
            <button className="bg-black hover:bg-slate-100  hover:text-black text-white py-2 px-4 rounded-full">
              Hosting
            </button>
            <button className="bg-black hover:bg-slate-100  hover:text-black text-white py-2 px-4 rounded-full">
              Projects
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Page;
