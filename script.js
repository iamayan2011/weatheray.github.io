const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "65933b7dcamsh1e794e9a738e14cp199fc9jsn3b70a1a5af91",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
}

const getWeather = (city) => {
  cityName.innerHTML = titleCase(city);
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  ).then((response) => response.json())
    .then((response) => {
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      //sunrise.innerHTML = response.sunrise;
      //sunset.innerHTML = response.sunset;

      console.log(response);
    })
    .catch((err) => console.error(err));

  
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");
