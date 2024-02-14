// function play(){
//    const homeSection = document.getElementById('home-section');
//    homeSection.classList.add('hidden');

//    const playGroundSection = document.getElementById('play-ground');
//    playGroundSection.classList.remove('hidden');
// }
function play(){
    hideElementById('home-section')
    hideElementById('final-score')
    showElementById('play-ground')
    
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame()
}

function gameOver(){
hideElementById('play-ground')
showElementById('final-score')


const finalScore = getTextElementValueById('current-score');
setTextElementValueById('last-score', finalScore);


const currentAlphabet = getElementTextById ('Current-alphabet')
removeBackgroundColor(currentAlphabet);

}


function continueGame(){
 const alphabet = getARandomAlphabet();
 const currentAlphabet = document.getElementById('Current-alphabet');
 currentAlphabet.innerText = alphabet;

setBackgroundColor(alphabet);
}


function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    if(playerPressed === "Escape"){
        gameOver();
    }
    const currentAlphabet = document.getElementById ('Current-alphabet');
    const currentAlphabetText = currentAlphabet.innerText;
    const exceptedAlphabet = currentAlphabetText.toLowerCase();

    if(playerPressed === exceptedAlphabet){
        removeBackgroundColor(exceptedAlphabet);
       const currentScore = getTextElementValueById('current-score')
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        const newScore = currentScore + 1;
        setTextElementValueById('current-score', newScore);
        continueGame();
    }else{
       const currentLife = getTextElementValueById('current-life')
    //   const currentLifeElement = document.getElementById('current-life');
    //   const currentLifeText = currentLifeElement.innerText;
    //   const currentLife = parseInt(currentLifeText);
      const newLife = currentLife - 1;
      setTextElementValueById('current-life', newLife);
      if(newLife === 0 ){
        gameOver();
      }
    }
}

document.addEventListener ('keyup', handleKeyboardButtonPress)