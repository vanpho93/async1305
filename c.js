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

const mul = (a, b) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const condition = typeof a === 'number' && typeof b === 'number';
            if (!condition) return reject(new Error('Type error!'));
            resolve(a * b);
        }, 1000);
    })
);

const div = (a, b) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const isNumber = typeof a === 'number' && typeof b === 'number';
            if (!isNumber) return reject(new Error('Type error!'));
            if (b === 0) return reject(new Error('Chia cho 0'));
            resolve( a / b);
        }, 1000);
    })
);

// pr.then(a => console.log(a));
//4, 5, 6

// add(4, '5')
// .then(tong => mul(tong, 6))
// .then(tich => div(tich, 2))
// .then(dienTich => console.log(dienTich))
// .catch(err => console.log(err));

function tinhDienTich(a, b, h) {
    return add(a, b)
    .then(tong => mul(tong, h))
    .then(tich => div(tich, 2));
}

tinhDienTich(4, 5, 6)
.then(s => console.log(s))
.catch(err => console.log(err));
