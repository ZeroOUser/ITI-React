function cardDetails() {
    var title = document.getElementsByName('title')[0].value;
    var imgSrc = document.getElementsByName('imgsrc')[0].value;
    var desc = document.getElementsByName('description')[0].value;
    var price = document.getElementsByName('price')[0].value;
    addCard('container', imgSrc, title, desc, price);
}
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