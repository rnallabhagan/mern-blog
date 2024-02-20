import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Label, TextInput } from "flowbite-react"

const Signup = () => {
    return (
        <div className='min-h-screen mt-20'>
            <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
                {/* Left Side */}
                <div className='flex-1'>
                    <Link to="/" className='font-bold dark:text-white text-4xl'>
                        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Nalla's</span>
                        Blog
                    </Link>
                    <p className='tex-sm mt-5'>This is demo project. You can sign up with your email and password or with google</p>
                </div>
                {/* Right Side */}
                <div className='flex-1'>
                    <form className='flex flex-col gap-4'>
                        <div>
                            <Label value='Your user name' />
                            <TextInput type='text' placeholder='Username' id='username' />
                        </div>
                        <div>
                            <Label value='Your email' />
                            <TextInput type='email' placeholder='Email' id='email' />
                        </div>
                        <div>
                            <Label value='Your password' />
                            <TextInput type='password' placeholder='Password' id='password' />
                        </div>
                        <Button gradientDuoTone='purpleToPink' type='submit'>
                            Sign Up
                        </Button>
                    </form>
                    <div className='flex gap-2 text-sm mt-5'>
                        <span>Have an account?</span>
                        <Link to='/sign-in' className='text-blue-500'>Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup