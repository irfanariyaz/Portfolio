import React from 'react'

function About() {
  return (
    <div name = 'about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 px-9'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#889260]'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-9'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline'>Hi, I'm Irfana, nice to meet you. Please take a look around.</p>
                </div>
                <div>
               <p>
               I am a full-stack developer adept at building applications using React and Django, with extensive experience in creating interactive and user-friendly interfaces on the frontend and designing robust RESTful APIs on the backend, ensuring seamless integration between the two technologies for efficient and scalable web applications   </p>
                </div>
                </div>
            </div>
        </div>
    
  )
}

export default About