import React, { useState, useEffect, useCallback } from "react";
import Dialog from "@mui/material/Dialog";

import { WEATHER_API } from "../../reusables/urls";
import { FORECAST_API } from "../../reusables/urls";
import {
  WeatherText,
  Button,
  DialogContainer,
  ForecastTitle,
  WeatherContainer,
  DayText,
  CloseIcon,
} from "./Styling";

export const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [open, setOpen] = useState(false);

  const getDate = (date) =>
    new Date(date.replace(" ", "T")).toLocaleDateString("en-US", {
      weekday: "long",
    });

  const fetchWeather = useCallback(() => {
    fetch(WEATHER_API)
      .then((res) => res.json())
      .then((json) => {
        setWeather(json.main.temp);
      });
  }, []);

  const fetchForecast = useCallback(() => {
    fetch(FORECAST_API)
      .then((res) => res.json())
      .then((json) => {
        const filteredForecast = json.list.filter((item) =>
          item.dt_txt.includes("12:00"),
        );
        setForecast(filteredForecast);
      });
  }, []);

  useEffect(() => {
    fetchWeather();
    fetchForecast();
  }, [fetchWeather, fetchForecast]);

  const onToggleDialog = () => {
    setOpen(!open);
  };

  return (
    <>
      <WeatherText>
        Weather: {weather} °C
        <Button onClick={onToggleDialog}>See forecast</Button>
      </WeatherText>
      <Dialog open={open} onClose={onToggleDialog}>
        <DialogContainer>
          <CloseIcon onClick={onToggleDialog} />
          <ForecastTitle>Forecast at destination</ForecastTitle>
          {forecast.map((item, index) => (
            <WeatherContainer key={index}>
              <DayText>{getDate(item.dt_txt)}</DayText>
              <DayText>{item.main.temp} °C</DayText>
            </WeatherContainer>
          ))}
        </DialogContainer>
      </Dialog>
    </>
  );
};
