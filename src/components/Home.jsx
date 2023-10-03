import React from 'react'
import{HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
function Home() {
  return (

   
    <div name='home' className='w-full h-screen bg-[#0a192f]  '>
        {/* container */}
        <div className='max-w-[1000px] mx-auto flex  flex-col px-10 justify-center h-full  '>
            <p className='text-[#889260]'>Hi, I'm</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Irfana Sulaiman,</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#889260]'>Full Stack Developer</h2>
            <p className='text-[#889260] py-4 max-w-[700px]'>Specialized in building and designing exceptional digital experiences. Currently, focused on building responsive full stack web applications.</p>
            <div>
            <Link to="projects" smooth={true} duration={500}>
                       
                   
                <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] flex items-center  '>View Work 
                <span className=' group-hover:rotate-90 duration-300'>
                     <HiArrowNarrowRight className='ml-2 '/>
                </span>
                
                </button>
                </Link>
            </div>
        </div>

    
    </div>
  )
}

export default Home