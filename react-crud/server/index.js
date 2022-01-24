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

app.listen('3001',() => {
    console.log('Server is running on port 3001');
})