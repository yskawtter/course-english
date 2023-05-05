//modules
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

//routes
const authRouter = require('./routes/authRoutes.js')
const userRouter = require('./routes/userRoutes.js')

//middlewars (verificar usuario logado)


//config
const dbName = 'englishcourse'
const port = 3000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))
//rotas express
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

//connect mongodb
mongoose.connect(
    `mongodb://127.0.0.1/${dbName}`
)

app.get('/', (req, res) => {
    res.json({message: 'Rota teste 1 2 3'})
})
app.listen(port, () => {
    console.log(`Backend está rodando na porta ${port}`)
})