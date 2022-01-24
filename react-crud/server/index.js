const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    port: "50306",
    password: "4mAgMPivDh",
    database: "my_database"
})

app.get('/customer',(req,res) => {
    db.query("SELECT * FROM customer", (err,result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/create',(req,res) => {
    var sql = `INSERT INTO customer (first_name,last_name, age) VALUES ('${req.body.first_name}', '${req.body.last_name}',${req.body.age})`;
    db.query(sql, function (err, result) {
    if (err) throw err;
        console.log("1 record inserted, ID: " + result.insertId);
    });
});

app.delete('/customer/:id',(req,res) => {
    var sql = `DELETE FROM customer WHERE id = '${req.params.id}'`
    db.query(sql, function (err, result) {
        if (err) throw err;
            console.log("1 record inserted, ID: " + result.insertId);
        res.send(result)
        });
        
    
})

app.listen('3001',() => {
    console.log('Server is running on port 3001');
})