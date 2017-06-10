// (a + b) * h / 2

const add = (a, b, cb) => {
    setTimeout(() => {
        const condition = typeof a === 'number' && typeof b === 'number';
        if (condition) return cb(null, a + b);
        cb(new Error('Type error!'));
    }, 1000);
}

// console.log(add(4, 5));

add(4, '5', (err, result) => {
    if (err) return console.log(err);
    console.log(result);
});
