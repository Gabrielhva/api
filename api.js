const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

const rdisorder = require('./routes/disorder')
app.use('/disorder', rdisorder)

const radmin = require('./routes/admin')
app.use('/admin', radmin)

const rdoctor = require ('./routes/doctor')
app.use('/doctor', rdoctor)

app.listen(port, () => {
    console.log(`Run: http://localhost:${port}`);
})

