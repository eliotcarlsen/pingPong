var Calculator = require('./../js/scripts.js').calculatorModule;
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($(".userInput").val());
    var simpleCalculator = new Calculator("hot pink");
    var result = simpleCalculator.pingPong(userInput)
    console.log(result);
    $(".pong").show();
    $(".list").empty();
    result.forEach(function(number){
      $(".list").append("<li>" + number + "</li>");
    });
  });
});
