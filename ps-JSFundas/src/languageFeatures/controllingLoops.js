
for (let i=0; i<=5; i++) {
    if (i === 3) 
        continue;
    console.log(i); // 0 1 2 4
}


for (let i=0; i<=5; i++) {
    console.log(i); // 0 1 2 3
    if (i === 3) {
        break;
    }
}

/* let i = 0;
for (; i<12; i++) {
    if (i == 8) {
        break;
    }
}

console.log(i); // 8 */