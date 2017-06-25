var onLoad = function(){
  var url = 'https://munroapi.herokuapp.com/api/munros';
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.send();


  request.addEventListener('load', function(){
  var jsonString = request.responseText;
  var munros = JSON.parse(jsonString);
  var list = populateList(munros);
  });
}

var populateList = function(munros) {
  var div = document.getElementById('main');
  munros.forEach(function(munro) {
  var ul = document.createElement('ul');
  ul.innerText = "Munro: " + munro.name + "\n" + "Height: " + munro.height + "\n" + "Latitude " + munro.latlng_lat + "\n" + "Longitude: " + munro.latlng_lng + "\n" + "Meaning: " + munro.meaning;

  div.appendChild(ul);

  });
  //
  // return div;
}

window.addEventListener('load', onLoad);
