const fs = require('fs');
//Bat dong bo, dong bo

// setTimeout(f => f, 10000);

// console.log(123);

// const a = fs.readFileSync('a.txt', 'utf8');
// console.log(a);

let d;

fs.readFile('a.txt', 'utf8', (err, data) => {
    if (err) return console.log(err);
    d = data;
    console.log(d);
});

// console.log(d);
