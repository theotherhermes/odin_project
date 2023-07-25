function createGrid() {
    let number = prompt('Enter a number');

    for (y = 0; y < number; y++) {
        const row = document.createElement('div');
        row.classList.add('row')
        container.appendChild(row);
        console.log('row')
        for (x = 0; x < number; x++) {
            const block = document.createElement('div');
            block.classList.add('block')
            row.appendChild(block);
        }
    }
}

const container = document.querySelector('.container');
const button = document.createElement('button');

container.appendChild(button);

button.textContent = 'Click'
button.addEventListener('click', createGrid);