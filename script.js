const container = document.querySelector('.container');

for (let n = 0; n < 16; n++) {
    const lineContainer = document.createElement('div');
    lineContainer.setAttribute('class', 'horizontalLine');
    //horizontal line of square divs
    for (let i = 0; i < 16; i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'squareDiv');
        square.style.width = `${Math.floor(innerWidth / 16)}vh`;
        square.addEventListener(
            'mouseover',
            () =>
                (square.style.background = `rgb(${Math.random() * 255},${
                    Math.random() * 255
                },${Math.random() * 255}`)
        );
        square.addEventListener(
            'mouseleave',
            () => (square.style.background = 'tomato')
        );
        lineContainer.appendChild(square);
    }
    container.appendChild(lineContainer);
}

function newGrid() {
    const container2 = document.querySelector('.container');
    const body = document.querySelector('body');
    body.removeChild(container2);

    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    let ammount = prompt('What size of grid do you want?');
    for (let n = 0; n < ammount; n++) {
        const lineContainer = document.createElement('div');
        lineContainer.setAttribute('class', 'horizontalLine');
        //horizontal line of square divs
        for (let i = 0; i < ammount; i++) {
            const square = document.createElement('div');
            square.setAttribute('class', 'squareDiv');
            square.style.width = `${Math.floor(innerWidth / ammount)}vh`;
            square.addEventListener(
                'mouseover',
                () =>
                    (square.style.background = `rgb(${Math.random() * 255},${
                        Math.random() * 255
                    },${Math.random() * 255}`)
            );
            square.addEventListener(
                'mouseleave',
                () => (square.style.background = 'tomato')
            );
            lineContainer.appendChild(square);
        }
        container.appendChild(lineContainer);
    }
    body.appendChild(container);
}

// random rgb on hover
