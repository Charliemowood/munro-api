// this is called app js

var app = function(){
  // this gets the first button
  var button = document.querySelector('button');

  // listen for click

  button.addEventListener('click', handleButtonClick);

  var input = document.querySelector('input');
  input.addEventListener('keyup', handleKeyPress);

  var select = document.querySelector('select');
  select.addEventListener('change', handleSelectChanged);

}

var handleSelectChanged = function (event) {
  console.log(event);
  var pTag = document.querySelector('#select-result');
  // this is the select
  pTag.innerText = this.value + '. Excellent!';
}

var handleKeyPress = function () {
  var pTag = document.querySelector('#text-result');
  var input = document.querySelector('input');
  //// this has context on input because handleKeyPress is there.
  pTag.innerText = this.value;
  pTag.innerText = input.value;
  pTag.innetText = event.target.value;
}


var counter = 0;


var handleButtonClick = function () {
  // # because is id
  counter ++;
  var pTag = document.querySelector('#button-result');
  pTag.innerText = 'Woa due, I totally got clicked on! ' + counter + " times";

}

window.addEventListener('load', app);

// this always point to an object // where a function is being executed
