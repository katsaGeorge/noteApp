const express = require('express');
const router = express.Router();
const userNoteController = require('../cotrollers/usernote.controller');


router.post('/',userNoteController.createNote)   
router.patch('/update', userNoteController.updateNote)
router.delete('/delete', userNoteController.deleteNote)
router.get('/', userNoteController.getAllNotes)

module.exports = router