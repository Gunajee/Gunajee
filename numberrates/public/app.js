var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");
var result = document.getElementById("result");
var answer = Math.floor(Math.random() * 100) + 1;
var no_of_guesses = 10;
var guesses_num = [];

function play() {
    var user_guess = document.getElementById("textBox").value;
    if (user_guess < 1 || user_guess > 100) {
        alert("Please Enter a number Between 1 to 100");
    } else {
        if(no_of_guesses<=1){
            result.textContent = "SORRY BETTER LUCK NEXT TIME";
        }
        guesses_num.push(user_guess);
        no_of_guesses -= 1;
        if (user_guess < answer) {
            msg1.textContent = "Your Guess is Too low";
            msg2.textContent = no_of_guesses;
            msg3.textContent = "Guessed Number Are: " + guesses_num;
        } else if (user_guess > answer) {
            msg1.textContent = "Your Guess is Too High"
            msg2.textContent = no_of_guesses;
            msg3.textContent = "Guessed Number Are: " + guesses_num;
        } else if (user_guess == answer) {
            result.textContent = "CONGRATS YOU HAVE WON THE GAME";
            msg2.textContent = "";
            msg3.textContent = "";
        }
    }
}
