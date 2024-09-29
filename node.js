const container = document.querySelector('#container');

for (i = 0; i < 256; i++){
    const gridSquare = document.createElement("div");
    gridSquare.addEventListener('mouseover', () =>{
        gridSquare.style.backgroundColor = 'black';
    })
    gridSquare.setAttribute("style", `width: ${900 / 16}px; height: ${900 / 16}px; margin: 0;`);
    
    container.appendChild(gridSquare);
}

const gridButton = document.querySelector('#gridButton');
const buttonStyle = document.querySelectorAll('.buttonContainer button');

buttonStyle.forEach((button) => {
    button.addEventListener('mouseover', () => {
        button.style.fontWeight = 'bold';
    });
    
    
    button.addEventListener('mouseleave', () => {
        button.style.fontWeight = '';
    })
});


gridButton.addEventListener('click', () => {
    let height = parseInt(prompt('Enter squares for height'));
    let width = parseInt(prompt('Enter squares for length'));

    while (height > 100 || width > 100) {
        alert('One of your values is greater than 100');
        height = prompt('Enter squares for height');
        width = prompt('Enter squares for length');
    }

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    const dimension = height * width;



    for (i = 0; i < dimension; i++){
        const gridSquare = document.createElement("div");

        gridSquare.addEventListener('mousemove', () =>{
            gridSquare.style.backgroundColor = 'black';
        })

        gridSquare.setAttribute("style", `width: ${900 / height}px; height: ${900 / height}px; margin: 0;`);
        container.appendChild(gridSquare);
    }
})

const clearButton = document.querySelector('#clearButton');

clearButton.addEventListener('click', () =>{
    const contChildren = container.children;
    console.log(contChildren);
    for (let i = 0; i < contChildren.length; i++) {
        contChildren[i].style.backgroundColor = '';
        
    }
});
    
