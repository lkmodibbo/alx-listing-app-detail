import React from 'react'

export default function Navbar() {
  return (
    <nav className='bg-blue-600 text-white p-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>ALX Listing App</h1>
        <ul className='flex space-x-4'>
            <li><a href="#" className='hover:underline'>Home</a></li>
            <li><a href="#" className='hover:underline'>Listings</a></li>
            <li><a href="#" className='hover:underline'>About</a></li>
        </ul>
    </nav>
  )
}
