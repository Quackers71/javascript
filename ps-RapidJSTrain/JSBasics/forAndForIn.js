





var LineItem = {
    product: 'Widget 1',
    quantity: 4,
    price: 9.50
};

for (var field in LineItem)
    console.log(field);

// product quantity price


/* var LineItemCount = 5;

outLoop:
for (var i = 0; i < LineItemCount; i++){
    for (var j = 0; j < 3; j++){
        if (j == 1)
            continue outLoop;
    }
    console.log(i);
} // nothing 
*/


/* var LineItemCount = 5;

for (var i = 1; i < LineItemCount; i++){
    if (i == 2)
        continue;
    console.log(i);
}; // 1, 3, 4 
*/


/* var LineItemCount = 5;

for (var i = 0; i < LineItemCount; i++){
    console.log(i+1);
    if (i == 2)
        break;
}; // 1, 2, 3 
*/


/* var LineItemCount = 6;
var i = 1;

for (; i < LineItemCount;)
    console.log(i++); // 1,2...5 
*/


/* var LineItemCount = 5;
var i = 0;

for (; i < LineItemCount; i++)
    console.log(i+1); // 1,2...5 
*/


/* var LineItemCount = 5;

for (var i = 0; i < LineItemCount; i++)
    console.log(i+1); // 1,2...5 
*/