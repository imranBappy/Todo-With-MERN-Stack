const { Schema, model } = require("mongoose")

const todo = new Schema({
    task: {
        type: String,
        trim: true,
        require: true
    }, isDone: {
        type: Boolean,
        default: false
    }
})

const Todo = model('todo', todo)

exports.Todo = Todo