var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "7f930f9b1b5c41caa08a3d472445a87c"
});
$.ajax({
  url: url,
  method: 'GET',
}).then(function(result) {
  console.log(result);
});
