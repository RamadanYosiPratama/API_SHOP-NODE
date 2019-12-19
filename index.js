const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')


//connection mongodb
mongoose.connect('mongodb://localhost/api_shop')
.then(db => console.log('db connect'))
.catch(err => console.log(err))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
})
)

require('./router/router')(app)
const PORT = process.env.PORT || 8000

app.listen(PORT,() => {
    console.log('Berhasil')
})