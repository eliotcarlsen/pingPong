//back easy
function pingPong(input){
  debugger;
  for(var i = 1; i <= input; i ++){
    console.log(i);
  };
};





//front end
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($(".userInput").val());
    var result = pingPong(userInput)
    console.log(userInput)

  });
});
