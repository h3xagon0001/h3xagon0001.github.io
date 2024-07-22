var inputBox = document.getElementById("task-source");
var destination = document.getElementById("destination");

inputBox.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        addTask(e);
    }
});

function addTask() {
    const taskSource = document.getElementById("task-source");
    const taskList = document.getElementById("task-list");

    const newTask = document.createElement("div");
    newTask.classList.add("task");

    const textBox = document.createElement("p");

    var taskContent = "";
    if (taskSource.value == "dox evan") {
        taskContent = "4, Jalan 6b/11a, Bandar Kinrara 6, Puchong, Selangor";
    }
    else {
        taskContent = taskSource.value;
    }

    const taskText = document.createTextNode(taskContent);
    console.log(taskSource.value);
    textBox.classList.add("task-text");
    textBox.appendChild(taskText);
    newTask.appendChild(textBox); 

    const newButton = document.createElement("button");
    const buttonText = document.createTextNode("✖");
    newButton.setAttribute("onclick", "deleteTask(this)");
    newButton.classList.add("task-delete");
    newButton.appendChild(buttonText);
    newTask.appendChild(newButton);

    taskList.appendChild(newTask);
    taskSource.value = "";

    console.log(newTask);
    populateStorage();
}

function deleteTask(caller) {
    caller.parentElement.remove();
    populateStorage();
}

function populateStorage() {
    localStorage.setItem("content", document.getElementById("task-list").outerHTML);
    console.log("IMPORTANT")
    console.log(document.getElementById("task-list").outerHTML);
}

function loadSavedContent() {
    const savedContent = localStorage.getItem("content");
    console.log(savedContent);
    
    oldContent = document.getElementById("task-list");
    console.log(oldContent);
    oldContent.remove();
    destination.insertAdjacentHTML('beforeend', savedContent);
}

window.onload = (event) => {
    if (localStorage.getItem("content")) {
        loadSavedContent();
    }
    else {}
};
