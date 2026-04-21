let tasks =[];

const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

function renderTasks(){
    list.innerHTML="";

    tasks.forEach((task,index)=>{
        const li = document.createElement("li");
        li.textContent =task;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent="Delete";

        deleteBtn.addEventListener("click",()=>{
            deleteTask(index);
        });
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}

button.addEventListener("click",()=>{
    const text = input.value;

    if(text==="") return;

    tasks.push(text);
    input.value ="";

    renderTasks();
});

function deleteTask(index){
    tasks.splice(index,1);
    renderTasks();
}