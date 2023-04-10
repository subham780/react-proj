import React from 'react'
import {cart, logo} from "../assets"

const Header = () => {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont">
        <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
            <div>
                <img className="w-28" src={logo} alt='logo' />
            </div>
            <div className='flex items-center gap-8'>
            <ul className='flex items-center gap-8'>
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline 
                underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline 
                underline-offset-2 decoration-[1px] cursor-pointer duration-300'>pages</li>
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline 
                underline-offset-2 decoration-[1px] cursor-pointer duration-300'>shop</li>
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline 
                underline-offset-2 decoration-[1px] cursor-pointer duration-300'>element</li>
            </ul>
            <div className='relative'>
              <img className='w-12' src={cart} alt="cart" />
              <span className='absolute w-5 top-0 right-0 text-sm flex items-center
              justify-center font-semibold font-titleFont'>0</span>
            </div>
        </div>

        </div>
        
    </div>
  )
}

export default Header;