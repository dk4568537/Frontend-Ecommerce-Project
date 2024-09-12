"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiArrowDownTray } from "react-icons/hi2";
import { AiOutlineSearch } from "react-icons/ai";
import "font-awesome/css/font-awesome.min.css";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { IoCloudDownloadOutline } from "react-icons/io5";


const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCopyLink = () => {
    const link = "https://frontendpractice.substack.com?utm_source=navbar&utm_medium=web";
    navigator.clipboard.writeText(link).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  const getYear = new Date().getFullYear();
  const getMonth = new Date().getMonth() + 1;
  const getDay = new Date().getDate();

  const newsletters = [
    {
      id: 1,
      title: "Frontend Practice Newsletter #2",
      description: "New blog, Projects, And more!",
      date: `${getDay}/${getMonth}/${getYear}`,
      link: "https://frontendpractice.substack.com/p/frontend-practice-newsletter-2?utm_source=publication-search",
    },
    {
      id: 2,
      title: "Frontend Practice Newsletter #1",
      description: "Our first issue!",
      date: `${getDay}/${getMonth}/${getYear}`,
      link: "https://frontendpractice.substack.com/p/frontend-practice-newsletter-2?utm_source=publication-search",
    },
  ];

  const filteredNewsletters = newsletters.filter((newsletter) =>
    newsletter.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="sticky top-0 z-10">
        <nav className="bg-gray-50 dark:bg-gray-900 border-b-2 border-black p-4">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto lg:px-2">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                src="/images/logo.webp"
                className="h-8"
                alt="Flowbite Logo"
                width={32}
                height={32}
              />
            </Link>
            <Link href="/newshome">
              <span className="self-center text-xs md:text-xl font-bold whitespace-nowrap dark:text-white hover:underline">
                Frontend Practice Newsletter
              </span>
            </Link>
            <div className="flex items-center md:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none"
                onClick={handleMenuToggle}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16m-7 6h7"
                    }
                  />
                </svg>
              </button>
            </div>
            <div
              className={`w-full md:flex md:w-auto ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-5 mt-4 md:mt-0">
                <li className="flex items-center justify-center bg-slate-200 text-4xl p-2 rounded-lg">
                  <button
                    className="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
                    onClick={handleSearchToggle}
                  >
                    <AiOutlineSearch className="size-6" />
                  </button>
                </li>
                <li
                  className="block hover:underline relative py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={handleToggle}
                >
                  <HiArrowDownTray className="text-xl cursor-pointer" />
                </li>
                {isOpen && (
                  <div className="flex absolute top-12 right-28 bg-gray-200 p-4 gap-3 rounded-lg border justify-center items-start flex-col list-group mt-2">
                    <a
                      className="list-group-item rounded-md flex text-center w-full p-2 hover:bg-gray-300 cursor-pointer"
                      onClick={handleCopyLink}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                        />
                      </svg>
                      &nbsp; Copy Link
                    </a>
                    {isCopied && (
                      <div className="text-green-500 mt-2">Link copied!</div>
                    )}
                    <a
                      className="list-group-item rounded-md flex w-full text-center p-2 hover:bg-gray-300"
                      href="mailto:someone@example.com"
                    >
                     <CiMail className='size-6' />
                      &nbsp; Send As Email
                    </a>
                    <a
                      className="list-group-item rounded-md w-full flex text-center p-2 hover:bg-gray-300"
                      href="https://substackcdn.com/image/fetch/f_auto,q_auto:best,fl_progressive:steep,fl_attachment:Message%20-%20stories/https%3A%2F%2Ffrontendpractice.substack.com%2Fapi%2Fv1%2Fpublication_assets%2Fimage.jpg%3FaspectRatio%3Dstories%26bgImage%3Dtrue%26type%3Dlogo%26version%3D11"
                    >
                      <IoCloudDownloadOutline className=" size-6" />
                      &nbsp; Get Shareable Images
                    </a>
                    <a
                      className="list-group-item rounded-md w-full flex text-center p-2 hover:bg-gray-300"
                      href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Ffrontendpractice.substack.com%253Futm_source%253Dnavbar%2526utm_medium%253Dweb&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB"
                    >
                      <FaFacebook className=" text-blue-500 size-6"/>
                      &nbsp; Share to Facebook
                    </a>
                    <a
                      className="list-group-item rounded-md w-full flex text-center p-2 hover:bg-gray-300"
                      href="https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=https%3A%2F%2Ffrontendpractice.substack.com%3Futm_source%3Dnavbar%26utm_medium%3Dweb"
                    >
                      <FaLinkedin className=" size-6 text-blue-800"/>
                      &nbsp; Share to Linkiden
                    </a>
                    <a
                      className="list-group-item rounded-md w-full flex text-center p-2 hover:bg-gray-300"
                      href="https://twitter.com/intent/tweet?url=https%3A%2F%2Ffrontendpractice.substack.com%3Futm_source%3Dnavbar%26utm_medium%3Dweb&text=Subscribe%20to%20Frontend%20Practice%20Newsletter%2C%20by%20%40frontendpract"
                    >
                     <FaXTwitter className=" size-6" />
                      &nbsp; Share to X
                    </a>
                  </div>
                )}
                <Link href="/SignIn">
                  <li className="block py-2 hover:underline px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Sign in
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>

        {isSearchOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 relative">
              <button
                className="text-orange-500 dark:text-orange-400 hover:text-orange-900 dark:hover:text-white focus:outline-none absolute top-4 right-4"
                onClick={handleSearchToggle}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h2 className="text-lg font-bold mb-4 dark:text-white">Search</h2>
              <div className="relative">
                <input
                  type="text"
                  className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Type to search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                {filteredNewsletters.length > 0 ? (
                  filteredNewsletters.map((newsletter) => (
                    <Link key={newsletter.id} href={newsletter.link}>
                      <div className="flex justify-start gap-5 items-center mt-5">
                        <h1 className="rounded-lg bg-red-100 w-14 h-12 py-2 text-center text-xs">
                          Frontend Practice
                        </h1>
                        <div>
                          <h3 className="text-md font-semibold">
                            {newsletter.title}
                          </h3>
                          <p className="text-xs pt-2">
                            {newsletter.description} @ {newsletter.date}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-center text-gray-500 dark:text-gray-400 mt-5">
                    No results found
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
