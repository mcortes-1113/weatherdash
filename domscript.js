// variables for current weather section

    // var city;
    // var lat;
    // var lon;
    var date;
    var iconCode;
    var iconImage;
    // var currentTemp;
    // var humidity;
    // var wind;
    // var UV;

// variables for forecast section

    var currentDate;
    var FCiconCode;
    var FCiconImage;
    var FCtemp;
    var FChumidity;

// new elements

    // var cityEl = $("<span>" + city + "</span>");
    // var currentTempEl = $("<span>" + currentTemp + "</span>");
    // var humidityEl = $("<span>" + humidity + "</span>");
    // var windEl = $("<span>" + wind + "</span>");
    // var UVEl = $("<span>" + UV + "</span>");

    function createCurrentElements(apiCurrentResponse, UV) {
        var city = 'city: ' + apiCurrentResponse.name;
        var currentTemp = 'temp: ' + apiCurrentResponse.main.temp + 'F';
        var humidity = 'humidity: ' +apiCurrentResponse.main.humidity + '%';
        var wind = 'wind speed: ' + apiCurrentResponse.wind.speed + 'mph';
        var UV = 'UV index: ' + apiUVResponse.value;

        console.log(UV);
        console.log(apiUVResponse.value);

        
            var cityEl = $("<span>" + city + "</span><br>");
            var currentTempEl = $("<span>" + currentTemp + "</span><br>");
            var humidityEl = $("<span>" + humidity + "</span><br>");
            var windEl = $("<span>" + wind + "</span><br>");
            var UVEl = $("<span>" + UV + "</span><br>");

    
       $('#current').prepend(cityEl);
       $('#current').prepend(currentTempEl);
       $('#current').prepend(humidityEl);
       $('#current').prepend(windEl);
       $('#current').prepend(UVEl);
    };

    $(document).ready(function(){



});