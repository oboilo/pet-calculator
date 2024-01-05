var numOne = document.getElementById("first-number");
var numTwo = document.getElementById("second-number");
var numThree = document.getElementById("third-number");
var result = document.getElementById("result");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);
numThree.addEventListener("input", add);

function add(){
    var one = Number(numOne.value) || 0;
    var two = Number(numTwo.value) || 0;
    var three = Number(numThree.value) || 0;    
    var sum = Number(three*two/one);
    result.value = sum; // Set the value of the result input field to the sum
}
