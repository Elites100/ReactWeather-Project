import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import { Link } from 'react-router-dom'

const Card = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiBase = 'http://api.weatherapi.com/v1/current.json';
      const key = import.meta.env.VITE_WEATHER_API_KEY;
      const locations = ['Richmond', 'New York', 'Las Vegas', 'Tokyo', 'Ho Chi Minh City', 'Paris'];

      try {
        const weatherPromises = locations.map(location => 
          fetch(`${apiBase}?key=${key}&q=${location}`).then(res => res.json())
        );

        const data = await Promise.all(weatherPromises);
        setWeatherData(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <Spinner loading={loading}/>
  }

  return (
    <div className="flex justify-around flex-wrap gap-5 py-5">
      {weatherData.map((weather, index) => (
        <div key={index} className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src={`https:${weather.current.condition.icon}`}
              alt={weather.location.name}
              width={100}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{weather.location.name}</h2>
            <p>Temperature: {weather.current.temp_f}°F</p>
            <p>Condition: {weather.current.condition.text}</p>
            <p>Local Time: {weather.location.localtime}</p>
            <div className="card-actions">
              <Link to="/weather" state={{ city: weather.location.name }} className="btn btn-primary">
                More Info
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
