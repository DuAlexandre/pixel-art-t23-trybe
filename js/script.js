// Create random color

const randomRgb = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`
}

const randomColors = () => {
    for (let i = 0; i <= 9; i += 1) {
        let colors = document.querySelectorAll('.color');
        colors[i].style.backgroundColor = randomRgb()
    }
}

randomColors();

//Button New colors

const newColors = document.querySelector('#newColor');
newColors.addEventListener('click', () => {
    return randomColors();
})

// Create Board

const createBoard = (input) => {
    const pixelBoard = document.querySelector('#board');
    let pixel = '';
    for (let linha = 0; linha < input; linha += 1) {
        for (let coluna = 0; coluna < input; coluna += 1) {
            pixel += `<div class="pixel" style="width: ${(550 - input) / input}px; height: ${(550 - input) / input}px;"></div>`
        }
    }
    pixelBoard.innerHTML = pixel;
}

createBoard(10);

// Color Board

const colorBoard = () => {
    let pixelBoard = document.querySelector('#board');
    pixelBoard.addEventListener('click', (event) => {
        let pixel = event.target;
        if (pixel.classList.contains('pixel')) {
            const selectedColor = document.querySelector('.selected');
            pixel.style.backgroundColor = selectedColor.style.backgroundColor;
        }
    });
}

colorBoard();

// Select Color

const selectColor = () => {
    let colorPalette=document.querySelector('#color-palette')
    colorPalette.addEventListener('click', (event) => {
        const color = event.target;
        if (color.classList.contains('color')) {
            const selectedColor = document.querySelector('.selected');
            selectedColor.classList.remove('selected') //remove a classe
            color.classList.add('selected'); //adiciona a classe
        }
    })
}

selectColor();

// Clear Board

const clearBoard = () => {
    let clearButton = document.querySelector('#clearBoard');
    clearButton.addEventListener('click', () => {
        let pixels = document.querySelectorAll('.pixel');
        for (const pixel of pixels) {
            pixel.style.backgroundColor = 'white';
        }
    })
}

clearBoard();


// Board Size

const boardSize = () => {
    let createButton =document.querySelector('#createBoard');
    createButton.addEventListener('click', () => {
        let input = document.querySelector('#inputPixel');
        if (!input.value) {
            alert('Board inválido!')
        }
        else if (input.value < 10) {
            createBoard(10);
        }
        else if (input.value > 50) {
            createBoard(50);
        }
        else {
            createBoard(input.value)
        }
    })
}

boardSize();