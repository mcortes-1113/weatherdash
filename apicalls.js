$(document).ready(function(){

    //api variables

    var apiCurrentBaseString = "api.openweathermap.org/data/2.5/weather?q=";
    var apiFCastBaseString = "api.openweathermap.org/data/2.5/forecast?q=";
    var apiCity = "nashville"; //replace with city name from user input
    var apiCountry = ",US";
    var apiKey = "&appid=f63825a9b274e4cb840e2e60d64d9e3c";
    
    var apiCurrentURL = apiCurrentBaseString + apiCity + apiCountry + apiKey;
    var apiFCastURL = apiFCastBaseString + apiCity + apiCountry + apiKey;

    var apiIconsBaseString = "http://openweathermap.org/img/wn/";
    var apiIconCode = "10d"; //replace with icon code from api responses
    var apiIconURL = apiIconsBaseString + apiIconCode + ".png"; //may need to add @2x before .png

    var apiUVBaseString = "http://api.openweathermap.org/data/2.5/uvi?";
    var apiUVlat = "lat=" + "36.17"; // need to replace with variable populated by api response 36.174465
    var apiUVlon = "&lon=" + "-86.77"; // need to replace with variable populated by api response -86.767960
    var apiUVURL = apiUVBaseString + apiUVlat + apiUVlon + apiKey;

    //api calls

    //current weather
    $("#currenttestbtn").on("click", function(event) {
        $.ajax({
            url: apiCurrentURL,
            method: "GET",
        }).then(function(apiCurrentResponse) {
        console.log(apiCurrentResponse);
        });
    });

    //forecast
    $("#fcasttestbtn").on("click", function(event) {
        $.ajax({
            url: apiFCastURL,
            method: "GET",
        }).then(function(apiFCastResponse) {
        console.log(apiFCastResponse);
        });
    });

    //UV
    $("#uvtestbtn").on("click", function(event) {
        $.ajax({
            url: apiUVURL,
            method: "GET",
        }).then(function(apiUVResponse) {
        console.log(apiUVResponse);
        });
    });

});