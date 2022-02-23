const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    text :{
        type: String,
        required:[true,"Please Enter Something"]
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Todo',TodoSchema  )