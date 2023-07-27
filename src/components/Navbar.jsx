import React, {useState} from 'react'
import {FaBars , FaTimes,FaGithub , FaLinkedin,  } from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo2.png'
import { Link } from 'react-scroll'
import {LuTwitter} from 'react-icons/lu'
import CV from '../assets/RESUME_IRFANA.pdf'





function Navbar() {
const [nav ,setNav] =useState(false)
const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div className='flex justify-center items-center gap-2'>

            <img src={Logo} alt="Logo Image" style={{width :'50px'}} />
            <p className='text-[#889260] font-playfair text-2xl'>&lt; irfana.27@gmail.com &gt;</p>
        
        </div>
        {/* Menu */}
    
            <ul className=' hidden md:flex'> 
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                     <Link to="about" smooth={true} duration={500}>
                        About
                    </Link></li>
                <li>
                     <Link to="skills" smooth={true} duration={500}>
                     Skills
                    </Link></li>
                {/* <li>
                <Link to="work" smooth={true} duration={500}>
                Work
                    </Link>
                </li> */}
                <li>
                <Link to="projects" smooth={true} duration={500}>
                Projects
                    </Link>
                </li>
                <li>
                <Link to="contact" smooth={true} duration={500}>
                Contact
                    </Link>
                </li>
        
            </ul>
        
        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        
        </div>
          {/* mobile menu */}
          <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-4 text-4xl'>
                     <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link></li>
                <li className='py-4 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-4 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skill
                    </Link>
                </li>
                <li className='py-4 text-4xl'>
                <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-4 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
          </ul>
        {/* social icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
            <ul>
                <li className='w-[50px] h-[50px] flex bg-blue-700 duration-300 ml-[20px]  rounded-full mb-3 hover:bg-black  hover:shadow-icon'>
                    <a href="https://www.linkedin.com/in/irfana-sulaiman-44a242240/" target='blank' className='flex justify-between items-center w-full text-gray-300'>
                     <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[50px] h-[50px] flex  bg-[#333333] duration-300 ml-[20px] rounded-full mb-3 hover:bg-black  hover:shadow-icon'>
                    <a href="https://github.com/irfanariyaz" target='blank' className='flex justify-between items-center w-full text-gray-300'>
                    <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[50px] h-[50px] flex  bg-[#565f69] duration-300 ml-[20px] rounded-full mb-3 hover:bg-black  hover:shadow-icon'>
                    <a href={CV} download='Resume'  target='blank'title='Resume'  className='flex justify-between items-center w-full text-gray-300'>
                    <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
                <li className='w-[50px] h-[50px] flex  bg-[#26a7de] duration-300 ml-[20px] rounded-full mb-3 hover:bg-black  hover:shadow-icon'>
                    <a href="https://twitter.com/SulaimanIrfana" target='blank' className='flex justify-between items-center w-full text-gray-300'>
                    <LuTwitter size={30} />
                    </a>
                </li>
              
            </ul>

        </div>

    </div>

  )
}

export default Navbar