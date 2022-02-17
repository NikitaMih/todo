import {createHeader, createMain, createCard, createElement} from './templates.js';
import {getStorageData, setStorageData} from './storageApi.js';
import {Todos} from './Todo.js';

document.addEventListener('DOMContentLoaded', app);

const start = document.getElementById('root');
const header = createHeader();
const main = createMain ();

//APP
function app(){
    start.append(header, main);
    render();
}

function render(selectionData = getStorageData()){
    main.innerHTML = '';
    selectionData.forEach((cardObj) => {
        let {id, isChecked, text, date} = cardObj;
        let card = createCard(id, isChecked, text, date);
        bindCardHandlers(card);
        main.append(card);
    });
    calcCard();
    calcCompleted();
}

//Event Listeners
header.addEventListener('click', (event) => {
    const buttonID = event.target.id;
    if(buttonID === 'btn-deleteAll'){
        onBtnDeleteAll();
    }else if(buttonID === 'btn-add'){
        onAdd(event);
    }else if(buttonID === 'btn-deleteLast'){
        onBtnDeleteLast();
    }else if(buttonID === 'btn-sortCompletedCards'){
        onSortCompletedCads();
    }else if(buttonID === 'btn-find'){
        onSearchCard(event);
    }
})

function bindCardHandlers(card){
    card.addEventListener('click', onCard);
}

// Event Handlers
function onBtnDeleteAll(){
    setStorageData([]);
    render();
}

function onAdd(event){
    const todos = getStorageData();
    const input = event.target.previousElementSibling;
    const text = input.value;
    todos.push(new Todos(text));
    setStorageData(todos);
    input.value = '';
    render();
}

function onBtnDeleteLast(){
    const todos = getStorageData();
    todos.pop();
    setStorageData(todos);
    render();
}

function onCard(event){
    const todos = getStorageData();
    const target = event.target;
    if(target.type === 'checkbox'){
        const id = target.parentElement.id
        todos[id].isChecked = !todos[id].isChecked;
    }else if(target.tagName === 'BUTTON'){
        const id = target.parentElement.id;
        todos.splice(id, 1);
    }
    setStorageData(todos);
    render();
}

function calcCard(){
    const calcCard = getStorageData().length;
    const allCardsDiv = document.getElementById('allCards');
    allCardsDiv.innerHTML = `All: ${calcCard}`;
}

function calcCompleted(){
    let selectionCompleted = getStorageData().filter((item) => {
        let { _, isChecked} = item;
        if (isChecked === true) return item;
    })
    const calcCompleted = selectionCompleted.length;
    const completedCards = document.getElementById('completedCards');
    completedCards.innerHTML = `Completed: ${calcCompleted}`;
}

function onSortCompletedCads(){
    let selectionCompleted = getStorageData().filter((item) => {
        let {_, isChecked} = item;
        if (isChecked === false) return item;
    })
    setStorageData(selectionCompleted);
    render();
}

function onSearchCard(event){
    const inputSearch = event.target.previousElementSibling;
    const searchData = inputSearch.value;
    let selectionDataSearch = getStorageData().filter(function(item){
        let {_, is, text} = item;
        if  (text.indexOf(searchData) >= 0) return item;
    })
    render(selectionDataSearch);
}