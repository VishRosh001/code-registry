const mongoose = require("mongoose");

const SnippetSchema = new mongoose.Schema({
    snippet: {
        type: String,
        required: true,
        min: 10 
    },
    userID: {
        type: ObjectId,
        required: true,
    },
    timestamp: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model("CodeSnippet", SnippetSchema);