import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div
      className='bg-gray-300 flex justify-between p-8  mx-auto'
      alt='header container'
    >
      <div className='flex font-bold text-xl' alt='Image container'>
        <a href='/'>Rock</a>
      </div>

      <div className='flex space-x-4' alt='Buttons'>
        <Link href='/about'>
          <button className='bg-transparent hover:bg-blue-500 text-blue-00 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full'>
            About
          </button>
        </Link>

        <Link href='/cart'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded-full'>
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Header
