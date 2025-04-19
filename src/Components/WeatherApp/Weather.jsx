import React, { useState } from "react";
import Search from "./Search";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const APIkey = process.env.REACT_APP_WEATHER_API_KEY;


  function originalValue(event) {
    setSearch(event.target.value);
  }

  const handleSearch = async () => {
    if (!search.trim()) return; // Prevent API call if input is empty
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APIkey}`
      );

      if (!res.ok) {
        throw new Error("City not found");
      }

      const data = await res.json();
      console.log(data);
      setWeatherData(data);
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-auto items-center m-7 h-4/5 bg-sky-300 rounded-lg mt-16 pb-12">
      <h1 className="text-center font-bold text-red-600 text-4xl pt-7">
        Weather Application
      </h1>
      <Search
        search={search}
        originalValue={originalValue}
        handleSearch={handleSearch}
      />

      <div className="flex flex-col space-y-7 ">
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}
        {weatherData && (
          <div className="text-center flex flex-col space-y-6 text-black font-semibold text-4xl mt-7">
            <h2 className="font-bold text-5xl">{weatherData.name}</h2>
            <p>Country : {weatherData.sys.country}</p>
            <p>Temperature: {weatherData.main.temp}°K</p>
            <p>Weather: {weatherData.weather[0].description}</p>
            <p>Wind Speed: {weatherData.wind.speed}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
