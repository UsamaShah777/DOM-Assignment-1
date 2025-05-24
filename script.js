
  function showValues(){
    var firstName=document.getElementById('firstname').value
    var lastName=document.getElementById('lastname').value
  

  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "First Name: " + firstName + "<br>Last Name: " + lastName;


  var randomColor = getRandomColor();


  document.body.style.backgroundColor = randomColor;
}


function getRandomColor() {

  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
