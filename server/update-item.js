const assert = require('assert');
exports.updateDocument = function (collection, record, callback) {
    collection.updateOne({ appId: record.appId, 'todo.id': record.id }
        , {
            $set: {
                'todo.$.title': record.title,
                'todo.$.text': record.text
            },
        }, function (err, result) {
            assert.equal(err, null);
            // assert.equal(1, result.result.n);
            console.log("Updated the document with the field a equal to 2");
            callback(result);
        });
}