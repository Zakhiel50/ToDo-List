const btnAddTask = document.querySelector(".btnAddTask");
const tasksContainer = document.querySelector(".sectionTask");
const finish = document.querySelector(".finish");
const insertInput = document.querySelector(".insertInput");
const emptySection = document.querySelector(".emptySection");
let count = 0;

// if keypress Enter = press, also, click on btnAddTask
insertInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    btnAddTask.click();
  }
});

// All EventListener
btnAddTask.addEventListener("click", addTask);
tasksContainer.addEventListener("click", deleteTask);
tasksContainer.addEventListener("click", finishTask);
finish.addEventListener("click", deleteTask);
finish.addEventListener("click", restoreTask);

function addTask() {
  // If input is not empty, take a value
  if (insertInput.value != "") {
    // if section empty is true, remove it
    countEmpty();

    // create task container
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
    const removeToDo = todo.parentElement.remove(); // log: TaskToDo // remove a task
    count--;
  }
  if (count === 0) {
    // if count vale is 0, remove class "removeEmptySection" and add class "emptySection" to emptySection
    emptySection.classList.remove("removeEmptySection");
    emptySection.classList.add("emptySection");
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
    restoreToDo = tasksContainer.appendChild(todo.parentElement); // move task in div finish
  }
}

function countEmpty() {
  if (emptySection.classList[0] === "emptySection") {
    // if emptySection have class "emptySection"
    emptySection.classList.remove("emptySection"); // remove it
    emptySection.classList.add("removeEmptySection"); // and replace it by class "removeEmptySection"
    count++; // add +1 to count
  } else {
    // else just add +1 to count
    count++;
  }
}
