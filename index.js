const fs = require('fs');
const express = require('express')
const server = express()
const port = 3000

//let colors = []

server.use(express.json())

server.get('/api', (req, res) => {
    let raw = fs.readFileSync("todos.json")
    let todoItem = JSON.parse(raw)
    res.json(todoItem)  //ersatt .send med .json pga undefined
})

server.post('/api', (req, res) => {
    try {
        let raw = fs.readFileSync("todos.json")
        let todoItem = JSON.parse(raw)
        todoItem.push(req.body)
        fs.writeFileSync("todos.json", JSON.stringify(todoItem))
        res.json(todoItem)

    } catch(err) {

    }
})

server.use(express.static('public'))

server.listen(port, () => {
  console.log(`App funkar`)
})

