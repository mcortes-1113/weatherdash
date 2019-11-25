var proxy = "https://cors-anywhere.herokuapp.com/";
var apiCurrentBaseString = "api.openweathermap.org/data/2.5/weather?q=";
var apiFCastBaseString = "api.openweathermap.org/data/2.5/forecast?q=";
var apiUVBaseString = "http://api.openweathermap.org/data/2.5/uvi?";
var apiLocationBaseString = "api.openweathermap.org/data/2.5/weather?";
var apiUnits = "&units=imperial";
var apiIconsBaseString = "http://openweathermap.org/img/wn/";

var apiCity = "nashville"; //replace with city name from user input
var apiCountry = ",US";
var apiKey = "&appid=f63825a9b274e4cb840e2e60d64d9e3c";

var apiCurrentURL = proxy + apiCurrentBaseString + apiCity + apiCountry + apiKey + apiUnits;
var apiFCastURL; // = proxy + apiFCastBaseString + apiCity + apiCountry + apiKey + apiUnits;

var apiIconsBaseString = "http://openweathermap.org/img/wn/";
var apiIconCode = "10d"; //replace with icon code from api responses
var apiIconURL = apiIconsBaseString + apiIconCode + ".png"; //may need to add @2x before .png

var defaultCity;
var apiDefaultURL;

var apiUVlat;
var apiUVlon;
var apiUVURL;
var UV;

    function getDefaultWeather(event) {
        $.ajax({
            url: apiDefaultURL,
            method: "GET",
        }).then(function(apiDefaultResponse) {
            apiUVlat = "lat=" + apiDefaultResponse.coord.lat; 
            apiUVlon = "&lon=" + apiDefaultResponse.coord.lon;
            apiUVURL = apiUVBaseString + apiUVlat + apiUVlon + apiKey;
            getUV(apiDefaultResponse);
            apiFCastURL = proxy + apiFCastBaseString + apiCity + apiCountry + apiKey + apiUnits;
            getForecast(event);
            var currentDate = moment().format("MM/DD/YYYY");
            var currentCity = apiDefaultResponse.name;
            var currentTemp = apiDefaultResponse.main.temp + " F";
            var currentHum = apiDefaultResponse.main.humidity + " %";
            var currentWind = apiDefaultResponse.wind.speed + 'mph';
            var currentIconCode = apiDefaultResponse.weather[0].icon;
            var currentIconSource = apiIconsBaseString + currentIconCode + ".png";
            var locationIconImageEl = "<img src=" + currentIconSource + ">";
            $("#currentWeatherCity").text(currentCity);
            $("#currentWeatherTemp").val(currentTemp);
            $("#currentWeatherIcon").prepend(locationIconImageEl);
            $("#currentWeatherTempData").text(currentTemp);
            $("#currentWeatherHumidityData").text(currentHum);
            $("#currentWeatherWindSpeedData").text(currentWind);
            $("#currentWeatherDate").text(currentDate);
        });
    };

        //UV
        function getUV(apiDefaultResponse){
            var apiUVlat = 'lat=' + apiDefaultResponse.coord.lat;
            var apiUVlon = 'lon=' + apiDefaultResponse.coord.lon;
            var apiUVURL = apiUVBaseString + apiUVlat + '&' + apiUVlon + apiKey;

            $.ajax({
                url: apiUVURL,
                method: "GET",
            }).then(function(apiUVResponse) {
                UV = 'UV index: ' + apiUVResponse.value;
                $("#currentWeatherUVData").text(UV);
            });
        };

    //forecast

        function getForecast(event){
        $.ajax({
            url: apiFCastURL,
            method: "GET", 
            dataType: "JSON",
        }).then(function(apiFCastResponse) {
            var nextDay = apiFCastResponse.list[4];
            var nextDayWeatherIcons = nextDay.weather[0];
            var nextDay2 = apiFCastResponse.list[12];
            var nextDay2WeatherIcons = nextDay2.weather[0];
            var nextDay3 = apiFCastResponse.list[20];
            var nextDay3WeatherIcons = nextDay3.weather[0];
            var nextDay4 = apiFCastResponse.list[28];
            var nextDay4WeatherIcons = nextDay4.weather[0];
            var nextDay5 = apiFCastResponse.list[36];
            var nextDay5WeatherIcons = nextDay5.weather[0];
        
            var nextDayData = {
                date : nextDay.dt_txt,
                hum : nextDay.main.humidity,
                temp : nextDay.main.temp,
                icon : nextDayWeatherIcons.icon
            };

            var nextDay2Data = {
                date : nextDay2.dt_txt,
                hum : nextDay2.main.humidity,
                temp : nextDay2.main.temp,
                icon : nextDay2WeatherIcons.icon
            };

            var nextDay3Data = {
                date : nextDay3.dt_txt,
                hum : nextDay3.main.humidity,
                temp : nextDay3.main.temp,
                icon : nextDay3WeatherIcons.icon
            };

            var nextDay4Data = {
                date : nextDay4.dt_txt,
                hum : nextDay4.main.humidity,
                temp : nextDay4.main.temp,
                icon : nextDay4WeatherIcons.icon
            };

            var nextDay5Data = {
                date : nextDay5.dt_txt,
                hum : nextDay5.main.humidity,
                temp : nextDay5.main.temp,
                icon : nextDay5WeatherIcons.icon
            };

            console.log(nextDayData);

            $("#nextDayDate").text(nextDayData.date);
            $("#nextDayIcon").text(nextDayData.icon);
            $("#nextDayTemp").text(nextDayData.temp);
            $("#nextDayHum").text(nextDayData.hum);

            $("#nextDay2Date").text(nextDay2Data.date);
            $("#nextDay2Icon").text(nextDay2Data.icon);
            $("#nextDay2Temp").text(nextDay2Data.temp);
            $("#nextDay2Hum").text(nextDay2Data.hum);

            $("#nextDay3Date").text(nextDay3Data.date);
            $("#nextDay3Icon").text(nextDay3Data.icon);
            $("#nextDay3Temp").text(nextDay3Data.temp);
            $("#nextDay3Hum").text(nextDay3Data.hum);

            $("#nextDay4Date").text(nextDay4Data.date);
            $("#nextDay4Icon").text(nextDay4Data.icon);
            $("#nextDay4Temp").text(nextDay4Data.temp);
            $("#nextDay4Hum").text(nextDay4Data.hum);

            $("#nextDay5Date").text(nextDay5Data.date);
            $("#nextDay5Icon").text(nextDay5Data.icon);
            $("#nextDay5Temp").text(nextDay5Data.temp);
            $("#nextDay5Hum").text(nextDay5Data.hum);

            var nextDay2Data = [nextDay2.dt_txt, nextDay2.main.humidity, nextDay2.main.temp, nextDay2WeatherIcons.icon];
            var nextDay3Data = [nextDay3.dt_txt, nextDay3.main.humidity, nextDay3.main.temp, nextDay3WeatherIcons.icon];
            var nextDay4Data = [nextDay4.dt_txt, nextDay4.main.humidity, nextDay4.main.temp, nextDay4WeatherIcons.icon];
            var nextDay5Data = [nextDay5.dt_txt, nextDay5.main.humidity, nextDay5.main.temp, nextDay5WeatherIcons.icon];

        });



    };

    $(document).ready(function(){
                // defaultCity = localStorage.getItem("searchHistory");
                // defaultCity = JSON.parse(defaultCity);
                // defaultCity = defaultCity.lastCity;
                defaultCity = "orlando";
                apiDefaultURL = proxy + apiCurrentBaseString + defaultCity + apiCountry + apiKey + apiUnits;
                getDefaultWeather(event);

});

