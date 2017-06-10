//static function 

const add = (a, b) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const condition = typeof a === 'number' && typeof b === 'number';
            if (!condition) return reject(new Error('Type error!'));
            resolve(a + b);
        }, 1000);
    })
);

const mul = (a, b) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const condition = typeof a === 'number' && typeof b === 'number';
            if (!condition) return reject(new Error('Type error!'));
            resolve(a * b);
        }, 2000);
    })
);

// Promise.all([mul(2, 4), add(1, 1), add(2, 2)])
// .then(a => console.log(a))
// .catch(err => console.log(err));

Promise.race([mul(2, '4'), add(1, 1), add(2, 2)])
.then(a => console.log(a))
.catch(e => console.log(e));
