/*Arrays para armar los atributos de las cartas*/
const cardSymbols = ["♦", "♥", "♠", "♣"];
const cardNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1];

/*Variables para las funciones*/
const cardsNumber = document.getElementById("input");
const drawButton = document.getElementById("drawButton");
const sortButton = document.getElementById("sortButton");
const drawedCards = document.getElementById("drawedCards");
const cardsSort = document.getElementById("cardsSort");

/*Function para generar la estructura interna de la carta*/
function cardContent() {

    const randomCardSymbolIndex = Math.floor(Math.random() * cardSymbols.length);
    const randomCardNumberIndex = Math.floor(Math.random() * cardNumber.length);
    const randomCardSymbol = cardSymbols[randomCardSymbolIndex];
    const randomCardNumber = cardNumber[randomCardNumberIndex];

    let cardAtributes = {
        symbol: "",
        number: ""
    }

    cardAtributes.symbol = randomCardSymbol;
    cardAtributes.number = randomCardNumber;
    return cardAtributes;
}

/*Generar el array que contendrá las cartas que sean necesarias*/
let cards = [];
drawButton.addEventListener("click", e => {
    drawedCards.innerHTML = "";
    cards = [];

    let value = cardsNumber.value;
    if (!Number.isInteger(+value) || +value <= 0) {
        alert("Only positive integers are allowed.");
        return;
    }

    for (let i = 0; i < cardsNumber.value; i++) {
        cards.push(cardContent());
    }

    listOfDrawedCards(cards);
});

/*Recibir las cartas y mostrarlas*/
function listOfDrawedCards(cards) {

    for (let i = 0; i < cards.length; i++) {

        let background = document.createElement("div");
        background.id = "bckgrnd"
        drawedCards.appendChild(background);

        let topSide = document.createElement("div");
        topSide.id = "tpS"
        topSide.innerHTML = cards[i].symbol;
        background.appendChild(topSide);

        if (cards[i].symbol == "♦" || cards[i].symbol == "♥") {
            topSide.style.color = "red";
        }

        let midSide = document.createElement("div");
        midSide.id = "mdS"
        midSide.innerHTML = cards[i].number;
        background.appendChild(midSide);

        if (cards[i].symbol == "♦" || cards[i].symbol == "♥") {
            midSide.style.color = "red";
        }

        let botSide = document.createElement("div");
        botSide.id = "btS"
        botSide.innerHTML = cards[i].symbol;
        botSide.style.transform= "rotate(180deg)"
        background.appendChild(botSide);

        if (cards[i].symbol == "♦" || cards[i].symbol == "♥") {
            botSide.style.color = "red";
            botSide.style.transform= "rotate(180deg)";
        }
    }
}

/*Ordenar y mostras iteraciones */
sortButton.addEventListener("click", e => {
    // Get the div element with the id "cardsSort" and clear its contents
    let cardsSortDiv = document.getElementById("cardsSort");
    cardsSortDiv.innerHTML = "";

    let len = cards.length;

    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (cards[j].number < cards[minIndex].number) {
                minIndex = j;
            }
        }
        let tmp = cards[i];
        cards[i] = cards[minIndex];
        cards[minIndex] = tmp;

        /*Div para cada iteración */
        let iterationDiv = document.createElement("div");
        iterationDiv.id = "iteration";
        
        /*Asignar número de iteración afuera del div */
        let iterationNumber = document.createElement("h3");
        iterationNumber.innerText = `${i + 1}: `;
        iterationNumber.style.display = "inline-block";
        iterationNumber.style.verticalAlign = "top";
        iterationDiv.appendChild(iterationNumber);

        /*Div que contendrá el resto de divs */
        let cardsContainer = document.createElement("div");
        cardsContainer.style.display = "inline-block";
        iterationDiv.appendChild(cardsContainer);

        /*Mostrar cada iteración en su respectivo div */
        for (let k = 0; k < cards.length; k++) {
            let background = document.createElement("div");
            background.id = "bckgrnd"
            background.style.display = "inline-block";
            background.style.marginRight = "10px";
            cardsContainer.appendChild(background);

            let topSide = document.createElement("div");
            topSide.id = "tpS"
            topSide.innerHTML = cards[k].symbol;
            background.appendChild(topSide);

            if (cards[k].symbol == "♦" || cards[k].symbol == "♥") {
                topSide.style.color = "red";
            }

            let midSide = document.createElement("div");
            midSide.id = "mdS"
            midSide.innerHTML = cards[k].number;
            background.appendChild(midSide);

            if (cards[k].symbol == "♦" || cards[k].symbol == "♥") {
                midSide.style.color = "red";
            }

            let botSide = document.createElement("div");
            botSide.id = "btS"
            botSide.innerHTML = cards[k].symbol;
            botSide.style.transform= "rotate(180deg)"
            background.appendChild(botSide);

            if (cards[k].symbol == "♦" || cards[k].symbol == "♥") {
                botSide.style.color = "red";
                botSide.style.transform= "rotate(180deg)";
            }
        }

        /*Enviar todo al div de HTML*/
        cardsSortDiv.appendChild(iterationDiv);
    }
});
