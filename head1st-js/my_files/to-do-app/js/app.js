// Create a To Do List App With JavaScript, HTML and CSS taken from https://youtu.be/b8sUhU_eq3g  @29:53

// Select the Elements
const clear = document.querySelector(".clear");
const list = document.getElementById("list");
const input = document.getElementById("input");
const dateElement = document.getElementById("date");

// classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Variables
let LIST, id, job;

// Get item from local storage
let data = localStorage.getItem("TODO");

// Check if data is not empty
if (data) {
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
}else {
    LIST = [];
    id = 0;
}

// Load items to the user's interface
function loadList(array) {
    array.forEach(function(item) {
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

// Clear the local storage
clear.addEventListener('click', function() {
    localStorage.clear();
    location.reload();
});

// Display the Date
let options = { weekday:'long', month:'short', day:'numeric'};
let today = new Date();

dateElement.innerHTML = today = today.toLocaleDateString("en-US", options);

// add to do Function
function addToDo(toDo, id, done, trash) {

    if (trash) { return; }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `<li class="item">
                    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                  </li>
                `;

    const position = "beforeend";

    list.insertAdjacentHTML(position, item);
}

// add an item to the list when the User presses the Enter Key
document.addEventListener("keyup",function(event){
    if (event.keyCode == 13) {
        const toDo = input.value;

        if (toDo) {
            addToDo(toDo, id, false, false);
            LIST.push({
                    name: toDo,
                    id: id,
                    done: false,
                    trash: false
                });
                // Add item to local storage
                localStorage.setItem("TODO", JSON.stringify(LIST));
                id++;
        }
        input.value = "";
    }
});

//  Complete to do
function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// Remove to do
function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}

// target the items created dynamically
list.addEventListener("click", function(event) {

    const element = event.target; // return clicked element inside the list
    const elementJob = element.attributes.job.value; // delete or complete
    
    if (elementJob == "complete") {
        completeToDo(element);
    }else if (elementJob == "delete") {
        removeToDo(element);
    }
    // Add item to local storage
    localStorage.setItem("TODO", JSON.stringify(LIST));
});
