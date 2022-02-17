const express = require('express')
const app = express()
const port = 3000

app.get('/admin', (req, res) => {
    const message = 'The matrix has you'
    console.log(message)
    res.send(message)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})