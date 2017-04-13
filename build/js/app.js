(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/scripts.js":1}]},{},[2]);
