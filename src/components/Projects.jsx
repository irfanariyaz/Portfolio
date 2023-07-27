import React from 'react'
import WorkImg from '../assets/projects/workImg.png'
import Ecomm from "../assets/projects/ecom.png"
import ebay from "../assets/projects/ebay.png"
import quizlet from "../assets/projects/quizlet.png"
import space from "../assets/projects/space.png"
import netflix from "../assets/projects/netflix.png"
import classified from "../assets/projects/classified.png"

const Projects = () => {
  return (
    <div name = 'projects' className='w-full md:h-full text-gray-300 bg-[#0a192f] '>
        <div className='max-w-[1000px] mx-auto p-4 pt-[150px] flex flex-col justify-center w-full h-full gap-10'>
            <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#889260]'>Projects</p>
                    <p className='py-6'> Check out some of my recent work</p>
            </div>
            {/* Classified */}
            <div className='grid sm:grid-cols-2 gap-10  '>
             
             <img src={classified} alt="" className=' w-full  h-full rounded-md bg-contain hover:scale-[1.1] duration-300 p-2 border-[1px] border-[#889260] ' />
           

             <div className='flex flex-col gap-3 p-3'>
             <p className='text-2xl font-bold text-[#889260]'>Classified</p>
                 <ul className='list-disc list-outside marker:text-[#889260] marker:text-xl mb-3'>
                   <li>Developed and deployed fully functional Django app. </li>
                   <li>Login and register functionality.</li>
                    <li>User can create,update and delete the classifieds.</li>
                  </ul>

                   <p >Technologies used : <span className='text-xl font-bold text-[#889260]' >Django, PostgreSQL </span></p>
           
                   <div className='pt-4 text-left flex gap-4'>
                           <a href="https://django-project-liard.vercel.app/" target='_blank'>
                               <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Demo</button>
                           </a>
                           <a href="https://github.com/irfanariyaz/Django_project"  target='_blank'>
                               <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Code</button>
                           </a>
                   </div>
           </div>
           </div>
           { /* Quizlet */}
            <div className='grid sm:grid-cols-2 gap-10  '>
            <div className='flex flex-col gap-3 p-3'>
            <p className='text-2xl font-bold text-[#889260]'>Quizlet</p>
                  <ul className='list-disc list-outside marker:text-[#889260] marker:text-xl mb-3'>
                    <li>Interactive and user-friendly quiz interfaces. </li>
                    <li>Data retrieval from backend API using DjangoREST framework.</li>
                    <li>Seperate UI for users to POST questions.</li>
                  <li>Users can submit quiz, view scores and view correct answers. </li>
                   </ul>

                    <p >Technologies used : <span className='text-xl font-bold text-[#889260]' >Django, DjangoREST, ReactJS, SQLite </span></p>
            
                    <div className='pt-4 text-left flex gap-4'>
                            <a href="https://github.com/irfanariyaz/quizlet" target='_blank'>
                                <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Demo</button>
                            </a>
                            <a href="https://github.com/irfanariyaz/quizlet" target='_blank'>
                                <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Code</button>
                            </a>
                    </div>
            </div>
                  
            <img src={quizlet} alt="" className=' w-full  h-full rounded-md bg-contain hover:scale-[1.1] duration-300 p-2 border-[1px] border-[#889260] ' />
            </div>
            {/* local  library */}
            <div className='grid sm:grid-cols-2 gap-10  '>
            <img src={WorkImg} alt="" className=' w-full  rounded-md bg-cover hover:scale-[1.1] duration-300 p-2 border-[1px] border-[#889260] ' />
                
            <div className='flex flex-col gap-3 p-3'>
                <p className='text-2xl font-bold text-[#889260]'>Library Catalog Management System</p>
                  <ul className='list-disc list-outside marker:text-[#889260] marker:text-xl mb-3'>
                    <li>User Login functionality</li>
                    <li>Library Catalog to view book details</li>
                    <li>Librarian Privileges</li>
                    <li>Book Renewal option</li>
                   </ul>

                    <p >Technologies used : <span className='text-xl font-bold text-[#889260]' >Django, Bootstrap, SQL </span></p>
            
                    <div className='pt-4 text-left flex gap-4'>
                            <a href="https://github.com/irfanariyaz/locallibrary.git" target='_blank'>
                                <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Demo</button>
                            </a>
                            <a href="https://github.com/irfanariyaz/locallibrary.git" target='_blank'>
                                <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Code</button>
                            </a>
                    </div>
            </div>

            </div>
                {/* Ecommerce App */}
            <div className='grid sm:grid-cols-2 gap-10  '>
              <div className='flex flex-col gap-3 p-3'>
                <p className='text-2xl font-bold text-[#889260]'>Ecommerce App</p>
                  <ul className='list-disc list-outside marker:text-[#889260] marker:text-xl mb-3'>
                    <li>User and guest checkout capabilities</li>
                    <li>Shopping Cart </li>
                    <li>OrderManagement</li>
                    <li>Payment Integration using Paypal</li>
                   </ul>

                    <p >Technologies used : <span className='text-xl font-bold text-[#889260]' >Django, Bootstrap</span></p>
            
                    <div className='pt-4 text-left flex gap-4'>
                            <a href="https://github.com/irfanariyaz/ecomm" target='_blank'>
                                <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Demo</button>
                            </a>
                            <a href="https://github.com/irfanariyaz/ecomm" target='_blank'>
                                <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Code</button>
                            </a>
                    </div>
            </div>
            <img src={Ecomm} alt="" className=' w-full  rounded-md bg-cover hover:scale-[1.1] duration-300 p-2 border-[1px] border-[#889260] ' />
            </div>
                    {/* Ebay clone */}
            <div className='grid sm:grid-cols-2 gap-10  '>
              <img src={ebay} alt="" className=' w-full  rounded-md bg-cover hover:scale-[1.1] duration-300 p-2 border-[1px] border-[#889260] ' />

              <div className='flex flex-col gap-3 p-3'>
                <p className='text-2xl font-bold text-[#889260]'>Ebay Clone</p>
                  <ul className='list-disc list-outside marker:text-[#889260] marker:text-xl mb-3'>
                    <li>A Full stack web 3.0 App with a marketplace UI/UX experience</li>
                    <li>Authentication via the crypto wallets-MetaMask  </li>
                    <li>Buy/sell their digital goods via the blockchain Powered by Thirdweb</li>
                  
                   </ul>

                    <p >Technologies used : <span className='text-xl font-bold text-[#889260]' >NextJs, Metamask, ThirdWeb, TailwindCSS</span></p>
            
                    <div className='pt-4 text-left flex gap-4'>
                            <a href="https://ebay-clone-build.vercel.app/
" target='_blank'>
                                <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Demo</button>
                            </a>
                            <a href="https://github.com/irfanariyaz/ebay-clone
" target='_blank'>
                                <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Code</button>
                            </a>
                    </div>
            </div>
            </div>
             {/* Netflix Clone */}
             <div className='grid sm:grid-cols-2 gap-10  '>
         
              <div className='flex flex-col gap-3 p-3'>
                <p className='text-2xl font-bold text-[#889260]'>Netflix Clone</p>
                  <ul className='list-disc list-outside marker:text-[#889260] marker:text-xl mb-3'>
                    <li>User register and login functionality</li>
                    <li> Data are displayed dynamically by fetching data from TMDB API</li>
                    <li>User Subscription is added using Stripe Integration</li>
                  
                   </ul>

                    <p >Technologies used : <span className='text-xl font-bold text-[#889260]' >ReactJs,  TailwindCSS</span></p>
            
                    <div className='pt-4 text-left flex gap-4'>
                            <a href="https://github.com/irfanariyaz/netflix-clone" target='_blank'>
                                <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Demo</button>
                            </a>
                            <a href="https://github.com/irfanariyaz/netflix-clone" target='_blank'>
                                <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Code</button>
                            </a>
                    </div>
            </div>
            <img src={netflix} alt="" className=' w-full  rounded-md bg-cover hover:scale-[1.1] duration-300 p-2 border-[1px] border-[#889260] ' />

            </div>
            {/* Space Website */}
            <div className='grid sm:grid-cols-2 gap-10  '>
                
                 <img src={space} alt="" className=' w-full  rounded-md bg-cover hover:scale-[1.1] duration-300 p-2 border-[1px] border-[#889260] ' />
                 <div className='flex flex-col gap-3 p-3'>
                <p className='text-2xl font-bold text-[#889260]'>Space Website</p>
                  <ul className='list-disc list-outside marker:text-[#889260] marker:text-xl mb-3'>
                    <li>Fully responsive multipage space -travel website</li>
                    <li>Used 3 media query breakpoints for mobile
desktop and tablet.  </li>
                 
                  
                   </ul>

                    <p >Technologies used : <span className='text-xl font-bold text-[#889260]' >HTML, CSS, JavaScript, Figma</span></p>
            
                    <div className='pt-4 text-left flex gap-4'>
                            <a href="https://github.com/irfanariyaz/space_website" target='_blank'>
                                <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Demo</button>
                            </a>
                            <a href="https://github.com/irfanariyaz/space_website" target='_blank'>
                                <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Code</button>
                            </a>
                    </div>
                 </div>
           </div>
   

              
        </div>
    </div>
  )
}

export default Projects