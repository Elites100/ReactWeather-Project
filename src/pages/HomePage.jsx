import React from 'react'
import Hero from '../components/Hero'
import Card from '../components/Card'

const HomePage = () => {
  return (
    <>
      <Hero/>
     <div className='bg-gray-700'>
      <Card/>
     </div>
    </>
  )
}

export default HomePage