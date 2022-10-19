
//let meu_site = document.querySelector('header')

//meu_site.classList.add('')

//meu_site.innerHTML = '<h1>PARROT CARD GAMES</h1>'

//console.log(meu_site)

let cards = document.querySelector('.container');

let card_quantity = 0; 

while (card_quantity < 4 || card_quantity > 14) {
    card_quantity = prompt('Porfavor coloque a quantidade de cartas que deseja jogar')
}

for(contador = 0; contador < card_quantity; contador++) {
    cards.innerHTML += `<div class="card1"> <img src="images/back.png" alt=""></div>`;
    console.log('')
}