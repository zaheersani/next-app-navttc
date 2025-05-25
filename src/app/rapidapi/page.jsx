'use client'

import { useEffect, useRef, useState } from "react";

export default function Countries () {
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(async () => {
        const url = 'https://city-list.p.rapidapi.com/api/getCountryList';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '<YOUR-RAPIDAPI-KEY>', // <-- Replace with your RapidAPI key
                'x-rapidapi-host': 'city-list.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setCountries(result['0']);
            // console.log(result['0']);
        } catch (error) {
            console.error(error);
        }
    }, []);

    const getCities = async (countryIso) => {

        setCities([]);

        const url = `https://city-list.p.rapidapi.com/api/getCity/${countryIso}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '<YOUR-RAPIDAPI-KEY>', // <-- Replace with your RapidAPI key
                'x-rapidapi-host': 'city-list.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setCities(result['0']);
        } catch (error) {
            console.error(error);
        }
    }

return (
    <div>
        <h1>Countries</h1>
        <p>List of countries</p>
        <select onChange={(e) => getCities(e.target.value)}>
                {countries.map((country, index) => (
                        <option 
                        key={index} 
                        value={country.iso}
                        >
                        {country.cname}
                        </option>
                ))}
        </select>

        {cities.length <= 0 && <p>Loading Cities ... </p>}
        {cities.length > 0 && <p>List of cities ({cities.length}) in the selected country</p>}

        {cities.length > 0 && 
        <>
            <input
                    list="cities-list"
                    placeholder="Search city..."
                    autoComplete="on"
            />
            <datalist id="cities-list">
                    {cities.map((city, index) => (
                            <option
                                    key={index}
                                    value={city.name}
                            />
                    ))}
            </datalist>
        </>
        }
    </div>
);
}