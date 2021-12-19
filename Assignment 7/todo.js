
const addButton = document.getElementById('add');
const taskField = document.getElementById('task');
const taskList = document.getElementById('taskList');

//empty list, tasks
let tasks = [];
//counting completed tasks
let numberDeleted = 0;
//counting tasks
let numberTasks = 0;


//function showing output
function output() {
    let outputElement = document.getElementById('output');
    outputElement.value = numberDeleted + '/' + numberTasks + ' completed';
}

//function appending input to checkbox-list
function addTask() {
    let listElement = document.createElement('li');
    let taskInput = document.createElement('input');
    taskInput.setAttribute("type", "checkbox");
    taskInput.setAttribute("class", "inputTasks")
    listElement.append(taskInput, taskField.value);
    taskList.insertBefore(listElement, taskList.firstChild);
    numberTasks += 1;
    //function when checkbox checked
    function lineThrough () {
        if (taskInput.checked == true) {
            listElement.style.textDecoration = 'line-through';
            numberDeleted +=1;
        } else {
            listElement.style.textDecoration = 'none';
            numberDeleted -= 1;
        }

    
    }
    taskInput.onchange = function() {lineThrough()};
    tasks.push(taskField.value + ":" + Date());

    //event updating output
    taskInput.addEventListener('change', (event) => {
        output();
    })

}


//event when clicking add-button
addButton.addEventListener('click', (event) => {
    addTask();    
    output();
})






