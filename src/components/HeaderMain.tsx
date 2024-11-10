import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { HiUser } from "react-icons/hi2";
import { BiBell } from "react-icons/bi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const HeaderMain = () => {
    return (
        <div className='border-b border-gray-300 p-6'>
            <div className="continer sm:flex justify-between items-center ">
                <div className=' font-bold text-4xl text-center p-4 sm:pb-0 text-blackish'>
                    logo
                </div>
                <div className="w-full sm:w-[300px] md:w-[70%] relative ">
                    <input type="text" placeholder='...جتسجوی محصولات' className=' border-gray-300 border p-2 px-4 rounded-lg w-full' />
                    <BsSearch className='absolute right-4 top-3 text-gray-500 ' size={20} />

                </div>
                <div className="hidden lg:flex gap-4 text-blue-400 text-{30px}">
                    <BiBell  size={20} />


                    <div className='relative'>

                    </div>
                </div>

                <div className="relative hidden lg:flex gap-4 text-gray-500 text-{30px} ">
                    <HiUser size={20} />


                    <div className='relative'>
                        <div className="bg-red-400 rounded-full absolute top-0 right-0  w-[18px]  h-[18px]  text-[12px] text-white grid place-items-center  translate-x-1 translate-y-1  ">
                            0
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex gap-4 text-gray-500 text-{30px}">
                    <FaHandHoldingHeart size={20} />


                    <div className='relative'>
                        <div className="bg-red-400 rounded-full absolute top-0 right-0  w-[18px]  h-[18px]  text-[12px] text-white grid place-items-center  translate-x-1 translate-y-1  ">
                            0
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex gap-4 text-gray-500 text-{30px}">
                    <HiOutlineShoppingCart size={20} />


                    <div className='relative'>
                        <div className="bg-red-400 rounded-full absolute top-0 right-0  w-[18px]  h-[18px]  text-[12px] text-white grid place-items-center  translate-x-1 translate-y-1  ">
                            0
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default HeaderMain