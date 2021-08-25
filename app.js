const fabio = new Image(200,100);
fabio.src = 'images/fabio.jpeg';
const aura = new Image(200,100);
aura.src = 'images/aura.jpeg';
const day = new Image(200,100);
day.src = 'images/day.jpeg';
const kayla = new Image(200,100);
kayla.src = 'images/kayla.jpeg';
const meiling = new Image(200,100);
meiling.src = 'images/meiling.jpeg';


const dayImage = document.getElementById('day');
const meilingImage = document.getElementById('meiling');
const kaylaImage = document.getElementById('kayla');
const auraImage = document.getElementById('aura');
const fabioImage = document.getElementById('fabio');

const shuffleArray = (array)=>{

    for(let i =0; i < array.length;i++){
        const randomIndex = Math.floor(Math.random()* array.length);
        [array[i],array[randomIndex]] = [array[randomIndex],array[i]]
        // const temp = array[i];
        // array[i] = array[randomIndex];
        // array[randomIndex] = temp
    }
    
}

const imagesArray =[fabio,aura,day,kayla,meiling];

shuffleArray(imagesArray);


const input = document.getElementById('input');
const hiddenPic = document.getElementById('hidden-pic');

let target ='';

input.addEventListener('input', ()=>{
    switch(parseInt(input.value)){
      case 1:
          target = fabio;
          break;
      case 2:
        target = aura;
          break;
      case 3:
        target = day;
          break; 
      case 4:
        target = kayla;
          break;
      case 5:
        target = meiling;
          break;
      default:
          const errorMessage = document.querySelector('.error-message')
          errorMessage.innerHTML = `<p>Enter a number between 1 and 5</p>`;
          setTimeout(()=>{errorMessage.innerHTML =''},2000);  
          // setTimeout(()=>{hiddenPic.innerHTML = ''},2000);          
    }
    hiddenPic.appendChild(target);
    setTimeout(()=>{hiddenPic.innerHTML = ''},2000);
     
})

const correctGuess = document.getElementById('correct-guess');
const correctGuessText = document.getElementById('correct-guess-text');
const attemptsElement = document.getElementById('remaining-attempts');
//name html variables with a html postfix
document.getElementById('guess-one').addEventListener('click', ()=>{
    checkWinner(imagesArray[0]); 
});

document.getElementById('guess-two').addEventListener('click', ()=>{
    checkWinner(imagesArray[1])
});

document.getElementById('guess-three').addEventListener('click', ()=>{
    checkWinner(imagesArray[2])
});

document.getElementById('guess-four').addEventListener('click', ()=>{
    checkWinner(imagesArray[3])
});

document.getElementById('guess-five').addEventListener('click', ()=>{
    checkWinner(imagesArray[4])
});


let counter = 0;

function checkWinner(image){
    correctGuess.innerText ='';
    if(target === image){
        correctGuessText.innerText = "Correct guess";
    }else{
        counter ++;
        correctGuessText.innerText = "Wrong guess";
        updateGuessAttemptsDisplay(counter)
    } 
    correctGuess.appendChild(image);
    setTimeout(()=>{correctGuessText.innerText=""},2000)
}


const updateGuessAttemptsDisplay = (counterArg,isCorrectGuess) => {
  if(isCorrectGuess){
    attemptsElement.innerText =''; 
     }else {
         
      if(counterArg > 2){
          attemptsElement.innerText = "Exceeded guesses";
      }else{
          attemptsElement.innerText = `You have ${3 - counterArg} guesses left`; 
        ///use css to disable
        //pointer events
      }
  }
}









