import React from "react";
import "./Weather.css";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
import humidity_icon from "../assets/humidity.png";
function Weather() {
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder=" Search : ex Jakarta" />
        <img src={search_icon} alt="" />
      </div>
      <img src={clear_icon} alt="" className="weather-icon" />
      <p>16°C</p>
      <p>Jakarta</p>
    </div>
  );
}

export default Weather;
