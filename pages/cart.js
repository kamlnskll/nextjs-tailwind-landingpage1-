import React from 'react'
import Header from '../components/Header'
import CheckoutForm from '../components/CheckoutForm'

const cart = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className='flex justify-center mb-8'>
        <h1 className='pt-16 font-bold text-3xl px-64'>CART</h1>
      </div>
      <div className='flex px-64' alt='details'>
        <CheckoutForm />
      </div>
    </>
  )
}

export default cart
