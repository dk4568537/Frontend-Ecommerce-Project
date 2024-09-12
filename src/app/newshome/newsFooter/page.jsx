"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col">
      <footer className="bg-gray-300  py-6 mt-auto">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-md mb-4 md:mb-4 text-center">
              © 2024 Frontend Practice{" "}
              <Link href="https://substack.com/privacy" className="underline">
                Privacy
              </Link>{" "}
              ∙{" "}
              <Link href="https://substack.com/tos" className=" underline">
                Terms
              </Link>{" "}
              ∙{" "}
              <Link
                href="https://substack.com/ccpa#personal-data-collected"
                className=" underline"
              >
                Collection notice
              </Link>
            </h1>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <Link href="/writing">
                <button className="border rounded-md px-5 py-2 bg-white hover:bg-gray-400 text-black flex items-center justify-center space-x-2">
                  <svg
                    role="img"
                    width="20"
                    height="20"
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
                  <span>Start Writing</span>
                </button>
              </Link>
              <Link href="https://substack.com/app?utm_campaign=app-marketing&utm_content=web-footer-button">
                <button className="border rounded-md px-5 py-2 bg-white hover:bg-gray-400 text-black">
                  Get the app
                </button>
              </Link>
            </div>
            <div className=" pt-5">
              <h2>
                <span className=" underline">Substack</span> is the home for
                great culture
              </h2>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
