import React from "react"
import { CiHeart } from "react-icons/ci";
import { SlArrowRight } from "react-icons/sl";


interface CardProps {
    id: number,
    title: string,
    price: number,
}

const BigProductCard: React.FC<CardProps> = ({id, title, price}) => {
  return (
    <div className='size-[685px] bg-[#989899] rounded-3xl p-5 flex flex-col justify-between' key={id}>
        <div className="w-full flex justify-end">
            <CiHeart size={24}/>
        </div>
        <div className="w-full h-[53px] flex justify-between items-center bg-white rounded-[15px] py-1 px-3">
            <div className="flex flex-col">
                <span className="font-inter font-medium leading-5 text-[18px] text-black">{title}</span>
                <p className="font-inter font-light leading-5 text-[16px] flex justify-between">Price:<span>{price}$</span></p>
            </div>
            <div className="size-6 bg-[#989899] flex items-center justify-center rounded-full">
                <SlArrowRight size={12}/>
            </div>
        </div>
    </div>
  )
}

export default BigProductCard;