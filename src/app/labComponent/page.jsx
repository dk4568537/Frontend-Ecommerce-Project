import React from "react";
import { GoDot } from "react-icons/go";
import Navbar from '@/app/navbar/page'
import Link from "next/link";
import Footer from '@/app/footer/page'

const AboutPage = ({img , title, headtitle}) => {
  return (
    <>
    <Navbar/>
    <div className=" flex justify-center bg-white">
      <div className=" text-center border-x-2 font-serif border-black gap-5 bg-slate-50 container py-6">
        <h1 className="text-6xl md:text-8xl font-extrabold py-3 font-serif">
          {headtitle}
        </h1>
        <h3 className="text-3xl font-bold">{title}</h3>
        <div className="flex justify-center pb-6 pt-4 gap-5">
          <ul className="flex gap-1 font-semibold text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-blue-500"
            >
              <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
            </svg>
            <li className="hover:text-[#0000ff] underline">View Live</li>
          </ul>
          <ul className="flex gap-1 font-semibold text-lg ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
              <path
                fillRule="evenodd"
                d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clipRule="evenodd"
              />
            </svg>
            <li className="hover:text-[#0000ff] underline">
              Free Photo Assets
            </li>
          </ul>
          <ul className="flex gap-1 font-semibold text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-yellow-400"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
            <li className="hover:text-blue-600 underline">Open Source Icons</li>
          </ul>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 border-y-2 bg-slate-50 border-black text-center gap-5">
            <div className=" flex justify-center items-center flex-col py-4">
              <h1 className=" font-bold text-2xl py-3 ">Recreate this to learn:</h1>
              <ul className=" items-center">
                <li className=" flex items-center"><GoDot/>Typography choices</li>
                <li className=" flex items-center"><GoDot/>Spacing</li>
                <li className=" flex items-center"><GoDot/>Unique grid layout</li>
                <li className=" flex items-center"><GoDot/>Multi-column footer</li>
                <li className=" flex items-center"><GoDot/>and more!</li>
              </ul>
            </div>
            <div className=" flex justify-center items-center flex-col border-x-2 p-4 border-black">
              <h1 className=" font-bold text-2xl">Color Palette:</h1>
             <div className=" flex gap-10 pt-3">
             <ul className=" flex justify-center items-start gap-4 flex-col">
                <li className=" flex"><p className=" py-2 px-3 bg-[#fbffa7] border rounded-full"></p>#fbffa7</li>
                <li className=" flex"><p className=" py-2 px-3 bg-[#b1c5ff] border rounded-full"></p>#b1c5ff</li>
                <li className=" flex"><p className=" py-2 px-3 bg-[#b6ffc0] border rounded-full"></p>#b6ffc0</li>
              </ul>
              <ul className=" flex justify-center items-start font-sans gap-4 flex-col">
                <li className=" flex"><p className=" py-2 px-3 bg-[#ff764d] border rounded-full"></p>#ff764d</li>
                <li className=" flex"><p className=" py-2 px-3 bg-[#d5b3ff] border rounded-full"></p>#d5b3ff</li>
                <li className=" flex"><p className=" py-2 px-3 bg-[#0000ff] border rounded-full"></p>#0000ff</li>
              </ul>
             </div>
            </div>{" "}
            <div className="flex justify-center flex-col items-center py-4">
              <h1 className=" font-bold text-2xl py-3">Resources:</h1>
              <ul className=" flex justify-center items-start flex-col">
                <Link href='https://css-tricks.com/snippets/css/complete-guide-grid/'><li className=" underline hover:text-blue-800 font-semibold">A Complete Guide to Grid</li></Link>
                <Link href='https://css-tricks.com/snippets/css/a-guide-to-flexbox/'><li className="underline hover:text-blue-800 font-semibold">A Complete Guide to Flexbox</li></Link>
                <Link href='https://www.w3schools.com/css/css_boxmodel.asp'><li className=" underline hover:text-blue-800 font-semibold">CSS Box Model</li></Link>
                <Link href='https://webdesign.tutsplus.com/how-to-build-a-responsive-multi-level-sticky-footer-with-flexbox--cms-33341t'><li className=" underline hover:text-blue-800 font-semibold">Multi-Level Sticky Footer</li></Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap border-b-2 bg-white md:py-5 border-black">
          <div className="bg-black text-white md:ml-7 p-8 m-4 w-full md:w-[450px]">
            <h1 className="text-4xl pb-5">Up for a challenge?</h1>
            <p className="text-lg">
              Try building the mega-menu that appears <br /> when you click "More +" in
              the main menu.
            </p>
          </div>
          <div className="bg-[#494949] text-white p-8 m-4 w-full md:w-[450px]">
            <h1 className="text-4xl pb-4">Too easy?</h1>
            <p className="text-lg">
              Is it responsive on mobile? Make the 2nd <br /> menu bar sticky on
              scroll.
            </p>
          </div>
          <div className="bg-gray-100 text-black border-2 border-black p-8 m-4 w-full md:w-auto">
            <h1 className="text-4xl pb-5">Too hard?</h1>
            <h5>That's ok!</h5>
            <a
              href="/projectsLibrary"
              className="text-lg underline hover:text-blue-800 font-bold"
            >
              View other projects
            </a>
          </div>
        </div>
        <h1 className=" text-4xl py-8 bg-white font-extrabold">Reference image</h1>
        <div className=" flex justify-center pb-3 bg-white items-center">
          <img className=" shadow-2xl border w-[95%] rounded-xl" src={img} alt="" />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutPage;
