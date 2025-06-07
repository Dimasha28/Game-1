
let randomNumber = Math.floor(Math.random() * 5) + 1;

function checkGuess() {
    console.log("Button clicked!");

    let lblH1 = document.getElementById("h1Lbl");
    let inputText = document.getElementById("txtInput").value;

    let userGuess = parseInt(inputText);

    if (userGuess === randomNumber) {
        lblH1.innerText = "Correct! You guessed it!";
        document.getElementById("imgBox").innerHTML = 
            '<img width="300" src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-131.gif" alt="Congratulations">';
        alert("You win!");
    } else {
        lblH1.innerText = "Try Again!";
        document.getElementById("imgBox").innerHTML = "";
    }

    console.log("Random number was:", randomNumber);
}
