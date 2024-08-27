import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import WeatherPage from './pages/WeatherPage';
import SupportPage from './pages/SupportPage';
import AirQualityPage from './pages/AirQualityPage';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/weather' element={<WeatherPage/>} />
        <Route path='/weather/:city' element={<WeatherPage/>} />
        <Route path='/air-quality' element={<AirQualityPage/>} />
        <Route path='/support' element={<SupportPage/>} />
      </Route>
    )
  );


  return <RouterProvider router={router} />;

}

export default App