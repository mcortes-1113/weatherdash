$(document).ready(function(){

    var searchHistory = [];
    var lastCity;
    var searchCount;

    searchHistory = localStorage.getItem("searchHistory");
    searchHistory = searchHistory ? JSON.parse(searchHistory) : [];
    historyArr = searchHistory.data;
    historyArr = historyArr ? searchHistory = historyArr : searchHistory = []

    lastCity = searchHistory[0];
    lastCity = lastCity ? lastCity = lastCity : "no recent searches";

    // console.log("last search: " + lastCity);

    // console.log(searchHistory);

    searchCount = searchHistory.length;
    // console.log("search count: " + searchCount);  

    $("#searchButton").on("click", function(event) {


        var currentSearch = $("#userInput").val();
        if (searchCount > 4) {
            // searchHistory.reverse();
            searchHistory.pop();
            searchHistory.reverse();
            searchHistory.push(currentSearch);
            searchHistory.reverse();
        }   else {
            searchHistory.reverse();
            searchHistory.push(currentSearch)
            searchHistory.reverse();
        }
        searchCount = searchHistory.length;
        // console.log("search history size: " + searchHistory.length);
        // console.log("new search count: " + searchCount);
        // console.log(searchHistory);

        var searchObj = {
            data: searchHistory,
            lastCity: currentSearch
        }
        localStorage.setItem("searchHistory", JSON.stringify(searchObj));
        // console.log(JSON.parse(localStorage.searchHistory));

    })

});