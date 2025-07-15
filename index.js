
const express = require('express')

require('dotenv').config();
const PORT = process.env.port
console.log(PORT)
const cors = require('cors')
const app = express();
const AllTodos = require('./todo')
app.use(cors())

app.get('/getTodos', (req,res) => {
    res.status(200).json(AllTodos)
})

app.get('/getTodo/:id', (req,res) => {
    const id = parseInt(req.params.id) 
    const Todo = AllTodos.find(t =>t.id == id)
    console.log(Todo)
    if(Todo) return res.status(200).json(Todo);
    else res.status(400).json({msg:"Todo not found"})
    
})


app.listen(PORT, () => console.log("server started on port 3000"))