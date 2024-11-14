import React from 'react';
import Image from 'next/image';

type PropsTypes = {
  img: string;
  title: string;
  mainTitle: string;
  price: string | number; // اضافه کردن type number
};

const Slide: React.FC<PropsTypes> = ({ img, title, mainTitle, price }) => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px]  lg:h-[600px] flex justify-center items-center">
      <div className="absolute left-[30px] top-[50%] -translate-y-[50%] max-w-[250px] sm:max-w-[350px] md:left-[70px] flex flex-col gap-[10px] backdrop-blur-md bg-white bg-opacity-50 p-4 rounded-lg shadow-lg">
        <h3 className="bg-emerald-500 w-auto opacity-50 text-lg font-bold text-gray-900 sm:text-white">{title}</h3>
        <h2 className="text-[26px] text-black md:text-[30px] sm:text-[24px] lg:text-[44px] font-bold leading-1.2">{mainTitle}</h2>
        <h3 className="text-[24px] text-gray-500">starting soon (<b className="text-[20px] md:text-[24px] lg:text-[30px]">{price}</b>).00</h3>
        <div className="bg-red-400 text-white text-[14px] font-bold inline-block cursor-pointer rounded-full px-4 py-2 md:text-[16px] hover:bg-black">shop now</div>
      </div>
      <Image className="w-full h-full rounded-xl object-cover object-center" src={img} alt="banner" width="2000" height="2000" />
    </div>
  );
};

export default Slide;
