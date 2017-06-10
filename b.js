// (a + b) * h / 2

const add = (a, b, cb) => {
    setTimeout(() => {
        const condition = typeof a === 'number' && typeof b === 'number';
        if (condition) return cb(null, a + b);
        cb(new Error('Type error!'));
    }, 1000);
}

const mul = (a, b, cb) => {
    setTimeout(() => {
        const condition = typeof a === 'number' && typeof b === 'number';
        if (condition) return cb(null, a * b);
        cb(new Error('Type error!'));
    }, 1000);
}

const div = (a, b, cb) => {
    setTimeout(() => {
        const isNumber = typeof a === 'number' && typeof b === 'number';
        if (!isNumber) return cb(new Error('Type error!'));
        if (b === 0) return cb(new Error('Chia cho 0'));
        cb(null, a / b);
    }, 1000);
}

// 4, 5, 6

// add(4, '5', (errSum, tong) => {
//     if (errSum) return console.log(errSum);
//     mul(tong, 6, (errMul, tich) => {
//         if (errMul) return console.log(errMul);
//         div(tich, 2, (errDiv, dienTich) => {
//             if (errDiv) return console.log(errDiv);
//             console.log(dienTich);
//         });
//     });
// });

function tinhDienTich(a, b, h, cb) {
    add(a, b, (errSum, tong) => {
        if (errSum) return cb(errSum);
        mul(tong, h, (errMul, tich) => {
            if (errMul) return cb(errMul);
            div(tich, 2, (errDiv, dienTich) => {
                if (errDiv) return cb(errDiv);
                cb(null, dienTich);
            });
        });
    });
}

tinhDienTich(4, 5, 6, (err, result) => console.log(result));
