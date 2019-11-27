 //parameter variables
var apiUVlat, apiUVlon, UV, apiCity;

//api variables and constants
var proxy = "https://cors-anywhere.herokuapp.com/";

//base string constants
var apiIconsBaseString = "http://openweathermap.org/img/wn/";
var apiWeatherBaseString = "api.openweathermap.org/data/2.5/weather?q=";
var apiFCastBaseString = "api.openweathermap.org/data/2.5/forecast?q=";
var apiUVBaseString = "http://api.openweathermap.org/data/2.5/uvi?";
var apiLocationBaseString = "api.openweathermap.org/data/2.5/weather?";

//parameter constants
var apiUnits = "&units=imperial";
var apiCountry = ",US";
var apiKey = "&appid=f63825a9b274e4cb840e2e60d64d9e3c";

//url variables
var apiDefaultURL, apiWeatherURL, apiFCastURL, apiUVURL;

//api responses
var apiWeatherResponse;

    function getWeather(event) {
        apiWeatherURL = proxy + apiWeatherBaseString + apiCity + apiCountry + apiKey + apiUnits;
        $.ajax({
            url: apiWeatherURL,
            method: "GET",
        }).then(function(response) {
            apiWeatherResponse = response;
            populateWeather(apiWeatherResponse);
            apiUVlat = 'lat=' + response.coord.lat;
            apiUVlon = 'lon=' + response.coord.lon;
            apiUVURL = apiUVBaseString + apiUVlat + '&' + apiUVlon + apiKey;
            apiFCastURL = proxy + apiFCastBaseString + apiCity + apiCountry + apiKey + apiUnits;
            getUV(apiUVURL);
            getForecast(apiFCastURL);
        });      
    };

        function populateWeather(apiWeatherResponse) {
            var currentDate = moment().format("MM/DD/YYYY");
            var currentCity = apiWeatherResponse.name;
            var currentTemp = parseInt(apiWeatherResponse.main.temp);
            var currentHum = apiWeatherResponse.main.humidity + " %";
            var currentWind = parseInt(apiWeatherResponse.wind.speed) + 'mph';
            var currentIconCode = apiWeatherResponse.weather[0].icon;
            var currentIconSource = apiIconsBaseString + currentIconCode + ".png";
            // var locationIconImageEl = "<img width=150px height=150px src=" + currentIconSource + ">";
            $("#currentWeatherCity").text(currentCity);
            $("#currentWeatherTemp").val(currentTemp);
            $("#currentWeatherIcon").attr("src", currentIconSource);
            $("#currentWeatherTempData").text(currentTemp);
            $("#currentWeatherHumidityData").text(currentHum);
            $("#currentWeatherWindSpeedData").text(currentWind);
            $("#currentWeatherDate").text(currentDate);
        };

            //UV function
            function getUV(apiUVURL){
                $.ajax({
                    url: apiUVURL,
                    method: "GET",
                }).then(function(response) {
                    UV = 'UV index: ' + parseInt(response.value);
                    $("#currentWeatherUVData").text(UV);
                });
            };

                //forecast
                function getForecast(apiFCastURL){
                    $.ajax({
                        url: apiFCastURL,
                        method: "GET", 
                        dataType: "JSON",
                    }).then(function(response) {
                        var nextDay = response.list[4];
                        var nextDayWeatherIcons = nextDay.weather[0];
                        var nextDayIconCode = nextDayWeatherIcons.icon;
                        var nextDayIconSource = apiIconsBaseString + nextDayIconCode + ".png";
                        var nextDayIconEl = "<img src=" + nextDayIconSource + ">";
                        var nextDay2 = response.list[12];
                        var nextDay2WeatherIcons = nextDay2.weather[0];
                        var nextDay2IconCode = nextDay2WeatherIcons.icon;
                        var nextDay2IconSource = apiIconsBaseString + nextDay2IconCode + ".png";
                        var nextDay2IconEl = "<img src=" + nextDay2IconSource + ">";
                        var nextDay3 = response.list[20];
                        var nextDay3WeatherIcons = nextDay3.weather[0];
                        var nextDay3IconCode = nextDay3WeatherIcons.icon;
                        var nextDay3IconSource = apiIconsBaseString + nextDay3IconCode + ".png";
                        var nextDay3IconEl = "<img src=" + nextDay3IconSource + ">";
                        var nextDay4 = response.list[28];
                        var nextDay4WeatherIcons = nextDay4.weather[0];
                        var nextDay4IconCode = nextDay4WeatherIcons.icon;
                        var nextDay4IconSource = apiIconsBaseString + nextDay4IconCode + ".png";
                        var nextDay4IconEl = "<img src=" + nextDay4IconSource + ">";
                        var nextDay5 = response.list[36];
                        var nextDay5WeatherIcons = nextDay5.weather[0];
                        var nextDay5IconCode = nextDay5WeatherIcons.icon;
                        var nextDay5IconSource = apiIconsBaseString + nextDay5IconCode + ".png";
                        var nextDay5IconEl = "<img src=" + nextDay5IconSource + ">";
                    
                            var nextDayData = {
                                date : moment(nextDay.dt_txt).format("MM/DD/YYYY"),
                                hum : "Humidity: " + nextDay.main.humidity + "%",
                                temp : "Temp: " + parseInt(nextDay.main.temp)
                            };

                            var nextDay2Data = {
                                date : moment(nextDay2.dt_txt).format("MM/DD/YYYY"),
                                hum : "Humidity: " + nextDay2.main.humidity + "%",
                                temp : "Temp: " + parseInt(nextDay2.main.temp)
                            };

                            var nextDay3Data = {
                                date : moment(nextDay3.dt_txt).format("MM/DD/YYYY"),
                                hum : "Humidity: " + nextDay3.main.humidity + "%",
                                temp : "Temp: " + parseInt(nextDay3.main.temp)
                            };

                            var nextDay4Data = {
                                date : moment(nextDay4.dt_txt).format("MM/DD/YYYY"),
                                hum : "Humidity: " + nextDay4.main.humidity + "%",
                                temp : "Temp: " + parseInt(nextDay4.main.temp)
                            };

                            var nextDay5Data = {
                                date : moment(nextDay5.dt_txt).format("MM/DD/YYYY"),
                                hum : "Humidity: " + nextDay5.main.humidity + "%",
                                temp : "Temp: " + parseInt(nextDay5.main.temp)
                            };

                                $("#nextDayDate").text(nextDayData.date);
                                $("#nextDayIcon").attr("src", nextDayIconSource);
                                $("#nextDayTemp").text(nextDayData.temp);
                                $("#nextDayHum").text(nextDayData.hum);

                                $("#nextDay2Date").text(nextDay2Data.date);
                                $("#nextDay2Icon").attr("src", nextDay2IconSource);
                                $("#nextDay2Temp").text(nextDay2Data.temp);
                                $("#nextDay2Hum").text(nextDay2Data.hum);

                                $("#nextDay3Date").text(nextDay3Data.date);
                                $("#nextDay3Icon").attr("src", nextDay3IconSource);
                                $("#nextDay3Temp").text(nextDay3Data.temp);
                                $("#nextDay3Hum").text(nextDay3Data.hum);

                                $("#nextDay4Date").text(nextDay4Data.date);
                                $("#nextDay4Icon").attr("src", nextDay4IconSource);
                                $("#nextDay4Temp").text(nextDay4Data.temp);
                                $("#nextDay4Hum").text(nextDay4Data.hum);

                                $("#nextDay5Date").text(nextDay5Data.date);
                                $("#nextDay5Icon").attr("src", nextDay5IconSource);
                                $("#nextDay5Temp").text(nextDay5Data.temp);
                                $("#nextDay5Hum").text(nextDay5Data.hum);
                    });
                };

$(document).ready(function(){

    //function to assign user input to city variable and trigger get weather functions
    $("#searchButton").on("click", function getUserInputWeather(event) {
        event.preventDefault();     
        apiCity = $("#userInput").val();
        getWeather(event);
        updateSearchItems(event);
    });

        //function to assign search item to city variable and trigger get weather functions
        $("div #searchHistoryItems").on("click", "button", function () {
            event.preventDefault();     
            apiCity = $(this).text();
            getWeather(event);
        });
});

//-----------------------------------------current location---------------------------------------------
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