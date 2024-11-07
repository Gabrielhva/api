const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

const sequelize = require('./config/database')

sequelize.authenticate().then(
    () => console.log('Banco Conectado')
).catch(
    err => console.error("Erro bd:", err)
)


const rdisorder = require('./routes/disorder')
app.use('/disorder', rdisorder)

const radmin = require('./routes/admin')
app.use('/admin', radmin)

const rdoctor = require ('./routes/doctor')
app.use('/doctor', rdoctor)

app.listen(port, () => {
    console.log(`Run://10.60.44.50:${port}`);
})

