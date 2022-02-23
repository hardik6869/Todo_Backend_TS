import asyncHandler from 'express-async-handler';
import Todo from '../model/TodoModel';

const getTodo = asyncHandler(async (req, res): Promise<void> => {
    const todo = await Todo.find();
    res.status(200).json({todo});
});

const setTodo = asyncHandler(async (req, res): Promise<void> => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please add a Text');
    }
    const todo = await Todo.create(req.body);
    res.status(200).json({todo});
});


const deleteTodo = asyncHandler(async (req, res): Promise<void> => {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (todo) {
        res.status(400);
        throw new Error('Todo Not Found');
    }
    await todo.remove();
    res.status(200).json({id: req.params.id});
});

export {getTodo, setTodo, deleteTodo};
