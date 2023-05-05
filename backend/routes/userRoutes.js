const router = require ('express').Router()
const bcrypt = require('bcrypt')

const User = require('../models/user')

//middlewares
const verifyToken = require('../helpers/check-token')

//helpers
const getUserByToken = require('../helpers/get-user-by-token')

//get an user
router.get('/:id', verifyToken, async (req, res) => {
    
    const id = req.params.id //params do URL para o express
    
    //verify user      
    try {                         //nao vai retornar a password
        const user = await User.findOne({_id: id}, {password: 0})
        res.json({error: null, user})
    }
    catch(err){
        return res.status(400).json({error: 'O usuario não existe!!'})
    }

})

//update an user
router.patch('/', verifyToken, async (req, res) => {
    const token = req.header('auth-token')
    const user = await getUserByToken(token)
    const userReqId = req.body.id
    const password = req.body.password
    const confirmpassword = req.body.confirmpassword

    const userId = user._id.toString()

    //check if user id is equal token user id
    if(userId != userReqId) {
        return res.status(401).json({error: 'Acesso negado!!!'})
    }

    //create an user object
    const updateData = {
        name: req.body.name,
        email: req.body.email
    }

    //check if passwords match
    if(password != confirmpassword) {
        return res.status(401).json({error: 'As senhas não conferem.'})
        //change password
    } else if(password === confirmpassword && password != null) {
        //creating password
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        //add password to data
        updateData.password = passwordHash
    }
    try {
        //returns updated data                          //tudo que vier no obj vai ser atualizado
        const updatedUser = await User.findOneAndUpdate({_id: userId}, {$set: updateData}, {new: true})
        res.json({error: null, msg: 'Usuario atualizado com sucesso :)', data: updatedUser})
    }catch(error) {
        res.status(400).json({err})
    }
})

module.exports = router