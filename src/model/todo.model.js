
const mongoose=require('mongoose')

const TodoSchema=new mongoose.Schema({
  itemName:{type:String,required:true},
  description:{type:String,required:true}
},{
  timestamps:true,
  versionKey:false
})

const Todomodel=mongoose.model('todos',TodoSchema)

module.exports=Todomodel
