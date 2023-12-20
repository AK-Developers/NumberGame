const ans = document.getElementById("answer");
const randomNum = Math.floor(Math.random() * 10 + 1);
let guesses = 0;
document.getElementById("submitbtn").onclick = ()=>{
    const inputNum = Number(document.getElementById("num").value);
    if (inputNum <= 10 && inputNum >= 1) {
    
        if (inputNum > randomNum) {
            guesses += 1;
            ans.innerHTML = `Guesses :${guesses}<br><b>Guessed Number is greater!</b>`;
        } else if (inputNum < randomNum) {
            guesses += 1;
            ans.innerHTML = `Guesses :${guesses}<br><b>Guessed Number is smaller!</b>`;
        } else if (inputNum == randomNum) {
            ans.innerHTML = `Guesses :${guesses}<br><b>Congrats!!! You guessed the Number</b>`;
        }
    } else {
        ans.innerHTML = `<b>Please select a number between 1-10</b>`;
    }
};
