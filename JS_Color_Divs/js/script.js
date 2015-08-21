//defining html var to empty string to add onto..
var html = '';
//defining var rgbColor
var rgbColor;

//defining randomRGB function
function randomRGB() {
  //Math.random() will get a random number bt 0 and 1 and multiply it by 256
  //Math.floor() will round it down
 return Math.floor(Math.random() * 256 );
}
//this function gives us a number value to be added to the rgb() property for background color


//this function will call the randomRGB function 3 times to get 3 random numbers bt 0 and 256
//these 3 numbers will be added to the rgb(0,0,0) property for ie
//then we will add it to a <div style="background-color: rgb(0,0,0)"></div>
function randomColor() {
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}

function print(message) {
  document.write(message);
}

//for loop will run 100 times
for (var i = 0; i < 100; i += 1) {
  //create a random background color and assign to rgbColor variable
  rgbColor = randomColor();

  //add the rgb color as the value to the background color property and add to html string.
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

//this will write the div to the html document.
print(html);









