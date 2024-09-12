"use client"
import Link from 'next/link'
import React from 'react'

const Page = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col">
      <footer className="bg-black text-white py-6 mt-auto">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex justify-center items-center flex-col">
            <h1 className=" mb-4 md:mb-4">
              Frontend Practice - © {currentYear}
            </h1>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <li>
                <Link href="/" className="hover:text-gray-400">Home</Link>
              </li>
              <li>
                <Link href="/ProjectLibrary" className="hover:text-gray-400">Projects</Link>
              </li>
              <li>
                <Link href="/Blog" className="hover:text-gray-400">Blog</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gray-400">FAQ</Link>
              </li>
              <li>
                <Link href="/contantUs" className="hover:text-gray-400">Contact</Link>
              </li>
              <li>
                <Link href="/newsLatter" className="hover:text-gray-400">Newsletter</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Page
