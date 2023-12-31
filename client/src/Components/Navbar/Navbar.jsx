import React from 'react'
import redwolftitlegif from '../../Assets/Png/rw-logo-gif-transparent-red.gif'
import { RiArrowDropDownLine } from "react-icons/ri";
import search from '../../Assets/Png/searchicon.png'
import icon from '../../Assets/Png/icon.png'
import Location from '../../Assets/Png/Location.png'
import User from '../../Assets/Png/User.png'
import Cart from '../../Assets/Png/Cart.png'
const Navbar = () => {
  return (
    <div>
      <nav className='flex'>
        <p className=' xl:pt-2 xl:pl-4 xl:h-12 xl:text-2xl xl:w-40 lg:h-12 lg:w-40 lg:pt-2 lg:pl-4 lg:text-2xl bg-Red text-white font-extrabold text-2xl'>REDWOLF</p>
        <img className=' opacity-0 transition-opacity duration-300 transform hover:opacity-100  h-12 w-40 ml-[-10rem] ' src={redwolftitlegif} alt="" />
        <ul className='xl:items-center xl:ml-8 xl:gap-4 xl:text-sm lg:text-sm lg:gap-5 flex items-center font-extrabold mt-2 ml-6 '>
          <li className='flex hover:text-Red'>SHOP<RiArrowDropDownLine className='lg:h-7 lg:w-7' /> </li>
          <li className='flex hover:text-Red'>MEN<RiArrowDropDownLine className='lg:h-7 lg:w-7' /></li>
          <li className='flex hover:text-Red'>WOMEN<RiArrowDropDownLine className='lg:h-7 lg:w-7' /></li>
          <li className='flex hover:text-Red'>ACCESSORIES<RiArrowDropDownLine className='lg:h-7 lg:w-7' /></li>
          <li className='flex hover:text-Red'>CHARACTERS<RiArrowDropDownLine className=' lg:h-7 lg:w-7' /></li>
          <li className='flex hover:text-Red'>ARTISTMERCH<RiArrowDropDownLine className='xl:h-7 xl:w-7 lg:h-7 lg:w-7 ' /></li>
        </ul>
        <div className='xl:mb-2 relative items-center flex'>
          <img className='xl:mt-2 lg:mt-2 w-4 h-4 absolute ml-6' src={search} alt="" />
          <input className='xl:w-52 lg:w-52 border border-bordergray placeholder-gray-500 bg-backgroundgray cursor-pointer rounded-md text-sm h-8 w-52 pl-6 ml-5 mt-2' type="search" placeholder='Search for Products,Shows Or Characters' />
        </div>
        <div className='xl:grid-cols-5 divide-x xl:mb-2 xl:items-center xl:gap-10 xl:ml-9 lg:gap-4 lg:ml-3 lg:mt-3 flex'>
          <img className='h-7 w-7' src={icon} alt="" />
          <img className='h-7 w-7' src={Location} alt="" />
          <img className='h-7 w-7' src={User} alt="" />
          <img className='h-7 w-7' src={Cart} alt="" />
        </div>
      </nav>
      <hr />
    </div>
  )
}

export default Navbar