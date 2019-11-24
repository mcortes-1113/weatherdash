$(document).ready(function(){

    var searchHistory = [];

    var searchCount;

    $("#searchtestbtn").on("click", function(event) {
        searchHistory = localStorage.getItem("searchHistory");
        searchHistory = searchHistory ? JSON.parse(searchHistory) : [];
        historyArr = searchHistory.data;
        historyArr = historyArr ? searchHistory = historyArr : searchHistory = []

        console.log(searchHistory);

        searchCount = searchHistory.length;
        console.log("search count: " + searchCount);  

        var currentSearch = $("#userSearchInput").val();
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
        console.log("search history size: " + searchHistory.length);
        console.log("new search count: " + searchCount);
        console.log(searchHistory);

        var searchObj = {
            data: searchHistory
        }
        localStorage.setItem("searchHistory", JSON.stringify(searchObj));
        console.log(JSON.parse(localStorage.searchHistory));

        var lastSearch;
    })



    //function to remove last array element using pop and add new element using unshift

});