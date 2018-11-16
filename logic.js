/** HTML elements **/
var submitBtn = $("#submit-btn")
var clearBtn = $("#clear-btn")
var searchTerm = $("#search-term")
var numRecords = $("#num-records")
var startYear = $("#tart-year")
var endYear = $("#end-year")
var topArticles = $("#top-articles")


var q = "trump"
// YYYY/MM/DD
var beginDate = "20181001"
var endDate = "20181102"
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += `?${apiKey}${q}${beginDate}${endDate}`

function getData(url) {
  var results

  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(response) {
    results = response
    console.log(results)
  }).fail(function(err) {
    console.log(err)
  })
}