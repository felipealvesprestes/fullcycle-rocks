const express = require('express');
const app = express();

const port = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'desafio'
};

const people = [];

const mysql = require('mysql');

const connection = mysql.createConnection(config);

const sqlCreateTable = `CREATE TABLE IF NOT EXISTS people(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
)`;

const sqlInsertPeople = `INSERT INTO people(name) values('Felipe Prestes')`;

connection.query(sqlCreateTable);
connection.query(sqlInsertPeople);

connection.query('SELECT * FROM people', (err, rows) => {
    if (err) throw err;

    rows.forEach((row) => {
        people.push(row);
    });
});

connection.end();

app.get('/', (req, res) => {
    res.write('<h1>Full Cycle Rocks!</h1>');
    res.write('<h2>Lista de pessoas cadastradas no banco de dados:</h2>');

    people.forEach((person) => {
        res.write(`<p>${person.name}</p>`);
    });

    res.end();
});

app.listen(port, () => {
    console.log(`Up na porta ${port}`);
});
