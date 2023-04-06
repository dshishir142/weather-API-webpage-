
//search

let county = document.getElementById("display");
county.value = `kent`;
let place = county.value;
let but = document.getElementById("search");
but.addEventListener("click", () => {
    place = county.value;
    fetchdata();
})


//fetch data
function fetchdata(){
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=ddf141f591dbee5512c13c652b3ec35b&units=metric`)
.then(a => a.json())
.then(data => {
    const condi = data.weather[0].description;
    const temp = data.main.temp;
    const country = data.name;
    const wind = data.wind.speed;
    const humi = data.main.humidity;

//date
const dateElement = document.getElementById('date');
const currentDate = new Date();
dateElement.textContent = `Date: ${currentDate.toDateString()}`;

//temperature
const tempElement = document.getElementById("tem");
tempElement.textContent = `${temp}°C`;

//city
const cityElement = document.getElementById("city");
cityElement.textContent = country;

//humidity
const humidityElement = document.getElementById("humidity");
humidityElement.innerHTML = `Humidity:&nbsp;&nbsp;${humi}&nbsp;%`;

//windspeed
const windElement = document.getElementById("wind");
windElement.innerHTML = `Windspeed:&nbsp;&nbsp;${wind}&nbsp;m/s`;

//condition
const condiElement = document.getElementById("condi");
condiElement.innerHTML = condi;
console.log(data.weather.icon);

//icon
const iconCode = data.weather[0].icon;
let iconUrl;

if (iconCode === "01d" || iconCode === "01n") {
  iconUrl = "images used/sunny.png";
} else if (iconCode === "02d" || iconCode === "02n" || iconCode === "03d" || iconCode === "03n") {
  iconUrl = "images used/partlycloud.png";
} else if (iconCode === "04d" || iconCode === "04n") {
  iconUrl = "images used/clouds.png";
} else if (iconCode === "09d" || iconCode === "09n" || iconCode === "10d" || iconCode === "10n") {
  iconUrl = "images used/rainy.png";
} else if (iconCode === "11d" || iconCode === "11n") {
  iconUrl = "images used/rainWithLightning.png";
} else if (iconCode === "13d" || iconCode === "13n") {
  iconUrl = "images used/snowfall.png";
} else if (iconCode === "50d" || iconCode === "50n") {
  iconUrl = "images used/windy.png";
} else {
  iconUrl = "images used/rainbow.png";
}

const condiImage = document.getElementById("condi_image");
condiImage.src = iconUrl;


})
}
fetchdata();