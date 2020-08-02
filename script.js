const getInput = document.querySelector('.input');
const getButton = document.querySelector('.add');
const tasksArea = document.querySelector('.background');
const task = document.querySelector('.container')


const createTask = (todo) => {
    let div = document.createElement('div');
    div.className = 'container';
    div.innerHTML = `
    <button  class="leftTaskRow"><div class="chekMark"></div></button>
    <input value ='${todo}' placeholder="  enter" class="input" />
    <button class="delete"><div class ="deleteSymb">+</div></button>`;
    tasksArea.append(div);//добавить последним
};

const addTask = () => {
    const todo = getInput.value.trim();//trim - удаляет пробелы с начала и конца
    getInput.value = "";
    if (todo.length) {
        createTask(todo);
    }
};


//ADD BUTTON
getButton.addEventListener('click', addTask);

//ENTER KEY
getInput.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) addTask();
});



///DELETE TASK
const deleteTask = (e) => {
    if (e.target.classList.contains('delete')) {//имел ли нажатый элемент класс, содержащий в названии delete
        e.target.parentElement.remove();//удалить родителя этого элемента
    }
}

tasksArea.addEventListener('click', deleteTask);//eventListener не увидит элемент страницы, не существовавший изначально,необходимо отследить было ли нажатие у родителя созданного элемента и потом определить где именно было нажатие

 

//Done tasks CSS
const doneTask = (e) => {debugger
    if (e.target.classList.contains('leftTaskRow')) {//имел ли нажатый элемент класс, содержащий в названии delete
        e.target.parentElement.classList.toggle('doneTask');//
        e.target.classList.toggle('doneTask'); 
        e.target.parentElement.childNodes[3].classList.toggle('doneTaskInput');  
        e.target.parentElement.childNodes[1].childNodes[0].classList.toggle('doneTask');  
    }
} 

tasksArea.addEventListener('click', doneTask);