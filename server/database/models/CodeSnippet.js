const mongoose = require("mongoose");

const SnippetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 4,
        max: 256
    },

    snippet: {
        type: String,
        required: true,
        min: 8
    },

    description: {
        type: String,
        required: true,
        min: 10
    },

    userID: {
        type: mongoose.ObjectId,
        required: true,
    },
    timestamp: {
        type: Date,
        required: true
    }
}); 

module.exports = mongoose.model("CodeSnippet", SnippetSchema);