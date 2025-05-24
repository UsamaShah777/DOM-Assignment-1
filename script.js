// function showValues() {
//   var firstName = document.getElementById("firstname").value;
//   var lastName = document.getElementById("lastname").value;

  function showValues(){
    var firstName=document.getElementById('firstname').value
    var lastName=document.getElementById('lastname').value
  

  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "First Name: " + firstName + "<br>Last Name: " + lastName;

  // Random color generate karna
  var randomColor = getRandomColor();

  // Background color set karna
  document.body.style.backgroundColor = randomColor;
}

// Random HEX color banane wala function
function getRandomColor() {
  // Random HEX color e.g., #a3e12f
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
