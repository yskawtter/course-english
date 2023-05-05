const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

//register an user 
//post = enviar requisição
router.post('/register', async(req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const confirmpassword = req.body.confirmpassword

    //check for required fields
    if(name == null || email == null || password == null || confirmpassword == null ) {
        return res.status(400).json({error: 'Por favor, preencha todos os campos e tente novamente!'})
    }
    //check if password match
    if(password != confirmpassword) {
        return res.status(400).json({error: 'Senhas não conferem.'})
    }
    //check if user exists
    const emailExists = await User.findOne({email: email})
    if(emailExists) {
        return res.status(400).json({error: 'O email informado já está sendo usado.'})
    }

    //create password (com hash)
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    const user = new User({
        name: name,
        email: email,
        password: passwordHash
    })
    try{
        const newUser = await user.save() //salvando usuario no sistema
        
        //create token
        const token = jwt.sign(
            //payload - se decodificar o token, vai colocar algumas informacoes importantes.
            {
                name: newUser.name,
                id: newUser._id
            },
            'secretjk'
        )

        //return token
        res.json({error: null, msg: 'Usuario cadastrado com sucesso :)', token: token, userId: newUser._id})

    }catch(error) {
        res.status(400).json({error})
    }
})


//login an user
router.post('/login', async(req, res) => {
    const email = req.body.email
    const password = req.body.password

    //check if user exists
    const user = await User.findOne({email: email})

    if(!user) {
        return res.status(400).json({error: 'Não há um usuario cadastrado.'})
    }

    //check if passowrd match
    const checkPassword = await bcrypt.compare(password, user.password)
    if(!checkPassword) {
        return res.status(400).json({error: 'Senha invalida.'})
    }

    const newUser = await user.save() //salvando usuario no sistema
        
    //create token
    const token = jwt.sign(
        //payload - se decodificar o token, vai colocar algumas informacoes importantes.
        {
            name: user.name,
            id: user._id
        },
        'secretjk'
    )
    //return token
    res.json({error: null, msg: 'Login bem sucedido :D', token: token, userId: newUser._id})
})

module.exports = router