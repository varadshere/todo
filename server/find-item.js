const assert = require('assert');
exports.findDocuments = function (collection, appId, callback) {
    collection.find({ 'appId': appId }).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs);
        callback(docs);
    });
}