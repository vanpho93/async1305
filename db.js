const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'NODE1305',
    user: 'postgres',
    password: 'khoapham',
    max: 100,
    idleTimeoutMillis: 1000
});

function queryDB(sql, arrValue) {
    return new Promise((resolve, reject) => {
        pool.connect((err, client, done) => {
            if (err) return reject(err);
            client.query(sql, arrValue, (errQuery, result) => {
                done(errQuery);
                if (errQuery) return reject(errQuery);
                resolve(result);
            });
        });
    });
}

queryDB('SELECT * FROM "HotGirl" WHERE id = $1 AND age > $2', [2, 18])
.then(result => console.log(result.rows));

