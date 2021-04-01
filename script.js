console.log('javascript');


$(document).ready(function(){

  $("#menu, #cart, #pay").hide();

  $("#homeNav").click(function(){
    $("#home").show();
    $("#menu, #cart, #pay").hide();
  });

  $("#menuNav").click(function(){
    $("#menu").show();
    $("#home, #cart, #pay").hide();
  });

  $("#cartNav").click(function(){
    $("#cart").show();
    $("#menu, #home, #pay").hide();
  });

  $("#payNav").click(function(){
    $("#pay").show();
    $("#menu, #cart, #home").hide();
  });


  $("#mainMenu").hide();

  $("#main").click(function(){
    $("#mainMenu").show();
    $("#startersMenu, #drinksMenu, #dessertMenu").hide();
  });


});
var sumPrice =0;
document.getElementById('cheeseBurger').addEventListener('click', function(){
  // alert("hello"); // alert function will display the text hello
  // var is the keyword which is used for declaring variables
  // every js statement ends with a semicolon
  var itemName = "Cheese Burger"; // assign Cheese Burger to variable itemName
  var price = 10; // assign numeric value 10 to the variable price
  sumPrice += price; // sumPrice = sumPrice + price
  document.getElementById('itemName').innerHTML += itemName + "<br>";
  document.getElementById('price').innerHTML += price + "<br>";
});

document.getElementById('beefBurger').addEventListener('click', function(){
  // alert("hello"); // alert function will display the text hello
  // var is the keyword which is used for declaring variables
  // every js statement ends with a semicolon

  //parseInt(price) to convert a string into integer
  //parsefloat(price) to convert a string into real numbers (with decimal point)

  var itemName = "Beef Burger"; // assign Cheese Burger to variable itemName
  var price = 15; // assign numeric value 10 to the variable price
  sumPrice += price; // sumPrice = sumPrice + price
  document.getElementById('itemName').innerHTML += itemName + "<br>";
  document.getElementById('price').innerHTML += price + "<br>";
});

document.getElementById('calculate').addEventListener('click', function(){
  document.getElementById('total').innerHTML += "NZ $ " + sumPrice;
})
