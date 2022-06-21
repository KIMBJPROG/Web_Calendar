const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Todo = new Schema({
    activity: String,
    date:{
        type: Date,
        default: new Date()
    }
});

const TodoListSchema = new Schema({
    todoList: [Todo],
    username:{
        type: String,
        default: "kbj"
    }
});