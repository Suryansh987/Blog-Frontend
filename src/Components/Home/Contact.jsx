import React from 'react'
import { Link } from 'react-router-dom'


const Contact = () => {
    return (
        <>
            <div className='flex justify-between w-[80vw] m-auto'>
                <div className='font-Marmelad text-3xl text-text-color'>Blog App</div>
                <div className='flex flex-col w-[45vw] h-[80vh] gap-36 font-light text-text-color'>
                    <div className='flex flex-col gap-2'><span className='font-Marmelad text-3xl'>To Contact us</span>
                        <span className='pl-2'>1234-567890</span>
                        <span className='pl-2'>suryanshsharma987@gmail.com</span>
                        <span className='pl-2'>123 Fake St, Mountain View, CA</span></div>
                    <div className='flex flex-col gap-6'>
                        <span className='font-Marmelad text-3xl'>Stay informed, join our newsletter</span>
                        <span>Enter your email here*</span>
                        <div className='flex gap-4 items-center'>
                            <input type="text" className='bg-gray-200 px-5 w-[300px] py-3 rounded-md' />
                            <div>
                                <Link to='/' className='bg-text-color py-4 px-8 rounded-full text-yellow-100 font-Marmelad'>Submit</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact