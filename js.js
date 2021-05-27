let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector('.blue');
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

let shuffleOrder = () => {

    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElementy(order[i])
        lightColor(elementColor, Number(i) + 1)
    }
}

let lightColor = (element, number) => {
    number = number * 500;

    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    });
}

// Checa se os botões clicados são os mesmos da ordem gerado no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {

        if(clickedOrder[i] != order[i]) {
            gameOver()
            break;
        }
    }
        if(clickedOrder.length == order.length) {
            alert(`Pontuação: ${score}\nVocê acertou! Passando para o próximo nivel!`)
            nextLevel();
        }
}


// função para o click do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElementy(color).classList.add('selected')

    setTimeout(() => {
        createColorElementy(color).classList.remove('selected')
        checkOrder();
    }, 250);
}

// função que retorna a cor
let createColorElementy = (color) => {
    if(color == 0) {
        return green;
    } else if (color == 1) { 
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color ==  3) {
        return blue;
    }
}


// Função para o próximo nivel
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// função para GameOver

let gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo!\nClique em ok para iniciar o jogo novamente!`)
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert("Bem vindo ao Gênesis! Iniciando novo jogo" )

    score = 0;
    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();