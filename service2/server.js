const express = require('express')
const app = express()
const port = 3001

app.get('/test', (req, res) => {
    const message = 'And it\'s coming for you'
    console.log(message)
    res.send(message)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})