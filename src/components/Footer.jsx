import React from 'react'

import {BsGithub}  from "react-icons/bs"
import {LuTwitter} from 'react-icons/lu'
import {AiFillLinkedin}  from "react-icons/ai"
export default function Footer() {
  return (
    <div name = 'skills' className='w-full p-10  bg-[#889260] text-[#0a192f] flex  gap-4 justify-center items-center'>
      <a href="#" className='text-2xl font-bold'>IRFANA</a>


     
      <div className=" flex text-3xl gap-4">
          <a href="https://github.com/irfanariyaz"><BsGithub /></a>
          <a href="https://twitter.com/SulaimanIrfana"><LuTwitter /></a>
          <a href="https://linkedin.com/in/irfana-sulaiman-44a242240"><AiFillLinkedin /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy;Irfana Sulaiman, All rights reserved</small>
      </div>
    </div>
  )
}
