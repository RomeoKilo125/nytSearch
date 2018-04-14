let paramObject = {
  'api-key': "7f930f9b1b5c41caa08a3d472445a87c",
  'q': NULL,
  'begin_date': NULL,
  'end_date': NULL
}

makeTheCall = function() {
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param(paramObject);
  $.ajax({
    url: url,
    method: 'GET',
  }).then(function(result) {
    console.log(result);
  });
}

document.on("click", "#submit", function() {
  console.log("click");
  event.preventDefault();
  var q = $("#search-term").val();
  var a = $("#drop-down").val();
  var begin_date = $('#startDate').val();
  var end_date = $('#endDate').val()

  paramObject.q = q;
  paramObject.begin_date = begin_date;
  paramObject.end_date = end_date;
  console.log(paramObject)
});
