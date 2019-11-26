
    var searchHistory = [];
    var lastCity;
    var searchCount;

    searchHistory = localStorage.getItem("searchHistory");
    searchHistory = searchHistory ? JSON.parse(searchHistory) : [];
    historyArr = searchHistory.data;
    historyArr = historyArr ? searchHistory = historyArr : searchHistory = []

    lastCity = searchHistory[0];
    lastCity = lastCity ? lastCity = lastCity : "no recent searches";

    searchCount = searchHistory.length;

    populateSearchItems(event);

    function populateSearchItems(event){
        var searchItem;
        searchHistory.reverse();
        for (var i = 0; i < searchHistory.length; i++){
            searchItem = searchHistory[i];
            searchItemEl = "<button class=searchItem data-city=" + searchItem + ">" + searchItem + "</button><br>";
            $("#searchHistoryItems").prepend(searchItemEl);
        }};

    $("#searchButton").on("click", function(event) {
        event.preventDefault();
        var currentSearch = $("#userInput").val();
        if (searchCount > 9) {
            searchHistory.pop();
            searchHistory.reverse();
            searchHistory.push(currentSearch);
            searchHistory.reverse();
            populateSearchItems(event)
        }   else {
            searchHistory.reverse();
            searchHistory.push(currentSearch)
            searchHistory.reverse();
            populateSearchItems(event)
        }
        var searchObj = {
            data: searchHistory,
            lastCity: currentSearch
        }
        localStorage.setItem("searchHistory", JSON.stringify(searchObj));
    });

    $(document).ready(function(){

});