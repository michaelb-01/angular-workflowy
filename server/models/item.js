const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

let Item = new mongoose.Schema({
    parentId: ObjectId,
    text: String
});

module.exports = mongoose.model("Item", Item);
