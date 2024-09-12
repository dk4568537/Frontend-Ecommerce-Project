import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=' bg-[#faebd7] border-b-2 border-black flex justify-center '>
        <div className=' container  '>
            <div className=' grid grid-cols-1 min-h-screen md:grid-cols-2 px-4 justify-center items-center gap-5'>
                <div>
                    <h1 className='  text-xs w-full lg:w-[500px] lg:text-5xl font-extrabold pb-5'>Become a Better frontend developer.</h1>
                    <h2 className=' w-full lg:w-[470px] text-xs lg:text-xl pb-5'>Take your frontend skills to the next level by recreating <span className=' font-bold'>real websites</span> from <span className=' font-bold'>real companies.</span></h2>
                    <p className=' text-xs lg:text-xl w-full lg:w-[460px]'>The perfect type of practice for developers of all skill levels. Are you up for the challenge?</p>
                    <div className=' flex gap-5 pt-8'>
                        <Link href='/ProjectLibrary'><button className=' px-4 lg:px-6 py-3 border-2 border-black font-semibold hover:bg-black hover:text-white bg-white'>View Projects</button></Link>
                        <Link href='/inspiration'><button className=' px-4 lg:px-6 py-3 border-2 border-black font-semibold hover:bg-black hover:text-white'>Learn More</button></Link>
                    </div>
                </div>
                <div className=' flex justify-center items-center'>
                    <img src="/images/becomeimg.webp" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default page