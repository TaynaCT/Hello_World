// Hello from DEV !!! 
var user = "JaneDoe";
var password = "hello world!";
console.log(password);
console.log(user);


var x = document.getElementById("demo");
var longitude;
var latitude;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
	longitude = position.coords.longitude;
	latitude = position.coords.latitude;
	
  x.innerHTML = "Latitude: " + latitude +
  "<br>Longitude: " + longitude;
}


console.log(password + x);

// This is a new comment
// HEllo world!! 
//Hello FROM MAINNNN!!!!!!!!!!!!!!!!!!!!