import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  
    const navigate = useNavigate()
    const[showMenu,setShowMenu] = useState(false)
    const [token,setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-4 border-b border-b-gray-400'>
      

      <img onClick={()=>navigate('/')} className='w-16 cursor-pointer' src={assets.logo} alt='logo'/>

      {/* Navigation Links */}
      <ul className='hidden md:flex items-start gap-6 font-medium'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-gray-700'
          }
        >
          {({ isActive }) => (
            <li className='py-1 flex flex-col items-center'>
              Home
              {isActive && (
                <hr className='border-none outline-none h-0.5 bg-blue-500 w-3/5 mt-1' />
              )}
            </li>
          )}
        </NavLink>

        <NavLink
          to='/doctors'
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-gray-700'
          }
        >
          {({ isActive }) => (
            <li className='py-1 flex flex-col items-center'>
              All-Doctors
              {isActive && (
                <hr className='border-none outline-none h-0.5 bg-blue-500 w-3/5 mt-1' />
              )}
            </li>
          )}
        </NavLink>

        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-gray-700'
          }
        >
          {({ isActive }) => (
            <li className='py-1 flex flex-col items-center'>
              About Us
              {isActive && (
                <hr className='border-none outline-none h-0.5 bg-blue-500 w-3/5 mt-1' />
              )}
            </li>
          )}
        </NavLink>

        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-gray-700'
          }
        >
          {({ isActive }) => (
            <li className='py-1 flex flex-col items-center'>
              Contact
              {isActive && (
                <hr className='border-none outline-none h-0.5 bg-blue-500 w-3/5 mt-1' />
              )}
            </li>
          )}
        </NavLink>
      </ul>

      {/* Button */}
      <div className='flex items-center gap-4'>
         {
            token 
            ?<div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-10 rounded-full' src={assets.profile_pic} alt=''/>
                <img className ="w-2.5"src={assets.dropdown_icon} alt=''/>
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-black z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-gray-200 rounded flex flex-col gap-4 p-4 mt-4'>
                        <p onClick={()=>navigate('./my-profile')} className='hover:text-blue-500 cursor-pointer'>My Profile</p>
                        <p onClick={()=>navigate('./my-appointment')} className='hover:text-blue-500 cursor-pointer'>My Appointment</p>
                        <p onClick={()=>setToken(false)} className='hover:text-blue-500 cursor-pointer'>Logout</p>
                    </div>
                </div>
            </div>
            :<button onClick={()=>navigate('./login')} className='bg-blue-500 text-white px-8 py-3 rounded-full font-light md:block cursor-pointer'>
          Create Account
        </button>
         }

       
      </div>
    </div>
  )
}

export default Navbar
