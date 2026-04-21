let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

function renderTasks(){
    list.innerHTML="";

    tasks.forEach((task,index)=>{
        const li = document.createElement("li");
        li.textContent =task.text;


        if(task.completed){
            li.style.textDecoration = "line-through";
        }

        li.addEventListener("click",()=>{
            toggleComplete(index);
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent="Delete";

        deleteBtn.addEventListener("click",(e)=>{
            e.stopPropagation();
            deleteTask(index);
        });

        li.appendChild(deleteBtn);
        list.appendChild(li);

    });
}

button.addEventListener("click",()=>{
    const taskText = input.value;

    if(taskText==="") return;

    tasks.push({
        text:taskText,
        completed:false
    });
    input.value ="";

    renderTasks();
    saveTasks();
});

function deleteTask(index){
    tasks.splice(index,1);
    renderTasks();
    savaTasks();
}

function toggleComplete(index){
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
    saveTasks();
}

function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

renderTasks();