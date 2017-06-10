const add = (a, b) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const condition = typeof a === 'number' && typeof b === 'number';
            if (!condition) return reject(new Error('Type error!'));
            resolve(a + b);
        }, 1000);
    })
);

add(4, 5)
.then(tong => tong * 2)
.then(a => a * f)
.then(b => add(b, '-30'))
.catch(err => {
    console.log(err);
    return 1000;
})
.then(d => add(d, '-1'))
.then(e => console.log(e))
.catch(err2 => console.log('LOIIIII: ', err2));