// var currentLat;
// var currentLon;
// var apiLocationURL;

// //Get current location and assign coordinate values to variable
// navigator.geolocation.getCurrentPosition(function(position) {
// currentLat = position.coords.latitude;
// currentLon = position.coords.longitude;
// apiLocationURL = proxy + apiLocationBaseString + "lat=" + currentLat + "&lon=" + currentLon;
// console.log(currentLat);
// console.log(currentLon);
// console.log(apiLocationURL);
// getCurrentLocationData(event);
// });
// function getCurrentLocationData(event) {
//     console.log(currentLat);
//     console.log(currentLon);
//     console.log(apiLocationURL);
//     $.ajax({
//         url: apiLocationURL,
//         method: "GET",
//     }).then(function(apiLocationResponse) {
//         var currentCity = apiLocationResponse.name;
//         var currentTemp = apiLocationResponse.main.temp + " F";
//         var currentIconCode = apiLocationResponse.weather.icon
//         var currentIconSource = apiIconsBaseString + currentIconCode + ".png";
//         var locationIconImageEl = "<img src=" + currentIconSource + ">"
//         $("#currentLoc").textContent(currentCity);
//         $("#currentTemp").textContent(currentTemp);
//         $("#locationIcon").prepend(locationIconImageEl);

//         // getUV(apiLocationResponse);
//         // createCurrentElements(apiCurrentResponse);

//         console.log(apiLocationResponse);
//     });
// };