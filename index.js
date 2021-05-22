const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()
const bodyParser = require('body-parser');
const cors = require("cors")


app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))


app.get('/api/test', (req, res) => {
    const {message,name} = req.body
    res.send(`message de ${name} : ${message}`)
})
app.get('/start', (req, res) => {
    res.send("Hello world")
})

app.post('/api/post', (req, res) => {
    const {action,status} = req.body
    res.send(`Cette action : ${action} est vraiment ${status} `)
   
})

app.listen(PORT, () => console.log('Example app listening on port 3000!'))