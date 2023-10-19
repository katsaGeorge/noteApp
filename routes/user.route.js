const express = require('express')
const router =  express.Router();

const userController = require('../cotrollers/user.controller');

router.post('/',userController.createUser);
router.get('/get-all', userController.findAll);
router.get('/:username', userController.findOne);
router.patch('/update', userController.update);


module.exports = router;