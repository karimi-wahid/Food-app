import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiFillTag } from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'
const Navbar = () => {
    const [nav, setNav] = useState(false)
  return (
    
    <div className='w-max-[1640px] mx-auto p-4 h-full flex justify-between items-center'>
        <div className='flex justify-between items-center'>
            <div onClick={() => setNav(!nav)} className='cursor-pointer'>
            <AiOutlineMenu size={30} />
            </div>

            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Best <span className='font-bold'>Eats</span>
            </h1>

            <div className='hidden lg:flex items-center rounded-full bg-gray-200 p-1 text-[14px] hover:cursor-pointer'>
                <p className='p-2 bg-black text-white rounded-full'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>

        <div className='w-[200px] flex items-center bg-gray-200 px-2 rounded-full sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={25} />
            <input type='text' className='bg-transparent p-2 w-full focus:outline-none' placeholder='Search Your Food' />
        </div>
        <button className='bg-black/80 text-white rounded-full hidden md:flex items-center py-2'>
            <BsFillCartFill size={20} className='mr-2' /> Cart
        </button>

        {/* Mobile Menu */}
        {nav ? <div className='w-full h-screen bg-black/80 z-10 fixed top-0 left-0'></div> : ""}
        
        {/* sidebar menu */}
        <div className={nav ? 'w-[300px] h-screen fixed top-0 left-0 bg-white z-10 duration-300' : 'w-[300px] h-screen fixed top-0 left-[-100%] bg-white z-10 duration-300'}>
            <AiOutlineClose size={30}
             onClick={() => setNav(!nav)} 
             className='absolute right-4 top-4 cursor-pointer' />

            <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl py-4 flex hover:cursor-pointer'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                    <li className='text-xl py-4 flex hover:cursor-pointer'><MdFavorite size={25} className='mr-4' /> Favorite</li>
                    <li className='text-xl py-4 flex hover:cursor-pointer'><FaWallet size={25} className='mr-4' /> Wallet</li>
                    <li className='text-xl py-4 flex hover:cursor-pointer'><MdHelp size={25} className='mr-4' /> Help</li>
                    <li className='text-xl py-4 flex hover:cursor-pointer'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                    <li className='text-xl py-4 flex hover:cursor-pointer'><BsFillSaveFill size={25} className='mr-4' /> Best One</li>
                    <li className='text-xl py-4 flex hover:cursor-pointer'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
                </ul>
            </nav>
        </div>
        
    </div>
  )
}

export default Navbar