<<<<<<< HEAD

let paramObject = { 'api-key': "7f930f9b1b5c41caa08a3d472445a87c"}

makeTheCall = function() {
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param(paramObject);
=======
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "7f930f9b1b5c41caa08a3d472445a87c"
});
>>>>>>> 9a4e9363cf3c76490c455281bfa781caa0ba9c5e
$.ajax({
  url: url,
  method: 'GET',
}).then(function(result) {
<<<<<<< HEAD

});
}

document.on("click", function() {


})





=======
  console.log(result);
});
>>>>>>> 9a4e9363cf3c76490c455281bfa781caa0ba9c5e
