const input = document.querySelector('.input');
const button = document.querySelector('.add');
const tasksArea = document.querySelector('.background');
const task = document.querySelector('.container');

const createTask = (todo) => {
    let div = document.createElement('div');
    div.className = 'container';
    div.innerHTML = `
    <button class="left-task-row">
        <div class="chek-mark"></div>
    </button>
    <input value='${todo}'class="dynamic-input"/>
    <button class="delete">
        <div class="delete-symb">+</div>
    </button>`;
    tasksArea.append(div);//добавить последним
};

const addTask = () => {
    const todo = input.value.trim();//trim - удаляет пробелы с начала и конца
    input.value = "";
    if (todo.length) {
        createTask(todo);
    }
};

const deleteTask = (e) => {
    if (e.target.classList.contains('delete')) {//имел ли нажатый элемент класс, содержащий в названии delete
        e.target.parentElement.remove();//удалить родителя этого элемента
    }
}

//Done tasks CSS
const doneTask = (e) => {
    if (e.target.classList.contains('left-task-row')) {//имел ли нажатый элемент класс, содержащий в названии delete
        e.target.parentElement.classList.toggle('done-task');//
        e.target.classList.toggle('done-task');
        e.target.parentElement.childNodes[3].classList.toggle('done-task-input');
        e.target.parentElement.childNodes[1].childNodes[1].classList.toggle('done-task');
    }
}


const deleteEmptyTask = (e) => {
    if (e.target.value.trim() == "" && e.target.classList.contains('dynamic-input')) {
        e.target.parentElement.remove();
    }
} 

//ADD BUTTON
button.addEventListener('click', addTask);
//ENTER KEY
input.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) addTask();
});
tasksArea.addEventListener('click', deleteTask);//eventListener не увидит элемент страницы, не существовавший изначально,необходимо отследить было ли нажатие у родителя созданного элемента и потом определить где именно было нажатие
tasksArea.addEventListener('click', doneTask);  
document.addEventListener('change', deleteEmptyTask);