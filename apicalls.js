

    // navigator.geolocation.getCurrentPosition(function(position) {
    //     console.log(position.coords.latitude);
    //     console.log(position.coords.longitude);
    //   });

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
                // UV = 'UV index: ' + apiUVResponse.value
                console.log(apiUVResponse);
            });
            // return UV;
        };

    //forecast
    $("#fcasttestbtn").on("click", function(event) {
        $.ajax({
            url: apiFCastURL,
            method: "GET", 
            dataType: "JSON",
        }).then(function(apiFCastResponse) {
        // showFCastData();

        // function showFCastData(apiFCastResponse) {

            console.log(apiFCastResponse);

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
        
            var nextDayData = [nextDay.dt_txt, nextDay.main.humidity, nextDay.main.temp, nextDayWeatherIcons.icon];
            var nextDay2Data = [nextDay2.dt_txt, nextDay2.main.humidity, nextDay2.main.temp, nextDay2WeatherIcons.icon];
            var nextDay3Data = [nextDay3.dt_txt, nextDay3.main.humidity, nextDay3.main.temp, nextDay3WeatherIcons.icon];
            var nextDay4Data = [nextDay4.dt_txt, nextDay4.main.humidity, nextDay4.main.temp, nextDay4WeatherIcons.icon];
            var nextDay5Data = [nextDay5.dt_txt, nextDay5.main.humidity, nextDay5.main.temp, nextDay5WeatherIcons.icon];

            var FCastResultsTest = [nextDayData, nextDay2Data, nextDay3Data, nextDay4Data, nextDay5Data];

            console.log(FCastResultsTest);
            
            // var FCastResultsTest;
        
            // };
        });



    });

    //need to create separate arrays for each date returned



    // * Include a 5-Day Forecast below the current weather conditions. Each day for the 5-Day Forecast should display the following:

    // * Date
  
    // * Icon image (visual representation of weather conditions)
  
    // * Temperature
  
    // * Humidity

    $(document).ready(function(){


});