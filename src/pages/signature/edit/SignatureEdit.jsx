import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CountryCitySelector = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Fetch country data from the provided API
    axios
      .get('https://countriesnow.space/api/v0.1/countries')
      .then(response => {
        // Extract country names from the response
        const citiesTest = response.data.data;

        const countryNames = citiesTest.map(item => item.country);

        console.log(response);
        console.log('1', response.data.data);
        setCountries(countryNames);
      })
      .catch(error => {
        console.error('Error fetching country data:', error);
      });
  }, []);

  /*   useEffect(() => {
    // Update cities when a country is selected
    if (selectedCountry) {
      // Fetch city data for the selected country
      axios
        .get(
          `https://countriesnow.space/api/v0.1/countries/population/cities?country=${selectedCountry}`,
        )
        .then(response => {
          // Extract city names from the response
          const cityNames = response.data.result[selectedCountry] || [];
          setCities(cityNames);
        })
        .catch(error => {
          console.error('Error fetching city data:', error);
        });
    }
  }, [selectedCountry]); */

  useEffect(() => {
    // Update cities when a country is selected
    if (selectedCountry) {
      // Fetch city data for the selected country using POST request
      axios
        .post('https://countriesnow.space/api/v0.1/countries/cities', {
          country: selectedCountry,
        })
        .then(response => {
          // Extract city names from the response
          const cityNames = response.data.data || [];
          console.log('2', response);
          setCities(cityNames);
        })
        .catch(error => {
          console.error('Error fetching city data:', error);
        });
    }
  }, [selectedCountry]);
  return (
    <div>
      <label>Select a country:</label>
      <select onChange={e => setSelectedCountry(e.target.value)}>
        <option value="">-- Select a country --</option>
        {countries.map(country => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <div>
          <label>Select a city:</label>
          <select>
            {cities.map(city => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};
export default CountryCitySelector;
