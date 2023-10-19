const mongoose = require('mongoose')

const uniqueValidator = require('mongoose-unique-validator')
const Note = require('./note.model');

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

let userSchema  = new Schema({
        username: {
            type:String,
            required: [true,'This field is required'],
            unique: [true,'This username is already exists'],
            trim:true,
        },
        password:{
            type: String,
            required: [true,'This fieldis required'],
            trim:true
        },
        
        notes:{
           type:  [notesSchema],
           
        }

},
  {
    collection: 'Users',
    timestamps: false
    
  }     
)

  userSchema.plugin(uniqueValidator);

  module.exports = mongoose.model('User',userSchema)