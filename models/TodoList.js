const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    activity:{
        type: String,
        unique: true
    },
    date:{
        type: String,
        default: new Date().toString()
    }
});

const TodoListSchema = new Schema({
    todoList: [TodoSchema],
    date: String
});

TodoListSchema.methods.addTodo = function (info) {
    this.todoList.push({activity: info});
    return this.save();
}

TodoListSchema.methods.removeTodo = function (info) {
    this.todoList.pull({_id: info});
    return this.save();
}

const TodoList = mongoose.model('TodoList',TodoListSchema);
module.exports = TodoList