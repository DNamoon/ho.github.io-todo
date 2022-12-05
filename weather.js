//내가 사는 도시로 하고 싶어서 도시 정보 가져오자! -> 도시를 직접 입력해서 날씨를 찾도록 함.
const API_KEY = "6265778e4d9239f92249fcd22613359d";
const cityName = document.querySelector("#city");

function showWeather(data){
    console.dir(data);
    //입력한 도시가 없을 경우, 다시 도시 이름을 입력하도록 구현.
    if(data.cod == "404"){
        alert("Please check the city name! ex) Seoul 서울");
        return false;
    }
    const temp = data.main.temp;
    const temp_feel = data.main.feels_like;
    const temp_max = data.main.temp_max;
    const temp_min = data.main.temp_min;
    const where = data.name;
    const weather = data.weather[0].main;
 
    const weatherBox = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    weatherBox.innerText = `날씨 : ${weather}, 현재온도 : ${temp} °C, 체감온도 : ${temp_feel} °C, 최고온도 : ${temp_max} °C, 최저온도 : ${temp_min} °C`;
    city.innerText = `도시 : ${where}`;
    
    console.log(temp,temp_feel,temp_max,temp_min,where,weather);
}

///////////////////////slkdjflksdjfkl
////askdfjlkdsjkfl
////sjdflkjasdklf다 됐다
//다됐다고
function showWeatherFetch(url) {
    fetch(url)
    .then((response)=> response.json())
    .then(showWeather);
}

function localWeather() {
    //event.preventDefault();  //새로고침하면 localStorage 날라가는거 막음.
    const cityName2 = cityName.value;
    if(cityName2 == "" && savedCity == null){
        alert("Please write a city name!");
        return false;
    }
    console.log(cityName2);
    const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${cityName2}&appid=${API_KEY}&units=metric`;
    
    showWeatherFetch(url2);

    // fetch(url2)
    // .then((response)=> response.json())
    // .then(showWeather);

    //로컬스토리지에 저장해두고 있으면 계속 보여주도록 하자.
    localStorage.setItem("city",cityName2);
    
}

const btn_city_weather = document.querySelector("#btn_city");
btn_city_weather.addEventListener("click",localWeather);

const savedCity = localStorage.getItem("city");

if( savedCity !== null) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${savedCity}&appid=${API_KEY}&units=metric`;
    showWeatherFetch(url);
}