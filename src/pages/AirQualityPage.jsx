import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner';
import CityInput from '../components/CityInput';
import './AirQualityPage.css';

const AirQualityPage = () => {
  const location = useLocation();
  const { city } = location.state || {};
  const [airData, setAirData] = useState(null);
  const [inputCity, setInputCity] = useState(city || 'Richmond');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAirData = async () => {
      const apiBase = 'https://api.api-ninjas.com/v1/airquality';
      const apiKey = 'wO8MamO34Nj26k0TmmsxEA==KtPHsh1hINh3Zld9';

      try {
        const apiUrl = `${apiBase}?city=${inputCity}`;
        const res = await fetch(apiUrl, {
          headers: {
            'X-Api-Key': apiKey
          }
        });
        const data = await res.json();
        setAirData(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAirData();
  }, [inputCity]);

  if (loading) {
    return <Spinner loading={loading} />
  }

  if (!airData) {
    return <p>No data available</p>;
  }

  return (
    <div className='Air'>
      <header className='Air-header'>
        <CityInput setInputCity={setInputCity} />
        <p className='capitalize'>{inputCity}</p>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Compound</th>
                <th>Concentration</th>
                <th>AQI</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover">
                <th>1</th>
                <td>CO</td>
                <td>{airData.CO?.concentration ?? 'N/A'}</td>
                <td>{airData.CO?.aqi ?? 'N/A'}</td>
              </tr>
              <tr className="hover">
                <th>2</th>
                <td>NO2</td>
                <td>{airData.NO2?.concentration ?? 'N/A'}</td>
                <td>{airData.NO2?.aqi ?? 'N/A'}</td>
              </tr>
              <tr className="hover">
                <th>3</th>
                <td>O3</td>
                <td>{airData.O3?.concentration ?? 'N/A'}</td>
                <td>{airData.O3?.aqi ?? 'N/A'}</td>
              </tr>
              <tr className="hover">
                <th>4</th>
                <td>SO2</td>
                <td>{airData.SO2?.concentration ?? 'N/A'}</td>
                <td>{airData.SO2?.aqi ?? 'N/A'}</td>
              </tr>
              <tr className="hover">
                <th>5</th>
                <td>PM2.5</td>
                <td>{airData['PM2.5']?.concentration ?? 'N/A'}</td>
                <td>{airData['PM2.5']?.aqi ?? 'N/A'}</td>
              </tr>
              <tr className="hover">
                <th>6</th>
                <td>PM10</td>
                <td>{airData.PM10?.concentration ?? 'N/A'}</td>
                <td>{airData.PM10?.aqi ?? 'N/A'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default AirQualityPage;
