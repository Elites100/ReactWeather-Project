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
        <h1 className="mb-5 text-5xl font-bold">Welcome to WeatherWave</h1>
        <p className="mb-5">
        Get accurate weather forecasts and real-time air quality updates with WeatherWave. Plan your day with confidence using our detailed temperature, precipitation, and wind predictions. Stay informed about the air you breathe with comprehensive reports on pollutants like CO2 and other elements. WeatherWave combines precise weather data and air quality insights in one easy-to-use platform.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Hero