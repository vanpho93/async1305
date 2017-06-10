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

//async await

const tinhDienTich = async (a, b, h) => {
    const tong = await add(a, b);
    const tich = await mul(tong, h);
    const dt = await div(tich, 2);
    return dt;
};

tinhDienTich(4, 5, 6)
.then(r => console.log(r));
