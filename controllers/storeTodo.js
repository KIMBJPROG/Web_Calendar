const TodoList = require('../models/TodoList.js')

module.exports = (req, res) => {
    const { activity } = req.body;
    TodoList.findOne({ 'date':chosenDate }, async (error, todoList) => {
        if(todoList) {
            await todoList.addTodo(activity);
        } else {
            await TodoList.create({
                todoList: [{activity: activity}],
                date: chosenDate
            })
        }
        res.redirect('/edit');
    })
}