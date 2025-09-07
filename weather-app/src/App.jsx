import React, { useState } from "react";

export default function WeatherNow() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Weather code mapping
  const weatherDescriptions = {
    0: "☀️ Clear sky",
    1: "🌤️ Mainly clear",
    2: "⛅ Partly cloudy",
    3: "☁️ Overcast",
    45: "🌫️ Fog",
    48: "🌫️ Depositing rime fog",
    51: "🌦️ Light drizzle",
    61: "🌧️ Rain",
    71: "❄️ Snow",
    80: "🌧️ Rain showers",
    95: "⛈️ Thunderstorm",
  };

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError("");
      setWeather(null);

      // Geocoding
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        setError("❌ City not found!");
        setLoading(false);
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // Weather API
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      const code = weatherData.current_weather.weathercode;

      setWeather({
        city: `${name}, ${country}`,
        temp: weatherData.current_weather.temperature,
        wind: weatherData.current_weather.windspeed,
        condition: weatherDescriptions[code] || "Unknown",
      });
    } catch (err) {
      setError("⚠️ Failed to fetch weather!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen 
                    bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 
                    text-white transition-all duration-500">
      <h1 className="text-4xl font-extrabold mb-6 animate-pulse">
        🌤️ Weather Now
      </h1>

      {/* Input & Button */}
      <div className="flex space-x-2 mb-6">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-2 rounded-lg text-black w-60 focus:ring-2 focus:ring-yellow-400 outline-none"
        />
        <button
          onClick={fetchWeather}
          className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-500 transition-transform transform hover:scale-105"
        >
          Search
        </button>
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex flex-col items-center">
          <div className="animate-spin h-10 w-10 border-4 border-white border-t-transparent rounded-full"></div>
          <p className="mt-2">Fetching weather...</p>
        </div>
      )}

      {/* Error */}
      {error && (
        <p className="text-red-200 bg-red-600 px-4 py-2 rounded-lg animate-bounce">
          {error}
        </p>
      )}

      {/* Weather Card */}
      {weather && (
        <div className="bg-white text-black rounded-2xl shadow-2xl p-6 w-80 text-center mt-6 transform transition duration-500 hover:scale-105 hover:shadow-3xl">
          <h2 className="text-2xl font-bold mb-2">{weather.city}</h2>
          <p className="text-5xl font-extrabold">{weather.temp}°C</p>
          <p className="text-lg mt-2">{weather.condition}</p>
          <p className="text-md mt-1">💨 Wind: {weather.wind} km/h</p>
        </div>
      )}
    </div>
  );
}
