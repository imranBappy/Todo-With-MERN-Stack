const { todosGetController, todosPostController, todosDeleteController, todosPatchController } = require('../controllers/todoController');

const router = require('express').Router();

router.get('/', todosGetController)
router.post('/', todosPostController)
router.delete('/', todosDeleteController)
router.patch('/', todosPatchController)



exports.router = router;
