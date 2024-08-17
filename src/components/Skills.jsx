import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Python from '../assets/python.png';
import Tailwind from '../assets/tailwind.png';
import django from '../assets/django.png';
import Amazon from '../assets/aws.png';
import Spring from '../assets/spring.png';
import MongoDb from '../assets/mongo.png';
import github from '../assets/github.png';
const Skills = () => {
   // const skills = [HTML,CSS,JavaScript,ReactImg,Node,Python,Tailwind,django,Amazon,Spring]
    const skillsObj ={"HTML":HTML,"CSS":CSS,"JavaScript":JavaScript,"React":ReactImg,"Node":Node,"Python":Python,"Tailwind":Tailwind,"Django":django,
                        "Amazon":Amazon,"Spring":Spring,"MongoDb":MongoDb,"GitHub":github}
    const skills = Object.entries(skillsObj);
  return (
    <div name = 'skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#889260]'>Experience</p>
                <p className='py-4'>These are my skills</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                {skills.map(([skillname,skill], index) => (
                    <div key={index} className='shadow-md shadow-[#040c16] hover:scale-105 duration-300'>
                        <img className='w-20 mx-auto' src={skill}  />
                        <p className='my-4'>{skillname} </p>
                    </div>
                ))}
               
            </div>
        </div>
    </div>
  )
}

export default Skills