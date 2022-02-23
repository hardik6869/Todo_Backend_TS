import express, {Router} from 'express';
import {
    getTodo,
    setTodo,
    deleteTodo,
} from '../controller/todoContoller';

const router: Router = express.Router();

router.route('/').get(getTodo).post(setTodo);
router.route('/:id').delete(deleteTodo);

export default router;
