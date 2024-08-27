import React from 'react';

const CityInput = ({ setInputCity }) => {

  const onKeyDownHandler = async (e) => {
    const eventKey = e.which || e.keyCode;
    const city = e.target.value.trim();

    if (eventKey === 13) { // Enter key pressed
      if (/^[a-zA-ZäöüÄÖÜß ]+$/.test(city)) {
        e.target.classList.add('loading');
        setInputCity(city);
        e.target.classList.remove('loading');
        e.target.value = '';
      } else {
        e.target.placeholder = 'Please enter a valid city name...';
      }
    }
  };

  return (
    <input
      type="text"
      placeholder="Enter A City"
      className="input input-bordered w-full max-w-xs"
      onKeyDown={onKeyDownHandler}
    />
  );
};

export default CityInput;
