import React, {useRef, useState} from 'react'

const SignUp = () =>{
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const addressRef = useRef(null)
    const [password, setPassword] = useState('')
    const [isPasswordSame, setPasswordSame] = useState(null)
    const [isFocus, setIsFocus] = useState(false)

    const formSubmissionHandler=(event)=>{
        event.preventDefault()
    }
    const passwordChangeHandler=(event)=>{
        setPassword(event.target.value)
    }
    const reEnterPasswordHandler=(event)=>{
        if(event.target.value === password){
            setPasswordSame(true)
        }
        else{
            setPasswordSame(false)
        }
    }
    return(
        <div className="flex justify-center mt-9">
                <form onSubmit={formSubmissionHandler} className='flex-col w-1/2 max-h-full border-gray-300 p-2 rounded-xl transition-all'>
                    <div className='flex flex-col items-center ml-2 mb-4'>
                        <h1 className="text-2xl text-gray-500 font-light">REGISTER</h1>
                    </div>
                    <div className='flex flex-col items-start m-7 mb-4'>
                        <label className="text-md font-sans font-light">Name</label>
                        <input type='text' className="h-9 px-1 text-gray-500 w-full border-b-2 border-gray-400" ref={nameRef}/>
                    </div>
                    <div className='flex flex-col items-start m-7 mb-4'>
                        <label className="text-md font-sans font-light">Email</label>
                        <input type='email' className="h-9 px-1 text-gray-500 w-full border-b-2 border-gray-400" ref={emailRef}/>
                    </div>
                    <div className='flex flex-col items-start m-7 mb-4'>
                        <label className="text-md font-sans font-light">Password</label>
                        <input type='password' className="h-9 px-1 text-gray-500 w-full border-b-2 border-gray-400" onChange={(event)=>passwordChangeHandler(event)}/>
                    </div>
                    <div className='flex flex-col items-start m-7 mb-4'>
                        <label className="text-md font-sans font-light">Re-enter Password</label>
                        <input type='password' className={"h-9 px-1 text-gray-500 w-full border-b-2 border-gray-400 ".concat(isFocus?isPasswordSame?'bg-green-100':'bg-red-100':null)} onFocus={()=>setIsFocus(true)} onChange={(event)=>reEnterPasswordHandler(event)}/>
                    </div>
                    <div className='flex flex-col items-start m-7 mb-4'>
                        <label className="text-md font-sans font-light">Address</label>
                        <textarea type='text' className="px-1 text-gray-500 w-full border-b-2 border-gray-400" rows={4} ref={addressRef}/>
                    </div>
                    <div>
                        <button className='px-8 py-2 mt-10 bg-white hover:bg-gray-400 hover:text-white text-gray-500 font-sans font-normal duration-700'>Register</button>
                    </div>
                </form>
            </div>
    )
}

export default SignUp