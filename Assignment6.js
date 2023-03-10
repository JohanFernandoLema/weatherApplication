function getCityWeather(){
    var city = document.getElementById("userCity").value;
    let animatedIcon = document.getElementById('animated');
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&units=metric&appid=fe935a8ea5d0d818f7e8a696964eec1f`
    fetch(url)
    .then(response => {return response.json()})
    .then(data => {

        //document.getElementById("cityW").innerHTML = data;

        switch (data.weather[0].main){
            case 'Clear':
                animatedIcon.src = 'animated/day.svg'
                break;
            case 'Clouds':
                animatedIcon.src = 'animated/cloudy-day-1.svg'
                break;
            case 'Rain':
                animatedIcon.src = 'animated/rainy-1.svg'
                break;
                case 'Snow':
                animatedIcon.src = 'animated/snowy-1.svg'
                break;
            case 'Atmosphere':
                animatedIcon.src = 'animated/weather.svg'
                break;                
            case 'Drizzle':
                animatedIcon.src = 'animated/rainy-1.svg'
                break;                
            case 'Thunderstorm':
                animatedIcon.src = 'animated/thunder.svg'
                break;                

        }
        /*var urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`;              
        console.log(urlIcon);*/
    })
    .catch(error => {console.log(error)})
}
document.getElementById("cityWeather").addEventListener("click", getCityWeather, false);


if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition( posicion => {
   //console.log(posicion.coords.latitude)
   var lon = posicion.coords.longitude
   var lat = posicion.coords.latitude
    //ubicación actual    
   //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${AQUI_VIENE_TU_API_KEY}`

   //ubicación por ciudad
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9de497b0a16ad50a10913eb4e25c5602`

   fetch(url)
    .then( response => { return response.json()})
    .then( data => {
    console.log(data)
    switch (data.weather[0].main){
    case 'Clear':
        document.getElementById("location").innerHTML =  `Longitude: ${lon} <br>Latitude: ${lat}. <br>Your current weather is "<b>${data.weather[0].main}</b>"`
        break;
    case 'Clouds':
        document.getElementById("location").innerHTML =  `Longitude: ${lon} <br>Latitude: ${lat}. <br>Your current weather is "<b>${data.weather[0].main}</b>"`
        break;
    case 'Rain':
        document.getElementById("location").innerHTML = `Longitude: ${lon} <br>Latitude: ${lat}. <br>Your current weather is "<b>${data.weather[0].main}</b>"`
        break;
        case 'Snow':
            document.getElementById("location").innerHTML =  `Longitude: ${lon} <br>Latitude: ${lat}. <br>Your current weather is "<b>${data.weather[0].main}</b>"`
        break;
    case 'Atmosphere':
        document.getElementById("location").innerHTML =  `Longitude: ${lon} <br>Latitude: ${lat}. <br>Your current weather is "<b>${data.weather[0].main}</b>"`
        break;                
    case 'Drizzle':
        document.getElementById("location").innerHTML =  `Longitude: ${lon} <br>Latitude: ${lat}. <br>Your current weather is "<b>${data.weather[0].main}</b>"`
        break;                
    case 'Thunderstorm':
        document.getElementById("location").innerHTML =  `Longitude: ${lon} <br>Latitude: ${lat}. <br>Your current weather is "<b>${data.weather[0].main}</b>"`
    break;
}
}
)}
)}

 

