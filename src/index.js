const express=require('express')
const connect=require('../src/config/db')
const TodoList=require('./controller/todo.controller')
const app=express()
const cors=require('cors')

app.use(cors({origin:'*'}))

app.use(express.json())
app.use('/todos',TodoList)

app.listen(3050,async()=>{
  try {
    await connect()
    console.log('server start in port number 3050')
  } catch (error) {
    console.log(error)
  }
})
