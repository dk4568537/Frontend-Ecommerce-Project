"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Page = () => {
  const [signForm, setSignForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignForm({ ...signForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = signForm;
    if (email && password) {
      console.log("Form submitted:", signForm);
      setSignForm({
        email: "",
        password: "",
      });
    } else {
      alert("Please fill out both fields.");
    }
  };

  const router = useRouter();
  return (
    <>
      <div className="flex justify-center min-h-screen bg-gray-50">
        <div className="container px-4">
          <div className="mt-3">
            <button onClick={() => router.back()}>
              <FaChevronLeft className="text-3xl md:text-4xl hover:bg-gray-200 p-2 rounded-full bg-gray-100" />
            </button>
          </div>
          <div className="flex justify-center items-center flex-col">
            <h3 className="w-20 h-16 p-1 text-center rounded-md mb-3 bg-red-100 border">
              Frontend Practice
            </h3>
            <h1 className="text-center font-semibold text-2xl md:text-3xl capitalize mb-6">
              Sign in to Frontend Practice Newsletter
            </h1>
            <form
              onSubmit={handleSubmit}
              className="border px-6 py-10 w-full max-w-lg bg-white rounded-md shadow-lg"
            >
              <p className="pb-1">Your email address</p>
              <input
                className="border rounded-md mb-2 pl-4 py-3 w-full"
                type="email"
                name="email"
                value={signForm.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              <input
                className="border rounded-md mb-2 pl-4 py-3 w-full"
                type="password"
                name="password"
                value={signForm.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
              <button
                type="submit"
                className="border text-md font-semibold text-white w-full py-4 rounded-md bg-orange-500 hover:bg-orange-600 transition"
              >
                Continue
              </button>
              <p className="text-center text-sm pt-3">
                First time here?{" "}
                <Link href="/SignIn">
                  <span className="text-red-500">Create an account</span>
                </Link>
              </p>
            </form>
          </div>
          <div className="flex items-center justify-center py-5 gap-5">
            <div className="flex justify-center border shadow-md max-w-xl gap-5 px-5 pt-5 rounded-xl mt-5">
              <div className="flex flex-col items-center pb-5">
                <h2 className="font-bold text-start">Stay Signed in</h2>
                <p className="text-xs">
                  Download the Substack app for Android or iOS
                </p>
                <img
                  className="w-full md:w-40 rounded-lg shadow-md border my-6"
                  src="/images/download.png"
                  alt="Download"
                />
                <div className=" flex gap-3">
                  <button className=" flex text-xs px-2 py-1 rounded-md bg-black text-white">
                    <FaApple className=" text-3xl" />
                    Download on the <br /> App Store
                  </button>
                  <Link href="https://play.google.com/store/apps/details?id=com.substack.app&referrer=%2Fapp%2Fapp-store-redirect%3Futm_campaign%3Dapp-marketing%26utm_content%3Dsign-in-page%26utm_source%3Dbadge%26force%3Dandroid">
                  <button className=" flex text-xs px-2 py-1 rounded-md bg-black text-white">
                    <FaGooglePlay className=" text-3xl" />
                    GET IT ON <br /> GOOGLE PLAY
                  </button>
                  </Link>
                </div>
              </div>
              <Link href="https://play.google.com/store/apps/details?id=com.substack.app&referrer=%2Fapp%2Fapp-store-redirect%3Futm_campaign%3Dapp-marketing%26utm_content%3Dsign-in-page%26utm_source%3Dbadge%26force%3Dandroid">
                <div className="w-full md:w-48 flex items-center pt-5">
                  <img src="/images/highlight-6.png" alt="Highlight" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
