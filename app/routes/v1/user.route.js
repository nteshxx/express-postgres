const userController = require('../../controllers/user.controller');
const router = require('express').Router();

router
    .get('/all-users', userController.getAllUsers)
    .get('/:id', userController.findUser)
    .post('/create', userController.createUser)
    .put('/update/:id', userController.updateUser)
    .delete('/delete/:id', userController.deleteUser)

module.exports = router;