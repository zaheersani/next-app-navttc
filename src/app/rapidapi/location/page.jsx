'use client'

import { useEffect, useState } from "react";

export default function Location() {

    const [position, setPosition] = useState(null);

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    function success(pos) {
        const crd = pos.coords;

        console.log(pos);

        setPosition(crd);

        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error, options);
        if (!navigator.geolocation) {
            console.error("Geolocation is not supported by this browser.");
            return;
        }
    }, []);
    

  return (
    <div>
      <h1>Get Current Location</h1>
      <br />
      {position && (
        <div>
          <h2>Current Position:</h2>
          <h3>Latitude: {position.latitude}</h3>
          <h3>Longitude: {position.longitude}</h3>
          <h3>Accuracy: {position.accuracy} meters</h3>
        </div>
      )}
      <br />
      <p>This page retrieves your current geographical location using the Geolocation API.</p>
      <p>Check the console for your location details.</p>
    </div>
  );
}

