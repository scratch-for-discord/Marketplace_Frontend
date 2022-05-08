const mongoose = require('mongoose')
const downloadSchma = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Download', downloadSchma)