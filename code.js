document.addEventListener('DOMContentLoaded', () => {

    //card options;
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        }
        
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.getElementById('grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChoosen = [];
    let cardsWon = [];
    let cardsChoosenId = [];

    //creating board;
    function createBoard(){
        for(let i=0;i<cardArray.length;i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.setAttribute('class', 'block');
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }


    //check for matches;
    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChoosenId[0];
        const optionTwoId = cardsChoosenId[1];
        if(cardsChoosen[0] === cardsChoosen[1]){
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cardsWon.push(cardsChoosen);
        } else{
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            alert('sorry, try again');
        }
        cardsChoosen = [];
        cardsChoosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = "Congratulations! you found them all";
        }

    }



    //flip your card;
     function flipCard(){
         let cardId = this.getAttribute('data-id');
         cardsChoosen.push(cardArray[cardId].name);
         cardsChoosenId.push(cardId);
         this.setAttribute('src', cardArray[cardId].img);
         if(cardsChoosen.length === 2){
             setTimeout(checkForMatch, 500);
         }
     }

    createBoard();

})