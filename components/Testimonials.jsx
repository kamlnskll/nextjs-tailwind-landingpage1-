import React from 'react'
import data from '../public/testimonials.json'

const Testimonials = () => {
  return data.map((data) => {
    return (
      <div
        className='rounded-lg shadow-xl hover:translate-y-2 bg-slate-200 max-w-sm'
        key={data.id}
      >
        <img
          src={data.url}
          alt='Image URL'
          className='container rounded-full p-12 object-cont'
        />
        <div className='p-10 text-center'>
          <h5 className='text-gray-900 text-2xl mb-2 font-bold'>{data.name}</h5>
          <p className='text-gray-700 text-base mb-4 my-16'>{data.body}</p>
        </div>
      </div>
    )
  })
}

export default Testimonials
