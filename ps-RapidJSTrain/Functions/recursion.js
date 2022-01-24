


var orgChart = {
    name: 'Michael', subordinates: [
        {
            name: 'Andy', subordinates: [
                {
                    name: 'Dwight', subordinates: []
                },
                {
                    name: 'Kevin', subordinates: []
                }
            ]
        }
    ]
};

var fn = function showAllEmployees(topEmployee) {
    console.log(topEmployee.name);
    for (var i = 0; i < topEmployee.subordinates.length; i++)
        showAllEmployees(topEmployee.subordinates[i]);
};

var fn2 = fn;
fn = null;
fn2(orgChart);

/* 
Michael
Andy
Dwight
Kevin 
*/


var orgChart = {
    name: 'Michael', subordinates: [
        {
            name: 'Andy', subordinates: [
                {
                    name: 'Dwight', subordinates: []
                },
                {
                    name: 'Kevin', subordinates: []
                }
            ]
        }
    ]
};

var fn = function(topEmployee) {
    console.log(topEmployee.name);
    for (var i = 0; i < topEmployee.subordinates.length; i++)
        fn(topEmployee.subordinates[i]);
};

var fn2 = fn;
fn = null;
fn2(orgChart);

/* Michael
Uncaught TypeError: fn is not a function
    at fn  */


var orgChart = {
    name: 'Michael', subordinates: [
        {
            name: 'Andy', subordinates: [
                {
                    name: 'Dwight', subordinates: []
                },
                {
                    name: 'Kevin', subordinates: []
                }
            ]
        }
    ]
};

var fn = function(topEmployee) {
    console.log(topEmployee.name);
    for (var i = 0; i < topEmployee.subordinates.length; i++)
        fn(topEmployee.subordinates[i]);
};

fn(orgChart);

/* 
Michael
Andy
Dwight
Kevin 
*/