const fs = require('fs');

function read(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
}

read('a.txt')
.then(data => console.log(data))
.catch(err => console.log(err));

