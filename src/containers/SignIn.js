import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () =>{
    const formSubmissionHandler=(event)=>{
        event.preventDefault()
    }
    return(
        <div>
            <div className="flex justify-center mt-28">
                <form onSubmit={formSubmissionHandler} className='flex-col w-1/3 h-1/4 border-gray-300 p-14 rounded-xl transition-all'>
                    <div className='flex flex-col items-center ml-2 mb-4'>
                        <h1 className="text-2xl text-gray-500 font-light">LOGIN</h1>
                    </div>
                    <div className='flex flex-col items-start m-7 mb-4'>
                        <label className="text-md font-sans font-light">Email</label>
                        <input type='email' className="h-9 px-1 text-gray-500 w-full border-b-2 border-gray-400"/>
                    </div>
                    <div className='flex flex-col items-start m-7 mb-4'>
                        <label className="text-md font-sans font-light">Password</label>
                        <input type='password' className="h-9 px-1 text-gray-500 w-full border-b-2 border-gray-400"/>
                    </div>
                    <div>
                        <button className='px-8 py-2 mt-10 bg-white hover:bg-gray-400 hover:text-white text-gray-500 font-sans font-normal duration-700'>Submit</button>
                    </div>
                </form>
            </div>
            <div className='mt-10'>
                <Link to='/signup' className='px-14 py-2 font-normal text-gray-600 border-b-2 font-sans border-gray-400 hover:bg-gray-300 hover:text-white transition-all duration-700'>Register</Link>
            </div>
        </div>
    )
}

export default SignIn