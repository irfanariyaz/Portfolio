import React from 'react'
import WorkImg from '../assets/projects/workImg.png'
import Ecomm from "../assets/projects/ecom.png"
import ebay from "../assets/projects/ebay.png"
import quiz from "../assets/projects/quiz.jpg"
import space from "../assets/projects/space.png"
import netflix from "../assets/projects/netflix.png"
import classified from "../assets/projects/classified.png"
import pantrypal from "../assets/projects/logoPantryPal.png"
import stock from "../assets/projects/stock.jpg"
import quizlet from "../assets/projects/quizlet.jpg"
import littlestop from "../assets/projects/littlestop.png"
import presentation from "../assets/projects/presentation.png"

const Projects = () => {
  return (
    <div name = 'projects' className='w-full md:h-full text-gray-300 bg-[#0a192f] '>
        <div className='max-w-[1000px] mx-auto p-4 pt-[150px] flex flex-col justify-center w-full h-full gap-10'>
            <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#889260]'>Projects</p>
                    <p className='py-6'> Check out some of my recent work</p>
            </div>
            {/* Pantry pal */}
            <div className='grid sm:grid-cols-2 gap-10  '>
             
             <img src={pantrypal} alt="" className=' w-[500px]  h-[350px] rounded-md bg-contain hover:scale-[1.1] duration-300 p-2 border-[1px] border-[#889260] ' />
           

             <div className='flex flex-col gap-3 p-3'>
             <p className='text-2xl font-bold text-[#889260]'>Pantry Pal</p>
                 <ul className='list-disc list-outside marker:text-[#889260] marker:text-xl mb-3'>
                   <li>A Grocery management tool with macros integration. </li>
                   <li>Google auth and guest login for authentication.</li>
                    <li>Meal Planning from 300+ recipes with automated Grocery list generation.</li>
                    <li>Nutritional Analysis to track daily intake of macronutrients (protein, carbs, fats). </li>
                  </ul>

                   <p >Technologies used : <span className='text-xl font-bold text-[#889260]' >Nodejs,Expressjs,React,MongoDB </span></p>
           
                   <div className='pt-4 text-left flex gap-4'>
                           <a href="https://cohort-pantrypal.onrender.com" target='_blank'>
                               <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Demo</button>
                           </a>
                           <a href="https://github.com/irfanariyaz/PantryPal "  target='_blank'>
                               <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Code</button>
                           </a>
                   </div>
           </div>
           </div>
           { /* presentation */}
            <div className='grid sm:grid-cols-2 gap-10  '>
            <div className='flex flex-col gap-3 p-3'>
            <p className='text-2xl font-bold text-[#889260]'>Presentation Generator</p>
                  <ul className='list-disc list-outside marker:text-[#889260] marker:text-xl mb-3'>
                    <li>Integrated Google Generative AI and Vertex AI for intelligent, context-aware content and image 
                    generation </li>
                    <li>Developed a robust Retrieval-Augmented Generation (RAG) pipeline using Chroma vectorstore 
                    for contextual content retrieval and synthesis </li>
                    <li>Architected a flexible, multi-modal system supporting diverse document types and adaptive 
                    instructional levels </li>
                  <li>Implemented Firebase integration for efficient image storage and retrieval </li>
                   </ul>

                    <p >Technologies used : <span className='text-xl font-bold text-[#889260]' >Python, LangChain, Google Generative AI, Vertex AI, ChromaDB, Firebase,Docker     </span></p>
            
                    <div className='pt-4 text-left flex gap-4'>
                            <a href="https://www.loom.com/share/514fc49054a94040ab67726b5c231dc2?sid=c1b77526-77f2-408d-bdf1-c44a381e9190" target='_blank'>
                                <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Demo</button>
                            </a>
                            <a href="https://github.com/marvelai-org/marvel-ai-backend" target='_blank'>
                                <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Code</button>
                            </a>
                    </div>
            </div>
                  
            <img src={presentation} alt="" className='w-[500px] h-[350px] object-contain rounded-md bg-contain hover:scale-[1.1] duration-300 p-2 border-[1px] border-[#889260] ' />
            </div>
          
            {/* littlestop */}
            <div className='grid sm:grid-cols-2 gap-10  '>
            <img src={littlestop} alt="" className='w-[500px] h-[350px] object-contain rounded-md bg-contain hover:scale-[1.1] duration-300 p-2 border-[1px] border-[#889260] ' />
        
            <div className='flex flex-col gap-3 p-3'>
             <p className='text-2xl font-bold text-[#889260]'>LittleStop</p>
                 <ul className='list-disc list-outside marker:text-[#889260] marker:text-xl mb-3'>
                   <li>Developed and deployed fully functional e commerce website. </li>
                   <li>Product catalog with e-commerce features.</li>
                    <li>Fully responsive design for optimal user experience.</li>
                  </ul>

                   <p >Technologies used : <span className='text-xl font-bold text-[#889260]' >React, Java,Spring,Postgesql,Tailwind </span></p>
           
                   <div className='pt-4 text-left flex gap-4'>
                           <a href="https://littlestop-frontend.onrender.com/" target='_blank'>
                               <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Demo</button>
                           </a>
                           <a href="https://github.com/irfanariyaz/littlestop_backend"  target='_blank'>
                               <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Code</button>
                           </a>
                   </div>
           </div>
           </div>
            {/* Stockanalysz */}
            <div className='grid sm:grid-cols-2 gap-10  '>
            <div className='flex flex-col gap-3 p-3'>
            <p className='text-2xl font-bold text-[#889260]'>Stockanalyz</p>
                  <ul className='list-disc list-outside marker:text-[#889260] marker:text-xl mb-3'>
                    <li>A Trade Analysis tool helps to d make informed decisions about stocks and other financial instruments
. </li>
                    <li>Portfolio management  to track and manage their investment portfolios.</li>
                    <li>Charting capabilities to visualize stock price movements and patterns over time. </li>
                  <li> Integrated MySQL to store the structured data and JPA to interact with the database.  </li>
                   </ul>

                    <p >Technologies used : <span className='text-xl font-bold text-[#889260]' >Java,Spring,ReactJS,MySQL </span></p>
            
                    <div className='pt-4 text-left flex gap-4'>
                            <a href="https://github.com/irfanariyaz/quizlet" target='_blank'>
                                <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Demo</button>
                            </a>
                            <a href="https://github.com/irfanariyaz/quizlet" target='_blank'>
                                <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Code</button>
                            </a>
                    </div>
            </div>
                  
            <img src={stock} alt="" className='  w-[500px] h-[350px] object-center rounded-md bg-contain hover:scale-[1.1] duration-300 p-2 border-[1px] border-[#889260] ' />
            </div>
        
            {/* Classified */}
            <div className='grid sm:grid-cols-2 gap-10  '>
             
             <img src={classified} alt="" className=' w-[500px] h-[350px] object-contain rounded-md bg-contain hover:scale-[1.1] duration-300 p-2 border-[1px] border-[#889260] ' />
  
           

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

                    <p >Technologies used : <span className='text-xl font-bold text-[#889260]' >Django, DjangoREST, ReactJS, PostgreSQL </span></p>
            
                    <div className='pt-4 text-left flex gap-4'>
                            <a href="https://quizlet-flf1.onrender.com" target='_blank'>
                                <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Demo</button>
                            </a>
                            <a href="https://github.com/irfanariyaz/quizlet" target='_blank'>
                                <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Code</button>
                            </a>
                    </div>
            </div>
                  
            <img src={quizlet} alt="" className='w-[500px] h-[350px] object-contain rounded-md bg-contain hover:scale-[1.1] duration-300 p-2 border-[1px] border-[#889260] ' />
            </div>
            {/* local  library */}
            <div className='grid sm:grid-cols-2 gap-10  '>
            <img src={WorkImg} alt="" className='w-[500px] h-[350px] object-contain rounded-md bg-cover hover:scale-[1.1] duration-300 p-2 border-[1px] border-[#889260] ' />
                
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
                            <a href="https://ecommerce-blm7.onrender.com" target='_blank'>
                                <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Demo</button>
                            </a>
                            <a href="https://github.com/irfanariyaz/ecomm" target='_blank'>
                                <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Code</button>
                            </a>
                    </div>
            </div>
            <img src={Ecomm} alt="" className=' w-[500px] h-[350px] object-contain rounded-md bg-cover hover:scale-[1.1] duration-300 p-2 border-[1px] border-[#889260] ' />
            </div>
                    {/* Ebay clone */}
            <div className='grid sm:grid-cols-2 gap-10  '>
              <img src={ebay} alt="" className='w-[500px] h-[350px] object-cover rounded-md bg-cover hover:scale-[1.1] duration-300 p-2 border-[1px] border-[#889260] ' />

              <div className='flex flex-col gap-3 p-3'>
                <p className='text-2xl font-bold text-[#889260]'>Ebay Clone</p>
                  <ul className='list-disc list-outside marker:text-[#889260] marker:text-xl mb-3'>
                    <li>A Full stack web 3.0 App with a marketplace UI/UX experience</li>
                    <li>Authentication via the crypto wallets-MetaMask  </li>
                    <li>Buy/sell their digital goods via the blockchain Powered by Thirdweb</li>
                  
                   </ul>

                    <p >Technologies used : <span className='text-xl font-bold text-[#889260]' >NextJs, Metamask, ThirdWeb, TailwindCSS</span></p>
            
                    <div className='pt-4 text-left flex gap-4'>
                            <a href="https://ebay-clone-build.vercel.app/" target='_blank'>
                                <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Demo</button>
                            </a>
                            <a href="https://github.com/irfanariyaz/ebay-clone" target='_blank'>
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
                            <a href="https://netflix-sqgb.onrender.com" target='_blank'>
                                <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Demo</button>
                            </a>
                            <a href="https://github.com/irfanariyaz/netflix-clone" target='_blank'>
                                <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Code</button>
                            </a>
                    </div>
            </div>
            <img src={netflix} alt="" className=' w-[500px] h-[350px] object-contain  rounded-md bg-cover hover:scale-[1.1] duration-300 p-2 border-[1px] border-[#889260] ' />

            </div>
            {/* Space Website */}
            <div className='grid sm:grid-cols-2 gap-10  '>
                
                 <img src={space} alt="" className=' w-[500px] h-[350px] object-contain  rounded-md bg-cover hover:scale-[1.1] duration-300 p-2 border-[1px] border-[#889260] ' />
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
            {/* Quiz App */}
            <div className='grid sm:grid-cols-2 gap-10  '>
         
         <div className='flex flex-col gap-3 p-3'>
           <p className='text-2xl font-bold text-[#889260]'>Quiz App</p>
             <ul className='list-disc list-outside marker:text-[#889260] marker:text-xl mb-3'>
               <li>Basic quiz App with automated score generation.</li>
               <li> Questions are displayed dynamically by fetching data from Quiz API</li>
              
             
              </ul>

               <p >Technologies used : <span className='text-xl font-bold text-[#889260]' >ReactJs,CSS</span></p>
       
               <div className='pt-4 text-left flex gap-4'>
                       <a href="https://quizzical-opal.vercel.app" target='_blank'>
                           <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Demo</button>
                       </a>
                       <a href="https://github.com/irfanariyaz/quizzical?tab=readme-ov-file" target='_blank'>
                           <button className='text-white group  px-6 py-3 border-2 rounded  hover:bg-[#889260]  hover: border-[#889260] '>Code</button>
                       </a>
               </div>
       </div>
       <img src={quiz} alt="" className=' w-[500px] h-[350px] object-contain  rounded-md bg-cover hover:scale-[1.1] duration-300 p-2 border-[1px] border-[#889260] ' />

       </div>
   

              
        </div>
    </div>
  )
}

export default Projects