


var project = {
    tasks: [
        {
            taskName: 'first'
        },
        {
            taskName: 'second'
        }
    ]
};

console.log(project.tasks[1].taskName); // second


var project = {
    name: 'Project Phoenix',
    securityLevel: 15,
    updateDueDate: function() {
        return true;
    },
    team: ['iguanaboy', 'cactusgirl', 'Buffy']
};

console.log(project.team[2]); // Buffy


var project = {
    name: 'Project Phoenix',
    securityLevel: 15,
    updateDueDate: function() {
        return true;
    }
};

console.log(project.name); // Project Phoenix


var project = {};
project.name = 'Project Phoenix';
console.log(project.name); // Project Phoenix


var project = new Object();
project.name = 'Project Phoenix';
project.securityLevel = 15;
project.updateDueDate = function() {
    return true;
};
var field = 'securityLevel';
console.log(project[field]); // 15


var project = new Object();
project.name = 'Project Phoenix';
project.securityLevel = 15;
project.updateDueDate = function() {
    return true;
}
console.log(project['securityLevel']); // 15


var project = new Object();
project.name = 'Project Phoenix';
project.securityLevel = 15;
project.updateDueDate = function() {
    return true;
}
console.log(project.updateDueDate()); // true


var project = new Object();
project.name = 'Project Phoenix';
console.log(project.name); // Project Phoenix