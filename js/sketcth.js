const gridContainer = document.querySelector('.grid-container');
const quantity = document.querySelector('#quantity');
const buttons = document.querySelectorAll('button');
let click = true;
let color = 'black';


createGrid = () => {
    for(let i = 0; i <= 256; i++){
        const div = document.createElement('div');
        div.classList.add('square');
        gridContainer.appendChild(div);
    }
}; 


updateGrid = () => {
    gridContainer.innerHTML = '';
    gridContainer.style.setProperty(
        'grid-template-columns',
        `repeat(${quantity.value}, 2fr)`
    );
    gridContainer.style.setProperty(
        'grid-template-rows',
        `'repeat(${quantity.value}, 2fr)`
    );
    if(quantity.value > 100){
        document.querySelector('#error').textContent = 'You exceeded the limit "100"';
    }
    else{
        for(let i = 0; i < quantity.value * quantity.value; i++){
            const div = document.createElement('div');
            div.addEventListener('mouseover', colorSquare);
            div.classList.add('square');
            gridContainer.appendChild(div);
        }
    }
    
};

quantity.addEventListener('change', updateGrid);

function colorSquare(){
    if (click) {
        this.style.background = color;
    }
   
}

function changeColor(choice){
    color = choice;
}


//reset 
 document.querySelector('#reset').addEventListener('click', function(){
    gridContainer.innerHTML = '';
    quantity.value = '';
    gridContainer.style.setProperty('grid-template-columns',`repeat(16,2fr)`);
    gridContainer.style.setProperty('grid-template-rows', `repeat(16,2fr)`);
 });


document.querySelector('body').addEventListener('click', () => {
    click = !click;
});
createGrid();