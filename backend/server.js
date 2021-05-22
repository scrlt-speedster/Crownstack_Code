const express = require("express");
const http = require("http");
const path = require("path");
const cors = require('cors');
const dbConn = require('./sql/dbConnection');
const bodyParser = require('body-parser');
require('dotenv').config();
var currencyController = require('./controllers/currencyController');


var app = express();    
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
var server = http.createServer({
}, app);

dbConn.getConnection().authenticate()
    .then(
        // On successfull Database connection
        () => {
            server.listen(process.env.HTTP_SERVER_PORT, () => {
                console.log("Server started port ",process.env.HTTP_SERVER_PORT);
            });
        },
    )
    .catch(err => {
        console.error('Unable to connect to the database:', err);
        console.error('Cancelling app server launch');
    });


app.get("/getCurrency", async(req, res) => {
    let list = await currencyController.findAll();
    res.status(200).json({
        list : list
    });
});







