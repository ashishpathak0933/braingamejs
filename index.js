let cardsArray = [
    {
        'name': 'CSS',
        'img': 'images/css.png',
    },
    {
        'name': 'HTML',
        'img': 'images/html.png',
    },
    {
        'name': 'jQuery',
        'img': 'images/jquery.png',
    },
    {
        'name': 'JS',
        'img': 'images/javascript.png',
    },
    {
        'name': 'Node',
        'img': 'images/nodejs.svg',
    },
    {
        'name': 'Python',
        'img': 'images/pythonn.png',
    }
];
const parentDiv = document.querySelector('#card-section')

 // duplicating the cardd basicallss 
   const gameCard = cardsArray.concat(cardsArray)
   console.log(gameCard); 
   
   
   
// Note that this method creates a new shuffled array instead of modifying the original one.
   const myNumbers = (array) => {
       for (let i = array.length - 1; i > 0; i--) {
         let j = Math.floor(Math.random() * (i + 1))
          console.log(i, j)
          let temp = array[i]
          array[i] = array[j]
           array[j] = temp
       }
       return array
    }
   
    const shuffledChild = myNumbers(gameCard)
  
   
   // let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());
  // counter var 
  let clickCount = 0 ;



   ///
   parentDiv.addEventListener('click', (event)=>{
    let curCard = event.target ;
    clickCount ++
    if(clickCount < 3 ) {
        
        curCard.classList.add('card_selected')
    }
     if (curCard.id === "card-section") {
        return false 
     }
     
   })


for (let i=0; i < shuffledChild.length ; i++){

    const childDiv = document.createElement('div')

    childDiv.classList.add('card')

    childDiv.dataset.name = shuffledChild[i].name ;

    childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;

    parentDiv.append(childDiv)
    
     
}