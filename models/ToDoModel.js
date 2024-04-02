const mongoose = require('mongoose')

const todoScheme = new mongoose.Schema({
    text:{
        type: String,
        require : true
    }
})

module.exports = mongoose.model('ToDo' , todoScheme)