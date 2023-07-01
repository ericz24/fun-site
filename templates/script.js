var currentOperation = "+";
var answer = -1;
var num1 = 0;
var num2 = 0;
var correct = false;
var streaks = 0;
var totalQuestions = 0;

function consoleLog(){
	var percentage = document.getElementById('signsScrollBox').scrollTop/document.getElementById('signsScrollBox').offsetHeight;
	
	console.log(percentage);
	
	if (percentage == 0){
		console.log("+");
		if (currentOperation != "+") {
			currentOperation = "+";
			nextNums();
		}
		
		
	} else if (percentage > 0 && percentage <= 1){
		console.log("-");
		if (currentOperation != "-") {
			currentOperation = "-";
			nextNums();
		}
	} else if (percentage > 1 && percentage <= 2){
		console.log("x");
		if (currentOperation != "x") {
			currentOperation = "x";
			nextNums();
		}
	} else{
		console.log("÷");
		if (currentOperation != "÷") {
			currentOperation = "÷";
			nextNums();
		}
	}

	
}

function nextNums() {
	// if (correct == true){
		
		
		
		console.log("next");
		
		num1 = Math.floor(Math.random() * 100);
		num2 = Math.floor(Math.random() * 100);
		
		if (currentOperation == "-") {
			if (num1 < num2) {
				var temp = num1;
				num1 = num2;
				num2 = temp;
			}
		} else if (currentOperation == "÷") {
			num2 = Math.floor(Math.random() * (10 - 1) + 1); //random number from 9 to 1
			num1 = num2 * Math.floor(Math.random() * (11 - 1) + 1); // get a random multiplier from 1 (inclusive) to 11 (exclusive so 10)
		}
		
		
		document.getElementById("n1n1").innerHTML = Math.floor(num1/10);
		
		document.getElementById("n1n2").innerHTML = num1 % 10;
		
		document.getElementById("n2n1").innerHTML = Math.floor(num2/10);
		
		document.getElementById("n2n2").innerHTML = num2 % 10;
		
		correct = false;
		
		document.getElementById("totalQuestions").innerHTML = "Questions: " + totalQuestions;
	// }

}


function checkAnswer(){
	if (document.getElementById('userInput').value != '') {
		if (correct == false){
			if (currentOperation == "+"){
				answer = num1 + num2;
			} else if (currentOperation == "-"){
				answer = num1 - num2;
			} else if (currentOperation == "x"){
				answer = num1 * num2;
			} else if (currentOperation == "÷"){
				answer = Math.floor(num1 / num2);
			}
		
			if (answer == document.getElementById("userInput").value){
				correct = true;
				totalQuestions += 1
				if (currentOperation == "x" || currentOperation == "÷"){
					streaks += 3;
				}else{
					streaks ++;
				}
				
				document.getElementById("streakDisplay").innerHTML = "Streak: " + streaks;
				console.log("Correct!!!");
				document.getElementById("bigBox").style.backgroundColor = "#00e801";
				setTimeout(function(){
					document.getElementById("bigBox").style.backgroundColor = "#5A96E3";
				}, 1000)
				nextNums();
			} else {
				correct = false;
				console.log("Incorrect!!!");
				streaks = 0;
				document.getElementById("streakDisplay").innerHTML = "Streak: 0" ;
				document.getElementById("bigBox").style.backgroundColor = "red";
				setTimeout(function(){
					document.getElementById("bigBox").style.backgroundColor = "#5A96E3";
				}, 1000)
				
			}	
			document.getElementById('userInput').value = '';
		}
	}
}