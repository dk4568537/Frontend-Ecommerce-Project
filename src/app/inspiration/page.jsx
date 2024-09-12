import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=' flex justify-center items-center py-5 bg-gray-50'>
        <div className=' flex justify-center flex-col items-center min-h-screen container'>
            <div className=' gap-5 py-10 flex justify-center items-center flex-col font-serif w-full lg:w-[820px]'>
                <h1 className=' text-center lg:text-4xl font-bold'>Frontend Practice provides you with the inspiration and resources to create beautiful websites.</h1>
                <p className=' text-center w-full lg:w-[480px] py-5 lg:text-3xl'>Here are some ways you can benefit from using our platform:</p>
            </div>
            <div className=' w-full lg:w-[930px] pb-5 gap-5 grid grid-cols-1 md:grid-cols-2'>
                <div className=' flex border-2 border-black'>
                    <img className=' p-4 w-40 h-40' src="/images/worldimg.png" alt="" />
                    <p className=' p-2 flex justify-center items-center text-center'>Enhance your skills by building real websites selected for their educational value.</p>
                </div>
                <div className=' flex border-2 border-black'>
                    <img className=' p-4 w-40 h-40' src="/images/layouts.png" alt="" />
                    <p className=' p-2 flex justify-center items-center text-center'>Test and improve your frontend knowledge through various challenges.</p>
                </div>
                <div className=' flex border-2 border-black'>
                    <img className=' p-4 w-40 h-40' src="/images/pantone.png" alt="" />
                    <p className=' p-2 flex justify-center items-center text-center'>Use the provided color palettes for each project to save time.</p>
                </div>
                <div className=' flex border-2 border-black'>
                    <img className=' p-4 w-40 h-40' src="/images/lamp.png" alt="" />
                    <p className=' p-2 flex justify-center items-center text-center'>Find helpful, curated resources to tackle challenging elements.</p>
                </div>
            </div>
            <div className=' font-serif gap-7 py-10 flex justify-center items-center flex-col'>
                <h1 className=' w-full lg:w-[400px] text-3xl font-extrabold text-center'>Ready to become a better frontend developer?</h1>
                <Link href='/ProjectLibrary'><button className=' border-2 hover:bg-black hover:text-white border-black px-6 py-3'>Get Started</button></Link>
            </div>
        </div>
    </div>
  )
}

export default page