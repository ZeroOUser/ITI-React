var arrayOfTasks = [];
var taskContainer = document.getElementsByClassName('todo-items')[0];
var taskInput = document.getElementById('taskInput');
var editFocus = false;
var inputFocus = taskInput;
var btnFocus = addTaskBtn;

window.addEventListener('keypress', function(event) {
    if (editFocus) {
        inputFocus = document.activeElement;  // Focus on the active input (editable task)
    } else {
        inputFocus = taskInput; 
    }
    
    inputFocus.focus();
    if (event.key === "Enter") btnFocus.click();
});

function mainLogic() {
    var task = {
        title: "",
        completed: false,
    };
    task.title = fetchData();
    if (task.title === "") {
        return -1;
    }
    addTaskToArray(task);
    showData();
}

function fetchData() {
    var title = taskInput.value;
    taskInput.value = "";  // Clear input field after fetching the task title
    return title;
}

function addTaskToArray(task) {
    arrayOfTasks.push(task);
}

function showData() {
    taskContainer.innerHTML = ""; // Clear container before re-rendering tasks
    for (let i = 0; i < arrayOfTasks.length; i++) {
        let todoItem = document.createElement("div");
        todoItem.className = "todo-item";
        
        let checkIcon = document.createElement('span');
        checkIcon.className = "icon check";

        let taskName = document.createElement('div');
        taskName.innerText = arrayOfTasks[i].title;
        taskName.id = 'editInput';

        let editIcon = document.createElement('span');
        editIcon.className = "icon edit";
        
        let delIcon = document.createElement('span');
        delIcon.className = "icon delete";

        let editConfirm = document.createElement('button');
        editConfirm.classList.add("editConfirm", "displayNone");
        editConfirm.innerText = "confirm";
        editConfirm.id = "editBtn";

        // Toggle task completion
        checkIcon.addEventListener("click", function() {
            arrayOfTasks[i].completed ^= true;
            checkComplete(i, taskName, checkIcon);
        });

        // Set task name to editable when edit icon is clicked
        editIcon.addEventListener("click", function() {
            editText(i, taskName, editIcon, delIcon, editConfirm);
        });

        // Delete the task
        delIcon.addEventListener("click", function() {
            deleteTask(i);
        });

        checkComplete(i, taskName, checkIcon);  // Reflect completed state
        taskContainer.appendChild(todoItem);
        todoItem.append(checkIcon, taskName, editIcon, delIcon, editConfirm);
    }
}

function editText(index, taskName, editIcon, delIcon, editConfirm) {
    var tmp = taskName.innerText;
    editFocus = true;
    editIcon.classList.add("displayNone");
    delIcon.classList.add("displayNone");
    editConfirm.classList.remove("displayNone");
    taskName.setAttribute("contenteditable", "true");
    taskName.focus();  // Focus on the task for immediate editing
    
    taskName.addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            confirmEdit();
        }
    });

    editConfirm.onclick = confirmEdit;

    function confirmEdit() {
        taskName.setAttribute("contenteditable", "false");
        editIcon.classList.remove("displayNone");
        delIcon.classList.remove("displayNone");
        editConfirm.classList.add("displayNone");
        if (taskName.innerText == "") {
            taskName.innerText = tmp;
            return -1;
        }
        arrayOfTasks[index].title = taskName.innerText;
        editFocus = false;
    }
}

function checkComplete(index, taskName, checkIcon) {
    if (arrayOfTasks[index].completed) {
        checkIcon.classList.add('completed');
        taskName.classList.add('completed');
    } else {
        checkIcon.classList.remove('completed');
        taskName.classList.remove('completed');
    }
}

function deleteTask(index) {
    arrayOfTasks.splice(index, 1);  // Remove task from the array
    showData();  // Re-render the task list
}
