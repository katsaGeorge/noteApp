const { trusted } = require('mongoose')
const service = require('../services/user.service')

const userNoteService = require('../services/usernote.services')


exports.createNote = async (req, res) => {
    const userId = req.body.userId
    const subject = req.body.subject
    const noteText = req.body.noteText

    try {
        const result = await userNoteService.createNote(userId, subject, noteText)
        res.status(200).json({status: true, data: result})
        console.log("Success in creating note")
    } catch (err) {
        res.status(400).json({status: false, data: err})
        console.log("Error in creating note")
    }

}

exports.updateNote = async(req,res) => {
    const username = req.body.username
    const noteId = req.body.noteId
    const subject = req.body.subject
    const noteText = req.body.noteText

    try{
        const result = await userNoteService.updateNote(username,noteId,subject,noteText)
        res.status(200).json({status:true, data: result})
        console.log("Succes updating a note")
    }catch(err){
        res.status(400).json({status:false, data:err})
        console.log("Error in updating a note")
    }
}

    exports.deleteNote = async(req,res) => { 

        const username = req.body.username
        const noteId = req.body.noteId

        try{
            const result= await userNoteService.deleteNote(username, noteId)
            res.status(200).json({status:true, data:result})
            console.log("Success on deleting note")
           

        }catch(err){
            res.status(400).json({status:false, data:err.message})
            console.log("Error in deleting a note")
        }
}

    exports.getAllNotes = async(req, res) => {
        const username = req.body.username

            try{
                const result = await userNoteService.getAllNotes(username)
                res.status(200).json({status:true, data:result})
                console.log("Succes gettin all notes")
            }catch(err){
                res.status(400).json({status:false, data:err.message})
                console.log("Error in finding notes")
            }
    }