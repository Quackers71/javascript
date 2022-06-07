// To Do List taken from https://youtu.be/dHtyDron5ik 
// currently @ 10:03 of 25:46

(function(){
    var input = document.getElementById("input");
    var btn = document.getElementById("btn");
    var lists = {
        todo: document.getElementById("todo"),
        done: document.getElementById("done")
    };

    // console.log(input, btn, lists);

    /* *
     * @param {string} str
     * @param {function} onCheck
     * @returns {HTMLElement}
     */
    var makeTaskHtml = function(str, onCheck) {
        var el = document.createElement("li");
        var checkbox = document.createElement("input");
        var label = document.createElement("span");

        checkbox.type = "checkbox";
        checkbox.addEventListener("click", onCheck);
        label.textContent = str;

        el.appendChild(checkbox);
        el.appendChild(label);

        return el;
    };

    var addTask = function(task) {
        lists.todo.appendChild(task);
    }

    var onCheck = function(event) {
        var task = event.target.parentElement;
        var list = task.parentElement.id;

        lists[list === 'done' ? 'todo' : 'done'].appendChild(task);
        this.checked = false;
        input.focus();
    };

    var onInput = function() {
        var str = input.value.trim();

        if (str.length > 0) {
            addTask(makeTaskHtml(str, onCheck));
            input.value = "";
            input.focus();
        }
    }

    btn.addEventListener("click", onInput);
    input.addEventListener("keyup", function(event) {
        var code = event.keyCode;

        if (code === 13) {
            onInput();
        }
    });
    input.focus();
}());