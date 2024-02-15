function play()
{
    const home = document.getElementById("home");
    home.classList.add("hidden");
    const playGround = document.getElementById("play-ground");
    playGround.classList.remove("hidden");
    continueGame();
}

function continueGame()
{
   const index =  getRandomAlphabet();
//    console.log(index);
    const currentAlphabet = document.getElementById("current-alphabet");
    currentAlphabet.innerText = index;
    setBackgroundColor(index);
}

function getRandomAlphabet()
{
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split('');
    // console.log(alphabets);
    const randomIndex = Math.round(Math.random() * 25);
    // console.log(randomIndex);
    const alphabet = alphabets[randomIndex];
    // console.log(randomIndex, alphabet);
    return alphabet;
}

function setBackgroundColor(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.add("bg-amber-500");
}

function removeBackgroundColor(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.remove("bg-amber-500");
}

function keybordButtonHandel(e)
{
    const playerKey = e.key;
    console.log("Key Press" ,playerKey);


    if(playerKey === 'Escape')
    {
        gameOver();
    }
    
    
    const currentAlphabetElement = document.getElementById("current-alphabet").innerText;
    const expectAlphabet = currentAlphabetElement.toLowerCase();
    // console.log(expectAlphabet);

    if(playerKey == expectAlphabet)
    {
        console.log("You got a point");
        const currentScoreElement = document.getElementById("current-score");
        const currentScoreText = currentScoreElement.innerText;
        // console.log(currentScoreText);
        const currentScore = parseInt(currentScoreText);
        const updateScore = currentScore + 1;
        currentScoreElement.innerText = updateScore;


        removeBackgroundColor(expectAlphabet);
        continueGame();
    }else{
        // console.log("You loss your health");
        const currentlifeElement = document.getElementById("current-life");
        const currentLifeText = currentlifeElement.innerText;
        // console.log(currentLifeText);
        const currentLife = parseInt(currentLifeText);
        // console.log(currentLife);
        const updateLife = currentLife - 1;
        if(updateLife >= 0)
        {
            currentlifeElement.innerText = updateLife;
            removeBackgroundColor(expectAlphabet);
            continueGame();
        }else{
            // console.log("No health");

           
               const playGround = document.getElementById("play-ground");
                playGround.classList.add("hidden");
                const scoreBoard = document.getElementById("score-board");
                scoreBoard.classList.remove("hidden");

                const getUpdateScore = document.getElementById("current-score").innerText;
                const finalScore = parseInt(getUpdateScore);
                console.log(finalScore);

                const scoreElement = document.getElementById("score");
                scoreElement.innerText = finalScore; 
            
            
        }
        
    }
}

function playAgain()
{
    const play = document.getElementById("score-board");
    play.classList.add("hidden");
    const playBack = document.getElementById("play-ground");
    playBack.classList.remove("hidden");

    document.getElementById("current-life").innerText = 5;
    document.getElementById("current-score").innerText = 0;
}

function gameOver()
{
    const playGround = document.getElementById("play-ground");
    playGround.classList.add("hidden");
    const scoreBoard = document.getElementById("score-board");
    scoreBoard.classList.remove("hidden");

    const getUpdateScore = document.getElementById("current-score").innerText;
    const finalScore = parseInt(getUpdateScore);
    console.log(finalScore);

    const scoreElement = document.getElementById("score");
    scoreElement.innerText = finalScore; 
}

document.addEventListener("keyup" ,keybordButtonHandel);