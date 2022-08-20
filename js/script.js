//Create random color

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