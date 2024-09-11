var containerElement = document.getElementsByClassName('container')[0];
containerElement.style.cssText = `display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    background-color: #eee;
    padding: 10px;
    min-height: 50vh;
    margin: 10px auto;
    width: 50vw;`;

var card = {
    'title' : 'mostafa',
    'imgSrc' : 'https://images.pexels.com/photos/25189483/pexels-photo-25189483.jpeg?cs=srgb&dl=pexels-esrakorkmaz-25189483.jpg&fm=jpg',
    'description' : 'This is card',
    'price' : "20$"
};
var cards = [];
for (var i = 0; i < 6; i++) cards.push(card);

for (var i = 0; i < 6; i++) addCard('container', cards[i].imgSrc, cards[i].title, cards[i].description, cards[i].price);

function addCard(parent, imgSrc, title, description, price) {
    var card = document.createElement('div');
    card.classList.add('card');
    card.style.cssText = `background-color: white;
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 15px;
    padding: 15px;`

    document.getElementsByClassName(parent)[0].appendChild(card);

    var img = document.createElement('img');
    img.src = imgSrc;
    img.alt = title;
    img.style.cssText = `width: 200px;
    height: 200px;
    border-radius: 50%;`

    var titleElement = document.createElement('h2');
    titleElement.innerText = title;

    var descElement = document.createElement('p');
    descElement.innerText = description;

    var priceElement = document.createElement('p');
    priceElement.innerText = '$' + price;
    priceElement.style.cssText = `color: gray;
    font-weight: bold;
    font-style: italic;`

    card.append(img, titleElement, descElement, priceElement);
    
}