function Calculator(skinName){
  this.skin = skinName;
}
Calculator.prototype.pingPong = function(input){
  var numberArray = [];
  for(var i = 1; i <= input; i ++){
    if (i % 15 === 0){
      numberArray.push("ping-pong");
    }else if(i % 5 === 0){
      numberArray.push("pong");
    }else if (i % 3 === 0){
      numberArray.push("ping");
    }else{
      numberArray.push(i);
    }
  }
  return numberArray;
}
exports.calculatorModule = Calculator;
