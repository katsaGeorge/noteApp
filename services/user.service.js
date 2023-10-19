 const user = require('../models/user.model')

 function createUser(username, password){
    const newuser = new user({
        username: username,
        password: password
    }) 
    return newuser.save()
 }

 function findAll(){
    return user.find();
 }

 function findOne(username){
    return user.findOne({username: username})
 }

 async function update(username, password){
    const userToUpdate =  await user.findOne({username: username})
    try{

    if (userToUpdate){
       userToUpdate.password = password;
       return await user.findOneAndUpdate({username: username}, {password: password}, {new:true})
    }else{
   
        throw new Error("User does not exist")
    }
    
    }catch(err){
        console.log(err);
        throw err;
    }

 }

 module.exports = {createUser, findAll, findOne, update}