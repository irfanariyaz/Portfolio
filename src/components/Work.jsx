import React from 'react'
import WorkImg from '../assets/projects/workImg.png'
import realEstate from '../assets/projects/realestate.jpg'
const Work = () => {
  return (
    <div name = 'work' className='w-full  text-gray-300 bg-[#0a192f] '>
        <div className='max-w-[1000px] mx-auto pt-[150px] flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#889260]'>Work</p>
                <p className='py-6'> Check out some of my recent work</p>
            </div>
{/* container */}
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-80 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>React Js Application</span>

                        
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center text-lg bg-white rounded-lg px-4 py-3 font-bold m-2 text-gray-700'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center text-lg bg-white rounded-lg px-4 py-3 font-bold m-2 text-gray-700'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${realEstate})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wider'>React Js Application</span>

                        
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center text-lg bg-white rounded-lg px-4 py-3 font-bold m-2 text-gray-700'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center text-lg bg-white rounded-lg px-4 py-3 font-bold m-2 text-gray-700'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-80 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>React Js Application</span>

                        
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center text-lg bg-white rounded-lg px-4 py-3 font-bold m-2 text-gray-700'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center text-lg bg-white rounded-lg px-4 py-3 font-bold m-2 text-gray-700'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${realEstate})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wider'>React Js Application</span>

                        
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center text-lg bg-white rounded-lg px-4 py-3 font-bold m-2 text-gray-700'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center text-lg bg-white rounded-lg px-4 py-3 font-bold m-2 text-gray-700'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Work