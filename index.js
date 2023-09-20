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

 // duplicating the cardd basicallss 
   const gameCard = cardsArray.concat(cardsArray)
   console.log(gameCard);


const parentDiv = document.querySelector('#card-section')

for (let i=0; i < gameCard.length ; i++){

    const childDiv = document.createElement('div')

    childDiv.classList.add('card')

    childDiv.dataset.name = gameCard[i].name ;

    childDiv.style.backgroundImage = `url(${gameCard[i].img})`;

    parentDiv.append(childDiv)
    
     
}