import React from 'react'
import Image from 'next/image';
import { HiMiniStar } from "react-icons/hi2";
import { HiOutlineStar } from "react-icons/hi2";
import { useRouter } from 'next/router'




interface PropsTypes {
    img: string;
    title: string;
    price: string;
    desc: string;
    rating: number ;

}

const ProductCard: React.FC<PropsTypes> = ({ img, title, price, desc, rating }) => {
  

    const genereateRating = (rating: number) => {
        switch (rating) {



            case 1:
                return (
                    <div className='flex gap-1 text-[20px] text-yellow-400'>
                        <HiMiniStar />
                        <HiOutlineStar />
                        <HiOutlineStar />
                        <HiOutlineStar />
                        <HiOutlineStar />



                    </div>
                );
            case 2:
                return (
                    <div className='flex gap-1 text-[20px] text-yellow-400'>
                        <HiMiniStar />
                        <HiMiniStar />
                        <HiOutlineStar />
                        <HiOutlineStar />
                        <HiOutlineStar />



                    </div>
                );
            case 3:
                return (
                    <div className='flex gap-1 text-[20px] text-yellow-400'>
                        <HiMiniStar />
                        <HiMiniStar />
                        <HiMiniStar />
                        <HiOutlineStar />
                        <HiOutlineStar />



                    </div>
                );
            case 4:
                return (
                    <div className='flex gap-1 text-[20px] text-yellow-400'>
                        <HiMiniStar />
                        <HiMiniStar />
                        <HiMiniStar />
                        <HiMiniStar />
                        <HiOutlineStar />



                    </div>
                );
            case 5:
                return (
                    <div className='flex gap-1 text-[20px] text-yellow-400 hover:border-yellow-400'>
                        <HiMiniStar />
                        <HiMiniStar />
                        <HiMiniStar />
                        <HiMiniStar />
                        <HiMiniStar />



                    </div>
                );
            case 1:




                break;





                return null;


        }
    }

    
    return (
        <div className='px-4 border-gray-200 rounded-xl max-w-[150px]' >
            <div>
                <Image src={img} alt={title} width={1000} height={300} className=' h-[128px] object-cover rounded-xl' />




            </div>
            <div className=' space-y-2 py-4' >
                <div className="text-red-400 font-medium uppercase ">{title}</div>
                <p className='text-gray-500 text-sm max-w-[150px]'>{desc}</p>
                <div>{genereateRating(rating )}</div>

                <div className='font-bold flex gap-4'> ${price}
                    <del className='text-gray-400 text-xs line-through '>
                        ${parseInt(price) + 50}.00</del>
                </div>


            </div>
        </div>


    
    
    );
};

export default ProductCard
