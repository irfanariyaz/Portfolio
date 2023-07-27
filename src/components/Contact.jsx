import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 pt-[150px]'>
        <form action="https://getform.io/f/5294e31d-13fd-428d-a56e-093699b28a48" method= 'post' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#889260] text-gray-300'>
                Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - irfana.27@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
            <input type="email" placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6]'/>
            <textarea name="message" rows="10" placeholder='Message' className='bg-[#ccd6f6] p-2'></textarea>
            <button className='text-white border-2 hover:bg-[#889260] rounded hover:border-[#889260] px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
        </form>
    </div>
  )
}

export default Contact