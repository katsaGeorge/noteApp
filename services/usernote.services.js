const user = require('../models/user.model')

function createNote(userId, subject, noteText){

    
      return user.findByIdAndUpdate(userId,
     {$push: {notes: {subject: subject, noteText: noteText}}}, {new:true})
        
    
}

function updateNote(username, noteId, subject, noteText){
    return user.findOneAndUpdate({
      username: username,
      'notes._id': noteId
    },
    {
      $set: {
        'notes.$.subject' : subject,
        'notes.$.noteText' : noteText
      }
    },
    {returnOriginal: false }
  )}

   function deleteNote(username, noteId){
      try{ 
      const result = user.findOneAndUpdate(
      {username:username},
      {$pull:{notes: {_id: noteId}}},)
       return result
      }catch(err){
        throw new Error("There is a problem")
    }
   }

  async function getAllNotes(username){
    try{
        const userNotes = await user.findOne({username:username})

        if(userNotes){
           
                return user.find({username:username}, {
                 notes:1
                })

            }else{
              throw new Error("There is no such user")
            }
        }catch(err){
          throw err;
    }

    }
module.exports = {createNote, updateNote, deleteNote,getAllNotes}