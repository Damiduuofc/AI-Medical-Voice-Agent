import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

const menuOptions = [
  {
    id:1,
  name: 'Home',
  path: '/home'
  },
   {
    id:2,
  name: 'History',
  path: '/history'
  },
   {
    id:3,
  name: 'Pricing',
  path: '/pricing'
  },
   {
    id:4,
  name: 'Profile',
  path: '/profile'
  }
]

function AppHeader() {
  return (
      <div className='flex justify-between items-center bg-white p-4 shadow-md'>

        <Image className='cursor-pointer'
          src={'/logo.png'}
          alt="Logo"
          width={50}
          height={30}
          />

          <div className='hidden md:flex gap-12  items-center px-10 md:px-20 lg:px-40'>
            {menuOptions.map((option,index) => (
            <div
            className = 'cursor-pointer hover:font-bold  '
            key={index}>
              <h2>{option.name}</h2>
            </div>  
            ))}
          </div>

          <UserButton/>
    </div>
  )
}

export default AppHeader
