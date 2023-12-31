const API_KEY = `e0ff489a5cb75dffcf4777395d397346`;
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")


const getWeather = async (city) => {
  weather.innerHTML = `<h2> Loading... <h2>`
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  const response = await fetch(url);
  const data = await response.json();
  return showWeather(data)
}


const showWeather = (data) => {
  if(data.cod == "404"){
    weather.innerHTML = `<h2> City Not Found <h2>`
    return;
  }
  console.log(data)
  weather.innerHTML = ` 
  <div>
  <img  src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
</div>
<div>
  <h2>Temp : ${data.main.temp} °C</h2>
  <h4>${data.weather[0].main}</h4>
  <h4>Wind Speed : ${data.wind.speed} Km/h</h4>
</div> 
`
}

form.addEventListener(
  "submit",
  function (event) {
    getWeather(search.value)
    event.preventDefault();
  }
)