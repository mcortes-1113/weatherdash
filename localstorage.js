var searchHistory = []; //array to hold recent searches
var lastCity; //variable to hold last city searched
var searchCount; //variable to hold the number of recent searches

    function updateSearchItems(event){
        var currentSearch = $("#userInput").val();
        searchCount = searchHistory.length;
        if (searchCount > 9) {
            searchHistory.pop();
            searchHistory.reverse();
            searchHistory.push(currentSearch);
            searchHistory.reverse();
            removeSearchItems(event);
            populateSearchItems(searchHistory);
        }   else {
            searchHistory.reverse();
            searchHistory.push(currentSearch)
            searchHistory.reverse();
            removeSearchItems(event);
            populateSearchItems(searchHistory);
        }
        var searchObj = {
            data: searchHistory,
            lastCity: currentSearch
        }
        localStorage.setItem("searchHistory", JSON.stringify(searchObj));
    };

        function populateSearchItems(searchHistory){
            var searchItem;
            for (var i = 0; i < searchHistory.length; i++){
                searchItem = searchHistory[i];
                searchItemEl = "<button type=submit class=searchItem data-city=" + searchItem + ">" + searchItem + "</button>";
                $("#searchHistoryItems").append(searchItemEl);
            }};

                function removeSearchItems(event){
                    $(".searchItem").remove();
                }



$(document).ready(function(){

    //check if local storage is not empty and populate search history array
    searchHistory = localStorage.getItem("searchHistory");
    searchHistory = searchHistory ? JSON.parse(searchHistory) : [];
    searchArr = searchHistory.data;
    searchArr = searchArr ? searchHistory = searchArr : searchHistory = [];

    //retrieve the last searched city and assign it to last city
    lastCity = searchHistory[0];
    lastCity = lastCity ? lastCity = lastCity : "honolulu";

    //check number of recent searches and assign it to variable
    searchCount = searchHistory.length;

    populateSearchItems(searchHistory);
    apiCity = lastCity;
    getWeather(event);

});