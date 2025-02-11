const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
app.use(express.json())
app.use(cors())

//falta um cors em algum lugar

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

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Run://10.60.44.50:${port}`);
    });

}

module.exports = app;
