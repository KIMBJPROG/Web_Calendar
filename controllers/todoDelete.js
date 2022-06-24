const TodoList = require('../models/TodoList.js')

module.exports = (req, res) => {
    const { id } = req.body;
    console.log(id)
    TodoList.findOne({ 'date':chosenDate }, async (error, todoList) => {
        if(todoList) {
            await todoList.removeTodo(id);
        } else {
            console.log("Severe Error Data Damaged!");
        }
        res.redirect('/edit');
    })
}