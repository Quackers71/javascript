//  To Do List taken from https://youtu.be/dHtyDron5ik

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
     * @returns {HTMLElement}
     */
    var makeTaskHtml = function(str) {
        var el = document.createElement("li");
        el.textContent = str;

        return el;
    };

    var addTask = function(list, task) {
        list.appendChild(task);
    }

    addTask(lists.todo, makeTaskHtml("Test Todo Task"));
    addTask(lists.done, makeTaskHtml("Test Done Task"));
}());