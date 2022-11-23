const btnAddTask = document.querySelector(".btnAddTask");
const tasksContainer = document.querySelector(".sectionTask");
const finish = document.querySelector(".finish");
const insertInput = document.querySelector(".insertInput");

// if keypress Enter = press, also, click on btnAddTask
insertInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    btnAddTask.click();
  }
});
btnAddTask.addEventListener("click", addTask);
tasksContainer.addEventListener("click", deleteTask);
tasksContainer.addEventListener("click", finishTask);
finish.addEventListener("click", deleteTask);
finish.addEventListener("click", restoreTask);

function addTask() {
  // Take a value of user on input

  if (insertInput.value != "") {
    // create task copntainer
    taskToDo = document.createElement("div");
    taskToDo.classList.add("taskToDo");

    // create name task
    const userTaskInput = insertInput.value;
    const nameTask = document.createElement("p");
    nameTask.innerText = insertInput.value;
    taskToDo.appendChild(nameTask);
    console.log(userTaskInput);
    // create a button container
    const containerBtn = document.createElement("div");
    containerBtn.classList.add("containerBtn");
    taskToDo.appendChild(containerBtn);
    // create button valid
    let btnFinish = document.createElement("button");
    btnFinish.classList.add("btnFinish");
    btnFinish.classList.add("btnTask");
    btnFinish.innerHTML = "<img class=noEvent src=valid.png />";
    containerBtn.appendChild(btnFinish);

    //create button trash
    const btnTrash = document.createElement("button");
    btnTrash.classList.add("btnTrash");
    btnTrash.classList.add("btnTask");
    btnTrash.innerHTML = "<img class=noEvent src=trash.png />";
    containerBtn.appendChild(btnTrash);

    // Add a task
    tasksContainer.appendChild(taskToDo);

    // reinit input
    insertInput.value = "";
  }
}

// delete task
function deleteTask(e, item) {
  item = e.target;

  // onclick, if classList is btnTrash, remove task
  if (item.classList[0] === "btnTrash") {
    const todo = item.parentElement; // containerBtn
    const removeToDo = todo.parentElement; // log: TaskToDo
    removeToDo.remove(); // remove a task
  }
}

// Valid task
function finishTask(e, item) {
  item = e.target;

  // onclick, if classList is btnFinish, push task in div finish.
  if (item.classList[0] === "btnFinish") {
    console.log("finish");

    todo = item.parentElement; // containerBtn
    finishToDO = finish.appendChild(todo.parentElement); // log: TaskToDo

    finishToDO.classList.add("taskFinish"); // push a task in div finish
  }
}

// restore a task who is in div finish
function restoreTask(e, item) {
  item = e.target;
  // onclick if classList is taskFinish, push task in div sectionTask
  if (item.classList[0] === "btnFinish") {
    todo = item.parentElement;
    todo.parentElement.classList.remove("taskFinish");
    restoreToDo = tasksContainer.appendChild(todo.parentElement);
  }
}
