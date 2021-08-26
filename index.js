const fs = require('fs');  // for saving in json-fil
const express = require('express')
const server = express()
const port = 3000

server.use(express.json())

server.get('/api', (req, res) => {
    let raw = fs.readFileSync("todos.json")
    let todoItem = JSON.parse(raw)
    //res.json(req.body)
    res.json(todoItem)  //ersatt .send med .json pga undefined
    res.render('index', {todoItem: todoItem, complete: complete});
    
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

