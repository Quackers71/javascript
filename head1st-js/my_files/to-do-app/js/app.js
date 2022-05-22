// Create a To Do List App With JavaScript, HTML and CSS taken from https://youtu.be/b8sUhU_eq3g  @29:53

const clear = document.querySelector(".clear");
const list = document.getElementById("list");
const input = document.getElementById("input");
const dateElement = document.getElementById("date");

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

let LIST, id;
let data = localStorage.getItem("TODO");

if (data) {
    LIST = JSON.parse(data);
    loadToDo(LIST);
    id = LIST.length;
}else {
    LIST = [];
    id = 0;
}

function loadToDo(array) {
    array.forEach(function(item) {
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

clear.addEventListener('click', function() {
    localStorage.clear();
    location.reload();
});

let options = { weekday:'long', month:'short', day:'numeric'};
let today = new Date();
dateElement.innerHTML = today = today.toLocaleDateString("en-US", options);

function addToDo(toDo, id, done) {

    if (trash) { return; }
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const text = `<li class="item">
                    <i class="co fa fa-circle-thin" job="complete" id="${id}"></i>
                    <p class="text "> ${toDo} </p>
                    <i class="de fa fa-trash-o" job="delete" id="${id}"></i>
                </li>`

    const position = "beforeend";

    list.insertAdjacentHTML(position, text);
}

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
                localStorage.setItem("TODO", JSON.stringify(LIST));
                id++;
        }
        input.value = "";
    }
});

function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    LIST[element.id].done = LIST[element.id].done ? false : true;
}

function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

list.addEventListener("click", function(event) {
    let element = event.target; // <i class="de fa fa-trash-o" job="delete" id="0"></i>
    const elementJOB = event.target.attributes.job.value; // delete or complete
    if (elementJOB == "complete") {
        completeToDo(element);
    }else if (elementJOB == "delete") {
        removeToDo(element);
    }
});
