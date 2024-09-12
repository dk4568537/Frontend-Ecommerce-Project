"use client"
import React, { useState } from 'react';
import Navbar from '../../app/navbar/page'

const Page = () => {
  const [webData, setWebData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWebData({
      ...webData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', webData);
  };

  return (
    <>
    <Navbar/>
    <div className="bg-[#faebd7] min-h-screen flex justify-center items-center">
      <div className="flex justify-center items-center flex-col p-4">
        <h1 className="text-5xl font-bold pt-10">Contact Us</h1>
        <p className="w-full md:w-[430px] text-center py-8">
          You may find that our <span className="font-bold underline">FAQ page</span> has the answers that you are looking for. If not, feel free to reach out!
        </p>
        <form className="flex flex-col gap-6 w-full md:w-[430px]" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            className="border-2 border-black w-full pl-4 py-2"
            type="text"
            placeholder="Jane Code"
            value={webData.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            className="border-2 border-black w-full pl-4 py-2"
            type="email"
            placeholder="email@website.com"
            value={webData.email}
            onChange={handleChange}
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={10}
            className="pt-3 border-2 border-black pl-4 w-full"
            placeholder="What would you like to say?"
            value={webData.message}
            onChange={handleChange}
          />
          <button type="submit" className="bg-black text-white py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Page;
