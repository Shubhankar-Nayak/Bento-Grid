import { useState } from 'react'
import './App.css'
import stars from './images/illustration-five-stars.webp'
import multiple from './images/illustration-multiple-platforms.webp'
import constpost from './images/illustration-consistent-schedule.webp'
import grow from './images/illustration-grow-followers.webp'
import schmedia from './images/illustration-schedule-posts.webp'
import augrow from './images/illustration-audience-growth.webp'
import ai from './images/illustration-ai-content.webp'
import crpost from './images/illustration-create-post.webp'

function App() {

  return (
    <div className='w-[100%] h-full flex justify-center items-center font-DMSans'>
      <div className='w-[90%] laptop:w-[60%] laptop:h-[90vh] laptop:my-5 laptop:grid laptop:grid-rows-10 laptop:grid-cols-4 laptop:gap-5'>
        <div className='h-[35vh] laptop:h-[100%] laptop:w-[100%] mt-8 laptop:mt-0 bg-Purple500 text-white laptop:col-start-2 laptop:col-span-2 laptop:row-span-4 pt-6 pb-8 px-10 shadow-xl flex flex-col justify-center items-center rounded-xl'>
          <h1 className='text-[35px] laptop:text-[45px] text-center font-medium laptop:leading-[50px]'>Social Media <span className='text-Yellow500'>10x</span> <span className='italic'>Faster </span> with AI</h1>
          <img className='w-[70%] mt-4 mb-2' src={stars} alt="stars logo" />
          <p>Over 4,000 5-star reviews</p>
        </div>

        <div className='h-[25vh] laptop:h-[100%] laptop:w-[100%] my-8 laptop:my-0 laptop:col-start-2 laptop:col-span-1 laptop:row-start-5 laptop:row-span-3 bg-white shadow-xl rounded-xl flex flex-col justify-center items-center'>
          <img className='w-[90%] shadow-md shadow-gray-100 rounded-full' src={multiple} alt="platforms logo" />
          <p className='w-[90%] laptop:w-[80%] my-3 text-[24px] font-semibold leading-8 laptop:leading-6'>Manage multiple accounts and platforms.</p>
        </div>

        <div className='h-[37vh] laptop:h-[100%] laptop:w-[100%] my-8 laptop:my-0 laptop:col-start-3 laptop:col-span-1 laptop:row-start-5 laptop:row-span-3 bg-Yellow500 shadow-xl rounded-xl pl-5 pt-5 overflow-hidden'>
          <p className='w-[80%] text-[24px] mb-4 font-semibold leading-7 laptop:leading-5'>Maintain a consistent posting schedule.</p>
          <img className='w-[75%] laptop:w-[85%]' src={constpost} alt="Posting Schedule" />
        </div>
        
        <div className='h-[65vh] laptop:h-[100%] laptop:w-[100%] my-8 laptop:my-0 laptop:col-start-4 laptop:col-span-1 laptop:row-start-1 laptop:row-span-7 bg-Purple100 shadow-xl py-5 flex flex-col justify-center items-center rounded-xl overflow-hidden relative'>
          <h1 className='text-[23px] laptop:leading-6 laptop:px-5 mb-3 font-semibold'>Schedule to social media.</h1>
          <img className='w-[90%]' src={schmedia} alt="Schedule" />
          <p className='w-[85%] my-5 leading-6 text-[18px] text-center laptop:text-left font-medium'>Optimize post timings to publish content at the perfect time for your audience.</p>
        </div>

        <div className='h-[55vh] laptop:h-[100%] laptop:w-[100%] my-8 laptop:my-0 laptop:col-start-3 laptop:col-span-2 laptop:row-start-8 laptop:row-span-3 bg-Purple500 shadow-xl rounded-xl text-white flex flex-col laptop:flex-row justify-center items-center'>
          <img className='w-[70%] laptop:w-[45%] laptop:pl-5 my-5' src={grow} alt="Followers Growth" />
          <p className='w-[60%] laptop:w-[55%] laptop:pr-10 laptop:text-left my-5 text-[30px] text-center leading-7 font-medium'>Grow followers with non-stop content.</p>
        </div>

        <div className='h-[30vh] laptop:h-[100%] laptop:w-[100%] my-8 laptop:my-0 laptop:col-start-2 laptop:col-span-1 laptop:row-start-8 laptop:row-span-3 bg-white shadow-xl rounded-xl p-5'>
          <h1 className='text-[50px] laptop:text-[45px] leading-8 font-medium'>&gt;56%</h1>
          <p className='text-[18px] laptop:text-[16px] font-medium my-5'>faster audience growth</p>
          <img className='w-[55%] laptop:w-[80%]' src={augrow} alt="emoji" />
        </div>

        <div className='h-[33vh] laptop:h-[100%] laptop:w-[100%] my-8 laptop:my-0 laptop:col-start-1 laptop:col-span-1 laptop:row-start-1 laptop:row-span-5 pt-8 bg-Yellow100 shadow-xl rounded-xl'>
          <p className='text-[28px] px-8 laptop:mt-10 leading-7 font-semibold'>Create and schedule content <span className='text-Purple500 italic'>quicker.</span></p>
          <img className='w-[60%] ml-8 mt-5' src={crpost} alt="Create Post" />
        </div>

        <div className='h-[50vh] laptop:h-[100%] laptop:w-[100%] mb-8 laptop:mb-0 laptop:col-start-1 laptop:col-span-1 laptop:row-start-6 laptop:row-span-5 bg-Yellow500 shadow-xl rounded-xl p-5'>
          <p className='text-[30px] leading-6 font-medium'>Write your content using AI.</p>
          <img className='w-[80%] mt-5' src={ai} alt="AI" />
        </div>
      </div>
    </div>
  )
}

export default App
