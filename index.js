const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require("cors")


app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))


app.get('/api/test', (req, res) => {
    const {message,name} = req.body
    res.send(`message de ${name} : ${message}`)
})
app.post('/', (req, res) => {
    res.send("Hello world")
})

app.post('/api/post', (req, res) => {
    const {action,tatus} = req.body
    res.send(`${action} insert success!`)
   
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))