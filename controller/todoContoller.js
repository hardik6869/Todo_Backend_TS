const asyncHandler = require('express-async-handler');

const Todo =  require('../model/TodoModel')

const getTodo = asyncHandler(async(req,res)=> {
    const todo = await Todo.find()
    res.status(200).json({todo})
})

const setTodo = asyncHandler(async(req,res)=> {
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a Text")
    }
    const todo = await Todo.create(req.body);
    res.status(200).json({todo})
})

const updateTodo = asyncHandler(async(req,res)=> {
    const updatedtodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true})
    res.status(200).json({updatedtodo})
})

const deleteTodo = asyncHandler(async(req,res)=> {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (todo) {
        res.status(400);
        throw new Error('Todo Not Found');
    }
    await todo.remove();
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getTodo,
    setTodo,
    updateTodo,
    deleteTodo
}