import React from 'react'
import Logo from '../assets/moon-style.jpg'
const Hero = () => {
  return (
  <div
    className="hero min-h-[60vh]"
    style={{
      backgroundImage: `url(${Logo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
    <div className="hero-overlay bg-opacity-15"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        <p className="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Hero