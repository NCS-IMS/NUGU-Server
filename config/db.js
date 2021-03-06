'use strict';

const mysql = require("mysql");

require('dotenv').config({ path : ".env" });
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  dateStrings: true
})

handleDisconnect(db);

function handleDisconnect(client){
    client.on('error', function (error) {
       if(!error.fatal) return;
       if (error.code !== 'PROTOCOL_CONNECTION_LOST') throw err;

        console.error('> Re-connecting lost MySQL connection: ' + error.stack);

        db = mysql.createConnection(client.config);
        handleDisconnect(db);
        db.connect();
    });
};
module.exports =  db;