import React, { useState, useEffect } from 'react';
import './WeatherPage.css';
import CityInput from '../components/CityInput';
import Spinner from '../components/Spinner';
import WeatherDisplay from '../components/WeatherDisplay';
import { Link, useLocation, useParams } from 'react-router-dom';

const WeatherPage = () => {
  //const { city } = useParams(); used if the url was 'http://localhost:3000/weather/New%20York'
  
  const location = useLocation(); // using the state to pass in 
  const { city } = location.state || {};
  const [inputCity, setInputCity] = useState(city || 'Richmond');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchForecast = async () => {
      const apiBase = 'http://api.weatherapi.com/v1/forecast.json';
      const key = import.meta.env.VITE_WEATHER_API_KEY;

      try {
        const apiUrl = `${apiBase}?key=${key}&q=${inputCity}&days=3`;
        const res = await fetch(apiUrl);
        const data = await res.json();
        setWeatherData(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [inputCity]);

  if (loading) {
    return <Spinner loading={loading} />
  }

  if (!weatherData) {
    return(
      <div className='App'>
        <header className='App-header'>
          <p>No data available</p>;
        </header>
      </div>
    );
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <CityInput setInputCity={setInputCity} />
        <div className="weather-info">
          {weatherData && (
            <>
              <WeatherDisplay weatherData={weatherData} />
              <Link to={{ pathname: '/air-quality', state: { city: inputCity } }} className="btn btn-primary">
                  Check Out Air Quality
              </Link>
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default WeatherPage;
