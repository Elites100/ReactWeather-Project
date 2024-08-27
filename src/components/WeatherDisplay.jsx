import React from 'react'

const WeatherDisplay = ({weatherData}) => {
  const weatherIcon = {
    width: '56%',
    height: 'auto',
    maxWidth: '400px',
    margin: '0 auto',
    display: 'block',
  };
  return (
    <div className="flex flex-col items-center py-8">
      <div className="bg-white bg-opacity-25 shadow-lg rounded-lg p-8 flex justify-between mb-8" style={{ width: '135%'}}>
        <div className='flex-1 text-center' style={{textAlign:'center'}}>
        <img
            src={`https:${weatherData.current.condition.icon}`}
            alt={weatherData.location.name}
            className='img-fluid' 
            style={weatherIcon}
        />
        </div>
        <div className='flex-1 text-left' style={{textAlign:'center'}}>
          <p className="text-2xl font-bold mb-2 ">Today</p>
          <h1 className="text-3xl font-bold mb-4">{weatherData.location.name}</h1>
          <p className="text-xl ">Temperature: {weatherData.current.temp_f}°F</p>
          <p className="text-lg ">{weatherData.current.condition.text}</p>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        {weatherData.forecast.forecastday.slice(1).map((day, index) => {
          const date = new Date(day.date.replace(/-/g, '/'));
          return (
            <div key={index} className="bg-white bg-opacity-25 shadow-lg rounded-lg text-center w-24 p-2">
              <p className="text-base font-bold mx-auto block">{date.toLocaleDateString('en-us', { weekday: 'long' })}</p>
              <img src={day.day.condition.icon} alt="weather icon" className="mx-auto mb-1" />
              <p className="text-base" >{day.day.avgtemp_f}°F</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default WeatherDisplay