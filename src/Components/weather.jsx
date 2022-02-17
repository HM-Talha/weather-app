import React, { useEffect, useState } from "react";
import Sun from "./images/sun.png";
import "./weather.css";

function Weather() {
  //hooks for city
  // let [city, setCity] = useState(null);
  // const [search, setSearch] = useState("karachi");

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const url = `https://api.openweathermap.org/data/2.5/find?q=${search}&appid=e45c2aff75e69dee8cb8150d4f9092e8`;
  //     const response = await fetch(url);
  //     const resJson = await response.json();
  //       console.log(resJson);
  //     // setCity(resJson[0].main);
  //   };
  //   fetchApi();
  // });

  // useEffect(() => {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/find?q=karachi&appid=e45c2aff75e69dee8cb8150d4f9092e8`
  //   )
  //     .then((res) => res.json())
  //     .then((result ) => {
  //       console.log(result)
  //       // console.log(setCity);
  //     })
  //     .catch((err) => {
  //       console.log("0rrr", err);
  //     });
  // });

  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("karachi");
  const [search, setSearch] = useState("Karachi");

  const ApiKey = "7c45d8b085858b71f7f0ea60597e3f8b";
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e45c2aff75e69dee8cb8150d4f9092e8&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      })
      .catch((err) => {
        console.log("0rrr", err);
      });
  }, [city]);

  return (
    <main>
      <div>
        <header className="inputBox">
          <input
            type="text"
            placeholder="City"
            value={search}
            onChange={(e) => {
              setSearch(setCity);
              setSearch(e.target.value);
            }}
          />
        </header>
        <div className="detailBox">
          <section className="detailsSection">
            <div className="imgBox">
              <img src={Sun} width="300" />
            </div>
            <div className="details">
              <section className="detailRes">
                <p className="leftBor">City Name</p>
                <p>Current Day</p>
                <p> Temperature</p>
                <p className="rightBor"> condition</p>
              </section>
              <ul className="detailRes1">
                <li className="leftBor">{weather && weather.name}</li>
                <li>today</li>
                <li>{Math.round(weather && weather.main && weather.main.temp)}<sup>o</sup>C</li>
                <li className="rightBor">{weather && weather.weather && weather.weather[0] &&weather.weather[0].main}</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>

    // <div className="weather">
    //   <main>
    //     <div className="search-box">
    //       <input
    //         type="text"
    //         className="search-bar"
    //         placeholder="Search..."
    //       />
    //     </div>

    //     <div>
    //       <div className="location-box">
    //         <div className="location">Location</div>
    //         <div className="date">date</div>
    //       </div>
    //       <div className="weather-box">
    //         <div className="temp">°c
    //         </div>
    //         <div className="weather"></div>
    //       </div>
    //     </div>
    //   </main>
    // </div>
  );
}

export default Weather;
