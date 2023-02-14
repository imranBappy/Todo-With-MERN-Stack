const { Todo } = require("../model/Todo")

exports.todosGetController = async (req, res, next) => {
    try {
        const todos = await Todo.find({});
        res.json(todos)
    } catch (error) {
        next(error)
    }
}

exports.todosPostController = async (req, res, next) => {
    try {
        const todo = new Todo(req.body);
        await todo.save()
        res.json({
            message: 'Todo successfully created!',
        })
    } catch (error) {
        next(error)
    }
}

exports.todosDeleteController = async (req, res, next) => {
    try {
        const id = req.query.id

        if (id) {
            await Todo.findByIdAndDelete(id)
            res.json({
                message: 'Todo successfully Deleted!',
            })
        }
    } catch (error) {
        next(error)

    }
}

exports.todosPatchController = async (req, res, next) => {
    try {
        const id = req.query.id

        if (id) {
            await Todo.findByIdAndUpdate(id, {
                ...res.body, isDone: true
            })
            res.json({
                message: 'Todo successfully updated!',
            })
        }
    } catch (error) {
        next(error)
    }
}