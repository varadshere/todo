var cors = require('cors');
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
app.use(cors());
app.use(express.static(__dirname + "./dist"));
app.use(bodyParser.json());

const insert = require('./save-item');
const update = require('./update-item');
const find = require('./find-item');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;
// replace the uri string with your connection string.
const URL = "mongodb+srv://mongo:mongo@cluster0-ek6un.mongodb.net/test?retryWrites=true";
const dbName = 'todo';
var collectionName = 'todo';
var collection;
MongoClient.connect(URL, function (err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db = client.db(dbName);
  collection = db.collection(collectionName);
  app.listen(3000, () => {
    console.log('listening on 3000');
  });
});

app.post('/insert-todo', (req, res) => {

  find.findDocuments(collection, req.body.appId, function (records) {
    if (records && records.length < 1) {
      insert.insertDocuments(collection, req.body.create, function (inserted) {
        if (inserted) {
          res.status(200).json({
            status: 200,
            msg: 'Todo submitted'
          });
        }
      });
    } else {
      insert.insertIntoArray(collection, req.body.create, function (inserted) {
        if (inserted) {
          res.status(200).json({
            status: 200,
            msg: 'Todo inserted!'
          });
        }
      });
    }
  });
});

app.get('/get-todos', (req, res) => {
  console.log(req.query.appId);
  find.findDocuments(collection, req.query.appId, function (records) {
    res.status(200).json({
      status: 200,
      msg: records
    });
  });
});

app.post('/update-todo', (req, res) => {
  console.log(req.body);
  update.updateDocument(collection, req.body, function (updated) {
    res.status(200).json({
      status: 200,
      msg: 'Updated'
    });
  });
});