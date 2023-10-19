const mongoose = require('mongoose');


const Schema = mongoose.Schema;

let notesSchema = new Schema({
    subject: {type: String},
    noteText: {type: String},
    },
 {
    collection: "notes",
    timestamps: false,
 }
 )

 module.exports = mongoose.model('Note', notesSchema)