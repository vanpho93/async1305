//Promise
const add = (a, b) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const condition = typeof a === 'number' && typeof b === 'number';
            if (!condition) return reject(new Error('Type error!'));
            resolve(a + b);
        }, 1000);
    })
);

// pr.then(a => console.log(a));
add(2, '4')
.then(tong => console.log(tong))
.catch(err => console.log(err.toString()));
