"use client"
import React, { useState } from "react";
import Navbar from "@/app/newsNavbar/page";
import Footer from "@/app/newshome/newsFooter/page";
import Link from "next/link";

const Page = () => {
  const [title, setTitle] = useState('Sitemap - Frontend Practice Newsletter');
  const [show2023Posts, setShow2023Posts] = useState(false);

  const handleShow2023Posts = () => {
    setTitle('Sitemap - 2023 - Frontend Practice Newsletter');
    setShow2023Posts(true);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center ">
        <div className="flex justify-center items-center gap-5 py-5">
          <Link href="/newshome">
            <h1 className="hover:underline hover:font-semibold text-lg cursor-pointer">
              Home
            </h1>
          </Link>
          <Link href="/Archive">
            <h2 className="hover:underline hover:font-semibold text-lg cursor-pointer">
              Archive
            </h2>
          </Link>
        </div>
        <div className="text-center h-[50vh] mt-2">
          <h1 className="text-xl font-bold mb-4">{title}</h1>
          {!show2023Posts && (
            <button 
              onClick={handleShow2023Posts} 
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Posts from 2023
            </button>
          )}
          {show2023Posts && (
            <div className="flex flex-col items-center gap-2">
             <Link href="https://frontendpractice.substack.com/p/frontend-practice-newsletter-2"><button className=" underline px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                Frontend Practice Newsletter #2
              </button></Link>
              <Link href="https://frontendpractice.substack.com/p/issue-1"><button className=" underline px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                Frontend Practice Newsletter #1
              </button></Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
