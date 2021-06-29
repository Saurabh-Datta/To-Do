'use strict'

const switcher = document.querySelector('.theme');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    let className = document.body.className;
    if(className === 'light-theme') {
        this.textContent = 'Dark';
    } else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);

});

let tasks = [];

function addToList(item, index){
    list.innerHTML += `<li>${item}</li>`;
}

const addElement = document.querySelector('.add');
const inp = document.querySelector('.input');
const list = document.querySelector('.list');

addElement.addEventListener('click', function(){
tasks.push(inp.value);
console.log(tasks);
inp.value=null;

list.innerHTML=null;
tasks.forEach(addToList);
});
