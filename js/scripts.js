//back easy
function pingPong(input){
  //debugger;
  var numberArray = []
  var number = ""
  for(var i = 1; i <= input; i ++){
    if (i % 15 === 0){
      numberArray.push("pingpong");
    }else if(i % 5 === 0){
      numberArray.push("pong");
    }else if (i % 3 === 0){
      numberArray.push("ping")
    }else{
      numberArray.push(i);
    };
  };
  return numberArray
};





//front end
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($(".userInput").val());
    var result = pingPong(userInput)
    console.log(result);
    result.forEach(function(number){
      console.log(number);
      $(".list").append("<li>" + number + "</li>");
    });
  });
});
