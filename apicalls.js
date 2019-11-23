$(document).ready(function(){

    //api variables

    var proxy = "https://cors-anywhere.herokuapp.com/";

    var apiCurrentBaseString = "api.openweathermap.org/data/2.5/weather?q=";
    var apiFCastBaseString = "api.openweathermap.org/data/2.5/forecast?q=";
    var apiCity = "nashville"; //replace with city name from user input
    var apiCountry = ",US";
    var apiKey = "&appid=f63825a9b274e4cb840e2e60d64d9e3c";
    var apiUnits = "&units=imperial";
    
    var apiCurrentURL = proxy + apiCurrentBaseString + apiCity + apiCountry + apiKey + apiUnits;
    var apiFCastURL = proxy + apiFCastBaseString + apiCity + apiCountry + apiKey + apiUnits;

    var apiIconsBaseString = "http://openweathermap.org/img/wn/";
    var apiIconCode = "10d"; //replace with icon code from api responses
    var apiIconURL = apiIconsBaseString + apiIconCode + ".png"; //may need to add @2x before .png

    var apiUVBaseString = "http://api.openweathermap.org/data/2.5/uvi?";
    // var apiUVlat = "lat=" + "36.17"; // need to replace with variable populated by api response 36.174465
    // var apiUVlon = "&lon=" + "-86.77"; // need to replace with variable populated by api response -86.767960
    // var apiUVURL = apiUVBaseString + apiUVlat + apiUVlon + apiKey;

    //api calls

    //current weather
    $("#currenttestbtn").on("click", function(event) {
        $.ajax({
            url: apiCurrentURL,
            method: "GET",
        }).then(function(apiCurrentResponse) {
            getUV(apiCurrentResponse);
            createCurrentElements(apiCurrentResponse);
            // console.log('city: ' + apiCurrentResponse.name);
            // console.log('temp: ' + apiCurrentResponse.main.temp + 'F');
            // console.log('humidity: ' +apiCurrentResponse.main.humidity + '%');
            // console.log('wind speed: ' + apiCurrentResponse.wind.speed + 'mph');
            // console.log('lat: ' + apiCurrentResponse.coord.lat);
            // console.log('lon: ' + apiCurrentResponse.coord.lon);
            console.log(apiCurrentResponse);
        });
    });

        //UV
        function getUV(apiCurrentResponse){
            var apiUVlat = 'lat=' + apiCurrentResponse.coord.lat;
            var apiUVlon = 'lon=' + apiCurrentResponse.coord.lon;
            var apiUVURL = apiUVBaseString + apiUVlat + '&' + apiUVlon + apiKey;

            $.ajax({
                url: apiUVURL,
                method: "GET",
            }).then(function(apiUVResponse) {
                UV = 'UV index: ' + apiUVResponse.value
                console.log(UV);
                console.log(apiUVResponse.value);
                console.log(apiUVResponse);
            });
        };

    //forecast
    $("#fcasttestbtn").on("click", function(event) {
        $.ajax({
            url: apiFCastURL,
            method: "GET", 
            dataType: "JSON",
        }).then(function(apiFCastResponse) {
        console.log(apiFCastResponse);
        });
    });

    // * Include a 5-Day Forecast below the current weather conditions. Each day for the 5-Day Forecast should display the following:

    // * Date
  
    // * Icon image (visual representation of weather conditions)
  
    // * Temperature
  
    // * Humidity



});