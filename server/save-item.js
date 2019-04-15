const assert = require('assert');
exports.insertDocuments = function (collection, data, callback) {
    collection.insertMany(data, function (err, result) {
        assert.equal(err, null);
        console.log("Inserted documents into the collection");
        callback(result);
    });
}

exports.insertIntoArray = function (collection, data, callback) {
    const record = data[0];
    const todo = record.todo[0];
    collection.updateOne({ appId: record.appId }
        , {
            $push: {
                todo: { id: todo.id, title: todo.title, text: todo.text }
            },
        }, function (err, result) {
            assert.equal(err, null);
            console.log("Updated the document");
            callback(result);
        });
}