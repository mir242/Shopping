import React from 'react'
import { FaAmazon, FaApple, FaGoogle, FaTwitter } from "react-icons/fa";


const HeaderTop = () => {
    return (
        <div className='border-b border-gray-200 hidden sm:block'>
            <div className=' container py-4'>
                <div className='flex justify-between items-center'>
                    <div className="hidden lg:flex gap-1">
                        <div className="header_top__icon_wrapper">
                            <FaAmazon />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <FaApple />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <FaGoogle />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <FaTwitter />
                        </div>
                    </div>

                    <div className="text-gray-500 text-[12px]">
                        <b>free shopping  </b>THIS WEEK OREDER EVER -$55
                        <span className="ml-2">|</span>
                    </div>
                    <div className='flex gap-4'>
                        <select className='text-gray-500 text-[12px]w-[70px]'
                            name="currency" id="currency">

                            <option value="USD $" >USD</option>
                            <option value="EUR €" >EUR</option>
                            <option value="IRR ریال" >ریال</option>
                        </select>

<select name="language" id="language" className='text-gray-500 text-[12px] w-[80px]  font-light  py-1 px-2 rounded-md border border-gray-300'>

    <option value="English">English</option>
    <option value="Farsi">Farsi</option>
</select>


                    </div>



                </div>
            </div>
        </div>
    )
}

export default HeaderTop;