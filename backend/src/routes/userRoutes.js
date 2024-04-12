const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')


router.post('/signup', authController.signup);
router.post('/login', authController.login);
// router.post('/', userController.createUser);

router.route('/:id')
    .get(userController.getUser)
    .patch(userController.updateRes);

module.exports = router