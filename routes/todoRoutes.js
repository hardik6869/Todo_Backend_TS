const express = require('express');
const router = express.Router();
const {getTodo, setTodo, updateTodo, deleteTodo} = require('../controller/todoContoller');

router.route('/').get(getTodo).post(setTodo)
router.route('/:id').put(updateTodo).delete(deleteTodo)


module.exports = router;
