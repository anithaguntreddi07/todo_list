const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const deadline = document.getElementById('deadline');
const workstatus = document.getElementById('workstatus');

addTaskBtn.addEventListener('click', () => {
    const t = taskInput.value; 
    const d = deadline.value; 
    const w = workstatus.value;
    if (t && d && w) {
        const li = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = t;
        const deadlineText = document.createElement('span');
        deadlineText.textContent = ` (Deadline: ${d})`; 
        const statusText = document.createElement('span');
        statusText.textContent = ` [Status: ${w}]`;
        li.appendChild(taskText);
        li.appendChild(deadlineText);
        li.appendChild(statusText);
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
        taskList.appendChild(li);
        taskInput.value = '';
        deadline.value = '';
        workstatus.value = '';
    } else if (!t) {
        alert('Please enter a task.');
    } else if (!d) {
        alert('please enter a deadline.');
    }else if(!w){
        alert('please enter the status of your task.')
    }
});
