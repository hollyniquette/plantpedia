import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdFavorite, MdHelp } from 'react-icons/md';

const Navbar = () => {
   const [nav, setNav] = useState(false);

   return (
      <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
         {/* LEFT SIDE */}
         <div className='flex items-center'>
            <div onClick={() => setNav(!nav)} className='cursor-pointer'>
               <AiOutlineMenu size={30} />
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
               plant<span className='font-bold'>pedia</span>
            </h1>
            <div className='hidden lg:flex items=center bg-gray-200 rounded-full p-1 text-[14px]'>
               <p className='bg-black text-white rounded-full p-2'>Place</p>
               <p className='p-2'>Holder</p>
            </div>
         </div>

         {/* SEARCH INPUT */}
         <div className='bg-gray-200 rounded-full flex items-center px-2 2-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={25} />
            <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='search' />
         </div>

         {/* CART BUTTON */}
         <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
            <BsFillCartFill size={20} className='mr-2' /> Cart
         </button>

         {/* MOBILE MENU */}
         {/* OVERLAY */}
         {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

         {/* SIDE DRAWER MENU */}
         <div
            className={
               nav
                  ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
                  : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
            }>
            <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer' />
            <h2 className='text-2xl p-4'>
               <span className='font-bold'>plant</span>pedia
            </h2>
            <nav>
               {/* TODO CHANGE NAV ICONS */}
               <ul className='flex flex-col p-4 text-gray-800'>
                  <li className='text-xl py-4 flex'>
                     <TbTruckDelivery size={25} className='mr-4' /> nav-1
                  </li>
                  <li className='text-xl py-4 flex'>
                     <MdFavorite size={25} className='mr-4' /> nav-2
                  </li>
                  <li className='text-xl py-4 flex'>
                     <TbTruckDelivery size={25} className='mr-4' /> nav-3
                  </li>
                  <li className='text-xl py-4 flex'>
                     <MdHelp size={25} className='mr-4' /> nav-4
                  </li>
                  <li className='text-xl py-4 flex'>
                     <TbTruckDelivery size={25} className='mr-4' /> nav-5
                  </li>
                  <li className='text-xl py-4 flex'>
                     <TbTruckDelivery size={25} className='mr-4' /> nav-6
                  </li>
                  <li className='text-xl py-4 flex'>
                     <TbTruckDelivery size={25} className='mr-4' /> nav-7
                  </li>
               </ul>
            </nav>
         </div>
      </div>
   );
};

export default Navbar;
