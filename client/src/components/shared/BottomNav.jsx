import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { IoReorderFour } from "react-icons/io5";
import { MdTableBar } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { BiSolidDish } from "react-icons/bi";

const BottomNav = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around'>
        <button className='flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]'> <IoHomeOutline className='inline mr-2' size={20}/><p>Home</p></button>
        <button className='flex items-center justify-center text-[#f5f5f5] w-[200px]'> <IoReorderFour className='inline mr-2' size={20}/><p>Orders</p></button>
        <button className='flex items-center justify-center text-[#f5f5f5] w-[200px]'> <MdTableBar className='inline mr-2' size={20}/><p>Tables</p></button>
        <button className='flex items-center justify-center text-[#f5f5f5] w-[200px]'> <IoMdMore className='inline mr-2' size={20}/><p>MOre</p></button>
        <button className='absolute bottom-6 bg-[#F6B100] text-[#f5f5f5] rounded-full p-3 items-center'><BiSolidDish size={30}/></button>
    </div>
  )
}

export default BottomNav