
const express=require('express');

const router=express.Router()

const Todomodel=require('../model/todo.model')




router.get('/',async(req,res)=>{
  try {
        const Todos=await Todomodel.find().lean().exec()
       return res.send(Todos)
  } catch (error) {
      throw  new Error(error)
  }
})


router.post('/',async(req,res)=>{
  try {
     const Todo=await Todomodel.create(req.body)
     return res.send(Todo)
  } catch (error) {
     throw new Error(error)
  }
})

router.get('/:id',async(req,res)=>{
  try {
     const Todo=await Todomodel.findById(req.params.id).lean().exec()
     return res.send(Todo)
  } catch (error) {
    throw new Error(error)
  }
})

router.patch('/:id',async(req,res)=>{
  try {
    const Todo=await Todomodel.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
    return res.send(Todo)
  } catch (error) {
    throw new Error(error)
  }
})

router.delete('/:id',async(req,res)=>{
  try {
     const Todo=await Todomodel.findByIdAndDelete(req.params.id)
     return res.send(Todo)
  } catch (error) {
    throw new Error(error)
  }
})

module.exports=router
