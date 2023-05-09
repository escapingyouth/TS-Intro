import { Router } from 'express';
import {
	createTodo,
	getTodos,
	updateTodo,
	deleteTodo
} from '../controllers/todos';

const router = Router();

router.get('/', getTodos);
router.post('/', createTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
