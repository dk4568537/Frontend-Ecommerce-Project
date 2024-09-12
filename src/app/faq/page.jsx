'use client'
import React, { useState } from "react";
import { VscTriangleDown, VscTriangleRight } from "react-icons/vsc";
import Navbar from '@/app/navbar/page'
import Footer from '@/app/footer/page'

const faqs = [
  {
    question: "What is Frontend Practice?",
    answer: "Frontend Practice offers developers the opportunity to practice and improve their skills in design, interactions, animations, responsiveness, troubleshooting, and more by providing a selection of real websites for them to recreate from scratch. This hands-on approach allows developers to gain a diverse set of valuable skills that will make them more employable in the industry."
  },
  {
    question: "Where can I find images and icons?",
    answer: "Pexels and Pixabay are excellent sources for free stock photos, while Boxicons and Font Awesome offer a variety of free icons. Links to these resources can be found at the top of every project page on Frontend Practice."
  },
  {
    question: "Where is the code?",
    answer: "Frontend Practice does not provide any pre-written code, but we do offer a few resources to assist with each project. However, there will always be unexpected challenges that arise during the learning process, which is where the true learning begins."
  },
  {
    question: "Which languages do I use for these projects?",
    answer: "In short, you can use any programming language you desire for these practice projects. The beauty of recreating websites for practice is that you can utilize any tech stack, such as HTML, CSS, JavaScript, React, Vue, Angular, Svelte, or any other language, framework, or library."
  },
  {
    question: "Why did you pick these websites?",
    answer: "The selection of websites featured on Frontend Practice is based on personal preference and takes into consideration various factors, including design and style, difficulty to recreate, and elements and features that offer a learning opportunity through recreation. It is important to note that some projects may be more challenging to recreate than others."
  },
  {
    question: "Can I use these in my portfolio?",
    answer: "We encourage you to make these projects your own by incorporating your own colors, content, and images. If you choose to use these projects for your portfolio, please clearly state that it is an unofficial version.It is important to note that these are practice projects and all materials owned by companies and individuals whose websites are featured on Frontend Practice are intended for practice purposes only."
  }, {
    question: "Why does the live website not look like the project anymore?",
    answer: "How dare they update the website! We will talk with their manager right away. If they don't respond, we'll periodically check the websites we feature and make the necessary updates. In some cases, if we really love the previous design, we may keep it and link to an archived page if possible. If not, please see the reference image on the project page."
  }, {
    question: "Where did some of the projects go?",
    answer: "Occasionally we will retire projects from the main collection if the design is no longer up to date or an archived version is not available. You can still find the retired projects at the bottom of our Projects page."
  },
];

const Page = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center flex-col  py-14">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-serif sm:text-5xl md:text-6xl pb-10 font-bold text-center max-w-xl">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="w-full px-4 md:w-[730px]">
        {faqs.map((faq, index) => (
          <div key={index} className="border-2 border-black mb-4">
            <div
              className="flex bg-red-100 gap-3 items-center cursor-pointer p-3 border-black"
              onClick={() => handleToggle(index)}
            >
              <button>
                {openIndex === index ? <VscTriangleDown className="text-xl" /> : <VscTriangleRight className="text-xl" />}
              </button>
              <h2 className="text-xl font-semibold hover:underline">
                {faq.question}
              </h2>
            </div>
            {openIndex === index && (
              <div className=" p-4 border-t-2 border-black">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Page;
