import React from 'react'

const Uses = () => {
  return (
    <div alt='main-div' className='bg-slate-400 flex justify-center flex-col'>
      <h1
        className='flex mx-auto text-5xl font-bold py-16 mt-16 text-black'
        id='learn-more'
      >
        Rock Is Known For
      </h1>
      <div
        alt='list-div'
        className='flex mx-auto text-xl font-semibold space-x-12 mb-12'
      >
        <div className='flex'>
          <ul className='list-disc flex flex-col space-y-8'>
            <li className='flex'>
              {' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-5 w-5 mx-4'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fill-rule='evenodd'
                  d='M2.2 5A12 12 0 0 0 10 2a12 12 0 0 0 7.8 3A12 12 0 0 1 10 18.3 12 12 0 0 1 2.2 5zm11.5 3.7a1 1 0 0 0-1.4-1.4L9 10.6 7.7 9.3a1 1 0 0 0-1.4 1.4l2 2a1 1 0 0 0 1.4 0l4-4z'
                  clip-rule='evenodd'
                />
              </svg>{' '}
              Rock solid reliability
            </li>
            <li className='flex'>
              {' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                />
              </svg>
              Beautifully rugged exterior
            </li>
            <li className='flex'>
              {' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              Multi-million year history
            </li>
          </ul>
        </div>
        <div className='flex mb-12'>
          <ul className='list-disc flex flex-col space-y-8'>
            <li className='flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>{' '}
              All weather resilience
            </li>
            <li className='flex'>
              {' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                />
              </svg>
              Decadent flavour profile
            </li>
            <li className='flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5'
                />
              </svg>{' '}
              Innovative crystalline structure
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Uses
