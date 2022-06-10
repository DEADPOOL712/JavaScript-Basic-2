// For Loop 
for (let i = 1; i <= 10; i++) {
    console.log(`The weight lift ${i} `);
}

// Best use in array 
const year = [2003, 2004, true, 'also string'];
const types = []; // emepty array 

for (let i = 0; i < year.length; i++) {

    types[i] = typeof year[i]; // it store the type of elements 

    console.log(`The array elemet is = ${year[i]}`, types[i]);
}
console.log(types);


// continue and break in loop 
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        // break;  it print till 1 to 6 and than exit 
        // continue; it only skip 7 
    }
    else {
        console.log(`Number : ${i}`);
    }
}