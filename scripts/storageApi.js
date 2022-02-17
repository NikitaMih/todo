function getStorageData(){
    const todos = JSON.parse(localStorage.getItem('todos'))
    if(todos){
        return todos;
    }
    return [];
}

function setStorageData(todos){
    todos.forEach(element => {
        element.id = todos.indexOf(element);
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

export {getStorageData, setStorageData}