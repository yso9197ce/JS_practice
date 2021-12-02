let answer = Math.floor(Math.random() * 100);
let lower = 0;
let upper = 99;

while(true){    
    let guess = Number(prompt(`Guess a number between ${lower} and ${upper}`));

    if(isNaN(guess)){
        alert("Please enter number!");
    }else{
        if(guess < lower || guess > upper){
            alert(`Please enter a number between ${lower} and ${upper} `)
        }else if(guess === answer){
            alert("Correct!")
            break;
        }else if(guess < answer){
            lower = guess;
        }else if(guess > answer){
            upper = guess;
        }
    }
}