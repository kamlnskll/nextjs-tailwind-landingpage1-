import React from 'react'
import data from '../public/testimonials.json'

const TestimonialCard = (props) => {
  return (
    <>
      <div className='flex' key={props.id} alt='container'>
        {data.map((data) => {
          return console.log(data)
        })}
      </div>
    </>
  )
}

// <div className='flex justify-center'>
//   <div className='rounded-lg shadow-lg bg-white max-w-sm'>
//     <a href='#!'>
//       <img
//         className='rounded-t-lg'
//         src='https://mdbootstrap.com/img/new/standard/nature/184.jpg'
//         alt=''
//       />
//     </a>
//     <div className='p-6'>
//       <h5 className='text-gray-900 text-xl font-medium mb-2'>Card title</h5>
//       <p className='text-gray-700 text-base mb-4'>
//         Some quick example text to build on the card title and make up the
//         bulk of the cards content.
//       </p>
//     </div>
//   </div>
// </div>

export default TestimonialCard
