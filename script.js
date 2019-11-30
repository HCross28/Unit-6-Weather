$(document).ready(function(){

// Search Card Variables, Includes User Input, and the search history and it's nested lis
var srch = document.getElementById("#input");
var srcHx = document.getElementById("#srchx");
var srcHxList = document.getElementsByClassName(".srchx-li");

//Main Card Variables, these vars will be the current day's result of the search
var crntCityDate = document.getElementById("#title");
var temp = document.getElementById("#temp");
var hum = document.getElementById("#hum");
var wind = document.getElementById("#wind");
var uv = document.getElementById("#uv");

//5 Day Forecast Vars ---------------------------

//Day One
var dayOneDate = document.getElementById("#day-one");
var dayOneTemp = document.getElementById("#day-one-temmp");
var dayOneHum = document.getElementById("#day-one-hum");

//Day Two
var dayTwoDate = document.getElementById("#day-two");
var dayTwoTemp = document.getElementById("#day-two-temmp");
var dayTwoHum = document.getElementById("#day-two-hum");

//Day Three
var dayThreeDate = document.getElementById("#day-three");
var dayThreeTemp = document.getElementById("#day-three-temmp");
var dayThreeHum = document.getElementById("#day-three-hum");

//Day Four
var dayFourDate = document.getElementById("#day-four");
var dayFourTemp = document.getElementById("#day-four-temmp");
var dayFourHum = document.getElementById("#day-four-hum");

//Day Five
var dayFiveDate = document.getElementById("#day-five");
var dayFiveTemp = document.getElementById("#day-five-temmp");
var dayFiveHum = document.getElementById("#day-five-hum");

//End 5 Day Vars ---------------------------------

//API Info ==========================================================

function buildQueryURL() {
    var queryURL= "api.openweathermap.org/data/2.5/forecast?";
    // API Key a77d24e09e19cc178f1b3fee67975325
    var queryParams = { "api-key": "032e56ab27b59813544308bee5029b64" };

    queryParams.q = $("#input")
        .val()
        .trim();

    console.log("------------/nURL: " + queryURL + "/n-------------");
    console.log(queryURL + $.param(queryParams));
    return queryURL + $.param(queryParams);

}

var queryURL = buildQueryURL();

$.ajax({
    url: queryURL,
    method: "GET"
  }).then();


});