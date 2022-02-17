function createHeader(){
    //Create Header with two lines
    const header = createElement('header', '','p-7 bg-gray-200');
    const changeHeader = createElement('div','','flex justify-between p-2');
    const infoHeader = createElement('div','','flex justify-between p-2');
    
    //Create First Header line (Delete All, Delete Last, input text, Add)
    const deleteAllButton = createElement('button', 'Delete All', 'bg-yellow-200 p-2 rounded-md shadow-md', 'btn-deleteAll');
    const deleteLastButton = createElement('button', 'Delete Last', 'bg-yellow-200 p-2 rounded-md shadow-md', 'btn-deleteLast');
    const addBlock = createElement('div', '', 'flex justify-between w-4/5 bg-yellow-200 p-2 rounded-md shadow-md');
    const inputTODO = createElement('input','','w-5/6 rounded-md');
    inputTODO.setAttribute('placeholder','Enter todo ...');
    const addButton = createElement('button', 'Add', 'p-2 rounded-md shadow-md w-1/6', 'btn-add');
    addBlock.append(inputTODO,addButton)
    changeHeader.append(deleteAllButton,deleteLastButton, addBlock);

    //Create Second Header line (All, Completed, Sort completed, input Search)
    const allCards = createElement('div', 'All: 0','bg-yellow-200 p-2 rounded-md shadow-md','allCards');
    const completedCards = createElement('div', 'Completed: 0','bg-yellow-200 p-2 rounded-md shadow-md','completedCards');
    const sortCompletedCards = createElement('button', 'Sort completed','bg-yellow-200 p-2 rounded-md shadow-md','btn-sortCompletedCards');
    const find = createElement('div','', 'flex justify-between w-4/6 bg-yellow-200 p-2 rounded-md shadow-md');
    const searchCard = createElement('input', '','w-4/5 rounded-md','searchCard');
    searchCard.setAttribute('placeholder','Search...');
    const findButton = createElement('button', 'Find','w-1/5 bg-yellow-200p-2 rounded-md shadow-md', 'btn-find');
    find.append(searchCard,findButton);
    infoHeader.append(allCards,completedCards,sortCompletedCards,find);

    header.append(changeHeader,infoHeader);

    return header;
}

function createMain (){
    const main = createElement('main', '', 'bg-white');
    return main;
}

function createCard(id, isChecked, text, date){

    const card = createElement('div','', 'flex justify-between p-5 m-8 rounded-md border-white bg-gray-300', id);

    const checkboxTodo = createElement('input', '', 'self-center');
    checkboxTodo.setAttribute('type','checkbox');
    checkboxTodo.checked = isChecked;

    const descriptionToDo = createElement('div', text);
    const data =  createElement('div', date);
    const closeToDo = createElement('button', ` x `, 'self-end rounded-sm bg-gray-400 px-2', 'close');

    if (isChecked){
        card.classList.toggle("bg-red-600");
        descriptionToDo.classList.add("line-through"); 
    }

    card.append(checkboxTodo, descriptionToDo, data, closeToDo);
    
    return card;
}


function createElement (element, text = '', className, id){
    const newElement = document.createElement(element);
    const textElement = document.createTextNode(text);
    newElement.className = className;
    newElement.id = id;
    newElement.append(textElement);

    return newElement;
}

export {createHeader, createMain, createCard, createElement}