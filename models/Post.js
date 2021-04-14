const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Post', postSchema);//Post will be visible in MLab in postSchema style