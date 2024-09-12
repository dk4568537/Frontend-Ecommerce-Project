import React from "react";
import { HiArrowDownTray } from "react-icons/hi2";
import NewsNavbar from "@/app/newsNavbar/page";
import Link from "next/link";
import NewsFooter from '@/app/newshome/newsFooter/page'

const Page = () => {
  const currentDate = new Date();
  const getYear = currentDate.getFullYear();
  const getMonth = currentDate.getMonth() + 1;
  const getDay = currentDate.getDate();

  return (
    <>
      <NewsNavbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="container mx-auto flex justify-center items-center flex-col px-3">
          <div className="flex justify-center items-center gap-5 py-5">
            <Link href="/newshome">
              <h1 className="hover:underline hover:font-semibold text-lg cursor-pointer">
                Home
              </h1>
            </Link>
            <Link href="/Achive">
              <h2 className="hover:underline hover:font-semibold text-lg cursor-pointer">
                Archive
              </h2>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center border-b border-gray-400 py-10">
            <div className="w-full md:w-auto gap-5 group">
              <h1 className=" text-lg lg:text-2xl font-bold mb-2">
                Frontend Practice Newsletter #2
              </h1>
              <p className="text-xl">
                New blog, Projects, and more! <br /> {getDay}/{getMonth}/
                {getYear}
              </p>
              <div className="flex justify-between gap-8 items-center pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-red-500"
                  >
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-gray-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button>
                  <HiArrowDownTray className="text-xl" />
                </button>
              </div>
            </div>
            <div className="flex rounded-lg justify-center items-center shadow-md text-center font-serif w-full lg:w-[470px] h-full lg:h-[290px] p-5 bg-red-100 text-6xl lg:text-8xl font-extrabold">
              <h1>Frontend Practice</h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10">
            <div className="w-full md:w-auto gap-5 group">
              <h1 className=" text-lg lg:text-2xl font-bold mb-2">
                Frontend Practice Newsletter #2
              </h1>
              <p className="text-xl">
                New blog, Projects, and more! <br /> {getDay}/{getMonth}/
                {getYear}
              </p>
              <div className="flex justify-between gap-8 items-center pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-red-500"
                  >
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-gray-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button>
                  <HiArrowDownTray className="text-xl" />
                </button>
              </div>
            </div>
            <div className="flex rounded-lg justify-center items-center shadow-md text-center font-serif w-full lg:w-[470px] h-full lg:h-[290px] p-5 bg-red-100 text-6xl lg:text-8xl font-extrabold">
              <h1>Frontend Practice</h1>
            </div>
          </div>
        </div>
      </div>
      <NewsFooter/>
    </>
  );
};

export default Page;
