'use client'

import { useEffect, useRef, useState } from "react";

const APIKEY = process.env.NEXT_PUBLIC_RAPIDAPI_KEY;

export default function Countries () {
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState("");

    useEffect(async () => {
        const url = 'https://city-list.p.rapidapi.com/api/getCountryList';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': APIKEY, // <-- Replace with your RapidAPI key
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
                'x-rapidapi-key': APIKEY, // <-- Replace with your RapidAPI key
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

    const getWeatherData = () => {
        console.log("city", city);
        let cityObj = cities.find((c) => c.name.toLowerCase() === city.toLowerCase());
        // console.log(cityObj);
        
        // Make the weather API call here
        let lat = cityObj.lat;
        let lon = cityObj.long;
        const url = `https://open-weather13.p.rapidapi.com/latlon?latitude=${lat}&longitude=${lon}&lang=EN`;
        const options = {
            method: 'GET',
            headers: {
            'x-rapidapi-key': APIKEY, // <-- Replace with your RapidAPI key
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
            }
        };

        try {
            const response = fetch(url, options).then(res => res.json()).then(data => {
            console.log(data);
            //   setWeather(data);
            });
            // const result = await response.json();
            // console.log(result);
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
                        onChange={(e) => setCity(e.target.value)}
                />
                <datalist 
                    id="cities-list"
                >
                        {cities.map((city, index) => (
                                <option
                                        key={index}
                                        value={city.name}
                                />
                        ))}
                </datalist>
                <button 
                    onClick={getWeatherData}
                >Get Weather</button>
            </>
            }
        </div>
    );
}