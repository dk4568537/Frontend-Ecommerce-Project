"use client";
import React, { useState } from "react";
import { VscChevronRight } from "react-icons/vsc";
import Navbar from '../navbar/page';
import Footer from "../footer/page";
import Link from "next/link";

const Page = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed email:", email);
    setEmail("");
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center flex-col pb-10 px-4 bg-gray-50">
        <div className="w-full max-w-3xl shadow-md flex justify-center items-center gap-8 py-8 mt-10 bg-[#faebd7] rounded-lg">
          <img className="w-40 md:w-72" src="/images/newsimg.png" alt="News" />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#1f5070]">
              Become a better frontend developer
            </h1>
            <p className="font-semibold pt-3 text-lg md:text-2xl text-[#1f5070] underline">
              FrontendPratice.com
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col pt-10">
          <h1 className="text-xl md:text-2xl font-bold py-2">
            Frontend Practice Newsletter
          </h1>
          <p className="text-gray-500 w-full max-w-md text-center">
            Get the latest Frontend Practice updates and recommendations for
            websites, articles, and videos worth checking out. Stay informed and
            inspired with us.
          </p>
          <p className="pt-2 text-gray-500 font-medium">Over 1,000 subscribers</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex items-center w-full max-w-md bg-white border border-black my-7 rounded-md"
        >
          <input
            className="pl-3 py-2 rounded-md flex-grow"
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Type your email..."
            required
          />
          <button
            type="submit"
            className="py-2 px-4 bg-black hover:bg-gray-900 text-white border-black border-l"
          >
            Subscribe
          </button>
        </form>
        <Link
          href="/newshome"
          className="flex justify-center items-center gap-2 text-gray-500 font-medium"
        >
          <h2>No thanks</h2>
          <VscChevronRight />
        </Link>
        <p className="text-xs mt-6 text-center px-4">
          By registering you agree to Substack's{" "}
          <span className="underline">Terms of Service,</span> our{" "}
          <span className="underline">Privacy Policy,</span> and our{" "}
          <span className="underline">Information Collection Notice</span>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
