/**
 * 
 * getElementById
 * 
 * getElementsByClassName (array [])
 * getElementsByTagName (array [])
 * getElementsByName (array [])
 * 
 * querySelector 1er elemento
 * querySelectorAll Todos los Elementos (array [])
 * 
 */

/* let box = document.querySelector('.box');
let box1 = box.querySelector('.box-1');
box1.id = 'box1';
box1.innerHTML = "Box 1 JS"
console.log(box1.innerHTML);
console.log(box1.id); */

/* let box1 = document.querySelector('.box-1');
let box2 = document.querySelector('.box-2');
let box3 = document.querySelector('.box-3');

box1.addEventListener('click', mostrarSeleccionado);
box2.addEventListener('click', mostrarSeleccionado);
box3.addEventListener('click', mostrarSeleccionado); */

let boxes = document.querySelector('.box').childNodes;
boxes.forEach((box) => {
    box.addEventListener('click', (evento) => {
        console.log(evento.target);
        console.log(evento.type);
        console.log(evento.x);
        console.log(evento.y);
        mostrarSeleccionado(evento);
    });
})


function mostrarSeleccionado(evento){
    let selected = document.querySelector('.selected');
    selected.innerHTML = evento.target.innerHTML;
}

/* let box = document.querySelector('.box');
box.addEventListener('click', (evento) => {
    console.log(evento);
}) */