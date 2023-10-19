const service = require('../services/user.service')



exports.createUser = async(req,res) => {
    const username = req.body.username
    const password = req.body.password
    try{

        const result = await service.createUser(username, password)
        res.status(200).json({status:true, data:result})
        console.log("Success in creating user")
    }catch(err){
        res.status(400).json({status:false, data:err})
    }
}

exports.findAll = async(req, res) => {

    try{
        const result = await service.findAll()
        res.status(200).json({status:true, data:result})
        console.log("Success in finding all user")
    }catch(err){
        res.status(400).json({status:false, data:err})
    }

}

exports.findOne = async(req,res) => {

    let username = req.params.username
    try{
        const result = await service.findOne(username)
        res.status(200).json({status:true, data:result})
        console.log("Success in finding one user")
    }catch(err){
        res.status(400).json({status:false, data:err})
    }
}

exports.update = async(req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    try{
        const result = await service.update(username, password)
        res.status(200).json({status:true, data:result})
        console.log("Success in updating one user")

    }catch(err){
        res.status(400).json({status:false, data:err.message})
    }
}