import React from 'react'

const CheckoutForm = () => {
  // ----- This handle submit function comes from Next.JS docs and is modified for this project.
  // Handles the submit event on form submit.
  const handleSubmit = async (e) => {
    // Stop the form from submitting and refreshing the page.
    e.preventDefault()

    // Get data from the form.
    const data = {
      firstName1: e.target.firstName1.value,
      lastName1: e.target.lastName1.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
      postal: e.target.postal.value,
      city: e.target.city.value,
      province: e.target.province.value,
      firstName2: e.target.firstName2.value,
      lastName2: e.target.lastName2.value,
      card: e.target.card.value,
      cvv: e.target.cvv.value,
      expiry: e.target.expiry.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/form'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Data you submitted in the form: ${result.data}`)
  }

  return (
    <div className='w-3/4 mb-24 shadow-lg mx-auto bg-white rounded-3xl'>
      <form
        action='/api/form.js'
        method='post'
        className='px-16 my-16 max-w-3xl mx-auto'
        onSubmit={handleSubmit}
      >
        <h1 className='text-center py-2 font-bold mb-4'>Billing Address</h1>
        <div className='shadow-md p-16 max-w-3xl rounded-3xl bg-slate-200'>
          <div className='flex justify-evenly'>
            <div className='flex-col'>
              <label className='flex' htmlFor='firstName1'>
                First Name
              </label>
              <input
                className='flex border'
                required
                id='firstName1'
                name='firstName1'
              />
            </div>
            <div className='flex-col'>
              <label className='flex' htmlFor='lastName1'>
                Last Name
              </label>
              <input
                className='flex border'
                required
                id='lastName1'
                name='lastName1'
              />
            </div>
          </div>
          <div className='flex justify-evenly'>
            <div className='flex-col'>
              <label className='flex' htmlFor='email'>
                Email
              </label>
              <input className='flex border' required id='email' name='email' />
            </div>
            <div className='flex-col'>
              <label className='flex' htmlFor='phone'>
                Phone Number
              </label>
              <input className='flex border' required id='phone' name='phone' />
            </div>
          </div>
          <div className='flex px-12'>
            <div className='flex-col w-full'>
              <label className='flex' htmlFor='address'>
                Address
              </label>
              <input
                className='flex border w-full'
                required
                id='address'
                name='address'
              />
            </div>
          </div>
          <div className='flex justify-evenlys'>
            <div className='flex-col'>
              <label className='flex' htmlFor='postal'>
                Postal Code
              </label>
              <input
                className='flex border'
                required
                id='postal'
                name='postal'
              />
            </div>
            <div className='flex-col'>
              <label className='flex' htmlFor='city'>
                City
              </label>
              <input className='flex border' required id='city' name='city' />
            </div>
            <div className='flex-col'>
              <label className='flex' htmlFor='province'>
                Province
              </label>
              <input
                className='flex border'
                required
                id='province'
                name='province'
              />
            </div>
          </div>
        </div>
        <h1 className='text-center py-2 font-bold mb-4 mt-8'>
          Payment Information
        </h1>
        <div className='shadow-md rounded-3xl p-16 max-w-3xl bg-slate-200'>
          <div className='flex'>
            <div className='flex-col'>
              <label className='flex' htmlFor='firstName'>
                First Name
              </label>
              <input
                className='flex border'
                required
                id='firstName2'
                name='firstName2'
              />
            </div>
            <div className='flex-col'>
              <label className='flex' htmlFor='lastName2'>
                Last Name
              </label>
              <input
                className='flex border'
                required
                id='lastName2'
                name='lastName2'
              />
            </div>
          </div>
          <div className='flex'>
            <div className='flex-col w-full'>
              <label className='flex' htmlFor='card'>
                Credit Card Number
              </label>
              <input
                className='flex border w-full'
                required
                id='card'
                name='card'
              />
            </div>
            <div className='flex-col  w-full'>
              <label className='flex' htmlFor='cvv'>
                CVV
              </label>
              <input
                className='flex border w-full'
                required
                id='cvv'
                name='cvv'
              />
            </div>
          </div>
          <div className='flex-col  w-full'>
            <label className='flex' htmlFor='expiry'>
              Expiration Date
            </label>
            <input
              className='flex border w-full'
              required
              id='expiry'
              name='expiry'
            />
          </div>
        </div>
        <div className='flex justify-center'>
          <button
            type='submit'
            className='bg-orange-500 rounded-3xl text-white font-bold w-64 py-2 mt-6 border border-gray-400 hover:translate-y-1'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
export default CheckoutForm
