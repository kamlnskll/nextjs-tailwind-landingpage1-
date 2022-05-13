import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div alt='main-div' className='flex justify-center mx-auto mx-16 py-16'>
      <div alt='text-div' className='flex flex-col py-16 max-w-xl'>
        <h1 className='font-bold flex text-6xl mb-16 max-w-md justify-center'>
          Rock. Solid.
        </h1>
        <h2 className='text-xl max-w-md text-justify'>
          A tale as old as time. Rock beats scissors, or really anything you
          throw at it.{' '}
          <span className='flex mt-16 mb-8 font-semibold justify-center'>
            {' '}
            Ready to rock your world?{' '}
          </span>
        </h2>
        <div
          alt='btn-div'
          className='mt-16 flex flex-col space-y-6 max-w-sm align-center w-64 mx-auto'
        >
          <Link href='/cart'>
            <button className='bg-orange-500 font-mono hover:bg-orange-600 text-white font-bold py-4 px-4 rounded '>
              Buy Now
            </button>
          </Link>
          <Link href='#learn-more'>
            <button className='bg-transparent hover:font-bold text-blue-00 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-1 rounded font-mono'>
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <div alt='img-div' className='flex max-w-2xl my-16 py-16'>
        <img src='/rock.jpg' />
      </div>
    </div>
  )
}

export default Hero
