"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";

const Page = () => {
  const router = useRouter('')
  const [email, setEmail] = useState('');

  

  return (
    <div className="flex justify-center items-center mt-5 ">
      <div className="container px-4">
        <div className="flex justify-start items-center fixed top-3">
          <button onClick={() => router.back()}>
            <FaChevronLeft className="text-3xl md:text-5xl hover:bg-gray-400 p-2 rounded-full border bg-gray-300" />
          </button>
          <p className="ml-4">
            <svg
              role="img"
              width="32"
              height="32"
              viewBox="0 0 21 24"
              fill="#FF6719"
              strokeWidth="1.8"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
              className="nav-logo-icon"
            >
              <path d="M20.9991 5.40625H0V8.24275H20.9991V5.40625Z"></path>
              <path d="M0 10.8125V24.0004L10.4991 18.1107L21 24.0004V10.8125H0Z"></path>
              <path d="M20.9991 0H0V2.83603H20.9991V0Z"></path>
            </svg>
          </p>
        </div>
        <div className="flex justify-center min-h-screen items-center flex-col">
          <h1 className="text-center font-semibold text-2xl md:text-3xl capitalize mb-6">Create Your Account</h1>
          <form className="border px-6 py-10 w-full max-w-lg bg-white rounded-md shadow-lg">
            <p className="pb-1">
              Your email address
            </p>
            <input
              className="border rounded-md mb-10 pl-4 py-4 w-full"
              type="email"
              placeholder="test@gmail.com"
              value={email}
            />
            <p className="text-center text-sm mb-5">
              By signing up, you agree to our{" "}
              <Link href='https://substack.com/pa'><span className="underline">publisher agreement</span></Link>,{" "}
              <Link href='https://substack.com/ccpa#personal-data-collected'><span className="underline">information collection notice</span></Link>,{" "}
             <Link href='https://substack.com/privacy'><span className="underline">and privacy policy</span></Link>.
            </p>
            <button
              type="submit"
              className="border text-md font-semibold text-white w-full py-4 rounded-md bg-orange-500 hover:bg-orange-600 transition"
            >
              Agree And Continue
            </button>
          </form>
          <p className=" w-full lg:w-[450px] mt-7 text-sm text-center">Sign up now, and publishing is <span className=" font-bold">free forever</span>. Once you start charging for subscriptions, we take 10% in addition to credit card transaction fees.</p>
        </div>
      </div>
    </div>
  );
};

export default Page;